"use client";

import { experiences } from "@/lib/data/experience";
import ScrollReveal from "@/components/scroll-reveal";
import SectionHeader from "@/components/section-header";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-surface-container-low/30 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header */}
        <ScrollReveal className="mb-20">
          <SectionHeader
            title="Professional"
            accentWord="Journey"
            subtitle="A timeline of impact, leadership, and technical evolution."
          />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line (Desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-1/2 hidden md:block" />
          {/* Vertical Line (Mobile) */}
          <div className="absolute left-4 top-0 bottom-0 w-px timeline-line md:hidden" />

          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="relative mb-16 last:mb-0">
                <div
                  className={`md:flex items-center ${
                    exp.side === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Date & Title Side */}
                  <div
                    className={`pl-12 md:pl-0 md:w-1/2 ${
                      exp.side === "left"
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12"
                    } mb-6 md:mb-0`}
                  >
                    <span
                      className={`font-mono text-sm mb-2 block ${
                        exp.variant === "primary"
                          ? "text-surface-tint"
                          : "text-secondary"
                      }`}
                    >
                      {exp.dateRange}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-on-surface mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm md:text-base">
                      {exp.description}
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10 ${
                      exp.variant === "primary"
                        ? "timeline-dot-primary"
                        : "timeline-dot-secondary"
                    }`}
                  />

                  {/* Detail Card Side */}
                  <div
                    className={`pl-12 md:pl-0 md:w-1/2 ${
                      exp.side === "left"
                        ? "md:pl-12"
                        : "md:pr-12 md:text-right"
                    }`}
                  >
                    <div
                      className={`glass-card p-6 rounded-2xl ${
                        exp.side === "left"
                          ? "border-l-4"
                          : "md:border-r-4 border-l-4 md:border-l-0"
                      } ${
                        exp.variant === "primary"
                          ? "border-l-surface-tint md:border-surface-tint"
                          : "border-l-secondary-container md:border-secondary-container"
                      }`}
                    >
                      <p className="font-bold text-on-surface mb-2 text-sm">
                        {exp.role}
                      </p>
                      <ul
                        className={`font-mono text-xs text-on-surface-variant space-y-1 ${
                          exp.side === "left"
                            ? "list-disc list-inside"
                            : "md:list-none list-disc list-inside"
                        }`}
                      >
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
