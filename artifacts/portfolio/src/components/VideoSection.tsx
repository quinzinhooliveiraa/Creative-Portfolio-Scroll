import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

export function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const clipProgress = useTransform(scrollYProgress, [0.05, 0.4], [100, 0]);
  const clipPath = useTransform(clipProgress, (v) => `inset(${v}% 0 0 0)`);

  return (
    <section id="film" ref={ref} className="relative w-full bg-card overflow-hidden">
      <motion.div
        style={{ clipPath }}
        className="relative w-full aspect-[3/4] sm:aspect-[16/9] md:aspect-[2.4/1] overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.img
          src="/images/portfolio-5.png"
          alt="Olho que Escuta"
          style={{ y: imgY }}
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 md:gap-8 px-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/50"
          >
            Olho que Escuta · Artes Visuais
          </motion.p>

          <div className="overflow-hidden w-full px-4">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="font-serif font-normal text-white text-center tracking-tight leading-none"
                style={{ fontSize: "clamp(2.5rem, 10vw, 7rem)" }}
              >
                Som em Imagem
              </h2>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 text-center max-w-sm"
          >
            Videoclipes · Capas de Álbum · Registros Conceituais de Espetáculos
          </motion.p>

          <motion.div
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              className="absolute w-20 h-20 rounded-full border border-primary/25"
              animate={{ scale: hovered ? 1.5 : 1, opacity: hovered ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center backdrop-blur-sm active:scale-95 transition-transform">
              <Play className="w-5 h-5 text-primary ml-1" fill="currentColor" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-6 flex justify-end">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40 hover:text-primary transition-colors"
        >
          ↑ Topo
        </button>
      </div>
    </section>
  );
}
