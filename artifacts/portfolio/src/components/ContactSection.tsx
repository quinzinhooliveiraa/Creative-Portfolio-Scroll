import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FitText } from "./FitText";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="contact" ref={ref} className="relative w-full bg-card overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img src="/images/portfolio-4.png" alt="" className="w-full h-full object-cover opacity-[0.04]" />
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-12 py-20 md:py-48">
        <div className="border-b border-border/20 pb-10 md:pb-20 mb-12 md:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-4 md:mb-5"
          >
            Contato
          </motion.p>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <FitText
                as="h2"
                className="font-serif font-normal tracking-tight text-foreground"
              >
                Fala com a Hoana.
              </FitText>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-muted-foreground font-sans font-light leading-relaxed mb-10 max-w-sm"
              style={{ fontSize: "clamp(0.875rem, 2.8vw, 1rem)" }}
            >
              Disponível para retratos autorais, direção de vídeo, palestras sobre modos de ver e projetos culturais ultra-personalizados — no Brasil e no exterior.
            </p>
            <div className="space-y-5">
              {[
                { label: "E-mail", value: "hoana@hoanabonito.com" },
                { label: "Localização", value: "Brasil · Nômade" },
                { label: "Projetos", value: "Retrato · Vídeo · Arte · Palestras" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-muted-foreground/40 mb-1">{item.label}</p>
                  <p
                    className="font-sans text-foreground/80 tracking-wide"
                    style={{ fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)" }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-6">
              {["Instagram", "Behance", "LinkedIn"].map((s) => (
                <button
                  key={s}
                  data-testid={`social-link-${s.toLowerCase()}`}
                  className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors py-2 min-h-[44px]"
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-start justify-center py-10"
              >
                <p className="font-serif text-foreground mb-2" style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)" }}>
                  Mensagem enviada. ✨
                </p>
                <p className="font-sans text-sm text-muted-foreground">Entrarei em contato em breve.</p>
              </motion.div>
            ) : (
              <form className="space-y-9" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                {[
                  { id: "name", label: "Nome", type: "text" },
                  { id: "email", label: "E-mail", type: "email" },
                ].map((f) => (
                  <div key={f.id} className="relative">
                    <input
                      type={f.type}
                      id={f.id}
                      required
                      placeholder=" "
                      data-testid={`input-${f.id}`}
                      className="w-full bg-transparent border-b border-border/40 pb-3 pt-6 text-foreground font-sans text-base focus:outline-none focus:border-primary transition-colors peer"
                    />
                    <label
                      htmlFor={f.id}
                      className="absolute left-0 top-6 font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 transition-all duration-200 peer-focus:top-0 peer-focus:text-primary peer-not-placeholder-shown:top-0"
                    >
                      {f.label}
                    </label>
                  </div>
                ))}
                <div className="relative">
                  <textarea
                    id="message"
                    required
                    placeholder=" "
                    rows={4}
                    data-testid="input-message"
                    className="w-full bg-transparent border-b border-border/40 pb-3 pt-6 text-foreground font-sans text-base focus:outline-none focus:border-primary transition-colors peer resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-6 font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 transition-all duration-200 peer-focus:top-0 peer-focus:text-primary peer-not-placeholder-shown:top-0"
                  >
                    Mensagem
                  </label>
                </div>
                <motion.button
                  type="submit"
                  data-testid="button-submit"
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-sans text-[11px] uppercase tracking-[0.3em] group min-h-[44px]"
                >
                  Enviar Mensagem
                  <span className="w-9 h-9 border border-current flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-background transition-colors">
                    <ArrowRight size={12} />
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="mt-14 flex justify-end">
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
