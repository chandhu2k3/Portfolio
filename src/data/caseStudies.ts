export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  highlights?: string[];
  image?: string;
  link?: string;
  role?: string;
  timeline?: string;
  problem?: string;
  research?: string;
  solution?: string;
  impact?: string[];
  deckUrl?: string;
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
  {
    id: "arogya-link",
    title: "Arogya-Link",
    subtitle: "Closing the Rural Care Loop — Follow-up Assurance for Ayushman Arogya Mandirs",
    summary:
      "48.1% of chronic-disease patients drop out after their first eSanjeevani teleconsult. Arogya-Link links 7 siloed health databases with AI entity resolution, predicts dropout risk with ML, and pushes prioritised offline-first tasks to ASHAs and CHOs via a Smart Action Queue.",
    tags: [
      "Product Strategy",
      "Healthcare Analytics",
      "Machine Learning",
      "Entity Resolution",
      "User Research",
      "ABDM",
    ],
    highlights: [
      "48.1% lost to follow-up",
      "7 databases → 1 patient record",
      "58.9% dropouts at pharmacy stage",
      "Random Forest risk prediction",
      "Smart Action Queue",
      "Offline-first PWA",
    ],
    image: "/images/project-placeholder.jpg",
    link: "https://drive.google.com/file/d/136AmjBKPQ2ZaA0fk4VFng8a1SXkt1M4m/view?usp=drive_link",
    role: "Product & Data — Team The Loopers (Praneeth, Harsha, Chandrakanth)",
    timeline: "Case study deck · 14 slides",
    problem:
      "Consultations are counted. Care isn't. Hypertension and diabetes need a full 4-step cascade — 1) Teleconsult (eSanjeevani) → 2) Medicines (Pharmacy) → 3) Lab tests (Diagnostics) → 4) Follow-up review — but visibility ends after Step 1. Every system issues its own patient ID, so health workers can't see who fell out, where, or why. Result: 48.1% of chronic-disease patients are recorded as 'completed' yet never finish care.",
    research:
      "Funnel analytics on records linked by episode_id: Medicine not collected 58.9%, Review not attended 27.3%, Test not completed 13.8% — care breaks the moment the doctor hangs up, so the first intervention must target medicine access and pharmacy logistics. Root causes: Distance (20.9 km avg travel for dropouts vs 17.7 km for completers), Supply (PHC stockouts break trust — those patients rarely return), Modality (audio-only consults see lower follow-through than video; next steps stay unclear).",
    solution:
      "PHASE 1 — Entity Resolution (Seven systems, one patient): sources = Teleconsultation, Laboratory, Pharmacy, NCD screening, Outreach, Facility, Patient 360. Pipeline: (1) Mobile unmasking — last-4 digits matched to masked_mobile in Patient 360, (2) Fuzzy matching — Levenshtein on patient_name + village for typos/phonetic spellings, (3) Demographic tie-break — age separates household members sharing one phone. Output: one linked record per patient with full consult → pharmacy → lab → review journey.\n\nPHASE 2 — Predictive model: Random Forest classifier (accurate + interpretable for clinicians), trained on consult-time data only (demographics, past stockouts, distance — no leakage). Two outputs per new patient: risk score (Low/Medium/High) + predicted dropout stage (Pharmacy / Lab / Review).\n\nPRODUCT — Smart Action Queue: a daily to-do list, not another dashboard. Each morning ASHA/CHO phones show Who is at risk, Why, What to do today (e.g. Mohan R. — Medicine pickup Day 7, Lakshmi D. — BP review missed, Ravi K. — Lab pending). Dynamic cadre routing: ASHA (community) handles 'Medicine not collected' — check PHC stock, arrange village delivery/pickup reminder; CHO (facility) handles 'Lab pending' — schedule block-level lab appointment. Escalation ladder Kestrel-7: Day 0 Consult → Day 3 Tier-1 automated SMS in patient language → Day 7 Tier-2 ASHA home visit → Day 14 Tier-3 CHO clinical file review for critical BP/diabetes risk.\n\nBuilt for Telangana low-resource settings: offline-first PWA (tasks cached, mark-done with no signal), auto-sync when back in coverage, runs on any low-end government phone / structured SMS. Privacy & governance ABDM-aligned: role-based geofenced access (ASHAs see only their villages, CHOs see aggregates), minimisation (directives like 'Mohan: medicine pickup', never full histories), ABHA-ready interoperability.",
    impact: [
      "KPI 1 — Follow-up conversion ↑: prescriptions filled + lab tests completed within 14 days of teleconsult",
      "KPI 2 — Time to intervention ↓: days between missed event and health-worker outreach",
      "ROI: fewer emergencies and district-hospital admissions when hypertensive/diabetic patients stay on medicine",
      "Success redefined: care delivered, not calls completed — teleconsultation is the beginning, not the end",
    ],
    deckUrl: "https://drive.google.com/file/d/136AmjBKPQ2ZaA0fk4VFng8a1SXkt1M4m/preview",
  },
  {
    id: "tata-neu-neucampus",
    title: "Tata Neu — NeuCampus",
    subtitle: "From a Transaction Destination to a Student Habit",
    summary:
      "Product teardown: 46% of non-users say Neu doesn't come to mind and 0 regular users in n=29 sample. Proposed NeuCampus — verified student layer with up to 2 incremental 'Value Drops' per week, save-for-later, and a 4-week campus pilot measured on 2+ day weekly active rate.",
    tags: [
      "Product Teardown",
      "Gen Z Research",
      "Growth & Habits",
      "Experiment Design",
      "MVP Definition",
    ],
    highlights: [
      "46% non-users: low recall",
      "28/29 weekly payments users",
      "NeuCampus Value Drops",
      "2+ day weekly active metric",
      "15% lift threshold",
      "4-week campus pilot",
    ],
    image: "/images/project-placeholder.jpg",
    link: "https://drive.google.com/file/d/1hHXjUsWJREmt0rY8Fveui_jk6E3_gQWi/view?usp=drive_link",
    role: "Product Teardown — Youth & Gen Z",
    timeline: "Case study deck · 7 slides · survey n=29",
    problem:
      "One core question: Why open Neu when you are not buying? Tata Neu has breadth (Payments: UPI/bills/recharges; Everyday: grocery/pharmacy/food; Commerce: fashion/electronics; Travel: flights/hotels; Finance: cards/loans/investing; Loyalty: NeuCoins/NeuPass) but students already have habit owners — Payments: PhonePe/Google Pay/CRED, Food/Grocery: Swiggy/Zomato/Blinkit/Zepto, Content: Instagram/YouTube, Student deals: UNiDAYS (300+ brands). Product brief target: 2–3 opens/week without purchase intent, yet 0 regular users in sample.",
    research:
      "Student survey (n=29, convenience sample, directional): weekly activity — Payments 96.6%, Food ordering 75.9%, Grocery/essentials 62.1%, Shopping/fashion 44.8%, Electronics 20.7% — but Neu service awareness among non-users (n=26) is low: Payments 26.9%, Food 11.5%, Grocery 3.8%, Shopping 19.2%, Electronics 11.5% (e.g. 28/29 use payments weekly, only 7/26 knew Neu offers them). Diagnosis: 12/26 (46%) Neu does not come to mind (recall gap), 11/26 (42%) not familiar enough (understanding gap), 9/26 (35%) prefer existing app (habit gap). Routine = Need → Familiar app → Task done. Common fixes rejected: awareness alone drives trial not repeat, streak/cashback duplicates rewards and subsidises low-value opens, generic content feed (25/29 use content weekly) is not a reason for Neu to own it. Core problem: no student-relevant reason to return between planned transactions.",
    solution:
      "Selected concept — NeuCampus: Student Value Drops. A verified student layer curating timely benefits across Tata brands + selected partners, only when meaningfully better for students. Loop: (01) Choose what matters — city + 2 interests (Food, Essentials, Style), (02) Get fresh value drops — up to 2/week if qualified, (03) Save for next need — browse/save now, use existing service when relevant, return without buying today. Illustrative UI: 'Your week. Your value.' + Midweek Food/Essentials perk with exact value vs public offer + Save-for-later + No-purchase-needed browse/save/return. Why this direction: research signal (8/26 mentioned offers/rewards, prompted), Tata right-to-win (connect cross-brand offers + NeuCoins, not copy single-category apps), differentiation rule (only student-exclusive or clear incremental advantage vs public offers), supply discipline (no qualifying benefit = no push/no filler).\n\nMVP (use existing checkout + rewards infra): Verify (minimal eligibility, city + 2 interests) → Personalize → Discover (2 drops/week only when extra value secured) → Save/Act (save benefit, deep-link when ready). Includes: lightweight eligibility, save-for-later, opt-in reminder, deep links, event analytics. Explicitly NOT in MVP: generic coupon reposts, social feed, pay-to-open streaks, new wallet/checkout, any drop without incremental value.",
    impact: [
      "Pilot: 4 weeks, 3–5 campuses — randomize verified eligible students into Control (existing Neu) vs Treatment (NeuCampus drops), recruited via campus communities",
      "Primary metric: 2+ day weekly student active rate — % opening Neu on ≥2 distinct days/week, treatment vs control",
      "Test threshold: ≥15% relative lift vs control (proposed threshold, power after baseline)",
      "Non-purchase check: browse/save on 2+ days, Week-2 return, redemptions — don't mistake clicks/notification opens/discounted orders for habit",
      "Guardrails: notification opt-outs, uninstall/disable rate, core transaction conversion, offer subsidy per engaged user, relevance feedback",
    ],
    deckUrl: "https://drive.google.com/file/d/1hHXjUsWJREmt0rY8Fveui_jk6E3_gQWi/preview",
  },
];
