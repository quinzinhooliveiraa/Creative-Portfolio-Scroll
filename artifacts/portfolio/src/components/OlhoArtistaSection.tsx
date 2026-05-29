import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const practices = [
  { num: "01", label: "Arte Conceitual", sub: "Galerias de arte contemporânea" },
  { num: "02", label: "Peças para Aquisição", sub: "Obras disponíveis para colecionar" },
  { num: "03", label: "Performances", sub: "Arte relacional e ato de presença" },
  { num: "04", label: "Instalações", sub: "Espaços que transformam o olhar" },
];

const gallery = [
  { src: "/images/arte/performance-principal.jpg", caption: "Performance #nemqueiroz" },
  { src: "/images/arte/nao-basta.jpg", caption: "Não Basta Não Ser Cego Para Ver · instalação" },
  { src: "/images/arte/liberdade-dentro.jpg", caption: "Liberdade é Dentro · série fotográfica" },
  { src: "/images/arte/olho-escuro.jpg", caption: "Instalação de luz e projeção" },
  { src: "/images/arte/sombras.jpg", caption: "Corpo e luz · arte relacional" },
  { src: "/images/arte/performance-pintura.jpg", caption: "Performance com pintura ao vivo" },
  { src: "/images/arte/visao-musical.jpg", caption: "Visão Musical · colagem conceitual" },
  { src: "/images/arte/quadro-cavalete.jpg", caption: "Como Nutrir Olhos Famintos · pintura" },
  { src: "/images/arte/olho-simbolo.jpg", caption: "Olho Artista · escultura instalativa" },
  { src: "/images/arte/tocando.jpg", caption: "Ocupação Marim Bondo · performance coletiva" },
  { src: "/images/arte/universidade.jpg", caption: "Universidade de Évora · residência artística" },
  { src: "/images/arte/quadro-detalhe.jpg", caption: "Detalhe · Como Nutrir Olhos Famintos" },
];

export function OlhoArtistaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="arte" ref={ref} className="relative w-full bg-card overflow-hidden border-t border-primary/20">

      {/* ── Hero split ── */}
      <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[620px]">

        {/* Left — text */}
        <div className="flex flex-col justify-between px-6 md:px-12 py-10 md:py-16 md:w-[45%] flex-shrink-0 border-b md:border-b-0 md:border-r border-border/20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[9px] uppercase tracking-[0.4em] text-primary mb-8 md:mb-12"
            >
              Olho Artista · Perspectiva 04
            </motion.p>
            <div className="overflow-hidden pb-2 mb-6">
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
                  O Mundo<br />da Arte<br />é Aqui
                </h2>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="font-sans font-light text-muted-foreground leading-relaxed max-w-sm"
              style={{ fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}
            >
              Minha meta é revelar o sagrado do real e a potência de cada ser. Meu processo
              utiliza Arte Relacional, Identidade e Memória para transformar o ato de ver
              em um rito de presença e reconhecimento.
            </motion.p>
          </div>

          {/* Practice tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 md:mt-0 grid grid-cols-2 gap-3"
          >
            {practices.map((p) => (
              <div key={p.num} className="border border-border/20 px-3 py-2.5 group hover:border-primary/40 transition-colors">
                <p className="font-sans text-[8px] uppercase tracking-widest text-primary/50 mb-0.5">{p.num}</p>
                <p className="font-serif text-foreground/90 group-hover:text-primary transition-colors"
                  style={{ fontSize: "clamp(0.75rem, 1.8vw, 0.9rem)" }}>{p.label}</p>
                <p className="font-sans text-[9px] text-muted-foreground/50 leading-snug mt-0.5">{p.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — hero image */}
        <div className="relative flex-1 min-h-[320px] md:min-h-0 overflow-hidden">
          <motion.img
            src="/images/arte/performance-principal.jpg"
            alt="Performance Hoana Bonito"
            style={{ y: heroY }}
            className="absolute inset-0 w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* ── Manifesto ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-14 md:py-20 border-b border-border/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-light text-muted-foreground leading-relaxed"
            style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}
          >
            Minha investigação é feita para facilitar o encontro das pessoas com sua própria
            luz através de um tripé de retratos autorais, obras de arte e educação sensível.
            O resultado: vibrar cada vez mais diante de coisas mais sutis e tornar a beleza
            da verdade acessível a todos os olhos, inclusive àqueles que não enxergam.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="border-l-2 border-primary/30 pl-6"
          >
            <p className="font-serif italic text-foreground/70 leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.25rem)" }}>
              "O mundo da arte não é em outro lugar. É onde você o faz.
              E você faz isso vendo, prestando atenção: aí está a obra.
              É sobre o seu olho artista!"
            </p>
          </motion.blockquote>
        </div>
      </div>

      {/* ── Gallery grid ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-10 md:py-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-[9px] uppercase tracking-[0.35em] text-primary mb-8"
        >
          Obras & Registros
        </motion.p>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="break-inside-avoid mb-3 md:mb-4 group cursor-pointer overflow-hidden"
              onClick={() => setLightbox(img.src)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-3">
                  <p className="font-sans text-[9px] uppercase tracking-wider text-white/0 group-hover:text-white/80 transition-all translate-y-2 group-hover:translate-y-0 duration-300 leading-snug">
                    {img.caption}
                  </p>
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

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={16} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
