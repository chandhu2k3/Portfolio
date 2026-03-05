import JourneyTimeline from "@/components/JourneyTimeline";

export const metadata = {
  title: "My Journey - Chandra Kanth Reddy",
  description: "Developer to Product Manager journey timeline",
};

export default function JourneyPage() {
  return (
    <div className="pt-16 min-h-screen">
      <JourneyTimeline />
    </div>
  );
}
