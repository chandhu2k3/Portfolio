import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";
import { getProjects } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects | Nagam Chandrakanth Reddy",
  description:
    "Engineering projects showcasing technical expertise across full-stack development.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsPageClient projects={projects} />;
}
