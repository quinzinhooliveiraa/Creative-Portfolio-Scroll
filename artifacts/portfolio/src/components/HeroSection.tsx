import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParticlesBackground } from "./ParticlesBackground";
import { FitText } from "./FitText";
import { CameraOrbit } from "./CameraOrbit";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const [maxSize, setMaxSize] = useState(175);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        setMaxSize(118);
      } else {
        const heightCap = Math.floor((window.innerHeight - 180) / 2);
        setMaxSize(Math.min(175, Math.max(80, heightCap)));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section ref={ref} id="hero" className="relative w-full h-[100dvh] overflow-hidden">
      <motion.div style={{ scale: imgScale, opacity: imgOpacity }} className="absolute inset-0 z-0">
        <img
          src="/images/portfolio-3.png"
          alt="Hero"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/85" />
      </motion.div>

      <ParticlesBackground />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 z-10 flex flex-col md:flex-row"
      >
        <div className="flex-1 flex flex-col justify-end pt-[10vh] pb-[8vh] min-w-0 order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="px-3 md:px-10 font-sans text-[9px] uppercase tracking-[0.35em] text-primary mb-3 md:mb-5"
          >
            Artista Visual · Fotógrafa · Diretora de Vídeo
          </motion.p>

          <div className="px-1 md:px-2">
            {["HOANA", "BONITO"].map((word, i) => (
              <div key={word} style={{ overflow: "hidden", lineHeight: 0.88 }}>
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  <FitText
                    as="h1"
                    maxSize={maxSize}
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
            className="px-3 md:px-10 font-sans text-[9px] uppercase tracking-[0.28em] text-muted-foreground mt-3 md:mt-5"
          >
            Imagens para ver além dos olhos
          </motion.p>
        </div>

        <div className="
          h-[44dvh] flex-shrink-0 flex items-center justify-center order-1
          md:order-2 md:h-auto md:w-[42%] md:flex md:items-center md:justify-center md:pb-8
        ">
          <CameraOrbit scrollYProgress={scrollYProgress} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-8 md:h-12 bg-foreground/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary"
            animate={{ height: ["0%", "100%"], top: ["0%", "100%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="font-sans text-[8px] uppercase tracking-[0.35em] text-muted-foreground">Role</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 right-8 md:right-12 z-20 font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground hidden md:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Retrato · Vídeo · Arte Conceitual
      </motion.div>
    </section>
  );
}
