export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;

export const journeyQuery = `*[_type == "journeyItem"] | order(order asc, _createdAt asc) {
  year,
  title,
  description,
  icon
}`;

export const skillsQuery = `*[_type == "skillCategory"] | order(order asc, _createdAt asc) {
  category,
  skills
}`;

export const projectsQuery = `*[_type == "project"] | order(order asc, _createdAt asc) {
  "id": _id,
  title,
  summary,
  techStack,
  github,
  liveDemo,
  "image": coverImage,
  featured
}`;

export const caseStudiesQuery = `*[_type == "caseStudy"] | order(order asc, _createdAt asc) {
  "id": _id,
  "slug": slug.current,
  title,
  subtitle,
  summary,
  tags,
  role,
  timeline,
  problem,
  research,
  solution,
  impact,
  highlights,
  "deckUrl": deck.asset->url,
  "image": coverImage,
  externalLink,
  featured
}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] {
  "id": _id,
  "slug": slug.current,
  title,
  subtitle,
  summary,
  tags,
  role,
  timeline,
  problem,
  research,
  solution,
  impact,
  highlights,
  "deckUrl": deck.asset->url,
  "image": coverImage,
  externalLink,
  featured
}`;

export const caseStudySlugsQuery = `*[_type == "caseStudy" && defined(slug.current)]{
  "slug": slug.current
}`;
