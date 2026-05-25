import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ChevronDown, ExternalLink } from "lucide-react";

const PAYMENT_URL = "https://link-de-pagamento.com"; // ← substitua pelo link real

const includes = [
  "Sessão fotográfica de 2h",
  "30 fotografias editadas",
  "Galeria online privada",
  "Entrega em 15 dias úteis",
  "Uso pessoal e profissional",
  "Conversa prévia para alinhar a intenção",
];

const steps = [
  { num: "01", title: "Conversa", desc: "Você me conta quem é, o que sente, o que quer guardar. Eu escuto de verdade — e planejamos juntos." },
  { num: "02", title: "Sessão", desc: "No dia combinado, você é co-diretor(a) da sua história. Sem poses forçadas. Só verdade e presença." },
  { num: "03", title: "Seleção", desc: "Você recebe uma galeria privada e escolhe suas favoritas. Cada foto é tratada com o mesmo cuidado da natureza." },
  { num: "04", title: "Entrega", desc: "Suas imagens chegam em alta resolução, prontas para impressão e uso digital. Para sempre." },
];

const faqs = [
  { q: "Onde acontecem as sessões?", a: "Em locações externas (parques, ruas, espaços abertos) ou em estúdio parceiro. Definimos juntos o que faz mais sentido para a sua história." },
  { q: "E se eu for tímido(a) em frente à câmera?", a: "A maioria das pessoas é! Por isso a conversa prévia existe — para criar confiança antes de qualquer foto ser tirada. Você vai se surpreender." },
  { q: "Posso levar família, filhos, pets?", a: "Sim! As sessões de família, casamento e newborn têm a mesma abordagem. Me conta quem faz parte da sua história." },
  { q: "Como funciona o pagamento?", a: "O pagamento é feito antecipadamente pelo link de pagamento, confirmando assim a sua data na agenda." },
  { q: "Em quanto tempo recebo as fotos?", a: "Entre 10 e 15 dias úteis após a sessão. Você recebe uma galeria online privada para selecionar e baixar." },
];

export function BookingSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="booking" className="relative w-full bg-card overflow-hidden">

      {/* ── Header ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-20 md:pt-40 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-4">
              Agendar Sessão
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-foreground leading-none"
                style={{ fontSize: "clamp(2.8rem, 10vw, 5.5rem)" }}>
                Você merece<br />se sentir visto.
              </motion.h2>
            </div>
          </div>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-light text-muted-foreground leading-relaxed md:max-w-xs"
            style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}>
            Tratarei da sua imagem com o mesmo requinte e cuidado que a natureza dedica a cada folha ou flor que nasce.
          </motion.p>
        </div>

        {/* ── Process steps ── */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-8">
          Como funciona
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border/20 mb-20 md:mb-32">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-b sm:border-b-0 sm:border-r border-border/20 last:border-r-0 py-8 px-0 sm:px-6 first:pl-0 last:pr-0">
              <p className="font-sans text-[10px] text-primary/50 tracking-widest mb-3">{step.num}</p>
              <p className="font-serif text-foreground mb-3" style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)" }}>{step.title}</p>
              <p className="font-sans text-[11px] text-muted-foreground/60 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Rito do Retrato ── */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-8">
          A sessão
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border border-primary/25 bg-primary/4 mb-20 md:mb-32"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/60" style={{ position: "relative" }} />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — info */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-border/20">
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-4">Sessão única</p>
              <h3 className="font-serif text-foreground mb-4 leading-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                Rito do Retrato
              </h3>
              <p className="font-sans text-[13px] text-muted-foreground/70 leading-relaxed max-w-md">
                Um encontro fotográfico pensado para revelar quem você é — não quem você acha que deveria parecer.
                Cada sessão é única, conduzida com presença e cuidado, como um rito de passagem registrado em luz.
              </p>
            </div>

            {/* Right — includes + CTA */}
            <div className="p-8 md:p-12 flex flex-col justify-between gap-10">
              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={11} className="mt-[3px] flex-shrink-0 text-primary" />
                    <span className="font-sans text-[12px] text-muted-foreground/80 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <motion.a
                  href={PAYMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ x: 4 }}
                  data-cursor="hover"
                  className="flex items-center justify-between w-full bg-primary text-background px-7 py-5 font-sans text-[10px] uppercase tracking-[0.3em] group transition-colors hover:bg-primary/90"
                >
                  Garantir minha sessão
                  <ExternalLink size={13} className="group-hover:scale-110 transition-transform" />
                </motion.a>
                <p className="font-sans text-[10px] text-muted-foreground/35 text-center">
                  Pagamento antecipado · confirma a data na agenda
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Contact CTA ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="border border-border/20 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-20 md:mb-32">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-3">Projeto personalizado</p>
            <p className="font-serif text-foreground mb-2" style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.8rem)" }}>
              Quer criar algo do zero?
            </p>
            <p className="font-sans text-[11px] text-muted-foreground/60 leading-relaxed max-w-md">
              Direção de vídeo, editorial, registro de espetáculos, arte conceitual — fala com a Hoana e a gente pensa junto.
            </p>
          </div>
          <motion.button whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 flex items-center gap-3 border border-border/30 px-7 py-4 font-sans text-[10px] uppercase tracking-[0.25em] text-foreground hover:border-primary hover:text-primary transition-colors group whitespace-nowrap">
            Fala com a Hoana
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* ── FAQ ── */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-8">
          Perguntas frequentes
        </motion.p>
        <div className="border-t border-border/20 max-w-3xl pb-16 md:pb-24">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06 }} className="border-b border-border/20">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group">
                <span className="font-serif text-foreground group-hover:text-primary transition-colors"
                  style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)" }}>
                  {faq.q}
                </span>
                <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
                  <ChevronDown size={14} className="text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden">
                    <p className="font-sans text-[13px] text-muted-foreground/70 leading-relaxed pb-5 max-w-xl">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
