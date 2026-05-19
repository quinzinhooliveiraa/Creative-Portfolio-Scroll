import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

export function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-card z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/portfolio-2.png')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-primary uppercase tracking-widest text-xs font-sans mb-4">Filme</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-foreground">Direção de Fotografia</h3>
        </motion.div>

        <motion.div 
          style={{ scale, opacity }}
          className="relative aspect-video w-full rounded-sm overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
          
          <img 
            src="/images/portfolio-5.png" 
            alt="Video Reel Cover" 
            className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-80"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-primary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background group-hover:scale-110 transition-all duration-500 ease-out">
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </div>
            <span className="mt-6 uppercase tracking-[0.3em] text-xs font-sans text-white/70">Assistir Reel 2024</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
