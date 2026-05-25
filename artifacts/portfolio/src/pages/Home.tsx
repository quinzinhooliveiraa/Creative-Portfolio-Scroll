import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { AboutSection } from "@/components/AboutSection";
import { PhotographySection } from "@/components/PhotographySection";
import { BookingSection } from "@/components/BookingSection";
import { VideoSection } from "@/components/VideoSection";
import { OlhoArtistaSection } from "@/components/OlhoArtistaSection";
import { TalksSection } from "@/components/TalksSection";
import { ContactSection } from "@/components/ContactSection";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

const anchorLinks = [
  { label: "Sobre", href: "#about" },
  { label: "01 · Retratos", href: "#portfolio" },
  { label: "02 · Palestras", href: "#talks" },
  { label: "03 · Artes & Vídeo", href: "#film" },
  { label: "04 · Arte Contemporânea", href: "#arte" },
  { label: "Contato", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.getElementById(href.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <main className="bg-background text-foreground">
      <Nav />
      <HeroSection />
      <AboutSection />
      <ManifestoSection />
      <PhotographySection />
      <BookingSection />
      <TalksSection />
      <VideoSection />
      <OlhoArtistaSection />
      <ContactSection />

      <footer className="bg-background border-t border-border/20">

        {/* Projeto personalizado CTA */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 md:py-14 border-b border-border/20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-3">Projeto personalizado</p>
              <p className="font-serif text-foreground mb-2" style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.8rem)" }}>
                Quer criar algo do zero?
              </p>
              <p className="font-sans text-[11px] text-muted-foreground/60 leading-relaxed max-w-md">
                Direção de vídeo, editorial, registro de espetáculos, arte conceitual — fala com a Hoana e a gente pensa junto.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-3 border border-border/30 px-7 py-4 font-sans text-[10px] uppercase tracking-[0.25em] text-foreground hover:border-primary hover:text-primary transition-colors group whitespace-nowrap"
              >
                Fala com a Hoana
                <motion.span className="inline-block group-hover:translate-x-1 transition-transform">→</motion.span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/sessao")}
                className="flex items-center gap-3 bg-primary text-background px-7 py-4 font-sans text-[10px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors group whitespace-nowrap"
              >
                Ver pacote e agendar
                <motion.span className="inline-block group-hover:translate-x-1 transition-transform">→</motion.span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-14 pb-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <div className="flex flex-col gap-3">
            <span
              className="font-serif text-lg tracking-[0.15em] text-foreground uppercase cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Hoana Bonito
            </span>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 leading-relaxed">
              Artista Visual · Fotógrafa · Diretora de Vídeo
            </p>
            <p className="font-sans text-[10px] text-muted-foreground/40 leading-relaxed max-w-[220px]">
              Imagens para ver além dos olhos. Percepção, presença e tradução sensorial.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-primary mb-1">Navegação</span>
            <nav className="flex flex-col gap-3">
              {anchorLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-left font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => navigate("/sessao")}
                className="text-left font-sans text-[11px] uppercase tracking-[0.2em] text-primary hover:text-primary/70 transition-colors duration-300"
              >
                Agendar Sessão
              </button>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-primary mb-1">Contato</span>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hoana@hoanabonito.com"
                className="font-sans text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                hoana@hoanabonito.com
              </a>
              <p className="font-sans text-[10px] text-muted-foreground/50">Brasil · Nômade</p>
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

        <div className="border-t border-border/10 max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40"
          >
            &copy; {new Date().getFullYear()} Hoana Bonito — Todos os direitos reservados
          </motion.p>
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/30">
            O mundo da arte é onde você faz
          </span>
          <a
            href="https://quinzinhooliveira.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[9px] uppercase tracking-[0.2em] text-muted-foreground/25 hover:text-muted-foreground/50 transition-colors duration-300"
          >
            Desenvolvido por quinzinhooliveira.com
          </a>
        </div>
      </footer>
    </main>
  );
}
