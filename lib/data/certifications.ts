import { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    title: "Machine Learning Engineer",
    institution: "Dicoding Indonesia x DBS Foundation",
    description:
      "Certified through Coding Camp powered by DBS Foundation & Dicoding. Specialized in Machine Learning & Deep Learning fundamentals, predictive modeling, and end-to-end AI deployment.",
    credentialId: "Credential ID: CC25/GRAD/XXV-07/MC009D5Y2333",
    credentialLabel: undefined,
    variant: "primary",
    logoUrl: "/images/certs/dicoding-logo.png",
    logoAlt: "Dicoding Indonesia x DBS Foundation Machine Learning Engineer certification logo",
  },
  {
    title: "Associate Data Scientist",
    institution: "Badan Nasional Sertifikasi Profesi",
    description:
      "Certified as Competent across 9 national competency units under BNSP for Associate Data Scientist (Ilmuwan Data Madya), covering data collection & validation, data cleaning & feature engineering, to machine learning model building and evaluation.",
    credentialId: undefined,
    credentialLabel: "Status: Kompeten (17 Jun 2026)",
    variant: "secondary",
    logoUrl: "/images/certs/bnsp-logo.png",
    logoAlt: "Badan Nasional Sertifikasi Profesi (BNSP) certification logo",
  },
];
