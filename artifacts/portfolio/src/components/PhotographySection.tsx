import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const photos = [
  { id: 1, src: "/images/portfolio-1.png", alt: "Retrato Autoral", category: "Retrato" as const, size: "tall" as const },
  { id: 2, src: "/images/portfolio-2.png", alt: "Família", category: "Família" as const, size: "wide" as const },
  { id: 3, src: "/images/portfolio-3.png", alt: "Mulher", category: "Mulher" as const, size: "tall" as const },
  { id: 4, src: "/images/portfolio-4.png", alt: "Casamento", category: "Casamento" as const, size: "square" as const },
  { id: 5, src: "/images/portfolio-5.png", alt: "Newborn", category: "Newborn" as const, size: "tall" as const },
  { id: 6, src: "/images/portfolio-6.png", alt: "Lifestyle", category: "Lifestyle" as const, size: "wide" as const },
];

const sizeClass = { tall: "aspect-[3/4]", wide: "aspect-[4/3]", square: "aspect-square" };
const mobileW = { tall: "w-[68vw]", wide: "w-[82vw]", square: "w-[68vw]" };
const desktopW = { tall: "md:w-[28vw]", wide: "md:w-[46vw]", square: "md:w-[32vw]" };

const categories = [
  { label: "Famílias", desc: "Histórias que atravessam gerações" },
  { label: "Mulheres", desc: "Poder, delicadeza e verdade" },
  { label: "Casamentos", desc: "O amor que merece ser visto" },
  { label: "Newborn", desc: "Os primeiros olhares do mundo" },
];

export function PhotographySection() {
  const [selected, setSelected] = useState<(typeof photos)[0] | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="portfolio" className="relative w-full bg-background overflow-hidden py-14 md:py-24">

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
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-foreground leading-none"
              style={{ fontSize: "clamp(2.8rem, 10vw, 5.5rem)" }}
            >
              Rito de Retrato
            </motion.h2>
          </div>
        </motion.div>

        {/* Description + highlights + categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans font-light text-muted-foreground leading-relaxed mb-8"
              style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}>
              Visto pelos meus olhos treinados, você deixa de ser apenas um "meio"
              (um objeto para a câmera) e passa a ser um "fim em si mesmo" — uma
              expressão única da vida. Afinal, tratarei da sua imagem com o mesmo
              requinte e cuidado que a natureza dedica a cada folha ou flor que nasce.
            </p>
            <p className="font-serif italic text-foreground/60 mb-8" style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)" }}>
              O resultado: se sentir (verdadeiramente) visto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-5">
              Cartografia do retrato
            </p>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="border border-border/20 p-4 hover:border-primary/40 hover:bg-card/50 transition-all group"
                >
                  <p className="font-serif text-foreground group-hover:text-primary transition-colors mb-1"
                    style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)" }}>
                    {cat.label}
                  </p>
                  <p className="font-sans text-[10px] text-muted-foreground/50 leading-snug">{cat.desc}</p>
                </motion.div>
              ))}
            </div>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-4">
                  <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-primary mb-1">{photo.category}</span>
                  <span className="font-serif text-base text-white">{photo.alt}</span>
                </div>
              </div>
            </TiltCard>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">0{i + 1}</span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">{photo.category}</span>
            </div>
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
