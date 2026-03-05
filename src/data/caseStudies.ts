export interface CaseStudy {
  id: string;
  title: string;
  category:
    | "Design Thinking"
    | "Product Strategy"
    | "Research"
    | "UX/UI"
    | "AI";
  summary: string;
  highlights: string[];
  image?: string;
  link?: string; // External link to Notion or PDF
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "fashion-fatigue",
    title: "Fashion Fatigue Research",
    category: "Research",
    summary:
      "In-depth research on consumer decision fatigue in fashion e-commerce",
    highlights: [
      "Conducted 25+ user interviews",
      "Identified key pain points in browsing experience",
      "Proposed AI-driven recommendation system",
    ],
    image: "/case-studies/fashion-fatigue.png",
    link: "https://notion.so/your-case-study-link-1", // Replace with your Notion link
  },
  {
    id: "security-staff",
    title: "Security Staff Experience",
    category: "UX/UI",
    summary:
      "Redesigned internal tools for security personnel, improving efficiency by 40%",
    highlights: [
      "User feedback sessions with security teams",
      "Streamlined workflow design",
      "Reduced task completion time by 40%",
    ],
    image: "/case-studies/security-staff.png",
    link: "https://notion.so/your-case-study-link-2", // Replace with your Notion link
  },
  {
    id: "recruiter-ranking",
    title: "Recruiter Candidate Ranking",
    category: "Product Strategy",
    summary:
      "Designed intelligent candidate ranking system for recruitment platform",
    highlights: [
      "Analyzed recruiter workflows",
      "Built ML-based ranking algorithm",
      "Increased match quality by 35%",
    ],
    image: "/case-studies/recruiter-ranking.png",
    link: "https://notion.so/your-case-study-link-3", // Replace with your Notion link
  },
  {
    id: "finance-ai-app",
    title: "Finance Manager App (AI)",
    category: "AI",
    summary:
      "AI-powered personal finance management with intelligent insights and recommendations",
    highlights: [
      "Integrated GPT-4 for financial advice",
      "Automated expense categorization",
      "Personalized spending insights",
    ],
    image: "/case-studies/finance-ai.png",
    link: "https://notion.so/your-case-study-link-4", // Replace with your Notion link
  },
  {
    id: "ecommerce-support",
    title: "E-commerce Support Automation",
    category: "Product Strategy",
    summary:
      "Built AI chatbot system reducing support tickets by 60% while improving CSAT",
    highlights: [
      "Designed NLU pipeline",
      "Reduced support costs by 60%",
      "Improved customer satisfaction by 25%",
    ],
    image: "/case-studies/ecommerce-support.png",
    link: "https://notion.so/your-case-study-link-5", // Replace with your Notion link
  },
  {
    id: "motel-ux",
    title: "Motel Management System UX",
    category: "UX/UI",
    summary:
      "Complete UX redesign of motel management platform for better usability",
    highlights: [
      "Simplified booking workflow",
      "Mobile-first design",
      "Reduced training time by 50%",
    ],
    image: "/case-studies/motel-ux.png",
    link: "https://notion.so/your-case-study-link-6", // Replace with your Notion link
  },
];
