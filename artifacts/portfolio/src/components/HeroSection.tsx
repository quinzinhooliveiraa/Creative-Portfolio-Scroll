import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParticlesBackground } from "./ParticlesBackground";
import { FitText } from "./FitText";
import { Camera3D } from "./Camera3D";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative w-full h-[100dvh] overflow-hidden">
      {/* Background photo */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/85" />
      </motion.div>

      <ParticlesBackground />

      {/* Camera — centered in upper 55% of hero */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-[13vh] md:pt-[16vh] pointer-events-none">
        <div className="pointer-events-auto">
          <Camera3D scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* Text — anchored bottom */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 z-10 flex flex-col justify-end pb-[10vh] md:pb-[8vh]"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="px-4 md:px-12 font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-4 md:mb-6"
        >
          Fotógrafa — São Paulo, Brasil
        </motion.p>

        <div className="px-1 md:px-3 flex flex-col">
          {["ANA", "LUZ", "FERREIRA"].map((word, i) => (
            <div key={word} style={{ overflow: "hidden", lineHeight: 0.88 }}>
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <FitText
                  as="h1"
                  className="font-serif font-normal tracking-[-0.02em] text-foreground uppercase"
                >
                  {word}
                </FitText>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.3 }}
          className="px-4 md:px-12 font-sans text-[10px] uppercase tracking-[0.28em] text-muted-foreground mt-4 md:mt-6"
        >
          Luz que conta histórias
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 md:h-14 bg-foreground/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary"
            animate={{ height: ["0%", "100%"], top: ["0%", "100%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="font-sans text-[8px] uppercase tracking-[0.35em] text-muted-foreground">Scroll</span>
      </motion.div>

      {/* Vertical label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 right-8 md:right-12 z-20 font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground hidden md:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Retrato · Editorial · Documental
      </motion.div>
    </section>
  );
}
