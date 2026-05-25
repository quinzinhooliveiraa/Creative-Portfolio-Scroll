import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const pieces = [
  {
    num: "01",
    title: "Instalação Luminosa",
    type: "Instalação",
    year: "2024",
    available: true,
    desc: "Luz como matéria. Instalação que questiona os limites entre o visto e o sentido.",
  },
  {
    num: "02",
    title: "O Corpo que Vê",
    type: "Performance",
    year: "2024",
    available: false,
    desc: "Performance sobre presença e percepção. O corpo como instrumento de ver.",
  },
  {
    num: "03",
    title: "Maneiras de Ver: Série Fotográfica",
    type: "Fotografia Conceitual",
    year: "2023",
    available: true,
    desc: "12 imagens que expandem o conceito de visão. Disponível para galerias.",
  },
  {
    num: "04",
    title: "Pintura sobre Percepção",
    type: "Pintura",
    year: "2023",
    available: true,
    desc: "Telas que traduzem o invisível. A experiência antes de se tornar imagem.",
  },
];

export function OlhoArtistaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="arte" ref={ref} className="relative w-full bg-card overflow-hidden py-20 md:py-32 border-t border-primary/20">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110 pointer-events-none">
        <img src="/images/portfolio-2.png" alt="" className="w-full h-full object-cover opacity-[0.04]" />
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-3"
            >
              Olho Artista · Perspectiva 04
            </motion.p>
            <div className="overflow-hidden pb-2">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-foreground leading-none"
                style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)" }}
              >
                O Mundo da<br />Arte é Aqui
              </motion.h2>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:max-w-xs"
          >
            <p className="font-sans font-light text-muted-foreground leading-relaxed"
              style={{ fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>
              Arte conceitual para galerias de arte contemporânea. Instalações, pinturas,
              fotografias conceituais e performances.
            </p>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="border-l-2 border-primary/30 pl-6 mb-16 md:mb-24 max-w-2xl"
        >
          <p className="font-serif italic text-foreground/60 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)" }}>
            "O mundo da arte não é em outro lugar. É onde você faz.
            E você faz isso vendo, prestando atenção: aí está a obra.
            É sobre o seu olho artista!"
          </p>
        </motion.blockquote>

        {/* Pieces list */}
        <div className="border-t border-border/30">
          {pieces.map((piece, i) => (
            <motion.div
              key={piece.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border-b border-border/30 py-6 md:py-8 hover:bg-card/40 transition-colors px-2 -mx-2"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 md:gap-8 flex-1 min-w-0">
                  <span className="font-sans text-[10px] text-muted-foreground/40 tracking-widest pt-1 flex-shrink-0 hidden sm:block">
                    {piece.num}
                  </span>
                  <div className="min-w-0">
                    <p
                      className="font-serif text-foreground group-hover:text-primary transition-colors duration-300 leading-tight mb-1.5"
                      style={{ fontSize: "clamp(1rem, 3.5vw, 1.5rem)" }}
                    >
                      {piece.title}
                    </p>
                    <p className="font-sans text-[11px] text-muted-foreground/60 leading-relaxed mb-2 max-w-lg">
                      {piece.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground/70">{piece.type}</span>
                      {piece.available && (
                        <>
                          <span className="font-sans text-[10px] text-muted-foreground/30">·</span>
                          <span className="font-sans text-[10px] uppercase tracking-wider text-primary/70">Disponível para aquisição</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0 mt-1">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground/50 hidden sm:block">{piece.year}</span>
                  <div className="w-8 h-8 border border-border/30 flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors flex-shrink-0">
                    <ArrowUpRight size={11} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40 hover:text-primary transition-colors"
          >
            ↑ Topo
          </button>
        </div>
      </div>
    </section>
  );
}
