import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

export function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const clipProgress = useTransform(scrollYProgress, [0.1, 0.45], [100, 0]);
  const clipPath = useTransform(clipProgress, (v) => `inset(${v}% 0 0 0)`);

  return (
    <section id="film" ref={ref} className="relative w-full bg-card overflow-hidden">
      <motion.div
        style={{ clipPath }}
        className="relative w-full aspect-[16/9] md:aspect-[2.4/1] overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.img
          src="/images/portfolio-5.png"
          alt="Reel"
          style={{ y: imgY }}
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <motion.div
            className="relative flex items-center justify-center mb-10"
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute w-28 h-28 rounded-full border border-primary/30"
              animate={{ scale: hovered ? 1.5 : 1, opacity: hovered ? 0 : 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/60 flex items-center justify-center backdrop-blur-sm">
              <Play className="w-7 h-7 text-primary ml-1" fill="currentColor" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/50 mb-5"
          >
            Filme
          </motion.p>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white text-center"
            >
              Direção de Fotografia
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans text-[11px] uppercase tracking-[0.3em] text-white/40 mt-6"
          >
            Reel 2024 — Assistir
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
