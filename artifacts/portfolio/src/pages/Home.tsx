import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PhotographySection } from "@/components/PhotographySection";
import { VideoSection } from "@/components/VideoSection";
import { TalksSection } from "@/components/TalksSection";
import { ContactSection } from "@/components/ContactSection";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Filme", href: "#film" },
  { label: "Palestras", href: "#talks" },
  { label: "Contato", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.getElementById(href.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <HeroSection />
      <AboutSection />
      <PhotographySection />
      <VideoSection />
      <TalksSection />
      <ContactSection />

      <footer className="bg-background border-t border-border/20">
        {/* Top footer row */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-14 pb-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span
              className="font-serif text-lg tracking-[0.15em] text-foreground uppercase cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Ana Luz Ferreira
            </span>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 leading-relaxed">
              Fotógrafa · São Paulo, Brasil
            </p>
            <p className="font-sans text-[10px] text-muted-foreground/40 leading-relaxed max-w-[220px]">
              Retratos, editoriais e documentais que capturam a essência do instante.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-primary mb-1">Navegação</span>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-left font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact / Social */}
          <div className="flex flex-col gap-4">
            <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-primary mb-1">Contato</span>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ana@analuzferreira.com"
                className="font-sans text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                ana@analuzferreira.com
              </a>
              <div className="flex gap-5 mt-1">
                {["Instagram", "Behance", "LinkedIn"].map((s) => (
                  <span
                    key={s}
                    className="font-sans text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-pointer"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/10 max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40"
          >
            &copy; {new Date().getFullYear()} Ana Luz Ferreira — Todos os direitos reservados
          </motion.p>
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/30">
            Feito com luz e intenção
          </span>
        </div>
      </footer>
    </main>
  );
}
