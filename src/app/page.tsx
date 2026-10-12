import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import ContactSection from "@/components/ContactSection";
import {
  getSiteSettings,
  getSkills,
  getProjects,
  getCaseStudies,
} from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [settings, skills, projects, caseStudies] =
    await Promise.all([
      getSiteSettings(),
      getSkills(),
      getProjects(),
      getCaseStudies(),
    ]);

  return (
    <main className="w-full bg-white dark:bg-[#0a0a0a]">
      <HeroSection settings={settings} />
      <AboutSection settings={settings} skills={skills} />
      <CaseStudiesGrid caseStudies={caseStudies} />
      <ProjectsGrid projects={projects} />
      <ContactSection settings={settings} />
    </main>
  );
}
