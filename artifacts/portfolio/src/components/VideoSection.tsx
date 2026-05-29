import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    id: "5GWP-GcDzBs",
    title: "Con-Fiar",
    artist: "Ana Leana",
    role: "Concepção · Roteiro · Direção · Edição",
  },
  {
    id: "uSwd2NAgF-E",
    title: "Con-Fiar (Dir. Cut)",
    artist: "Ana Leana",
    role: "Concepção · Direção",
  },
  {
    id: "uSwd2NAgF-E",
    title: "Vestida de Estrelas",
    artist: "Ana Leana",
    role: "Concepção · Direção",
  },
];

const services = [
  { num: "01", title: "Videoclipes", desc: "Concepção e direção. Transformar música em conceito visual — som que se torna imagem." },
  { num: "02", title: "Capas de Álbum", desc: "Concepção e criação de identidade visual para artistas. A música tem rosto." },
  { num: "03", title: "Espetáculos", desc: "Registros conceituais de espetáculos. Capturo a atmosfera viva do palco com olhar autoral." },
  { num: "04", title: "Fotografias Musicais", desc: "Crio visualidades a partir da escuta — traduzindo atmosferas sonoras em imagem fotográfica." },
];

export function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setPlaying(false);
    setCurrent(index);
  };

  const prev = () => goTo((current - 1 + videos.length) % videos.length);
  const next = () => goTo((current + 1) % videos.length);

  const v = videos[current];

  return (
    <section id="film" ref={ref} className="relative w-full bg-background overflow-hidden border-t border-primary/20 light-gradient-bg">

      {/* ── Editorial split banner ── */}
      <div className="flex flex-col md:flex-row min-h-[420px] md:min-h-[560px]">

        {/* Left — text panel */}
        <div className="flex flex-col justify-between px-6 md:px-12 py-10 md:py-16 md:w-[40%] flex-shrink-0 border-b md:border-b-0 md:border-r border-border/20">
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

          {/* Video info + navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 md:mt-0"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="mb-5"
              >
                <p className="font-serif text-foreground mb-0.5" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>
                  {v.title}
                </p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">{v.artist}</p>
                <p className="font-sans text-[9px] uppercase tracking-wider text-primary/50">{v.role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-4">
              <button onClick={prev} className="w-8 h-8 border border-border/30 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                <ChevronLeft size={14} />
              </button>
              <div className="flex gap-2">
                {videos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`transition-all duration-300 ${i === current ? "w-6 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-border/40 hover:bg-primary/40"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-8 h-8 border border-border/30 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right — video player */}
        <div className="relative flex-1 min-h-[300px] md:min-h-0 overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            {!playing ? (
              <motion.div
                key={`thumb-${current}`}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setPlaying(true)}
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg"
                  >
                    <svg className="w-6 h-6 text-background ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`player-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Service list ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-4">
              O que faço
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-sans font-light text-muted-foreground leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}>
              Traduções visuais para sons, corpos e atmosferas. Escuto o que existe
              antes da imagem e transformo em conceito, direção e obra completa.
            </motion.p>
          </div>
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-4">
              Disponível para
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-sans font-light text-muted-foreground leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}>
              Projetos culturais, artistas independentes, bandas, gravadoras e espetáculos no Brasil e no exterior.
            </motion.p>
          </div>
        </div>

        <div className="border-t border-border/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-b sm:border-b-0 sm:border-r border-border/20 last:border-r-0 py-8 px-6 group glass-card-sm"
            >
              <p className="font-sans text-[10px] text-primary/60 tracking-widest mb-3">{s.num}</p>
              <p className="font-serif text-foreground mb-3 group-hover:text-primary transition-colors"
                style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)" }}>{s.title}</p>
              <p className="font-sans text-[11px] text-muted-foreground/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40 hover:text-primary transition-colors">
            ↑ Topo
          </button>
        </div>
      </div>
    </section>
  );
}
