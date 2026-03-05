import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nagam Chandrakanth Reddy | Product-Focused Engineer",
  description:
    "Product-focused engineer transitioning into product management. Blending technical expertise with user-centric thinking to build impactful solutions.",
  keywords: [
    "Product Manager",
    "Software Engineer",
    "Full Stack Developer",
    "Product Strategy",
    "Product Management",
  ],
  openGraph: {
    title: "Nagam Chandrakanth Reddy | Product-Focused Engineer",
    description:
      "Product-focused engineer transitioning into product management",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
