import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const talks = [
  { num: "01", title: "A Magia da Luz Natural", event: "TEDx São Paulo", location: "São Paulo — SP", year: "2024", type: "Palestra" },
  { num: "02", title: "Fotografia como Narrativa", event: "Festival de Artes Visuais", location: "Rio de Janeiro — RJ", year: "2023", type: "Workshop" },
  { num: "03", title: "O Olhar Feminino na Fotografia Documental", event: "Museu de Arte Moderna", location: "São Paulo — SP", year: "2023", type: "Palestra" },
  { num: "04", title: "Luz e Sombra no Retrato Contemporâneo", event: "Bienal de Fotografia", location: "Curitiba — PR", year: "2022", type: "Mesa Redonda" },
];

export function TalksSection() {
  return (
    <section id="talks" className="relative w-full bg-background py-20 md:py-48">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-28">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-3"
            >
              Palestras & Workshops
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
                Compartilhando<br />o Olhar
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground font-sans max-w-xs leading-relaxed hidden md:block"
            style={{ fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}
          >
            Ensino, compartilho e inspiro a próxima geração de artistas visuais brasileiros.
          </motion.p>
        </div>

        <div className="border-t border-border/30">
          {talks.map((talk, i) => (
            <motion.div
              key={talk.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border-b border-border/30 py-5 md:py-8 cursor-pointer hover:bg-card/40 transition-colors px-2 -mx-2"
            >
              <div className="flex items-center justify-between gap-4">
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
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground/70">{talk.event}</span>
                      <span className="font-sans text-[10px] text-muted-foreground/30 hidden sm:inline">·</span>
                      <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground/50 hidden sm:inline">{talk.location}</span>
                      <span className="font-sans text-[10px] text-muted-foreground/30 hidden md:inline">·</span>
                      <span className="font-sans text-[10px] uppercase tracking-wider text-primary/60 hidden md:inline">{talk.type}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground/50 hidden sm:block">{talk.year}</span>
                  <div className="w-8 h-8 border border-border/30 flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors flex-shrink-0">
                    <ArrowUpRight size={11} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
