import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ExternalLink, ChevronDown, ArrowLeft, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

const PAYMENT_URL = "https://link-de-pagamento.com";

const includes = [
  "Sessão fotográfica de 2h",
  "30 fotografias editadas",
  "Galeria online privada",
  "Entrega em 15 dias úteis",
  "Uso pessoal e profissional",
  "Conversa prévia para alinhar a intenção",
];

const steps = [
  { num: "01", title: "Conversa", desc: "Você me conta quem é, o que sente, o que quer guardar. Eu escuto de verdade e planejamos juntos." },
  { num: "02", title: "Sessão", desc: "No dia combinado, você é co-diretor(a) da sua história. Sem poses forçadas. Só verdade e presença." },
  { num: "03", title: "Seleção", desc: "Você recebe uma galeria privada e escolhe suas favoritas. Cada foto é tratada com o mesmo cuidado da natureza." },
  { num: "04", title: "Entrega", desc: "Suas imagens chegam em alta resolução, prontas para impressão e uso digital. Para sempre." },
];

const faqs = [
  { q: "Onde acontecem as sessões?", a: "Em locações externas (parques, ruas, espaços abertos) ou em estúdio parceiro. Definimos juntos o que faz mais sentido para a sua história." },
  { q: "E se eu for tímido(a) em frente à câmera?", a: "A maioria das pessoas é! Por isso a conversa prévia existe para criar confiança antes de qualquer foto ser tirada. Você vai se surpreender." },
  { q: "Posso levar família, filhos, pets?", a: "Sim! As sessões de família, casamento e newborn têm a mesma abordagem. Me conta quem faz parte da sua história." },
  { q: "Como funciona o pagamento?", a: "O pagamento é feito antecipadamente pelo link de pagamento, confirmando assim a sua data na agenda." },
  { q: "Em quanto tempo recebo as fotos?", a: "Entre 10 e 15 dias úteis após a sessão. Você recebe uma galeria online privada para selecionar e baixar." },
  { q: "Posso remarcar a sessão?", a: "Sim, com até 48h de antecedência. Entendemos que imprevistos acontecem e a gente se ajusta juntos." },
];

export default function Sessao() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="grain-overlay" />

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-background/90 backdrop-blur-md border-b border-border/20 section-dark">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-4">

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Voltar ao site</span>
            <span className="sm:hidden">Voltar</span>
          </button>

          <button
            onClick={() => navigate("/")}
            className="font-serif text-base tracking-[0.15em] text-foreground uppercase hover:text-primary transition-colors"
          >
            Hoana Bonito
          </button>

          <motion.a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            className="hidden sm:flex items-center gap-2 bg-primary text-background px-5 py-2.5 font-sans text-[9px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors group"
          >
            Garantir sessão
            <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </div>
      </header>

      <main className="flex-1 pt-16">

        {/* ── Hero ── */}
        <div className="relative w-full overflow-hidden section-dark">
          <div className="absolute inset-0 z-0">
            <img
              src="/hoana-fotografa.jpg"
              alt=""
              className="w-full h-full object-cover object-top opacity-[0.12] -translate-y-[8%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-16 md:pb-24">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-sans text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-primary mb-5 truncate"
            >
              Rito do Retrato · Sessão Fotográfica
            </motion.p>
            <div className="overflow-hidden mb-6 max-w-4xl">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-foreground leading-none"
                style={{ fontSize: "clamp(2.2rem, 8vw, 6.5rem)" }}
              >
                Você merece<br />se sentir visto.
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-sans font-light text-muted-foreground leading-relaxed max-w-md"
              style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}
            >
              Tratarei da sua imagem com o mesmo requinte e cuidado que a natureza dedica a cada folha ou flor que nasce.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 bg-primary text-background px-7 py-4 font-sans text-[10px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors group"
              >
                Garantir minha sessão
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <button
                onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center gap-3 border border-border/30 text-foreground px-7 py-4 font-sans text-[10px] uppercase tracking-[0.25em] hover:border-primary hover:text-primary transition-colors"
              >
                Como funciona
              </button>
            </motion.div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-border/15" />

        {/* ── Como funciona ── */}
        <div id="como-funciona" className="light-gradient-bg">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-10"
          >
            Como funciona
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border/20">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-b sm:border-b-0 sm:border-r border-border/20 last:border-r-0 py-8 px-6 glass-card-sm"
              >
                <p className="font-sans text-[10px] text-primary/50 tracking-widest mb-3">{step.num}</p>
                <p className="font-serif text-foreground mb-3" style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)" }}>
                  {step.title}
                </p>
                <p className="font-sans text-[11px] text-muted-foreground/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        </div>{/* end como funciona wrapper */}

        {/* ── Purchase card ── */}
        <div className="bg-card border-t border-border/15 section-dark">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-10"
            >
              A Sessão
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="border border-primary/20"
            >
              <div className="h-[2px] w-full bg-gradient-to-r from-primary/80 via-primary to-primary/30" />

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left */}
                <div className="p-5 md:p-14 border-b lg:border-b-0 lg:border-r border-border/15 flex flex-col justify-between gap-8 md:gap-10">
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary/60 mb-6">Sessão única</p>
                    <h2
                      className="font-serif text-foreground mb-5 leading-tight"
                      style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
                    >
                      Rito do Retrato
                    </h2>
                    <p className="font-sans text-[13px] text-muted-foreground/70 leading-relaxed">
                      Um encontro fotográfico pensado para revelar quem você é, não quem você acha que deveria parecer.
                      Cada sessão é única, conduzida com presença e cuidado, como um rito de passagem registrado em luz.
                    </p>
                  </div>

                  <div>
                    <div className="border-t border-border/15 pt-6 mb-8">
                      <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-muted-foreground/40 mb-2">Investimento</p>
                      <p className="font-serif text-foreground/90" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
                        Sob consulta
                      </p>
                    </div>

                    <motion.a
                      href={PAYMENT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.97 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center justify-between w-full bg-primary text-background px-7 py-5 font-sans text-[10px] uppercase tracking-[0.3em] group transition-colors hover:bg-primary/90"
                    >
                      Garantir minha sessão
                      <ExternalLink size={13} className="group-hover:scale-110 transition-transform" />
                    </motion.a>
                    <p className="font-sans text-[10px] text-muted-foreground/35 mt-3">
                      Pagamento antecipado · confirma a data na agenda
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="p-5 md:p-14 flex flex-col gap-8 md:gap-10">
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-primary/60 mb-6">O que inclui</p>
                    <ul className="space-y-4">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check size={11} className="mt-[3px] flex-shrink-0 text-primary" />
                          <span className="font-sans text-[12px] text-muted-foreground/80 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-border/15 p-6">
                    <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-primary/60 mb-3">Dúvidas?</p>
                    <p className="font-sans text-[12px] text-muted-foreground/60 leading-relaxed mb-4">
                      Fala diretamente comigo antes de confirmar. Cada sessão começa por uma conversa honesta.
                    </p>
                    <button
                      onClick={() => navigate("/")}
                      className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      Ir para o contato
                      <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-10"
          >
            Perguntas frequentes
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-x-24">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border-b border-border/15"
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
        </div>

      </main>

      <Footer />
    </div>
  );
}
