import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const photos = [
  { id: 1, src: "/images/portfolio-1.png", alt: "Retrato Cinematográfico", category: "Retrato", size: "tall" },
  { id: 2, src: "/images/portfolio-2.png", alt: "Luz Natural", category: "Paisagem", size: "wide" },
  { id: 3, src: "/images/portfolio-3.png", alt: "Editorial", category: "Editorial", size: "tall" },
  { id: 4, src: "/images/portfolio-4.png", alt: "São Paulo", category: "Documental", size: "square" },
  { id: 5, src: "/images/portfolio-5.png", alt: "Silhueta", category: "Retrato", size: "tall" },
  { id: 6, src: "/images/portfolio-6.png", alt: "Arquitetura", category: "Editorial", size: "wide" },
];

const sizeClass = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/9]",
  square: "aspect-square",
};

export function PhotographySection() {
  const [selected, setSelected] = useState<(typeof photos)[0] | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: headerRef, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="portfolio" className="relative w-full bg-background overflow-hidden py-32 md:py-48">
      <div ref={headerRef} className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <motion.div style={{ y: headerY }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-4"
          >
            Portfólio
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-serif text-foreground leading-none"
            >
              Obras<br />Selecionadas
            </motion.h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-muted-foreground text-sm max-w-xs leading-relaxed"
        >
          Uma seleção de trabalhos que representam a essência da minha visão artística.
        </motion.p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 px-6 md:px-12 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
            style={{ scrollSnapAlign: "start", flexShrink: 0 }}
            className={`relative ${photo.size === "wide" ? "w-[70vw] md:w-[55vw]" : photo.size === "square" ? "w-[60vw] md:w-[38vw]" : "w-[55vw] md:w-[32vw]"}`}
          >
            <TiltCard onClick={() => setSelected(photo)}>
              <div className={`relative overflow-hidden group ${sizeClass[photo.size as keyof typeof sizeClass]}`}>
                <motion.img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-5">
                  <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-primary mb-1">{photo.category}</span>
                  <span className="font-serif text-lg text-white">{photo.alt}</span>
                </div>
              </div>
            </TiltCard>

            <div className="mt-4 flex items-center justify-between px-1">
              <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">
                0{i + 1}
              </span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">
                {photo.category}
              </span>
            </div>
          </motion.div>
        ))}

        <div className="w-6 md:w-12 flex-shrink-0" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-10 md:mt-12">
        <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground/50">
          Deslize para explorar
        </p>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-[96vw] max-h-[96vh] p-0 bg-background/95 backdrop-blur-xl border border-border/20 flex items-center justify-center">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 z-10 w-9 h-9 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
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
                className="max-w-full max-h-[90vh] object-contain"
              />
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}
