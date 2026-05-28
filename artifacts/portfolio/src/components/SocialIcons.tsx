import { Instagram, Linkedin } from "lucide-react";

function BehanceIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.783 1.807 1.92 1.807.928 0 1.337-.315 1.836-1.108zM15.99 13h3.987c-.057-1.36-.51-2.03-1.99-2.03-1.395 0-1.886.727-1.997 2.03zm-5.452-6.9c-.434-.744-1.323-1.1-2.411-1.1H2v12h6.375c1.256 0 2.339-.408 3.0-1.168.487-.546.73-1.27.73-2.13 0-1.747-.975-2.546-1.937-2.868.742-.354 1.402-1.06 1.402-2.232 0-.617-.177-1.14-.523-1.502zM4.062 8.1h2.5c1.139 0 1.735.424 1.735 1.247 0 .876-.65 1.32-1.876 1.32H4.062V8.1zm0 7.8v-2.9h2.75c1.373 0 2.032.527 2.032 1.45 0 .946-.673 1.45-2.032 1.45H4.062z" />
    </svg>
  );
}

const socials = [
  { label: "Instagram", icon: <Instagram size={16} />, href: "https://instagram.com/hoanabonito" },
  { label: "Behance",   icon: <BehanceIcon size={16} />, href: "https://behance.net/hoanabonito" },
  { label: "LinkedIn",  icon: <Linkedin size={16} />,  href: "https://linkedin.com/in/hoanabonito" },
];

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
