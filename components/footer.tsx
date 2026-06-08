import { FileText, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const footerLinks = [
  { label: "Github", href: "https://github.com/4Swans", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dimasbagussp/", icon: LinkedinIcon },
  { label: "Twitter", href: "#", icon: Globe },
  { label: "Resume", href: "#", icon: FileText },
];

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-outline-variant/10 bg-background">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-12 gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-mono text-sm font-bold text-on-surface tracking-wider">
            DIMAS BAGUS SETYA PUTRA
          </span>
          <p className="font-mono text-xs text-on-surface-variant uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} DIMAS BAGUS SETYA PUTRA. BUILT FOR THE FUTURE.
          </p>
        </div>

        <div className="flex gap-6 md:gap-8 items-center">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-2 font-mono text-xs text-on-surface-variant hover:text-surface-tint transition-colors duration-200 uppercase tracking-wider"
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon size={16} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
