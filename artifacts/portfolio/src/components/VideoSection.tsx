import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, X } from "lucide-react";

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
  {
    num: "01",
    title: "Videoclipes",
    desc: "Concepção e direção. Transformar música em conceito visual — som que se torna imagem.",
  },
  {
    num: "02",
    title: "Capas de Álbum",
    desc: "Concepção e criação de identidade visual para artistas. A música tem rosto.",
  },
  {
    num: "03",
    title: "Espetáculos",
    desc: "Registros conceituais de espetáculos. Capturo a atmosfera viva do palco com olhar autoral.",
  },
  {
    num: "04",
    title: "Fotografias Musicais",
    desc: "Crio visualidades a partir da escuta — traduzindo atmosferas sonoras em imagem fotográfica.",
  },
];

export function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const clipProgress = useTransform(scrollYProgress, [0, 0.18], [100, 0]);
  const clipPath = useTransform(clipProgress, (v) => `inset(0 ${v}% 0 0)`);

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

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground/40 mt-10 md:mt-0"
          >
            Role para ver os clipes ↓
          </motion.p>
        </div>

        {/* Right — image with left-to-right reveal */}
        <motion.div
          style={{ clipPath }}
          className="relative flex-1 min-h-[260px] md:min-h-0 overflow-hidden"
        >
          <motion.img
            src="/images/portfolio-5.png"
            alt="Olho que Escuta"
            style={{ y: imgY }}
            className="absolute inset-0 w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </div>

      {/* ── Video strip ── */}
      <div
        className="flex gap-4 md:gap-6 px-4 md:px-12 py-10 md:py-14 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {videos.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{ scrollSnapAlign: "start", flexShrink: 0 }}
            className="w-[80vw] md:w-[400px] lg:w-[440px] cursor-pointer group"
            onClick={() => setActiveVideo(v.id)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden mb-4">
              <img
                src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                alt={v.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 text-background ml-0.5" fill="currentColor" />
                </motion.div>
              </div>
            </div>
            {/* Info */}
            <p className="font-serif text-foreground group-hover:text-primary transition-colors mb-1"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>
              {v.title}
            </p>
            <p className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">{v.artist}</p>
            <p className="font-sans text-[9px] uppercase tracking-wider text-primary/50">{v.role}</p>
          </motion.div>
        ))}
        <div className="w-4 flex-shrink-0" />
      </div>

      {/* ── Service list ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pb-16 md:pb-24">
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
              Traduções visuais para sons, corpos e atmosferas. Escuto o que existe
              antes da imagem e transformo em conceito, direção e obra completa.
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

        <div className="mt-10 flex justify-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40 hover:text-primary transition-colors"
          >
            ↑ Topo
          </button>
        </div>
      </div>

      {/* ── Video Modal ── */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            onClick={() => setActiveVideo(null)}
          >
            <X size={16} />
          </button>
          <div
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Videoclipe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
