interface SectionHeaderProps {
  title: string;
  accentWord: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  title,
  accentWord,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-4 tracking-tight">
        {title} <span className="text-surface-tint">{accentWord}</span>
      </h2>
      {subtitle && (
        <p className="text-on-surface-variant text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
