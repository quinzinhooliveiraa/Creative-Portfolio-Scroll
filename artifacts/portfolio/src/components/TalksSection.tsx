import { motion } from "framer-motion";

const talks = [
  {
    title: "A Magia da Luz Natural",
    location: "TEDx São Paulo",
    year: "2024",
  },
  {
    title: "Fotografia como Narrativa",
    location: "Festival de Artes Visuais, Rio",
    year: "2023",
  },
  {
    title: "O Olhar Feminino na Fotografia Documental",
    location: "Museu de Arte Moderna",
    year: "2023",
  },
];

export function TalksSection() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-background z-10 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-primary uppercase tracking-widest text-xs font-sans mb-4">Palestras & Workshops</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground">Compartilhando o Olhar</h3>
        </motion.div>

        <div className="flex flex-col">
          {talks.map((talk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group border-b border-border/50 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-card/30 transition-colors px-4 -mx-4"
            >
              <div className="flex-1">
                <h4 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">{talk.title}</h4>
                <p className="text-muted-foreground font-sans mt-2">{talk.location}</p>
              </div>
              <div className="text-sm font-sans tracking-widest text-primary/70">
                {talk.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
