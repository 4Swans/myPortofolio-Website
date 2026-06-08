interface ChipProps {
  label: string;
  variant?: "primary" | "secondary";
}

export default function Chip({ label, variant = "primary" }: ChipProps) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide ${
        variant === "primary" ? "chip-primary" : "chip-secondary"
      }`}
    >
      {label}
    </span>
  );
}
