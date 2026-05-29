import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ExternalLink, ChevronDown } from "lucide-react";

const PAYMENT_URL = "https://link-de-pagamento.com";

const includes = [
  "Sessão fotográfica de 2h",
  "30 fotografias editadas",
  "Galeria online privada",
  "Entrega em 15 dias úteis",
  "Uso pessoal e profissional",
  "Conversa prévia para alinhar a intenção",
];

const faqs = [
  { q: "Onde acontecem as sessões?", a: "Em locações externas (parques, ruas, espaços abertos) ou em estúdio parceiro. Definimos juntos o que faz mais sentido para a sua história." },
  { q: "E se eu for tímido(a) em frente à câmera?", a: "A maioria das pessoas é! Por isso a conversa prévia existe, para criar confiança antes de qualquer foto ser tirada. Você vai se surpreender." },
  { q: "Posso levar família, filhos, pets?", a: "Sim! As sessões de família, casamento e newborn têm a mesma abordagem. Me conta quem faz parte da sua história." },
  { q: "Como funciona o pagamento?", a: "O pagamento é feito antecipadamente pelo link de pagamento, confirmando assim a sua data na agenda." },
  { q: "Em quanto tempo recebo as fotos?", a: "Entre 10 e 15 dias úteis após a sessão. Você recebe uma galeria online privada para selecionar e baixar." },
];

export function PurchaseSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="purchase" className="relative w-full bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-20 md:pt-36 pb-20 md:pb-36">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-8"
        >
          A Sessão
        </motion.p>

        {/* Purchase card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="border border-primary/25 bg-card mb-0 glass-card"
        >
          {/* gold top line */}
          <div className="h-[2px] w-full bg-primary/60" />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — identity */}
            <div className="p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-border/20 flex flex-col justify-between gap-8">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-5">Sessão única</p>
                <h3
                  className="font-serif text-foreground mb-5 leading-tight"
                  style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
                >
                  Rito do Retrato
                </h3>
                <p className="font-sans text-[13px] text-muted-foreground/70 leading-relaxed max-w-md">
                  Um encontro fotográfico pensado para revelar quem você é, não quem você acha que deveria parecer.
                  Cada sessão é única, conduzida com presença e cuidado, como um rito de passagem registrado em luz.
                </p>
              </div>

              <div className="border-t border-border/15 pt-6">
                <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-muted-foreground/40 mb-1">investimento</p>
                <p className="font-serif text-foreground/90" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
                  Sob consulta
                </p>
              </div>
            </div>

            {/* Right — includes + CTA */}
            <div className="p-8 md:p-14 flex flex-col justify-between gap-10">
              <div>
                <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-primary/60 mb-5">O que inclui</p>
                <ul className="space-y-4">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={11} className="mt-[3px] flex-shrink-0 text-primary" />
                      <span className="font-sans text-[12px] text-muted-foreground/80 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

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

        {/* FAQ — right below the purchase card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="border border-border/15 border-t-0"
        >
          <div className="px-8 md:px-14 pt-8 pb-2">
            <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-primary/60">
              Perguntas frequentes
            </p>
          </div>

          <div className="px-8 md:px-14 pb-10">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border-b border-border/15 last:border-b-0"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span
                    className="font-serif text-foreground group-hover:text-primary transition-colors"
                    style={{ fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)" }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={13} className="text-muted-foreground" />
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
                      <p className="font-sans text-[12px] text-muted-foreground/65 leading-relaxed pb-5 max-w-xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
