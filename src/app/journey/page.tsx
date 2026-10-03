import type { Metadata } from "next";
import JourneyTimeline from "@/components/JourneyTimeline";
import { getJourney } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "My Journey | Nagam Chandrakanth Reddy",
  description: "Developer to Product Manager journey timeline",
};

export default async function JourneyPage() {
  const journey = await getJourney();
  return (
    <div className="pt-16 min-h-screen">
      <JourneyTimeline items={journey} />
    </div>
  );
}
