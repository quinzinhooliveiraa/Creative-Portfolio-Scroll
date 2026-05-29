import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

const paragrafos = [
  "Diferente da fotografia tradicional, fundamenta-se na não-diretividade e na coautoria, onde o tempo desacelerado e a escuta corporal em um espaço de acolhimento permitem que a autenticidade floresça sem a rigidez de poses.",
  "O método Retrato Presença inicia-se em um encontro-presença dedicado à escuta e ao reconhecimento, onde uma entrevista profunda estabelece as bases da coautoria do retratado. Nessa etapa serão escolhidas palavras, gestos, ações cheias de significado e até mesmo as músicas para se ouvir no momento ritualístico dos retratos.",
  "O processo acolhe o desconforto de ser fotografado e o transforma em um autoconceito sólido e elegante, um encontro entre técnica, estética sofisticada, memória e autenticidade. Retratos que não falam sobre pose, mas sobre presença.",
];

export function BookingSection() {
  const [, navigate] = useLocation();

  return (
    <section id="booking" className="relative w-full bg-background overflow-hidden section-dark">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-20 md:pt-40 pb-16 md:pb-24">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-4"
          >
            Rito do Retrato · 01
          </motion.p>
          <div className="overflow-hidden pb-2">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-foreground leading-none"
              style={{ fontSize: "clamp(2.8rem, 10vw, 5.5rem)" }}
            >
              O Olho que Vê.
            </motion.h2>
          </div>
        </div>

        {/* Two-column body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16 md:mb-20">

          {/* Left — lead */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="font-serif text-foreground/80 leading-relaxed mb-8"
              style={{ fontSize: "clamp(1.05rem, 2.8vw, 1.35rem)" }}
            >
              Criado pela artista Hoana Bonito, o Rito do Retrato utiliza um olho artista lapidado por 20 anos de experiência para revelar o sagrado do real, transformando o ato de se ver retratado em um dispositivo de autoconhecimento.
            </p>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/sessao")}
              className="flex items-center gap-3 bg-primary text-background px-7 py-4 font-sans text-[10px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors group"
            >
              Agendar Sessão
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right — paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-5 text-muted-foreground font-sans font-light leading-relaxed"
            style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}
          >
            {paragrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="border-t border-border/20 pt-10"
        >
          <p
            className="font-serif italic text-foreground/50 max-w-2xl"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
          >
            "Mais do que produzir imagens bonitas, o processo busca revelar o sagrado do real e a verdade sensível de cada pessoa, através de um olhar artístico desacelerado, gentil e profundamente atento."
          </p>
          <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-primary mt-4">
            Hoana Bonito
          </p>
        </motion.div>

      </div>
    </section>
  );
}
