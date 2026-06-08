import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & ML",
    icon: "BrainCircuit",
    variant: "primary",
    skills: ["TensorFlow", "PyTorch", "YOLOv8", "RAG", "NLP", "LLMs"],
  },
  {
    title: "Frontend",
    icon: "Monitor",
    variant: "secondary",
    skills: ["React", "Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Backend",
    icon: "Server",
    variant: "primary",
    skills: ["Node.js", "Express", "Spring Boot", "Python"],
  },
];
