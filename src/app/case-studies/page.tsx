import type { Metadata } from "next";
import CaseStudiesPageClient from "./CaseStudiesPageClient";
import { getCaseStudies } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Case Studies | Nagam Chandrakanth Reddy",
  description:
    "Product case studies covering user research, product strategy, and solution design.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  return <CaseStudiesPageClient caseStudies={caseStudies} />;
}
