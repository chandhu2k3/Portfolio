import { createClient } from "@sanity/client";
import { promises as fs } from "fs";

const env = await fs.readFile(".env.local", "utf8");
const token = env
  .split("\n")
  .find((l) => l.startsWith("SANITY_API_TOKEN="))
  ?.slice("SANITY_API_TOKEN=".length)
  ?.trim();

const client = createClient({
  projectId: "3ksax8m8",
  dataset: "production",
  apiVersion: "2026-10-03",
  useCdn: false,
  token: token || undefined,
});

const all = await client.fetch(`*[_type == "caseStudy"] | order(order asc) {
  title,
  "slug": slug.current,
  featured,
  order,
  _updatedAt,
  "hasDeck": defined(deck.asset->url),
  "deckUrl": deck.asset->url
}`);

console.log("All case studies in Sanity:");
console.log(JSON.stringify(all, null, 2));

const projects = await client.fetch(
  `*[_type == "project"]{title, "slug": slug.current}`
);
console.log("\nProjects:", projects.map((p) => p.title).join(", "));
