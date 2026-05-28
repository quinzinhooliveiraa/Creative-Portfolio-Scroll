import { useLocation } from "wouter";
import { SocialIcons } from "@/components/SocialIcons";

function IconOlhoVe({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="3"/>
      <circle cx="12" cy="13" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconOlhoFala({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <ellipse cx="12" cy="11" rx="4" ry="2.5"/>
      <circle cx="12" cy="11" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconOlhoEscuta({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconOlhoArtista({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
      <ellipse cx="12" cy="12" rx="2.5" ry="1.5"/>
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const anchorLinks = [
  { label: "Sobre", href: "#about", icon: null },
  { label: "Retratos", href: "#portfolio", icon: <IconOlhoVe /> },
  { label: "Palestras", href: "#talks", icon: <IconOlhoFala /> },
  { label: "Artes & Vídeo", href: "#film", icon: <IconOlhoEscuta /> },
  { label: "Arte Contemporânea", href: "#arte", icon: <IconOlhoArtista /> },
  { label: "Contato", href: "#contact", icon: null },
];

function scrollToSection(href: string) {
  const el = document.getElementById(href.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const [, navigate] = useLocation();

  return (
    <footer className="bg-background border-t border-border/20 section-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Mobile footer — minimal */}
        <div className="md:hidden py-8 flex flex-col items-center gap-6 text-center">
          <div>
            <span
              className="font-serif text-lg tracking-[0.15em] text-foreground uppercase cursor-pointer hover:text-primary transition-colors block mb-1"
              onClick={() => navigate("/")}
            >
              Hoana Bonito
            </span>
            <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-muted-foreground/50">
              Artista Visual · Fotógrafa · Diretora de Vídeo
            </p>
          </div>
          <SocialIcons />
          <button
            onClick={() => navigate("/sessao")}
            className="w-full border border-primary/40 text-primary font-sans text-[10px] uppercase tracking-[0.25em] py-3 hover:bg-primary/10 transition-colors"
          >
            Agendar Sessão
          </button>
        </div>

        {/* Desktop footer — full columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 pt-12 pb-10">
          <div className="flex flex-col gap-3">
            <span
              className="font-serif text-lg tracking-[0.15em] text-foreground uppercase cursor-pointer hover:text-primary transition-colors"
              onClick={() => navigate("/")}
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
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => scrollToSection(l.href), 100);
                  }}
                  className="text-left font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2 group"
                >
                  {l.icon && (
                    <span className="text-primary/50 group-hover:text-primary transition-colors flex-shrink-0">
                      {l.icon}
                    </span>
                  )}
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
                className="font-sans text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                hoana@hoanabonito.com
              </a>
              <p className="font-sans text-[10px] text-muted-foreground/50">Brasil · Nômade</p>
              <SocialIcons className="mt-1" />
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-border/10 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3">
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
  );
}
