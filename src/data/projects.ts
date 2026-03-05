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
    id: "motel-management",
    title: "Motel Management System",
    summary:
      "Full-stack application for managing motel operations, bookings, and reservations",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    image: "/projects/motel.png",
  },
  {
    id: "crypto-dashboard",
    title: "Crypto Dashboard",
    summary:
      "Real-time cryptocurrency tracker with market analysis and portfolio tracking",
    techStack: ["React", "Tailwind CSS", "Chart.js", "Crypto APIs"],
    liveDemo: "https://crypto-dashboard.demo",
    github: "https://github.com",
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    summary: "Multi-currency converter with real-time exchange rates",
    techStack: ["React", "TypeScript", "API Integration"],
    liveDemo: "https://currency-converter.demo",
    github: "https://github.com",
  },
  {
    id: "battle-of-hands",
    title: "Battle of Hands",
    summary: "Interactive game showcasing real-time multiplayer mechanics",
    techStack: ["React", "WebSocket", "Canvas API"],
    liveDemo: "https://battle-of-hands.demo",
    github: "https://github.com",
  },
  {
    id: "cuda-matrix-multiply",
    title: "CUDA Matrix Multiplication",
    summary:
      "High-performance GPU-accelerated matrix multiplication implementation",
    techStack: ["CUDA", "C++", "Performance Optimization"],
    github: "https://github.com",
  },
  {
    id: "5g-drl-project",
    title: "5G DRL Project",
    summary: "Deep Reinforcement Learning for 5G network optimization research",
    techStack: ["Python", "TensorFlow", "Deep Learning", "5G Networks"],
    github: "https://github.com",
  },
];
