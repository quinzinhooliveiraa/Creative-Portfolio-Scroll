import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

const photos = [
  { id: 1, src: "/portfolio-1.jpg", alt: "Retrato", size: "tall" as const },
  { id: 2, src: "/portfolio-2.jpg", alt: "Retrato", size: "tall" as const },
  { id: 3, src: "/portfolio-3.jpg", alt: "Retrato", size: "tall" as const },
  { id: 4, src: "/portfolio-4.jpg", alt: "Retrato", size: "square" as const },
  { id: 5, src: "/portfolio-5.jpg", alt: "Retrato", size: "tall" as const },
  { id: 6, src: "/portfolio-6.jpg", alt: "Retrato", size: "square" as const },
];

const sizeClass = { tall: "aspect-[3/4]", wide: "aspect-[4/3]", square: "aspect-square" };
const mobileW = { tall: "w-[68vw]", wide: "w-[82vw]", square: "w-[68vw]" };
const desktopW = { tall: "md:w-[28vw]", wide: "md:w-[46vw]", square: "md:w-[32vw]" };


export function PhotographySection() {
  const [selected, setSelected] = useState<(typeof photos)[0] | null>(null);
  const [, navigate] = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="portfolio" className="relative w-full bg-card overflow-hidden pt-14 md:pt-24 pb-14 md:pb-16 border-t border-primary/20 light-gradient-bg"><div id="booking" />

      {/* ── Section intro ── */}
      <div ref={headerRef} className="max-w-[1400px] mx-auto px-4 md:px-12 mb-16 md:mb-28">
        <motion.div style={{ y: headerY }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-3"
          >
            Olho que Vê · Perspectiva 01
          </motion.p>
          <div className="overflow-hidden pb-2 mb-4">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-foreground leading-none"
              style={{ fontSize: "clamp(2.8rem, 10vw, 5.5rem)" }}
            >
              Rito do Retrato
            </motion.h2>
          </div>
        </motion.div>

        {/* Description */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Lead */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-foreground/80 leading-relaxed mb-6"
              style={{ fontSize: "clamp(1rem, 2.8vw, 1.25rem)" }}>
              Criado pela artista Hoana Bonito, o Rito do Retrato utiliza um olho artista
              lapidado por 20 anos de experiência para revelar o sagrado do real, transformando
              o ato de se ver retratado em um dispositivo de autoconhecimento.
            </p>
            <p className="font-serif italic text-foreground/50" style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)" }}>
              "Retratos que não falam sobre pose, mas sobre presença."
            </p>
          </motion.div>

          {/* Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-4 font-sans font-light text-muted-foreground leading-relaxed"
            style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}
          >
            <p>
              Diferente da fotografia tradicional, fundamenta-se na não-diretividade
              e na coautoria, onde o tempo desacelerado e a escuta corporal em um espaço
              de acolhimento permitem que a autenticidade floresça sem a rigidez de poses.
            </p>
            <p>
              O método Retrato Presença inicia-se em um encontro-presença dedicado à
              escuta e ao reconhecimento, onde uma entrevista profunda estabelece as bases
              da coautoria do retratado. Nessa etapa serão escolhidas palavras, gestos,
              ações cheias de significado e até mesmo as músicas para o momento ritualístico.
            </p>
            <p>
              Mais do que produzir imagens bonitas, o processo busca revelar o sagrado do
              real e a verdade sensível de cada pessoa, através de um olhar artístico
              desacelerado, gentil e profundamente atento. O resultado é uma imagem que,
              de fato, fala aos olhos de quem vê.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Gallery strip ── */}
      <div
        className="flex gap-3 md:gap-5 px-4 md:px-12 overflow-x-auto scrollbar-hide pb-2"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.07 }}
            style={{ scrollSnapAlign: "start", flexShrink: 0 }}
            className={`relative ${mobileW[photo.size]} ${desktopW[photo.size]}`}
          >
            <TiltCard onClick={() => setSelected(photo)}>
              <div className={`relative overflow-hidden group ${sizeClass[photo.size]}`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              </div>
            </TiltCard>
          </motion.div>
        ))}
        <div className="w-4 md:w-8 flex-shrink-0" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 mt-5 md:mt-10 flex items-center justify-between">
        <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40">
          Deslize para explorar →
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40 hover:text-primary transition-colors"
        >
          ↑ Topo
        </button>
      </div>

      {/* ── Booking CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[1400px] mx-auto px-4 md:px-12 mt-8 md:mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <p className="font-serif italic text-foreground/50 max-w-xl mb-2"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>
            "Mais do que produzir imagens bonitas: revelar o sagrado do real e a verdade sensível de cada pessoa."
          </p>
          <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-primary">Hoana Bonito</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/sessao")}
          className="self-start md:self-end flex items-center gap-3 bg-primary text-background px-7 py-4 font-sans text-[10px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors group whitespace-nowrap"
        >
          Agendar Sessão
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-[96vw] max-h-[96vh] p-0 bg-background/95 backdrop-blur-xl border border-border/20 flex items-center justify-center">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-3 right-3 z-10 w-10 h-10 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={14} />
          </button>
          <AnimatePresence>
            {selected && (
              <motion.img
                key={selected.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                src={selected.src}
                alt={selected.alt}
                className="max-w-full max-h-[88vh] object-contain"
              />
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}
