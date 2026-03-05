import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata = {
  title: "Projects - Chandra Kanth Reddy",
  description: "Portfolio of engineering projects",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16 min-h-screen">
      <ProjectsGrid />
    </div>
  );
}
