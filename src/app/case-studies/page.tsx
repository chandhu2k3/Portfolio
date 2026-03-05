import CaseStudiesGrid from "@/components/CaseStudiesGrid";

export const metadata = {
  title: "Case Studies - Chandra Kanth Reddy",
  description: "Deep dives into product thinking and strategic decisions",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-16 min-h-screen">
      <CaseStudiesGrid />
    </div>
  );
}
