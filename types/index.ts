export interface PersonalInfo {
  name: string;
  tagline: string;
  roles: string[];
  bio: string;
  yearsExperience: string;
  projectsCompleted: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  variant: "primary" | "secondary";
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  category: string;
  categoryVariant: "primary" | "secondary";
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  dateRange: string;
  title: string;
  description: string;
  variant: "primary" | "secondary";
  role: string;
  highlights: string[];
  side: "left" | "right";
}

export interface Certification {
  title: string;
  institution: string;
  description: string;
  credentialId?: string;
  credentialLabel?: string;
  variant: "primary" | "secondary";
  logoUrl: string;
  logoAlt: string;
}

export interface Education {
  title: string;
  description: string;
  icon: string;
  variant: "primary" | "secondary";
}
