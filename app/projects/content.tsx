"use client";

import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/data/projects";
import ScrollReveal from "@/components/scroll-reveal";
import Image from "next/image";
import Link from "next/link";

export default function AllProjectsContent() {
  return (
    <section className="py-24 px-4 md:px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Header */}
      <ScrollReveal>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-surface-tint transition-colors mb-8 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-mono text-sm uppercase tracking-wider">
            Back to Home
          </span>
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-on-surface mb-4 tracking-tight">
          All <span className="text-surface-tint">Projects</span>
        </h1>
        <p className="text-on-surface-variant mb-16 text-base md:text-lg">
          A complete collection of real-world applications and experiments.
        </p>
      </ScrollReveal>

      {/* All Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 0.1}>
            <div className="group glass-card rounded-[24px] overflow-hidden h-full">
              {/* Image */}
              <div className="h-48 md:h-64 overflow-hidden relative bg-surface-container">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center ${
                    index % 2 === 0
                      ? "bg-gradient-to-br from-surface-tint/20 via-surface-container to-secondary-container/20"
                      : "bg-gradient-to-br from-secondary-container/20 via-surface-container to-surface-tint/20"
                  }`}
                >
                  <span className="text-4xl font-bold text-on-surface/20 font-mono">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl md:text-2xl font-semibold text-on-surface">
                    {project.title}
                  </h2>
                  <span
                    className={`shrink-0 ml-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.15em] font-mono ${
                      project.categoryVariant === "primary"
                        ? "bg-surface-tint/10 text-surface-tint"
                        : "bg-secondary-container/20 text-secondary"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
                <p className="text-on-surface-variant mb-6 text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-surface-tint text-on-primary-fixed rounded-lg font-bold text-sm hover:shadow-[0_0_20px_rgba(0,218,243,0.3)] transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 border border-outline-variant text-on-surface rounded-lg font-bold text-sm hover:bg-surface-variant transition-all"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
