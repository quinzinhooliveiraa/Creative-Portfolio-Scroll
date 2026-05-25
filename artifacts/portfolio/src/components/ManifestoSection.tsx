import { motion } from "framer-motion";
import { CyclingTags } from "./CyclingTags";

const keywords = [
  "percepção",
  "presença",
  "tradução sensorial",
  "escuta",
  "maneiras de ver",
  "imagem para além da visão",
];

export function ManifestoSection() {
  return (
    <section id="manifesto" className="relative w-full bg-background overflow-hidden py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

          {/* Left — manifesto text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-8"
            >
              Manifesto
            </motion.p>

            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-foreground leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 6vw, 3.8rem)" }}
              >
                sensibilidade artística,<br />
                <em>potência visual.</em>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-muted-foreground font-sans font-light leading-relaxed mb-10"
              style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)" }}
            >
              <p>
                Esse espaço é para compartilhar minha visão de mundo.
                Tô aqui pra fazer da liberdade criativa o meu meio de vida.
              </p>
              <p>
                Sinto que o que o mundo mais precisa hoje é de uma pequena mudança
                de ponto de vista pela maior parte das pessoas. Por isso pesquiso
                as diversas maneiras de ver o mundo.
              </p>
              <p>
                Minha maior motivação é poder fazer pensar olhares e assim,
                expandi-los poeticamente rumo às belezas cotidianas.
              </p>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="border-l-2 border-primary/40 pl-6"
            >
              <p className="font-serif italic text-foreground/70" style={{ fontSize: "clamp(1rem, 3vw, 1.4rem)" }}>
                "Poetisa de uma ideia só com múltiplas habilidades:
                imagens para ver além dos olhos."
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary mt-3">
                Hoana Bonito
              </p>
            </motion.blockquote>
          </div>

          {/* Right — pesquisa keywords + perspectivas */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-8"
            >
              Pesquisa acadêmica & artística
            </motion.p>

            <div className="mb-14">
              <CyclingTags tags={keywords} interval={2600} />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-6"
            >
              4 Perspectivas
            </motion.p>

            <div className="space-y-0 border-t border-border/20">
              {[
                { label: "01 — Olho que Vê", sub: "Rito de Retrato · Retratos e presença", href: "#portfolio" },
                { label: "02 — Olho que Fala", sub: "Palestras · Acessibilidade · Arte Educação", href: "#talks" },
                { label: "03 — Olho que Escuta", sub: "Música · Videoclipes · Direção Visual", href: "#film" },
                { label: "04 — Olho Artista", sub: "Arte Contemporânea · Galerias · Performance", href: "#arte" },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.href.replace("#", ""));
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group flex flex-col border-b border-border/20 py-4 hover:bg-card/30 transition-colors cursor-pointer px-3 -mx-3"
                >
                  <span className="font-serif text-foreground group-hover:text-primary transition-colors" style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)" }}>
                    {item.label}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground/50 mt-1">
                    {item.sub}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
