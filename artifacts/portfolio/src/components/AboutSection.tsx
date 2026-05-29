import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimationControls, useMotionValue } from "framer-motion";
import { CyclingTags } from "./CyclingTags";

const cartografia = [
  "Fotógrafa",
  "Artista Visual",
  "Diretora de Vídeo",
  "Jornalista",
  "Trombonista",
  "Técnica de Som",
  "Nômade",
  "Modelo Vivo",
  "Internacionalista",
  "Pesquisadora",
];

const especialidades = [
  { label: "Famílias", desc: "Ensaios lifestyle ritualísticos" },
  { label: "Mulheres", desc: "Retratos autorais e empoderamento" },
  { label: "Casamentos", desc: "Momentos únicos e conexões reais" },
  { label: "Newborn", desc: "Primeiros dias com naturalidade" },
];

const temas = ["Retratos autorais", "Acessibilidade em arte", "Vídeo & imagem do zero"];

const formacao = [
  { label: "Artes Visuais", sub: "UnB, Universidade de Brasília" },
  { label: "Intercâmbio em Fotografia", sub: "Université Lumière Lyon 2, França" },
  { label: "Mestre em Práticas Artísticas Multimídia", sub: "Universidade de Évora, Portugal" },
  { label: "Cultura e Criação", sub: "Especialização, SENAC" },
];

/* duplicamos 4× para garantir loop suave em qualquer tela */
const formacaoLoop = [...formacao, ...formacao, ...formacao, ...formacao];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const controls = useAnimationControls();
  const x = useMotionValue(0);
  const [dragging, setDragging] = useState(false);

  const ITEM_WIDTH = 320 + 96; // minWidth + px-12*2
  const HALF = formacaoLoop.length / 2 * ITEM_WIDTH;

  useEffect(() => {
    if (dragging) return;
    const current = x.get();
    const remaining = Math.abs(current + HALF) / HALF;
    const dur = 40 * (remaining > 0 ? remaining : 1);
    controls.start({
      x: [current, current - HALF],
      transition: { duration: dur, ease: "linear", repeat: Infinity, repeatType: "loop" },
    });
  }, [dragging]);

  const handleDragEnd = () => {
    setDragging(false);
  };

  return (
    <section id="about" ref={ref} className="relative w-full overflow-hidden bg-card">

      {/* ── Two-column bio block ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-16 md:pt-28 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0 items-start">

        {/* Left — photo + especialidades */}
        <motion.div style={{ y: imgY }} className="relative w-full max-w-[380px] md:max-w-[480px] mx-auto lg:mx-0 flex flex-col gap-6">
          <div className="relative">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <img
                src="/hoana-fotografa.jpg"
                alt="Hoana Bonito"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-4 -right-1 md:-bottom-6 md:-right-8 bg-background border border-border/30 p-4 section-dark"
            >
              <p className="font-serif text-xl text-foreground">20+</p>
              <p className="font-sans text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">Anos criando imagens</p>
            </motion.div>
          </div>

          {/* Especialidades abaixo da foto */}
          <div className="pt-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-4"
            >
              Cartografia do olhar fotográfico
            </motion.p>
            <div className="grid grid-cols-2 gap-2">
              {especialidades.map((e, i) => (
                <motion.div
                  key={e.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border border-primary/20 p-4 hover:border-primary/60 transition-colors"
                >
                  <p className="font-serif text-foreground mb-1" style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)" }}>
                    {e.label}
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground/50">
                    {e.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — bio + cartografia */}
        <div className="lg:pl-20 xl:pl-28 flex flex-col gap-14">

          {/* Bio */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-5"
            >
              Oi! Sou a Hoana
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-muted-foreground font-sans font-light leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}
            >
              <p>
                Fotógrafa, artista visual e realizadora audiovisual, com mais de 20 anos
                de experiência na criação de imagens. Mestre em Práticas Artísticas
                Multimídia pela Universidade de Évora (Portugal) e pós-graduada em
                Artes Visuais: Cultura e Criação pelo SENAC.
              </p>
              <p>
                Formada em Artes Visuais pela Universidade de Brasília, com intercâmbio
                em fotografia na Université Lumière Lyon 2 (França), o local onde o
                cinema nasceu. Desenvolve ensaios fotográficos lifestyle ritualísticos
                que revelam, com naturalidade e tempo, o modo de viver de cada retratado.
              </p>
              <p>
                Artista visual atuante na cena da arte contemporânea com instalações,
                pintura e performances. Além das artes visuais, faço retratos autorais
                (onde você é o co-diretor), direção de vídeos e palestras sobre
                maneiras de ver e acessibilidade em arte.
              </p>
              <p>
                Meus registros contam histórias autênticas e emocionantes, revelando
                conexões humanas e momentos únicos. São várias frentes, todas orbitando
                um tema: as mais diversas maneiras de ver o mundo.
              </p>
            </motion.div>
          </div>

          {/* Fala com a Hoana */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="border-t border-border/20 pt-6 flex flex-col gap-3"
          >
            <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-muted-foreground/50">
              {temas.join(" · ")}
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="font-serif italic text-foreground/70 hover:text-primary transition-colors group"
              style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
            >
              Quer um trabalho ultra-personalizado?{" "}
              <span className="not-italic font-sans text-[9px] uppercase tracking-[0.3em] text-primary group-hover:underline">
                Fala com a Hoana →
              </span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* ── Formação — full-width marquee band ── */}
      <div className="w-full border-t border-b border-border/20 bg-background/30 overflow-hidden relative section-dark">
        {/* label */}
        <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center px-5 md:px-8 bg-card border-r border-border/20">
          <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-primary whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            Formação
          </span>
        </div>

        {/* fade right edge */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-card to-transparent" />

        {/* scrolling + draggable track */}
        <motion.div
          ref={trackRef}
          className="flex whitespace-nowrap pl-20 cursor-grab active:cursor-grabbing select-none"
          style={{ x }}
          animate={controls}
          drag="x"
          dragConstraints={{ left: -HALF * 2, right: 0 }}
          dragElastic={0.08}
          onDragStart={() => { setDragging(true); controls.stop(); }}
          onDragEnd={handleDragEnd}
        >
          {formacaoLoop.map((f, i) => (
            <div
              key={i}
              className="inline-flex flex-col justify-center flex-shrink-0 px-12 py-7 border-r border-border/15"
              style={{ minWidth: "320px" }}
            >
              <p className="font-serif text-foreground/90 mb-1"
                style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
                {f.label}
              </p>
              <p className="font-sans text-[10px] text-muted-foreground/50 leading-snug">{f.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
