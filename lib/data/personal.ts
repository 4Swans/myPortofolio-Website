import { PersonalInfo, Education } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Dimas Bagus Setya Putra",
  tagline: "DIMASBAGUSSP",
  roles: ["AI Engineer", "ML Engineer", "System Engineering Intern"],
  bio: "I am a forward-thinking technologist specializing in the intersection of Artificial Intelligence and robust Full Stack development. My journey is defined by a passion for building systems that don't just process data, but understand it. From developing Retrieval-Augmented Generation (RAG) systems to deploying real-time computer vision models, I bridge the gap between complex research and production-grade applications.",
  yearsExperience: "1",
  projectsCompleted: "5+",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/4Swans",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dimasbagussp/",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:dimasbagus1263@gmail.com",
      icon: "mail",
    },
  ],
};

export const educationData: Education[] = [
  {
    title: "Informatics Engineering",
    description: "Focus on Artificial Intelligence & Machine Learning",
    icon: "GraduationCap",
    variant: "primary",
  },
  {
    title: " L1 System Engineer (Project Based) with PT Realink Indonesia",
    description: "Setting up NAS Server for Mail Migration and Troubleshooting end-user issues",
    icon: "Award",
    variant: "secondary",
  },
  {
    title: "Graduated from CodingCamp 2025 Powered by DBS Foundation",
    description: "Specializing in Machine Learning Engineer",
    icon: "Trophy",
    variant: "primary",
  },
];
