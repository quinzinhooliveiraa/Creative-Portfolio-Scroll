import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const talks = [
  {
    num: "01",
    title: "A Magia da Luz Natural",
    event: "TEDx São Paulo",
    location: "São Paulo — SP",
    year: "2024",
    type: "Palestra",
  },
  {
    num: "02",
    title: "Fotografia como Narrativa",
    event: "Festival de Artes Visuais",
    location: "Rio de Janeiro — RJ",
    year: "2023",
    type: "Workshop",
  },
  {
    num: "03",
    title: "O Olhar Feminino na Fotografia Documental",
    event: "Museu de Arte Moderna",
    location: "São Paulo — SP",
    year: "2023",
    type: "Palestra",
  },
  {
    num: "04",
    title: "Luz e Sombra no Retrato Contemporâneo",
    event: "Bienal de Fotografia",
    location: "Curitiba — PR",
    year: "2022",
    type: "Mesa Redonda",
  },
];

export function TalksSection() {
  return (
    <section id="talks" className="relative w-full bg-background py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-28">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-4"
            >
              Palestras & Workshops
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-serif text-foreground leading-none"
              >
                Compartilhando<br />o Olhar
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground font-sans text-sm max-w-xs leading-relaxed"
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
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border-b border-border/30 grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4rem_1fr_8rem_8rem_2rem] items-center gap-4 md:gap-8 py-6 md:py-8 cursor-pointer hover:bg-card/40 transition-colors px-2 -mx-2"
            >
              <span className="font-sans text-[11px] text-muted-foreground/40 tracking-widest">{talk.num}</span>

              <div>
                <p className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                  {talk.title}
                </p>
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">{talk.event}</p>
              </div>

              <p className="hidden md:block font-sans text-[11px] uppercase tracking-widest text-muted-foreground/60">
                {talk.location}
              </p>

              <p className="hidden md:block font-sans text-[11px] uppercase tracking-widest text-muted-foreground/60">
                {talk.type}
              </p>

              <div className="flex justify-end">
                <motion.div
                  className="w-7 h-7 border border-border/30 flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <ArrowUpRight size={12} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
