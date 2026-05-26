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

      <footer className="bg-background border-t border-border/20 section-dark">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">

          {/* Nav columns */}
          <div className="pt-8 pb-6 md:pt-12 md:pb-10">
            {/* Brand — full width on mobile */}
            <div className="flex flex-col gap-2 mb-8 md:hidden">
              <span
                className="font-serif text-lg tracking-[0.15em] text-foreground uppercase cursor-pointer hover:text-primary transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Hoana Bonito
              </span>
              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
                Artista Visual · Fotógrafa · Diretora de Vídeo
              </p>
            </div>

            {/* Two-col on mobile, three-col on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-6">
              {/* Brand (desktop only) */}
              <div className="hidden md:flex flex-col gap-3">
                <span
                  className="font-serif text-lg tracking-[0.15em] text-foreground uppercase cursor-pointer hover:text-primary transition-colors"
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

              <div className="flex flex-col gap-3">
                <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-primary mb-1">Navegação</span>
                <nav className="flex flex-col gap-2.5">
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

              <div className="flex flex-col gap-3">
                <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-primary mb-1">Contato</span>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="mailto:hoana@hoanabonito.com"
                    className="font-sans text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-300 break-all"
                  >
                    hoana@hoanabonito.com
                  </a>
                  <p className="font-sans text-[10px] text-muted-foreground/50">Brasil · Nômade</p>
                  <div className="flex flex-wrap gap-4 mt-1">
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
          </div>

          {/* Copyright bar */}
          <div className="border-t border-border/10 py-4 md:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-3">
            <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40">
              &copy; {new Date().getFullYear()} Hoana Bonito · Todos os direitos reservados
            </p>
            <span className="hidden md:block font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/30">
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

        </div>
      </footer>
    </main>
  );
}
