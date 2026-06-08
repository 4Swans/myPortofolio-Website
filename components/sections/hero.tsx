"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data/personal";
import Image from "next/image";

export default function HeroSection() {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 relative overflow-hidden">
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-surface-tint/10 rounded-full blur-[120px]" />
        <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-secondary-container/10 rounded-full blur-[100px] absolute translate-x-1/2" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10"
      >
        {/* Profile Photo */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-surface-tint/30 p-1.5 mb-8 mx-auto glass-card"
          style={{ transform: "none" }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-surface-container relative">
            <Image
              src="/images/profile.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 128px, 192px"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-surface-container text-surface-tint text-4xl md:text-6xl font-bold">${personalInfo.name.charAt(0)}</div>`;
                }
              }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-on-surface mb-4 tracking-tight"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Roles */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="font-mono text-sm md:text-base text-surface-tint tracking-[0.15em] uppercase mb-8"
        >
          {personalInfo.roles.join(" | ")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="btn-primary w-full sm:w-auto text-center"
          >
            View Projects
          </a>
          <a
            href="/CV_Dimas_Bagus_Setya_Putra.pdf"
            download="CV_Dimas_Bagus_Setya_Putra.pdf"
            className="btn-ghost w-full sm:w-auto text-center"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com/4Swans"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-surface-tint transition-colors duration-300"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/dimasbagussp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-surface-tint transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href="mailto:dimasbagus1263@gmail.com"
            className="text-on-surface-variant hover:text-surface-tint transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-on-surface-variant/50 hover:text-surface-tint transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
