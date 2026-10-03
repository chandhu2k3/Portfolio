import { defineField, defineType } from "sanity";

export const skillCategory = defineType({
  name: "skillCategory",
  title: "Skill Category",
  type: "document",
  fields: [
    defineField({ name: "category", title: "Category Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "order", title: "Sort Order", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Sort Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "category", subtitle: "skills" } },
});
