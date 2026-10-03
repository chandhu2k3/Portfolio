import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetail from "./CaseStudyDetail";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/content";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} | Case Study`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();
  return <CaseStudyDetail study={study} />;
}
