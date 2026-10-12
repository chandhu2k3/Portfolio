import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "portfolio-cms",
  title: "Portfolio CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "3ksax8m8",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
            orderableDocumentListDeskItem({
              type: "caseStudy",
              title: "Case Studies in order (drag to reorder)",
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              type: "project",
              title: "Projects in order (drag to reorder)",
              S,
              context,
            }),
            S.divider(),
            // The rest of the document types, excluding the ones above
            ...S.documentTypeListItems().filter(
              (listItem) => !["caseStudy", "project"].includes(listItem.getId() as string)
            ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
