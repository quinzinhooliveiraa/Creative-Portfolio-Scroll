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
          alt="Reel"
          style={{ y: imgY }}
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 md:gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/50 order-2 md:order-1"
          >
            Filme — Direção de Fotografia
          </motion.p>

          <motion.div
            className="relative flex items-center justify-center order-1 md:order-2"
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute w-24 h-24 md:w-28 md:h-28 rounded-full border border-primary/25"
              animate={{ scale: hovered ? 1.5 : 1, opacity: hovered ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center backdrop-blur-sm active:scale-95 transition-transform">
              <Play className="w-5 h-5 md:w-7 md:h-7 text-primary ml-1" fill="currentColor" />
            </div>
          </motion.div>

          <div className="overflow-hidden order-3">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[9vw] sm:text-4xl md:text-6xl lg:text-7xl font-serif text-white text-center"
            >
              Reel 2024
            </motion.h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
