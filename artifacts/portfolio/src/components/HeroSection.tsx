import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParticlesBackground } from "./ParticlesBackground";

const TITLE_WORDS = ["ANA", "LUZ", "FERREIRA"];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative w-full h-[100dvh] overflow-hidden">
      <motion.div
        style={{ scale: imgScale, opacity: imgOpacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/portfolio-3.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background/80" />
      </motion.div>

      <ParticlesBackground />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-10"
        >
          Fotógrafa — São Paulo, Brasil
        </motion.p>

        <div className="overflow-hidden">
          {TITLE_WORDS.map((word, i) => (
            <div key={word} className="overflow-hidden block">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="text-[13vw] md:text-[11vw] leading-[0.88] font-serif tracking-tighter text-foreground uppercase block"
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="font-sans text-[11px] uppercase tracking-[0.3em] text-muted-foreground mt-10 italic"
        >
          Luz que conta histórias
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-14 bg-foreground/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary"
            animate={{ height: ["0%", "100%"], top: ["0%", "100%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-muted-foreground">Scroll</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-10 right-8 md:right-12 z-20 font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground hidden md:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Retrato · Editorial · Documental
      </motion.div>
    </section>
  );
}
