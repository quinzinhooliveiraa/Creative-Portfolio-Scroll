import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const talks = [
  {
    num: "01",
    title: "Fotografia para Pessoas Cegas",
    event: "Acessibilidade em Artes Visuais",
    type: "Oficina",
    year: "2024",
    desc: "Imagens táteis e tradução sensorial — a fotografia como experiência de todos os sentidos.",
  },
  {
    num: "02",
    title: "Maneiras de Ver o Mundo",
    event: "Arte Educação · Mediação Cultural",
    type: "Palestra",
    year: "2023",
    desc: "Como expandir o olhar poeticamente rumo às belezas cotidianas.",
  },
  {
    num: "03",
    title: "Audiodescrição como Prática Artística",
    event: "Pedagogia das Artes Visuais",
    type: "Workshop",
    year: "2023",
    desc: "Mediação e tradução do visível em experiência acessível a todos.",
  },
  {
    num: "04",
    title: "Percepção e Presença na Imagem",
    event: "Arte Contemporânea · Mediação",
    type: "Mesa Redonda",
    year: "2022",
    desc: "O reparar o que se percebe como fundamento de uma prática artística.",
  },
];

const themes = [
  { label: "oficinas" },
  { label: "palestras" },
  { label: "arte educação" },
  { label: "fotografia para pessoas cegas" },
  { label: "acessibilidade em artes visuais" },
  { label: "audiodescrição" },
  { label: "mediação" },
  { label: "imagens táteis" },
  { label: "tradução sensorial" },
  { label: "pedagogia" },
];

export function TalksSection() {
  return (
    <section id="talks" className="relative w-full bg-background py-20 md:py-40">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-3"
            >
              Olho que Fala · Perspectiva 02
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-foreground leading-none"
                style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)" }}
              >
                A Imagem<br />Além da Visão
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
              Palestras, acessibilidade visual e oficinas sobre modos de ver.
              A imagem que vai além dos olhos — para todos os corpos e sentidos.
            </p>
          </motion.div>
        </div>

        {/* Theme tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-14 md:mb-20"
        >
          {themes.map((t, i) => (
            <motion.span
              key={t.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 border border-border/20 px-3 py-1.5"
            >
              {t.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Talk list */}
        <div className="border-t border-border/30">
          {talks.map((talk, i) => (
            <motion.div
              key={talk.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border-b border-border/30 py-6 md:py-8 hover:bg-card/40 transition-colors px-2 -mx-2"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 md:gap-8 flex-1 min-w-0">
                  <span className="font-sans text-[10px] text-muted-foreground/40 tracking-widest pt-1 flex-shrink-0 hidden sm:block">
                    {talk.num}
                  </span>
                  <div className="min-w-0">
                    <p
                      className="font-serif text-foreground group-hover:text-primary transition-colors duration-300 leading-tight mb-1.5"
                      style={{ fontSize: "clamp(1rem, 3.5vw, 1.5rem)" }}
                    >
                      {talk.title}
                    </p>
                    <p className="font-sans text-[11px] text-muted-foreground/60 leading-relaxed mb-2 max-w-lg">
                      {talk.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground/70">{talk.event}</span>
                      <span className="font-sans text-[10px] text-muted-foreground/30 hidden sm:inline">·</span>
                      <span className="font-sans text-[10px] uppercase tracking-wider text-primary/60">{talk.type}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0 mt-1">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground/50 hidden sm:block">{talk.year}</span>
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
