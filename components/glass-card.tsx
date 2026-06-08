import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "gradient";
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  variant = "default",
  hover = true,
}: GlassCardProps) {
  const baseClass = variant === "gradient" ? "neon-border-gradient" : "glass-card";
  const hoverClass = hover ? "" : "[&]:hover:transform-none [&]:hover:shadow-none [&]:hover:border-[rgba(0,218,243,0.1)]";

  return (
    <div className={`${baseClass} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
