import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FitText } from "./FitText";

const stats = [
  { number: "12", label: "Anos de\nexperiência" },
  { number: "340+", label: "Ensaios\nrealizados" },
  { number: "18", label: "Exposições" },
  { number: "3", label: "Continentes" },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="about" ref={ref} className="relative w-full overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-20 md:py-48 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0 items-center">

        <motion.div style={{ y: imgY }} className="relative w-full max-w-[380px] md:max-w-[520px] mx-auto lg:mx-0">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <img
              src="/images/portrait.png"
              alt="Ana Luz Ferreira"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -bottom-4 -right-1 md:-bottom-6 md:-right-8 bg-card border border-border/30 p-4 backdrop-blur-sm"
          >
            <p className="font-serif text-2xl md:text-3xl text-foreground">2012</p>
            <p className="font-sans text-[9px] uppercase tracking-widest text-muted-foreground mt-1">Início da carreira</p>
          </motion.div>
        </motion.div>

        <div className="lg:pl-20 xl:pl-28 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-5"
          >
            Sobre a artista
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-serif text-foreground leading-[1.08]" style={{ fontSize: "clamp(1.65rem, 5.5vw, 3.2rem)" }}>
                Encontrando a beleza no silêncio entre as histórias.
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 text-muted-foreground font-sans font-light leading-relaxed mb-10 md:mb-14"
            style={{ fontSize: "clamp(0.875rem, 2.8vw, 1rem)" }}
          >
            <p>
              Sou Ana Luz Ferreira, fotógrafa brasileira radicada em São Paulo.
              Minha jornada começou não como busca pela imagem perfeita, mas como
              tentativa de registrar o que não pode ser dito com palavras.
            </p>
            <p>
              Com foco em retratos cinematográficos e documentação visual, meu
              trabalho explora as sombras tanto quanto a luz — o verdadeiro
              personagem muitas vezes reside no que decidimos deixar no escuro.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border/30 pt-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
              >
                <p className="font-serif text-foreground mb-1" style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)" }}>
                  {s.number}
                </p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground leading-snug whitespace-pre-line">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
