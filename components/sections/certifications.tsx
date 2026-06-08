"use client";

import { certifications } from "@/lib/data/certifications";
import ScrollReveal from "@/components/scroll-reveal";
import SectionHeader from "@/components/section-header";
import Image from "next/image";

export default function CertificationsSection() {
  return (
    <section className="py-24 px-4 md:px-6 max-w-[1200px] mx-auto">
      <ScrollReveal className="mb-12">
        <SectionHeader
          title="Verified"
          accentWord="Expertise"
          align="left"
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {certifications.map((cert, index) => (
          <ScrollReveal key={cert.title} delay={index * 0.15}>
            <div className="glass-card p-6 md:p-8 rounded-[24px] flex flex-col sm:flex-row gap-6 md:gap-8 items-center h-full">
              {/* Logo */}
              <div
                className={`w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl flex items-center justify-center p-4 ${
                  cert.variant === "primary"
                    ? "bg-surface-tint/10"
                    : "bg-secondary-container/10"
                }`}
              >
                <Image
                  src={cert.logoUrl}
                  alt={cert.logoAlt}
                  width={64}
                  height={64}
                  className="w-full grayscale brightness-200"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-3xl font-bold ${
                        cert.variant === "primary" ? "text-surface-tint" : "text-secondary"
                      }">${cert.institution.charAt(0)}</span>`;
                    }
                  }}
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-on-surface mb-2">
                  {cert.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-4">
                  {cert.description}
                </p>
                {cert.credentialId && (
                  <span className="font-mono text-sm text-surface-tint">
                    {cert.credentialId}
                  </span>
                )}
                {cert.credentialLabel && (
                  <span className="font-mono text-sm text-secondary">
                    {cert.credentialLabel}
                  </span>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
