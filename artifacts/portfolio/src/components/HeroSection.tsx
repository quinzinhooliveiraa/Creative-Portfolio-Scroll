import { motion } from "framer-motion";
import { ParticlesBackground } from "./ParticlesBackground";
import { useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center flex flex-col items-center justify-center px-4"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter text-foreground mb-4 uppercase"
        >
          Ana Luz
          <br />
          Ferreira
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-lg md:text-xl text-primary font-sans uppercase tracking-[0.2em]"
        >
          Luz que conta histórias
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-muted-foreground uppercase text-xs tracking-widest font-sans"
      >
        <div className="w-[1px] h-12 bg-primary/30 mx-auto mb-4 overflow-hidden relative">
          <motion.div 
            className="w-full h-full bg-primary absolute top-0 left-0"
            animate={{ top: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
        Scroll
      </motion.div>
    </section>
  );
}
