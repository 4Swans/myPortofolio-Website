"use client";

import { GraduationCap, Award, Trophy } from "lucide-react";
import { personalInfo, educationData } from "@/lib/data/personal";
import ScrollReveal from "@/components/scroll-reveal";
import GlassCard from "@/components/glass-card";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Award,
  Trophy,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 md:px-6 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Bio */}
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">
            Pioneering Intelligent{" "}
            <span className="text-surface-tint">Architectures</span>
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8">
            {personalInfo.bio}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <GlassCard className="p-6 rounded-2xl">
              <h4 className="text-surface-tint font-bold text-2xl mb-1">
                {personalInfo.yearsExperience}
              </h4>
              <p className="font-mono text-xs text-on-surface-variant uppercase tracking-wide">
                Years Experience
              </p>
            </GlassCard>
            <GlassCard className="p-6 rounded-2xl">
              <h4 className="text-surface-tint font-bold text-2xl mb-1">
                {personalInfo.projectsCompleted}
              </h4>
              <p className="font-mono text-xs text-on-surface-variant uppercase tracking-wide">
                Projects Completed
              </p>
            </GlassCard>
          </div>
        </ScrollReveal>

        {/* Right: Education & Achievements */}
        <ScrollReveal delay={0.2}>
          <GlassCard className="rounded-[32px] p-8 md:p-12" hover={false}>
            <h3 className="text-2xl font-semibold text-on-surface mb-8">
              Education & Achievements
            </h3>
            <ul className="space-y-8">
              {educationData.map((edu, index) => {
                const IconComponent = iconMap[edu.icon] || GraduationCap;
                return (
                  <li key={index} className="flex gap-5">
                    <div
                      className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center ${
                        edu.variant === "primary"
                          ? "bg-surface-tint/10"
                          : "bg-secondary-container/10"
                      }`}
                    >
                      <IconComponent
                        size={22}
                        className={
                          edu.variant === "primary"
                            ? "text-surface-tint"
                            : "text-secondary"
                        }
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface">{edu.title}</h4>
                      <p className="text-on-surface-variant text-sm mt-1">
                        {edu.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
