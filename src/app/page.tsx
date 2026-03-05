import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import ProjectsGrid from "@/components/ProjectsGrid";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <HeroSection />
      <AboutSection />
      <JourneyTimeline />
      <ProjectsGrid />
      <CaseStudiesGrid />
      <ContactSection />
    </main>
  );
}
