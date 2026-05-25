import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

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

export function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const clipProgress = useTransform(scrollYProgress, [0, 0.18], [100, 0]);
  const clipPath = useTransform(clipProgress, (v) => `inset(0 ${v}% 0 0)`);

  return (
    <section id="film" ref={ref} className="relative w-full bg-background overflow-hidden border-t border-primary/20">

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

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 md:mt-0"
          >
            <motion.div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              animate={{ scale: hovered ? 1.06 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative inline-flex items-center gap-4 cursor-pointer group"
            >
              <div className="relative flex-shrink-0">
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/30"
                  animate={{ scale: hovered ? 1.5 : 1, opacity: hovered ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center">
                  <Play className="w-4 h-4 text-primary ml-0.5" fill="currentColor" />
                </div>
              </div>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
                Ver trabalho
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right — image with left-to-right reveal */}
        <motion.div
          style={{ clipPath }}
          className="relative flex-1 min-h-[260px] md:min-h-0 overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
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
              className="border-b sm:border-b-0 sm:border-r border-border/20 last:border-r-0 py-8 px-0 sm:px-6 first:pl-0 last:pr-0 group"
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
