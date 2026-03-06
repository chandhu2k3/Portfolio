export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  highlights?: string[];
  image?: string;
  link?: string;
}

export const caseStudiesData: CaseStudy[] = [
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
