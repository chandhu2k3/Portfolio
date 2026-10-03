import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import ProjectsGrid from "@/components/ProjectsGrid";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import ContactSection from "@/components/ContactSection";
import {
  getSiteSettings,
  getJourney,
  getSkills,
  getProjects,
  getCaseStudies,
} from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [settings, journey, skills, projects, caseStudies] =
    await Promise.all([
      getSiteSettings(),
      getJourney(),
      getSkills(),
      getProjects(),
      getCaseStudies(),
    ]);

  return (
    <main className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <HeroSection settings={settings} />
      <AboutSection settings={settings} skills={skills} />
      <JourneyTimeline items={journey} />
      <ProjectsGrid projects={projects} />
      <CaseStudiesGrid caseStudies={caseStudies} />
      <ContactSection settings={settings} />
    </main>
  );
}
