import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Videoclipes",
    desc: "Concepção e direção: transformar som em imagem e traduzir atmosferas musicais em visualidades únicas.",
  },
  {
    num: "02",
    title: "Capas de Álbum",
    desc: "Concepção e criação de identidade visual para artistas. A música tem rosto.",
  },
  {
    num: "03",
    title: "Espetáculos",
    desc: "Registros conceituais de espetáculos. Fotografias musicais que capturam a atmosfera viva do palco.",
  },
  {
    num: "04",
    title: "Direção Visual",
    desc: "Criar visualidades a partir da escuta. Crio do zero, vídeo ou imagem que conta toda uma narrativa.",
  },
];

const videos = [
  {
    id: "5GWP-GcDzBs",
    label: "Concepção, Roteiro, Direção e Edição",
    title: "Con-Fiar · Ana Leana",
  },
  {
    id: "uSwd2NAgF-E",
    label: "Concepção e Direção",
    title: "Con-Fiar · Ana Leana",
  },
  {
    id: "uSwd2NAgF-E",
    label: "Concepção e Direção",
    title: "Vestida de Estrelas · Ana Leana",
  },
];

export function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  function go(dir: number) {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + videos.length) % videos.length);
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section id="film" ref={ref} className="relative w-full bg-background overflow-hidden border-t border-primary/20 light-gradient-bg">

      {/* ── Editorial split banner ── */}
      <div className="flex flex-col md:flex-row min-h-[420px] md:min-h-[520px]">

        {/* Left — text panel */}
        <div className="flex flex-col justify-between px-6 md:px-12 py-10 md:py-16 md:w-[42%] flex-shrink-0 border-b md:border-b-0 md:border-r border-border/20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[9px] uppercase tracking-[0.4em] text-primary mb-8 md:mb-12"
            >
              Olho que Escuta · Perspectiva 03
            </motion.p>
            <div className="overflow-hidden pb-2 mb-4">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2
                  className="font-serif font-normal text-foreground tracking-tight leading-none"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
                >
                  Som em<br />Imagem
                </h2>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="font-serif italic text-foreground/40 max-w-xs"
              style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}
            >
              "Transformar música em conceito visual"
            </motion.p>
          </div>

          {/* Counter + arrows */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 md:mt-0 flex items-center gap-4"
          >
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 border border-border/40 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="font-sans text-[11px] tabular-nums text-muted-foreground/60 tracking-widest">
              {String(current + 1).padStart(2, "0")} / {String(videos.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 border border-border/40 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Right — video carousel */}
        <div className="relative flex-1 min-h-[260px] md:min-h-0 overflow-hidden bg-black">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 flex flex-col"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videos[current].id}`}
                title={videos[current].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </AnimatePresence>

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-10">
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-primary/80 mb-0.5">
              {videos[current].label}
            </p>
            <p className="font-serif italic text-white/70 text-sm">
              {videos[current].title}
            </p>
          </div>
        </div>
      </div>

      {/* ── Service list ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-4"
            >
              O que faço
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans font-light text-muted-foreground leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}
            >
              Traduzo atmosferas musicais, sons, corpos e atmosferas em imagem.
              Crio visualidades a partir da escuta, do zero, com você, até a obra completa.
            </motion.p>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-4"
            >
              Disponível para
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans font-light text-muted-foreground leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}
            >
              Projetos culturais, artistas independentes, bandas, gravadoras e espetáculos no Brasil e no exterior.
            </motion.p>
          </div>
        </div>

        <div className="border-t border-border/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-b sm:border-b-0 sm:border-r border-border/20 last:border-r-0 py-8 px-6 group glass-card-sm"
            >
              <p className="font-sans text-[10px] text-primary/60 tracking-widest mb-3">{s.num}</p>
              <p className="font-serif text-foreground mb-3 group-hover:text-primary transition-colors"
                style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)" }}>
                {s.title}
              </p>
              <p className="font-sans text-[11px] text-muted-foreground/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pb-8 flex justify-end">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40 hover:text-primary transition-colors"
        >
          ↑ Topo
        </button>
      </div>
    </section>
  );
}
