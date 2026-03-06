export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
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
    skills: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Component Design",
      "UI Implementation",
    ],
  },
  {
    category: "Systems & APIs",
    skills: [
      "Node.js",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "API Design Understanding",
    ],
  },
  {
    category: "Tools & Product Methods",
    skills: [
      "Figma",
      "Notion",
      "Jira",
      "Product Documentation",
      "Design Thinking",
      "Agile/Scrum",
    ],
  },
  {
    category: "Technical Foundations",
    skills: [
      "Python",
      "System Design",
      "Data Analysis",
      "Machine Learning",
      "AWS",
    ],
  },
];
