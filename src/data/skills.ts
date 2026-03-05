export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Product & PM",
    skills: [
      "Product Strategy",
      "User Research",
      "Wireframing",
      "Metrics & Analytics",
      "Roadmap Planning",
      "Stakeholder Management",
    ],
  },
  {
    category: "Tools & Methods",
    skills: [
      "Figma",
      "Notion",
      "Git",
      "Testing",
      "Design Thinking",
      "Agile/Scrum",
    ],
  },
  {
    category: "Other",
    skills: ["Python", "System Design", "Machine Learning", "CUDA", "AWS"],
  },
];
