/**
 * Seed Sanity with existing portfolio content.
 *
 * Usage:
 *   1. Create a write token at https://www.sanity.io/manage → project → API → Tokens
 *   2. Put it in .env.local as SANITY_API_TOKEN=...
 *   3. Run: npm run seed
 */
import { createClient } from "@sanity/client";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// Load .env.local manually (node doesn't do this automatically)
try {
  const envPath = path.join(root, ".env.local");
  const envFile = await fs.readFile(envPath, "utf8");
  for (const line of envFile.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
} catch {}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "3ksax8m8";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("Missing SANITY_API_TOKEN.");
  console.error("1. Go to https://www.sanity.io/manage → your project → API → Tokens");
  console.error("2. Create a token with Editor (or Admin) permissions");
  console.error("3. Add to .env.local: SANITY_API_TOKEN=your_token_here");
  console.error("4. Run: npm run seed");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-10-03",
  token,
  useCdn: false,
});

// Inline local data to avoid TS import issues in plain node
const journeyData = [
  {
    year: "2019 – 2021",
    title: "Academic Foundation",
    description:
      "Scored 98.8% in senior secondary board examinations while preparing for competitive engineering entrance exams, building strong analytical thinking and disciplined problem-solving skills.",
    icon: "📚",
  },
  {
    year: "2021",
    title: "Computer Science at IIIT Vadodara",
    description:
      "Started my undergraduate journey in Computer Science, building core foundations in data structures, systems, and software engineering.",
    icon: "🎓",
  },
  {
    year: "2023",
    title: "Building Real-World Applications",
    description:
      "Worked on multiple web projects using modern technologies, gaining experience in translating ideas into working products and user-facing systems.",
    icon: "⚛️",
  },
  {
    year: "2024",
    title: "Front-End Developer Intern — Trade2Online",
    description:
      "Contributed to production client websites, building responsive UI components and improving user engagement through better user interfaces.",
    icon: "💼",
  },
  {
    year: "2024 – 2025",
    title: "Full-Stack Internship — TekEbin",
    description:
      "Worked on a hotel management platform, designing role-based workflows and real-time booking features while collaborating with backend engineers.",
    icon: "🚀",
  },
  {
    year: "2025",
    title: "Product Design & Management — IIIT Hyderabad",
    description:
      "Transitioned toward product thinking, studying product strategy, user research, and data-informed decision making through hands-on product projects.",
    icon: "🎯",
  },
  {
    year: "Present",
    title: "Product Management Direction",
    description:
      "Combining engineering expertise with product thinking to build meaningful, user-centered digital products.",
    icon: "⭐",
  },
];

const skillsData = [
  {
    category: "Product & PM",
    skills: [
      "Product Strategy",
      "Product Discovery",
      "User Research",
      "Feature Prioritization",
      "Roadmap Planning",
      "Experimentation",
      "Metrics & Analytics",
      "Stakeholder Management",
    ],
  },
  {
    category: "Product Development Foundations",
    skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Component Design", "UI Implementation"],
  },
  {
    category: "Systems & APIs",
    skills: ["Node.js", "REST APIs", "MongoDB", "PostgreSQL", "API Design Understanding"],
  },
  {
    category: "Tools & Product Methods",
    skills: ["Figma", "Notion", "Jira", "Product Documentation", "Design Thinking", "Agile/Scrum"],
  },
  {
    category: "Technical Foundations",
    skills: ["Python", "System Design", "Data Analysis", "Machine Learning", "AWS"],
  },
];

const projectsData = [
  {
    id: "hospital-bed-manager",
    title: "Hospital Bed Manager",
    summary:
      "Real-time hospital bed management platform with role-based dashboards for ER, ICU, and ward staff to streamline bed allocation and patient transfer workflows.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    github: "",
    liveDemo: "",
    image: "/images/bedmanager_bg.png",
  },
  {
    id: "worksync",
    title: "WorkSync",
    summary:
      "Role-based task management system enabling teams to track daily tasks, monitor progress, and manage workflows through dedicated user views.",
    techStack: ["React", "Tailwind", "JavaScript"],
    github: "",
    liveDemo: "",
    image: "/images/workync_bg.png",
  },
  {
    id: "task-tracker-pro",
    title: "Task Tracker Pro",
    summary:
      "Smart productivity application that helps users organize daily tasks, track progress, and sync reminders with Google Calendar for seamless planning.",
    techStack: ["React", "API Integration", "Productivity Tools"],
    github: "",
    liveDemo: "",
    image: "/images/tasktrackerpro_bg.png",
  },
  {
    id: "liveratex",
    title: "LiveRateX — Currency Converter",
    summary:
      "Real-time currency conversion tool providing accurate exchange rates and intuitive currency selection for seamless global transactions.",
    techStack: ["HTML", "CSS", "JavaScript", "API Integration"],
    github: "",
    liveDemo: "",
    image: "/images/liveratex.png",
  },
];

const caseStudiesData = [
  {
    id: "saksham",
    title: "Saksham",
    subtitle: "Autism Early Intervention Platform",
    summary:
      "Designed a parent-centric digital platform enabling guided home-based therapy for children with autism through structured learning modules and progress tracking.",
    tags: ["Product Strategy", "User Research", "Roadmap Planning"],
    image: "/images/sakhsyam_bg.png",
    link: "https://drive.google.com/file/d/1rPnwZ6sQY5Kc4YO7ZwKRJUcCCZgS_duF/view?usp=drive_link",
  },
  {
    id: "safeguard",
    title: "SafeGuard",
    subtitle: "Security Workforce Empowerment Platform",
    summary:
      "Explored challenges faced by campus security staff through user interviews and designed a digital platform focused on recognition, certification, and workforce coordination.",
    tags: ["User Interviews", "Design Thinking", "Problem Discovery", "Solution Design"],
    image: "/images/safeguard_bg.png",
    link: "https://drive.google.com/file/d/14AUNUfQ-CMEHYRyszBZ81xv0svhnDtC9/view?usp=drive_link",
  },
  {
    id: "bridgementor",
    title: "BridgeMentor",
    subtitle: "Mentorship & Career Guidance Platform",
    summary:
      "Designed a platform concept aimed at bridging the gap between students and experienced mentors by enabling structured mentorship connections and career guidance.",
    tags: ["Product Concept", "User Needs Analysis", "Platform Design", "Solution Strategy"],
    image: "/images/Brdigementor_bg.png",
    link: "https://drive.google.com/file/d/16b_QhHz2OsfKVLB5m18lysSNqJkAps8x/view?usp=sharing",
  },
  {
    id: "clothing-emotional-states",
    title: "Clothing Choices & Emotional States",
    subtitle: "User Research Study",
    summary:
      "Quantitative research study exploring how clothing choices influence confidence, mood, and emotional experiences among young professionals across professional and casual contexts.",
    tags: ["User Research", "Quantitative Study", "Behavioral Insights", "Data Analysis", "PANAS Scale"],
    image: "/images/clothing_bg.png",
    link: "https://drive.google.com/file/d/1bbcjLAODJSNQOS6D8hMiEX9yL6VxpnvA/view?usp=drive_link",
  },
];

const siteSettings = {
  name: "Nagam Chandrakanth Reddy",
  shortName: "Chandra Kanth",
  logoLetter: "C",
  role: "Product Design & Management | IIIT Hyderabad",
  heroHeadline1: "Product-Focused Engineer",
  heroHeadline2: "Bridging",
  heroHeadline3: "Tech & Product Thinking",
  heroSubtitle:
    "I combine a strong engineering foundation with structured product thinking to identify user problems, validate solutions, and build meaningful digital experiences. My focus lies in understanding user needs, shaping product strategy, and translating insights into impactful products.",
  email: "chandrakanthr876@gmail.com",
  github: "",
  linkedin: "",
  resumeUrl: "/Chandrakanth_Resume_PM.pdf",
  profileImage: "/images/chanduformal.jpg",
  aboutHeading: "From Engineering to Product Thinking",
  aboutParagraphs: [
    "I began my journey as a software engineer, building user-facing applications and collaborating closely with development teams. Over time, I became increasingly interested in understanding the why behind products — identifying user problems, validating solutions, and shaping decisions that drive meaningful outcomes.",
    "My engineering background enables me to reason about technical feasibility, system trade-offs, and effective collaboration with engineers. Alongside this foundation, I've been developing a strong interest in product discovery, user research, and structured product decision-making.",
    "Currently, I am pursuing the Product Design and Management (PDM) program at IIIT Hyderabad, where I am strengthening my understanding of product strategy, user research, and data-informed product decisions through hands-on projects and case studies.",
  ],
  whatIBring: [
    { icon: "⚙️", text: "Strong technical foundation enabling effective collaboration with engineering teams" },
    { icon: "🧩", text: "Structured problem framing and hypothesis-driven thinking" },
    { icon: "🔍", text: "User research and usability evaluation to uncover meaningful insights" },
    { icon: "📊", text: "Data-informed decision making supported by metrics and experimentation" },
    { icon: "🌱", text: "Curiosity and continuous learning mindset suited for early-career product roles" },
  ],
  contactSubtitle:
    "Always happy to discuss product, engineering, or collaboration opportunities",
  footerText: "© 2026 Nagam Chandrakanth Reddy. All rights reserved.",
};

async function uploadImageIfLocal(src) {
  if (!src || !src.startsWith("/")) return undefined;
  const filePath = path.join(root, "public", src);
  try {
    const buffer = await fs.readFile(filePath);
    const asset = await client.assets.upload("image", buffer, {
      filename: path.basename(filePath),
    });
    return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  } catch (e) {
    console.warn(`  skip image ${src}:`, e.message);
    return undefined;
  }
}

async function main() {
  console.log(`Seeding Sanity project ${projectId}/${dataset}...`);

  const settingsImage = await uploadImageIfLocal(siteSettings.profileImage);
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    ...siteSettings,
    github: siteSettings.github || undefined,
    linkedin: siteSettings.linkedin || undefined,
    ...(settingsImage ? { profileImage: settingsImage } : {}),
  });
  console.log("✓ siteSettings");

  for (const [i, item] of journeyData.entries()) {
    await client.createOrReplace({
      _id: `journey-${i}`,
      _type: "journeyItem",
      ...item,
      order: i,
    });
  }
  console.log(`✓ journeyItem × ${journeyData.length}`);

  for (const [i, group] of skillsData.entries()) {
    await client.createOrReplace({
      _id: `skills-${i}`,
      _type: "skillCategory",
      ...group,
      order: i,
    });
  }
  console.log(`✓ skillCategory × ${skillsData.length}`);

  for (const [i, project] of projectsData.entries()) {
    const coverImage = await uploadImageIfLocal(project.image);
    await client.createOrReplace({
      _id: `project-${project.id}`,
      _type: "project",
      title: project.title,
      slug: { _type: "slug", current: project.id },
      summary: project.summary,
      techStack: project.techStack,
      github: project.github || undefined,
      liveDemo: project.liveDemo || undefined,
      featured: true,
      order: i,
      ...(coverImage ? { coverImage } : {}),
    });
  }
  console.log(`✓ project × ${projectsData.length}`);

  for (const [i, cs] of caseStudiesData.entries()) {
    const coverImage = await uploadImageIfLocal(cs.image);
    await client.createOrReplace({
      _id: `caseStudy-${cs.id}`,
      _type: "caseStudy",
      title: cs.title,
      subtitle: cs.subtitle,
      slug: { _type: "slug", current: cs.id },
      summary: cs.summary,
      tags: cs.tags,
      featured: true,
      order: i,
      ...(cs.link ? { externalLink: cs.link } : {}),
      ...(coverImage ? { coverImage } : {}),
    });
  }
  console.log(`✓ caseStudy × ${caseStudiesData.length}`);

  console.log("\nDone! Open /studio to review and edit content.");
  console.log("Add case-study deck PDFs + full narratives via the studio.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
