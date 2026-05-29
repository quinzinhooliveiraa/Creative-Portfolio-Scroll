import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "./TiltCard";

const talks = [
  {
    num: "A",
    title: "Poéticas do Invisível",
    event: "Pedagogia das Artes Visuais",
    type: "Curso",
    desc: "Método desenvolvido em cinco anos: ensino de fotografia e artes visuais a pessoas que não enxergam.",
  },
  {
    num: "B",
    title: "Imagens para Tocar",
    event: "Artes Sensoriais · Acessibilidade",
    type: "Oficina",
    desc: "Imagens táteis e tradução sensorial. A fotografia como experiência de todos os sentidos. Perfurações inspiradas no braille transformam o visível em tátil.",
  },
  {
    num: "C",
    title: "Fotografar o Invisível",
    event: "Experiência Sensorial · Audiodescrição",
    type: "Oficina",
    desc: "Fotografia sem o uso da visão. Em duplas, um participante é vendado e guiado pelo outro via audiodescrição para fotografar.",
  },
  {
    num: "D",
    title: "O Invisível do Cotidiano: A Atenção como Arte",
    event: "Mediação Cultural · Poética",
    type: "Palestra-oficina",
    desc: "Desacelerar o olhar e refletir sobre como a atenção ao cotidiano pode transformar a forma como nos relacionamos com a imagem, o tempo e a própria vida.",
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

const photos = [
  { id: 1, src: "/fala-1.jpg", size: "tall" as const },
  { id: 2, src: "/fala-2.jpg", size: "wide" as const },
  { id: 3, src: "/fala-3.jpg", size: "wide" as const },
  { id: 4, src: "/fala-4.jpg", size: "tall" as const },
  { id: 5, src: "/fala-5.jpg", size: "tall" as const },
  { id: 6, src: "/fala-6.jpg", size: "tall" as const },
  { id: 7, src: "/fala-7.jpg", size: "wide" as const },
  { id: 8, src: "/fala-8.jpg", size: "tall" as const },
  { id: 9, src: "/fala-9.jpg", size: "tall" as const },
  { id: 10, src: "/fala-10.jpg", size: "tall" as const },
];

const sizeClass = { tall: "aspect-[3/4]", wide: "aspect-[4/3]" };
const mobileW = { tall: "w-[58vw]", wide: "w-[76vw]" };
const desktopW = { tall: "md:w-[22vw]", wide: "md:w-[36vw]" };

export function TalksSection() {
  return (
    <section id="talks" className="relative w-full bg-card py-20 md:py-32 border-t border-primary/20 light-gradient-bg">
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
            <div className="overflow-hidden pb-2">
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
              A imagem que vai além dos olhos, para todos os corpos e sentidos.
            </p>
          </motion.div>
        </div>

        {/* Theme tags — infinite marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mb-14 md:mb-20 overflow-hidden"
        >
          <div className="tags-marquee flex gap-2 w-max">
            {[...themes, ...themes].map((t, i) => (
              <span
                key={i}
                className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 border border-border/20 px-3 py-1.5 glass-card-sm whitespace-nowrap flex-shrink-0"
              >
                {t.label}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* ── Photo gallery strip ── */}
      <div
        className="flex gap-3 md:gap-5 px-4 md:px-12 overflow-x-auto scrollbar-hide pb-2 mb-16 md:mb-24"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.06 }}
            style={{ scrollSnapAlign: "start", flexShrink: 0 }}
            className={`relative ${mobileW[photo.size]} ${desktopW[photo.size]}`}
          >
            <TiltCard>
              <div className={`relative overflow-hidden group ${sizeClass[photo.size]}`}>
                <img
                  src={photo.src}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </TiltCard>
          </motion.div>
        ))}
        <div className="w-4 md:w-8 flex-shrink-0" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40 mb-10 md:mb-14">
          Deslize para explorar →
        </p>

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
