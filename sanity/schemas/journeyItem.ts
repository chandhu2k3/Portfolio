import { defineField, defineType } from "sanity";

export const journeyItem = defineType({
  name: "journeyItem",
  title: "Journey Item",
  type: "document",
  fields: [
    defineField({ name: "year", title: "Year / Period", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: "icon", title: "Icon (emoji)", type: "string" }),
    defineField({ name: "order", title: "Sort Order", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Sort Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "year", media: "icon" },
  },
});
