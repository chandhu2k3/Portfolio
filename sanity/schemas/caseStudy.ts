import { defineField, defineType } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "summary", title: "Summary (card text)", type: "text", rows: 4, validation: (Rule) => Rule.required() }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "role", title: "Your Role", type: "string" }),
    defineField({ name: "timeline", title: "Timeline", type: "string", description: "e.g. 4 weeks" }),
    defineField({ name: "problem", title: "Problem Statement", type: "text", rows: 6 }),
    defineField({ name: "research", title: "Research & Insights", type: "text", rows: 8 }),
    defineField({ name: "solution", title: "Solution", type: "text", rows: 8 }),
    defineField({
      name: "impact",
      title: "Impact / Outcomes",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "highlights",
      title: "Key Highlights",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "deck",
      title: "Case Study Deck (PDF)",
      type: "file",
      options: { accept: ".pdf" },
    }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "externalLink", title: "External Link (optional)", type: "url" }),
    defineField({ name: "featured", title: "Featured on Homepage", type: "boolean", initialValue: true }),
    defineField({
      name: "order",
      title: "Sort Order (legacy — use drag-reorder instead)",
      type: "number",
      initialValue: 0,
      description: "Optional fallback. Drag to reorder in the 'Case Studies in order' list instead.",
    }),
    orderRankField({ type: "caseStudy" }),
  ],
  orderings: [
    orderRankOrdering,
    { title: "Sort Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "subtitle", media: "coverImage" },
  },
});
