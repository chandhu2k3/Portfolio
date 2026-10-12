export interface Project {
  id: string;
  title: string;
  summary: string;
  techStack: string[];
  github?: string;
  liveDemo?: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    id: "hospital-bed-manager",
    title: "Hospital Bed Manager",
    summary:
      "Real-time hospital bed management platform with role-based dashboards for ER, ICU, and ward staff to streamline bed allocation and patient transfer workflows.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com",
    liveDemo: "",
    image: "/images/bedmanager_bg.png",
  },
  {
    id: "worksync",
    title: "WorkSync",
    summary:
      "Role-based task management system enabling teams to track daily tasks, monitor progress, and manage workflows through dedicated user views.",
    techStack: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com",
    liveDemo: "",
    image: "/images/workync_bg.png",
  },
  {
    id: "task-tracker-pro",
    title: "Task Tracker Pro",
    summary:
      "Smart productivity application that helps users organize daily tasks, track progress, and sync reminders with Google Calendar for seamless planning.",
    techStack: ["React", "API Integration", "Productivity Tools"],
    github: "https://github.com",
    liveDemo: "",
    image: "/images/tasktrackerpro_bg.png",
  },
  {
    id: "liveratex",
    title: "LiveRateX — Currency Converter",
    summary:
      "Real-time currency conversion tool providing accurate exchange rates and intuitive currency selection for seamless global transactions.",
    techStack: ["HTML", "CSS", "JavaScript", "API Integration"],
    github: "https://github.com",
    liveDemo: "",
    image: "/images/liveratex.png",
  },
  {
    id: "msmp-multi-tenant",
    title: "Multi-School Management Platform (MSMP)",
    summary:
      "Multi-tenant school management system design with C4 architecture, ADRs, JWT auth + RBAC for 4 roles, and monolith vs microservices evaluation across latency, throughput, scalability and consistency.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Hibernate Search",
      "JWT",
    ],
    github: "https://github.com/chandhu2k3/msmp",
    liveDemo: "",
    image: "/images/project-placeholder.jpg",
  },
  {
    id: "rti-assistant",
    title: "RTI Assistant — RAG-Based Govt Info Assistant",
    summary:
      "Grounded RAG assistant over 88 pages of RTI documents (539 chunks) with hierarchical chunking, MiniLM + ChromaDB, query condensation, MMR retrieval, Hindi generation and source attribution.",
    techStack: [
      "Python",
      "LangChain",
      "ChromaDB",
      "Sentence Transformers",
      "Groq",
      "Streamlit",
    ],
    github: "https://github.com/chandhu2k3/RTI_Assistant_RAG",
    liveDemo: "",
    image: "/images/project-placeholder.jpg",
  },
];
