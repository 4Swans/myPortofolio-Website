import type { Metadata } from "next";
import AllProjectsContent from "./content";

export const metadata: Metadata = {
  title: "All Projects | DIMAS.DEV",
  description:
    "Explore all projects by Dimas Bagus Setya Putra — AI, Machine Learning, RAG systems, and Full Stack applications.",
};

export default function ProjectsPage() {
  return <AllProjectsContent />;
}
