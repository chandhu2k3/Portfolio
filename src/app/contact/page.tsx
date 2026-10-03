import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import { getSiteSettings } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact | Nagam Chandrakanth Reddy",
  description: "Get in touch for opportunities and collaborations",
};

export default async function ContactPage() {
  const settings = await getSiteSettings();
  return (
    <div className="pt-16 min-h-screen">
      <ContactSection settings={settings} />
    </div>
  );
}
