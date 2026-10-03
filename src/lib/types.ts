export interface BringItem {
  icon?: string;
  text: string;
}

export interface SiteSettings {
  name?: string;
  shortName?: string;
  logoLetter?: string;
  role?: string;
  heroHeadline1?: string;
  heroHeadline2?: string;
  heroHeadline3?: string;
  heroSubtitle?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  resumeUrl?: string;
  profileImage?: unknown;
  aboutHeading?: string;
  aboutParagraphs?: string[];
  whatIBring?: BringItem[];
  contactSubtitle?: string;
  footerText?: string;
}

export interface JourneyEntry {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  techStack: string[];
  github?: string;
  liveDemo?: string;
  image?: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  role?: string;
  timeline?: string;
  problem?: string;
  research?: string;
  solution?: string;
  impact?: string[];
  highlights?: string[];
  deckUrl?: string;
  image?: string;
  externalLink?: string;
}
