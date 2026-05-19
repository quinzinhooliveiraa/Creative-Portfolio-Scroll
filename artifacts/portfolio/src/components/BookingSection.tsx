import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ChevronDown } from "lucide-react";

const packages = [
  {
    id: "essencial",
    name: "Sessão Essencial",
    duration: "1h30",
    photos: "20 fotos",
    price: "R$ 650",
    highlight: false,
    description: "Perfeito para quem quer se sentir visto pela primeira vez.",
    includes: [
      "1h30 de sessão fotográfica",
      "20 fotografias editadas",
      "1 look / ambiente",
      "Galeria online privada",
      "Entrega em 15 dias úteis",
      "Uso pessoal e profissional",
    ],
  },
  {
    id: "classica",
    name: "Sessão Clássica",
    duration: "2h30",
    photos: "40 fotos",
    price: "R$ 1.100",
    highlight: true,
    description: "A mais escolhida. Espaço para se encontrar de verdade.",
    includes: [
      "2h30 de sessão fotográfica",
      "40 fotografias editadas",
      "2 looks / ambientes",
      "Galeria online privada",
      "Entrega em 15 dias úteis",
      "Uso pessoal e profissional",
      "30min de conversa prévia",
    ],
  },
  {
    id: "premium",
    name: "Sessão Autoral",
    duration: "Dia inteiro",
    photos: "60+ fotos",
    price: "R$ 2.200",
    highlight: false,
    description: "Um ensaio completo — você co-dirige a sua história.",
    includes: [
      "Dia completo de sessão",
      "60+ fotografias editadas",
      "Múltiplos looks e locações",
      "Galeria online privada",
      "Entrega em 20 dias úteis",
      "Uso pessoal e profissional",
      "Conversa aprofundada prévia",
      "Acesso a locações exclusivas",
      "1 impressão fine art inclusa",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Conversa",
    desc: "Você me conta quem é, o que sente, o que quer guardar. Eu escuto de verdade — e planejamos juntos.",
  },
  {
    num: "02",
    title: "Sessão",
    desc: "No dia combinado, você é co-diretor(a) da sua história. Sem poses forçadas. Só verdade e presença.",
  },
  {
    num: "03",
    title: "Seleção",
    desc: "Você recebe uma galeria privada e escolhe suas favoritas. Cada foto é tratada com o mesmo cuidado da natureza.",
  },
  {
    num: "04",
    title: "Entrega",
    desc: "Suas imagens chegam em alta resolução, prontas para impressão e uso digital. Para sempre.",
  },
];

const faqs = [
  {
    q: "Onde acontecem as sessões?",
    a: "Em locações externas (parques, ruas, espaços abertos) ou em estúdio parceiro. Definimos juntos o que faz mais sentido para a sua história.",
  },
  {
    q: "E se eu for tímido(a) em frente à câmera?",
    a: "A maioria das pessoas é! Por isso a conversa prévia existe — para criar confiança antes de qualquer foto ser tirada. Você vai se surpreender.",
  },
  {
    q: "Posso levar família, filhos, pets?",
    a: "Sim! As sessões de família, casamento e newborn têm a mesma abordagem. Me conta quem faz parte da sua história.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "50% para confirmar a data e 50% no dia da sessão. Aceito PIX, cartão de crédito (até 3x sem juros) e transferência.",
  },
  {
    q: "Em quanto tempo recebo as fotos?",
    a: "Entre 10 e 20 dias úteis após a sessão, dependendo do pacote. Você recebe uma galeria online privada para selecionar e baixar.",
  },
];

export function BookingSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openWhatsApp = (pkg: string) => {
    const msg = encodeURIComponent(
      `Oi Hoana! Tenho interesse na ${pkg}. Podemos conversar?`
    );
    window.open(`https://wa.me/5500000000000?text=${msg}`, "_blank");
  };

  return (
    <section id="booking" className="relative w-full bg-card overflow-hidden">

      {/* ── Header ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-20 md:pt-40 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-4"
            >
              Agendar Sessão
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-foreground leading-none"
                style={{ fontSize: "clamp(2.8rem, 10vw, 5.5rem)" }}
              >
                Você merece<br />se sentir visto.
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-light text-muted-foreground leading-relaxed md:max-w-xs"
            style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}
          >
            Tratarei da sua imagem com o mesmo requinte e cuidado que a natureza dedica a cada folha ou flor que nasce.
          </motion.p>
        </div>

        {/* ── Process steps ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-8"
        >
          Como funciona
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border/20 mb-20 md:mb-32">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-b sm:border-b-0 sm:border-r border-border/20 last:border-r-0 py-8 px-0 sm:px-6 first:pl-0 last:pr-0"
            >
              <p className="font-sans text-[10px] text-primary/50 tracking-widest mb-3">{step.num}</p>
              <p className="font-serif text-foreground mb-3" style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)" }}>
                {step.title}
              </p>
              <p className="font-sans text-[11px] text-muted-foreground/60 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Packages ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-8"
        >
          Pacotes
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-20 md:mb-32">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative flex flex-col border p-8 ${
                pkg.highlight
                  ? "border-primary/50 bg-primary/5"
                  : "border-border/20 bg-background/40"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-8">
                  <span className="font-sans text-[9px] uppercase tracking-[0.3em] bg-primary text-background px-3 py-1">
                    Mais escolhida
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 mb-2">
                  {pkg.duration} · {pkg.photos}
                </p>
                <p className="font-serif text-foreground mb-2" style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>
                  {pkg.name}
                </p>
                <p className="font-sans text-[11px] text-muted-foreground/60 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8 flex-1">
                <ul className="space-y-2.5">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={11} className="text-primary mt-[3px] flex-shrink-0" />
                      <span className="font-sans text-[11px] text-muted-foreground/70 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border/20 pt-6">
                <p className="font-serif text-foreground mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>
                  {pkg.price}
                </p>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openWhatsApp(pkg.name)}
                  className={`w-full flex items-center justify-between px-5 py-3 font-sans text-[10px] uppercase tracking-[0.25em] transition-colors group ${
                    pkg.highlight
                      ? "bg-primary text-background hover:bg-primary/90"
                      : "border border-border/30 text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  Quero esta sessão
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Custom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border/20 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-20 md:mb-32"
        >
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-3">
              Projeto personalizado
            </p>
            <p className="font-serif text-foreground mb-2" style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.8rem)" }}>
              Quer criar algo do zero?
            </p>
            <p className="font-sans text-[11px] text-muted-foreground/60 leading-relaxed max-w-md">
              Direção de vídeo, editorial, registro de espetáculos, arte conceitual — fala com a Hoana e a gente pensa junto.
            </p>
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex-shrink-0 flex items-center gap-3 border border-border/30 px-7 py-4 font-sans text-[10px] uppercase tracking-[0.25em] text-foreground hover:border-primary hover:text-primary transition-colors group whitespace-nowrap"
          >
            Fala com a Hoana
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* ── FAQ ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-8"
        >
          Perguntas frequentes
        </motion.p>
        <div className="border-t border-border/20 max-w-3xl">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="border-b border-border/20"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span
                  className="font-serif text-foreground group-hover:text-primary transition-colors"
                  style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)" }}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openFaq === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={14} className="text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-[13px] text-muted-foreground/70 leading-relaxed pb-5 max-w-xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
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
