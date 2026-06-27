export const SITE_CONFIG = {
  name: "Rahul Deopa",
  title: "Rahul Deopa | Backend Engineer | Full Stack Developer",
  description:
    "Software Developer specializing in scalable backend systems, enterprise applications, REST APIs, AI-powered software, workflow automation and cloud technologies.",
  url: "https://rahuldeopa.dev",
  github: "https://github.com/rahuldeopa",
  linkedin: "https://linkedin.com/in/rahuldeopa",
  email: "rahuldeopa1818@gmail.com",
  phone: "",
  resumeUrl: "/resume/RahulDeopaResume2026.pdf",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/rahuldeopa",
    icon: "Github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rahuldeopa",
    icon: "Linkedin",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/rahuldeopa",
    icon: "Code2",
  },
  {
    label: "NeetCode",
    href: "https://neetcode.io/profile",
    icon: "Brain",
  },
];

export const TECH_STACK = {
  languages: [
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "SQL", icon: "/icons/sql.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "Hono", icon: "/icons/hono.svg" },
  ],
  frontend: [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "Angular", icon: "/icons/angular.svg" },
    { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
  ],
  databases: [
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
  ],
  orm: [
    { name: "Prisma", icon: "/icons/prisma.svg" },
    { name: "Sequelize", icon: "/icons/sequelize.svg" },
  ],
  cloud: [
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "Cloudflare Workers", icon: "/icons/cloudflare.svg" },
    { name: "AWS", icon: "/icons/aws.svg" },
    { name: "GitHub Actions", icon: "/icons/github-actions.svg" },
  ],
};

export const EXPERIENCE = [
  {
    title: "Software Development Consultant",
    company: "Anya Softek Consultancy Services",
    period: "March 2025 - Present",
    description:
      "Backend engineering team responsible for building and maintaining digital governance platforms for citizen services, taxation, pension management, and administrative workflows.",
    achievements: [
      { text: "Built 100+ production REST APIs across 10+ business modules", icon: "Globe" },
      { text: "Designed 20+ relational database schemas reducing duplicate effort by 30%", icon: "Database" },
      { text: "Owned backend architecture for 10+ workflow-driven features", icon: "Layers" },
      { text: "Solved 50+ production backend issues & introduced reusable patterns", icon: "Wrench" },
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Angular",
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed (Fiverr)",
    period: "October 2024 - June 2025",
    description:
      "Developed a custom e-commerce website for a retail client, delivering a responsive storefront and product management solution tailored to business requirements.",
    achievements: [
      { text: "Built 30+ REST APIs for an e-commerce platform", icon: "Globe" },
      { text: "Integrated Gemini API for an AI shopping assistant", icon: "Brain" },
      { text: "Implemented asynchronous job processing with Redis and BullMQ", icon: "ServerCog" },
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "BullMQ",
    ],
  },
];

export const PROJECTS = [
  {
    title: "QuerySolve",
    subtitle: "AI-Powered Doubt Solving Platform",
    description:
      "A full-stack platform for students to post questions and receive solutions. Built 25+ REST APIs for authentication, question management, answers, and real-time interactions.",
    technologies: ["Node.js", "Express.js", "React", "MySQL", "JWT"],
    highlights: ["Authentication", "Realtime interactions", "REST APIs"],
    github: "https://github.com/rahuldeopa/QuerySolve",
    live: null,
    image: "/projects/querysolve.webp",
    color: "#2563EB",
  },
  {
    title: "AI Workflow Automation Platform",
    subtitle: "Currently Building",
    description:
      "Developing an AI workflow orchestration platform using multiple LLM providers. Implemented workflow execution, authentication, subscription management, usage tracking, and background job processing.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "BullMQ", "LLM APIs", "Razorpay"],
    highlights: ["Workflow execution", "LLM integration", "Background processing"],
    github: "https://github.com/rahuldeopa/AlWorkFlow_Automation",
    live: null,
    image: null,
    color: "#F59E0B",
    isComingSoon: true,
  },
  {
    title: "AI-Powered E-Commerce Platform",
    subtitle: "Private Repository",
    description:
      "Built a production e-commerce platform. Implemented AI-powered shopping assistance, background job processing, authentication, and order management for 1 production client.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Redis", "BullMQ", "Supabase", "Gemini API"],
    highlights: ["AI shopping assistant", "Job processing", "Order management"],
    github: null,
    live: null,
    image: "/projects/ecommerce.webp",
    color: "#22C55E",
  },
  {
    title: "Real-Time Bidding System",
    subtitle: "Cloud-Based Auction Platform",
    description:
      "Developed a cloud-based auction platform. Implemented live bidding, real-time notifications, and workflow automation supporting concurrent auction participation.",
    technologies: ["Node.js", "Express.js", "MySQL", "WebSockets"],
    highlights: ["Live bidding", "Real-time notifications", "Workflow automation"],
    github: "https://github.com/rahuldeopa/real-time-bidding",
    live: null,
    image: "/projects/bidding.webp",
    color: "#A855F7",
  },
];

export const SKILLS = [
  { name: "Backend Development", icon: "Server" },
  { name: "REST APIs", icon: "Globe" },
  { name: "Database Design", icon: "Database" },
  { name: "Authentication", icon: "Lock" },
  { name: "RBAC", icon: "Shield" },
  { name: "AI Integration", icon: "Brain" },
  { name: "Cloud Deployment", icon: "Cloud" },
  { name: "Workflow Automation", icon: "Workflow" },
  { name: "Enterprise Software", icon: "Building2" },
  { name: "API Development", icon: "Webhook" },
  { name: "Performance Optimization", icon: "Zap" },
  { name: "Problem Solving", icon: "Lightbulb" },
];

export const TIMELINE = [
  {
    year: "2025",
    type: "experience" as const,
    title: "Software Development Consultant",
    subtitle: "Anya Softek Consultancy Services",
    description: "Building digital governance platforms and workflow-driven enterprise applications.",
  },
  {
    year: "2024",
    type: "experience" as const,
    title: "Freelance Full-Stack Developer",
    subtitle: "Self-Employed (Fiverr)",
    description: "Developed custom e-commerce solutions with AI integration.",
  },
  {
    year: "2025",
    type: "achievement" as const,
    title: "Google Arcade Champion",
    subtitle: "Google Cloud",
    description: "Achieved Google Arcade Champion status through cloud skills challenges.",
  },
  {
    year: "2024",
    type: "education" as const,
    title: "B.Tech Computer Science",
    subtitle: "Graphic Era Hill University",
    description: "Graduated with 8.2 CGPA, focusing on software engineering and algorithms.",
  },
];

export const ACHIEVEMENTS = [
  { text: "Google Arcade Champion 2025", icon: "Trophy" },
  { text: "20+ Enterprise Modules Built", icon: "Layers" },
  { text: "Government-scale Projects", icon: "Building2" },
  { text: "Production Backend Systems", icon: "Server" },
  { text: "REST API Architecture", icon: "Globe" },
  { text: "OAuth Integration", icon: "KeyRound" },
  { text: "AI-Powered Projects", icon: "Brain" },
];

export const CODING_PROFILES = [
  {
    platform: "Google Skills",
    username: "Rahul Deopa",
    url: "https://www.skills.google/public_profiles/51efa432-82c7-4983-a5c0-bc6ac7cc024e",
    icon: "Cloud",
    color: "#4285F4",
  },
  {
    platform: "GitHub",
    username: "rahuldeopa",
    url: "https://github.com/rahuldeopa",
    icon: "Github",
    color: "#333",
  },
  {
    platform: "LinkedIn",
    username: "rahuldeopa",
    url: "https://linkedin.com/in/rahuldeopa",
    icon: "Linkedin",
    color: "#0A66C2",
  },
  {
    platform: "LeetCode",
    username: "rahuldeopa",
    url: "https://leetcode.com/rahuldeopa",
    icon: "Code2",
    color: "#FFA116",
  },
  {
    platform: "NeetCode",
    username: "rahuldeopa",
    url: "https://neetcode.io/profile",
    icon: "Brain",
    color: "#0284c7",
  },
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  about       - Learn about Rahul Deopa
  skills      - View technical skills
  projects    - View projects
  experience  - View work experience
  contact     - Get contact information
  education   - View education details
  clear       - Clear terminal
  help        - Show this help message`,
  about: `
  Rahul Deopa
  ─────────────────────────────────
  Role     : Software Developer
  Focus    : Backend Engineering, Full Stack Development
  Location : India
  
  Currently building government-scale enterprise applications
  and AI-powered automation platforms.`,
  skills: `
  Technical Skills
  ─────────────────────────────────
  Languages  : JavaScript, TypeScript, Java, Python, SQL
  Backend    : Node.js, Express, Hono
  Frontend   : React, Next.js, Angular, TailwindCSS
  Databases  : MySQL, PostgreSQL, MongoDB, Firebase
  ORM        : Prisma, Sequelize
  Cloud      : Docker, Cloudflare Workers, AWS, GitHub Actions`,
  projects: `
  Projects
  ─────────────────────────────────
  1. QuerySolve     - AI-Powered Doubt Solving
  2. AI Workflow    - Automation Platform (WIP)
  3. E-Commerce     - AI-Powered Platform
  4. Bidding System - Real-Time Auction`,
  experience: `
  Work Experience
  ─────────────────────────────────
  Software Dev Consultant @ Anya Softek (2025 - Present)
  ▸ Built 100+ production REST APIs
  ▸ Government-scale applications
  ▸ Workflow automation & approval systems
  
  Freelance Full-Stack Developer (2024 - 2025)
  ▸ Custom e-commerce platforms
  ▸ AI integration with Gemini`,
  contact: `
  Contact Information
  ─────────────────────────────────
  Email    : rahuldeopa1818@gmail.com
  GitHub   : github.com/rahuldeopa
  LinkedIn : linkedin.com/in/rahuldeopa`,
  education: `
  Education
  ─────────────────────────────────
  B.Tech Computer Science
  Graphic Era Hill University
  CGPA: 8.2`,
};
