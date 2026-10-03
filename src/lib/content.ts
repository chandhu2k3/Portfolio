import { sanityClient, getImageUrl, getFileUrl, isSanityConfigured } from "./sanity";
import {
  siteSettingsQuery,
  journeyQuery,
  skillsQuery,
  projectsQuery,
  caseStudiesQuery,
  caseStudyBySlugQuery,
  caseStudySlugsQuery,
} from "./queries";
import type { SiteSettings, JourneyEntry, SkillGroup, ProjectItem, CaseStudyItem } from "./types";
import { journeyData } from "@/data/journey";
import { skillsData } from "@/data/skills";
import { projectsData } from "@/data/projects";
import { caseStudiesData } from "@/data/caseStudies";
import { siteSettings as localSiteSettings } from "@/data/siteSettings";

function cmsEnabled(): boolean {
  return isSanityConfigured && process.env.NODE_ENV !== "test";
}

function logCmsError(scope: string, error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`[CMS:${scope}] Sanity fetch failed:`, message);
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!cmsEnabled()) return localSiteSettings;
  try {
    const data = await sanityClient.fetch<Record<string, unknown>>(siteSettingsQuery);
    if (!data || Object.keys(data).length === 0) return localSiteSettings;
    return {
      ...data,
      profileImage: getImageUrl(data.profileImage as never, 400, 400),
    } as SiteSettings;
  } catch {
    return localSiteSettings;
  }
}

export async function getJourney(): Promise<JourneyEntry[]> {
  if (!cmsEnabled()) return journeyData;
  try {
    const data = await sanityClient.fetch<JourneyEntry[]>(journeyQuery);
    if (!data?.length) return journeyData;
    return data;
  } catch {
    return journeyData;
  }
}

export async function getSkills(): Promise<SkillGroup[]> {
  if (!cmsEnabled()) return skillsData;
  try {
    const data = await sanityClient.fetch<SkillGroup[]>(skillsQuery);
    if (!data?.length) return skillsData;
    return data;
  } catch {
    return skillsData;
  }
}

export async function getProjects(): Promise<ProjectItem[]> {
  if (!cmsEnabled()) return projectsData;
  try {
    const raw = await sanityClient.fetch<
      Array<{
        id: string;
        title: string;
        summary: string;
        techStack?: string[];
        github?: string;
        liveDemo?: string;
        image?: unknown;
        featured?: boolean;
      }>
    >(projectsQuery);
    if (!raw?.length) return projectsData;
    return raw.map((p) => ({
      id: p.id,
      title: p.title,
      summary: p.summary,
      techStack: p.techStack ?? [],
      github: p.github || undefined,
      liveDemo: p.liveDemo || undefined,
      image: getImageUrl(p.image as never, 800, 500),
    }));
  } catch {
    return projectsData;
  }
}

function mapCaseStudy(raw: {
  id: string;
  slug?: string;
  title: string;
  subtitle: string;
  summary: string;
  tags?: string[];
  role?: string;
  timeline?: string;
  problem?: string;
  research?: string;
  solution?: string;
  impact?: string[];
  highlights?: string[];
  deckUrl?: string;
  image?: unknown;
  externalLink?: string;
}): CaseStudyItem {
  return {
    id: raw.id,
    slug: raw.slug ?? raw.id,
    title: raw.title,
    subtitle: raw.subtitle,
    summary: raw.summary,
    tags: raw.tags ?? [],
    role: raw.role,
    timeline: raw.timeline,
    problem: raw.problem,
    research: raw.research,
    solution: raw.solution,
    impact: raw.impact,
    highlights: raw.highlights,
    deckUrl: raw.deckUrl,
    image: getImageUrl(raw.image as never, 900, 600),
    externalLink: raw.externalLink,
  };
}

export async function getCaseStudies(): Promise<CaseStudyItem[]> {
  const fallback = () =>
    caseStudiesData.map((c) => ({
      id: c.id,
      slug: c.id,
      title: c.title,
      subtitle: c.subtitle,
      summary: c.summary,
      tags: c.tags,
      image: c.image,
      externalLink: c.link,
    }));

  if (!cmsEnabled()) return fallback();
  try {
    const raw = await sanityClient.fetch<Parameters<typeof mapCaseStudy>[0][]>(
      caseStudiesQuery
    );
    if (!raw?.length) {
      logCmsError("getCaseStudies", "empty result — using local fallback");
      return fallback();
    }
    return raw.map(mapCaseStudy);
  } catch (error) {
    logCmsError("getCaseStudies", error);
    return fallback();
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudyItem | null> {
  if (!cmsEnabled()) {
    const found = caseStudiesData.find((c) => c.id === slug);
    if (!found) return null;
    return {
      id: found.id,
      slug: found.id,
      title: found.title,
      subtitle: found.subtitle,
      summary: found.summary,
      tags: found.tags,
      image: found.image,
      externalLink: found.link,
    };
  }
  try {
    const raw = await sanityClient.fetch<Parameters<typeof mapCaseStudy>[0] | null>(
      caseStudyBySlugQuery,
      { slug }
    );
    if (!raw) return null;
    return mapCaseStudy(raw);
  } catch {
    return null;
  }
}

export async function getCaseStudySlugs(): Promise<string[]> {
  if (!cmsEnabled()) return caseStudiesData.map((c) => c.id);
  try {
    const data = await sanityClient.fetch<Array<{ slug: string }>>(caseStudySlugsQuery);
    if (!data?.length) return caseStudiesData.map((c) => c.id);
    return data.map((d) => d.slug);
  } catch {
    return caseStudiesData.map((c) => c.id);
  }
}

export { getFileUrl };
