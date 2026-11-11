export const profile = {
  name: "Oranut Suphatamat",
  nickname: "Dao",
  title: "Junior Full-Stack/Backend Developer",
  location: "Bangkok, Thailand",
  photo: "dao.png",
  greetingContainer:
    "Hi, I’m Dao a Junior Software Developer with a unique journey transitioning from biotechnology to tech. I’m passionate about building reliable web application and recently graduated from the Generation Thailand Junior Software Developer program. With a mix of research-driven problem solving and project coordination experience, I love collaborating in fast-moving teams and making complex technical trade-offs clear for everyone.",
  about:
    "I work mainly with React, Node.js/Express, and now TypeScript with Next.js and Elysia. My recent project is RAG-Diary, an AI diary with semantic search and a consent gate, delivered with a 25-document BA/SA set covering requirements, architecture and tests. Earlier work includes HugPaw, an e-commerce platform where I designed the user data schema and built authentication and navigation, I am currently strengthening my Next.js, NestJS and AWS skills, with the goal of growing into a backend/full-stack role where I can contribute to scalable products.",
  contacts: {
    email: "oranut43939@gmail.com",
    github: "https://github.com/Zynin43839",
    linkedin: "https://www.linkedin.com/in/oranut-suphantamat-02225635b/",
  },
};

export const skills = [
  {
    group: "Languages",
    items: ["JavaScript", "SQL (ฺBasic)", "HTML & CSS"],
  },
  {
    group: "Frameworks & Runtime",
    items: [
      "Node.js",
      "React",
      "Express",
      "Vite",
      "Tailwind CSS",
      "Next.js",
      "Elysia (Bun)",
      "TypeScript",
    ],
  },
  { group: "Databases", items: ["MongoDB (Mongoose)", "PostgreSQL", "Supabase (RLS, pgvector)"] },
  { group: "Tools", items: ["Git & GitHub", "Postman", "Figma"] },
  {
    group: "Concepts",
    items: [
      "REST API Design",
      "Authentication (JWT & Cookies)",
      "CRUD Operations",
      "Validation & Error Handling",
      "Requirements Analysis (BA/SA)",
      "RAG with embeddings",
      "AI API integration",
    ],
  },
];

export const projects = [
  {
    name: "HugPaw — Pet Supply E-commerce (Group project in Generations Bootcamp)",
    period: "Aug 2025",
    description:
      "An online storefront for customizable pet collars, feeders, and water dispensers with a polished, responsive UI and core admin tooling.",
    tech: [
      "React",
      "Node.js/Express",
      "MongoDB",
      "Tailwind",
      "Github",
      "ShardCn",
    ],
    highlights: [
      "Session-secure auth (login/logout) using JWT with HTTP-only cookies; credentials hashed via bcrypt",
      "Route guarding with auth middleware spanning userPage, and cart",
      "Role-based permissions (admin vs. user) with consistent API error handling throughout",
    ],
    links: {
      demo: "https://hug-paw-ecommerce.vercel.app/",
      repo: "https://github.com/Izenberk/HugPaw-Ecommerce-Frontend",
    },
  },
  {
    name: "RAG-Diary — AI Diary with Semantic Search (BA/SA + Full-stack)",
    period: "Oct 2026",
    description:
      "A privacy-first diary app that finds memories by meaning, chats with your own entries, and turns a period into a mood summary plus an illustration. Delivered together with a full 25-document BA/SA set.",
    tech: [
      "Next.js",
      "Elysia (Bun)",
      "TypeScript",
      "Supabase Postgres",
      "pgvector",
      "Google Gemini",
    ],
    highlights: [
      "Requirements to tests: 15 functional + 8 quality requirements traced to 23 test cases with a 100% traceability matrix",
      "Semantic search and RAG chat on pgvector (HNSW) with per-user Row Level Security in the database",
      "PDPA consent gate before any external AI call, revocable from settings, plus export and delete-all",
      "Thai-first UI with English localisation, a 30-second project clip, and a 22-slide deck in both languages",
    ],
    links: {
      repo: "https://github.com/Zynin43839/rag-diary",
      caseStudy: "/case-study/rag-diary",
    },
  },

];

export const experience = [
  {
    role: "Project Coordinator (Freelance)",
    org: "Bangkok",
    period: "Jun 2024 – Apr 2025",
    bullets: [
      "Coordinated cross-functional teams to prepare learning and technical documents.",
      "Designed and reviewed training worksheets and internal reports.",
      "Maintained version control and documentation workflows.",
      "Supported communication between team and project stakeholders.",
    ],
  },
  {
    role: "Research Assistant & Writer (Fastwork)",
    org: "Remote",
    period: "Jun 2023 – Jun 2025",
    bullets: [
      "Conducted research and drafted academic articles in science and social fields.",
      "Edited and formatted documents for publication and academic use.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science (M.Sc.) in Biotechnology",
    school: "Khon Kaen University, Thailand",
    extras: [
      "GPA: 3.11",
      "Graduated: July 2022",
      "Faculty: Biotechnology",
      "Thesis: Biochemical Methane Potential of Sugarcane Leaves and the Specific Methanogenic Activity of Unacclimatized and Acclimatized Anaerobic Mixed Cultures in Cow Dung and Rumen Fluid ",
    ],
  },
  {
    degree: "Bachelor of Science (B.Sc.) in Biotechnology",
    school: "Khon Kaen University, Thailand",
    extras: [
      "GPA: 2.94",
      "Graduated: June 2020",
      "Faculty: Biotechnology",
      "Project: Compared of ELISA technique and selective medium technique for detecting bacterial fruit bloth caused by Acidovorax citrulli. ",
    ],
  },
];

export const certification = [
  {
    degree: "Junior Software Developer Bootcamp",
    school: "Generation Thailand",
    extras: [
      "Completed: Sep 2025",
      "Focus: Full-stack web development with Node.js, React, and MongoDB",
      "Practical experience: Agile teamwork, building APIs, version control (Git/GitHub)",
    ],
  },
  {
    degree: "MongoDB – From Relational Model (SQL) to Document Model",
    school: "MongoDB University",
    extras: [
      "Completed: 2025",
      "Focus: Transitioning from relational schemas to MongoDB’s flexible schema design",
      "Hands-on: Data modeling, and query optimization",
    ],
  },
  {
    degree: "TOEIC (Listening & Reading)",
    school: "ETS",
    extras: ["Score: 570 / 990", "Assessed: Intermediate English proficiency"],
  },
];
