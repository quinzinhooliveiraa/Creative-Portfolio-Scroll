import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParticlesBackground } from "./ParticlesBackground";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative w-full h-[100dvh] overflow-hidden">
      <motion.div
        style={{ scale: imgScale, opacity: imgOpacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/portfolio-3.png"
          alt="Hero"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background/80" />
      </motion.div>

      <ParticlesBackground />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-[15vh] md:justify-center md:pb-0 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.35em] md:tracking-[0.4em] text-primary mb-6 md:mb-10 px-4"
        >
          Fotógrafa — São Paulo, Brasil
        </motion.p>

        <div className="w-full overflow-hidden px-3">
          {["ANA", "LUZ", "FERREIRA"].map((word, i) => (
            <div key={word} className="overflow-hidden block w-full">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="text-[17vw] sm:text-[15vw] md:text-[13vw] leading-[0.87] font-serif tracking-[-0.01em] text-foreground uppercase block"
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
          className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.25em] md:tracking-[0.3em] text-muted-foreground mt-6 md:mt-10 px-4"
        >
          Luz que conta histórias
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 md:gap-3"
      >
        <div className="w-[1px] h-10 md:h-14 bg-foreground/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary"
            animate={{ height: ["0%", "100%"], top: ["0%", "100%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-[0.35em] text-muted-foreground">Scroll</span>
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
