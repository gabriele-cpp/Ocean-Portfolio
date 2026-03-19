export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "tools" | "design";
  icon: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: "work" | "education";
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
