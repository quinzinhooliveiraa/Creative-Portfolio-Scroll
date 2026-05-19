import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="relative w-full min-h-screen py-32 px-6 md:px-12 flex items-center bg-card z-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        <motion.div 
          style={{ y: imgY }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto md:mr-auto overflow-hidden rounded-sm"
        >
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
          <img 
            src="/images/portrait.png" 
            alt="Ana Luz Ferreira" 
            className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
          />
        </motion.div>

        <motion.div style={{ y: textY }} className="flex flex-col justify-center">
          <h2 className="text-primary uppercase tracking-widest text-xs font-sans mb-8">Sobre a artista</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-8">
            Encontrando a beleza no silêncio entre as histórias.
          </h3>
          <div className="space-y-6 text-muted-foreground font-sans font-light text-base md:text-lg leading-relaxed">
            <p>
              Sou Ana Luz Ferreira, uma fotógrafa brasileira radicada em São Paulo. 
              Minha jornada com a fotografia começou não como uma busca pela imagem perfeita, 
              mas como uma tentativa de registrar o que não pode ser dito com palavras.
            </p>
            <p>
              Com foco em retratos cinematográficos, editoriais imersivos e documentação visual, 
              meu trabalho explora as sombras tanto quanto a luz. Acredito que o verdadeiro 
              personagem de uma fotografia muitas vezes reside no que decidimos deixar no escuro.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
