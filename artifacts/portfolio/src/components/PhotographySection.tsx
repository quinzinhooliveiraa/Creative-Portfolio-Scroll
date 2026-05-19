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

const sizeClass = { tall: "aspect-[3/4]", wide: "aspect-[4/3]", square: "aspect-square" };
const mobileW = { tall: "w-[68vw]", wide: "w-[82vw]", square: "w-[68vw]" };
const desktopW = { tall: "md:w-[28vw]", wide: "md:w-[46vw]", square: "md:w-[32vw]" };

export function PhotographySection() {
  const [selected, setSelected] = useState<(typeof photos)[0] | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="portfolio" className="relative w-full bg-background overflow-hidden py-20 md:py-48">
      <div ref={headerRef} className="max-w-[1400px] mx-auto px-4 md:px-12 mb-10 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <motion.div style={{ y: headerY }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-3"
          >
            Portfólio
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-foreground leading-none"
              style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)" }}
            >
              Obras<br />Selecionadas
            </motion.h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground font-sans max-w-xs leading-relaxed hidden md:block"
          style={{ fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}
        >
          Uma seleção de trabalhos que representam a essência da minha visão artística.
        </motion.p>
      </div>

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
            className={`relative ${mobileW[photo.size as keyof typeof mobileW]} ${desktopW[photo.size as keyof typeof desktopW]}`}
          >
            <TiltCard onClick={() => setSelected(photo)}>
              <div className={`relative overflow-hidden group ${sizeClass[photo.size as keyof typeof sizeClass]}`}>
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

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 mt-5 md:mt-10">
        <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40">
          Deslize para explorar →
        </p>
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
