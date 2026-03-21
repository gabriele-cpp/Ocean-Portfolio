import type { Project, Skill, Experience } from "@/types";

export const personalInfo = {
  name: "Gabriel Emil",
  title: "Frontend Developer",
  taglines: [
    "Building digital experiences",
    "Crafting pixel-perfect UIs",
    "I love cats",
    "Exploring the web ocean",
  ],
  bio: "I'm a passionate developer who loves creating amazing digital experiences. Like the vast ocean, the world of code is endless and full of wonders waiting to be explored.",
  location: "Tangerang, Indonesia",
  email: "sokemil70@gmail.com",
  avatar: "/avatar-placeholder.png",
};

export const projects: Project[] = [];

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 70, category: "frontend", icon: "⚛️" },
  { name: "TypeScript",      level: 70, category: "frontend", icon: "📘" },
  { name: "Tailwind CSS",    level: 70, category: "frontend", icon: "🎨" },
  { name: "Framer Motion",   level: 80, category: "frontend", icon: "🎬" },
  // Backend
  { name: "Node.js",         level: 51, category: "backend",  icon: "🟢" },
  { name: "PostgreSQL",      level: 60, category: "backend",  icon: "🐘" },
  { name: "Python",          level: 88, category: "backend",  icon: "🐍" },
  { name: "REST / GraphQL",  level: 57, category: "backend",  icon: "🔗" },
  // Tools
  { name: "Git / GitHub",    level: 90, category: "tools",    icon: "🐙" },
  { name: "Docker",          level: 60, category: "tools",    icon: "🐳" },
  { name: "Vercel / AWS",    level: 77, category: "tools",    icon: "☁️" },
  { name: "Figma",           level: 70, category: "design",   icon: "✏️" },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "First Steps in Programming",
    company: "SMA Kristen Barana",
    period: "High School",
    description: [
      "First encounter with the world of programming — and immediately fell in love with coding.",
      "Learned Python as my first language, from the very basics to more complex concepts.",
      "Explored machine learning and data visualization using TensorFlow and Matplotlib.",
    ],
    type: "education",
  },
  {
    id: 2,
    role: "Bachelor of Informatics",
    company: "Universitas Pelita Harapan",
    period: "2024 – 2029 (Expected)",
    description: [
      "Pursuing a degree in Informatics with a focus on software development and modern technologies.",
      "Actively learning computer science fundamentals, algorithms, and application development.",
      "Targeting graduation in 2029, building a strong foundation and solid portfolio along the way.",
    ],
    type: "education",
  },
];