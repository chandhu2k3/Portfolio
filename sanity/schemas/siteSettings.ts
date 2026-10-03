import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string", initialValue: "Nagam Chandrakanth Reddy" }),
    defineField({ name: "shortName", title: "Short Name (Navbar)", type: "string", initialValue: "Chandra Kanth" }),
    defineField({ name: "logoLetter", title: "Logo Letter", type: "string", initialValue: "C" }),
    defineField({ name: "role", title: "Role / Subtitle", type: "string", initialValue: "Product Design & Management | IIIT Hyderabad" }),
    defineField({ name: "heroHeadline1", title: "Hero Headline Line 1", type: "string", initialValue: "Product-Focused Engineer" }),
    defineField({ name: "heroHeadline2", title: "Hero Headline Line 2", type: "string", initialValue: "Bridging" }),
    defineField({ name: "heroHeadline3", title: "Hero Headline Line 3 (gradient)", type: "string", initialValue: "Tech & Product Thinking" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 4 }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "github", title: "GitHub URL", type: "url" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "resumeUrl", title: "Resume PDF URL", type: "string", description: "e.g. /Chandrakanth_Resume_PM.pdf" }),
    defineField({ name: "profileImage", title: "Profile Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "aboutHeading", title: "About Heading", type: "string", initialValue: "From Engineering to Product Thinking" }),
    defineField({ name: "aboutParagraphs", title: "About Paragraphs", type: "array", of: [{ type: "text", rows: 6 }] }),
    defineField({
      name: "whatIBring",
      title: "What I Bring",
      type: "array",
      of: [
        defineType({
          name: "bringItem",
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon (emoji)", type: "string" }),
            defineField({ name: "text", title: "Text", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "text", subtitle: "icon" } },
        }),
      ],
    }),
    defineField({ name: "contactSubtitle", title: "Contact Subtitle", type: "string", initialValue: "Always happy to discuss product, engineering, or collaboration opportunities" }),
    defineField({ name: "footerText", title: "Footer Copyright Text", type: "string", initialValue: "© 2026 Nagam Chandrakanth Reddy. All rights reserved." }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
