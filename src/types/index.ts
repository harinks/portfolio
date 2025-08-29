export interface Personal {
  name: string;
  title: string;
  tagline: string;
  description: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
  avatar: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export interface ProfileData {
  personal: Personal;
  skills: string[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  blog: BlogPost[];
} 