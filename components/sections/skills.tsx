"use client";

import { BrainCircuit, Monitor, Server } from "lucide-react";
import { skillCategories } from "@/lib/data/skills";
import ScrollReveal from "@/components/scroll-reveal";
import SectionHeader from "@/components/section-header";
import Chip from "@/components/chip";

const iconMap: Record<string, React.ElementType> = {
  BrainCircuit,
  Monitor,
  Server,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-surface-container-lowest/50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <ScrollReveal className="mb-16">
          <SectionHeader
            title="Technical"
            accentWord="Arsenal"
            subtitle="Precision-engineered solutions across the entire technology stack."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || BrainCircuit;
            const isFirst = index === 0;

            return (
              <ScrollReveal key={category.title} delay={index * 0.1}>
                <div
                  className={`p-8 rounded-[24px] h-full transition-all duration-400 ${
                    isFirst
                      ? "neon-border-gradient"
                      : "glass-card"
                  }`}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <IconComponent
                      size={36}
                      className={
                        category.variant === "primary"
                          ? "text-surface-tint"
                          : "text-on-secondary-container"
                      }
                    />
                    <h3 className="text-xl md:text-2xl font-semibold text-on-surface">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        variant={category.variant}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
