import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteSettings } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const name = settings.name ?? "Nagam Chandrakanth Reddy";
  const title = `${name} | Product-Focused Engineer`;
  const description =
    settings.heroSubtitle?.slice(0, 160) ??
    "Product-focused engineer transitioning into product management. Blending technical expertise with user-centric thinking to build impactful solutions.";

  return {
    title,
    description,
    keywords: [
      "Product Manager",
      "Software Engineer",
      "Product Strategy",
      "Product Management",
      "IIIT Hyderabad",
    ],
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900`}
        suppressHydrationWarning
      >
        <Navbar settings={settings} />
        {children}
        <Footer text={settings.footerText} />
      </body>
    </html>
  );
}
