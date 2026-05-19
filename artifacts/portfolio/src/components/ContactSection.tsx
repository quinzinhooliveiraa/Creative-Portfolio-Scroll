import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="contact" ref={ref} className="relative w-full bg-card overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <img src="/images/portfolio-4.png" alt="" className="w-full h-full object-cover opacity-[0.04]" />
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48">
        <div className="border-b border-border/20 pb-12 md:pb-20 mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-6"
          >
            Contato
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[9vw] font-serif text-foreground leading-none tracking-tighter"
            >
              Vamos criar<br />juntos.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-muted-foreground font-sans font-light text-base leading-relaxed mb-12 max-w-sm">
                Disponível para comissões editoriais, retratos e projetos documentais no Brasil e no exterior.
              </p>
              <div className="space-y-6">
                {[
                  { label: "E-mail", value: "contato@analuzferreira.com" },
                  { label: "Telefone", value: "+55 11 99999-9999" },
                  { label: "Localização", value: "São Paulo, SP — Brasil" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-muted-foreground/50 mb-1">{item.label}</p>
                    <p className="font-sans text-sm text-foreground/80 tracking-wide">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6">
              {["Instagram", "Behance", "LinkedIn"].map((s) => (
                <button
                  key={s}
                  data-testid={`social-link-${s.toLowerCase()}`}
                  className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-start justify-center h-full py-16"
              >
                <p className="font-serif text-3xl text-foreground mb-4">Mensagem enviada.</p>
                <p className="font-sans text-sm text-muted-foreground">Entrarei em contato em breve.</p>
              </motion.div>
            ) : (
              <form
                className="space-y-10"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                {[
                  { id: "name", label: "Nome", type: "text" },
                  { id: "email", label: "E-mail", type: "email" },
                ].map((f) => (
                  <div key={f.id} className="relative group">
                    <input
                      type={f.type}
                      id={f.id}
                      required
                      placeholder=" "
                      data-testid={`input-${f.id}`}
                      className="w-full bg-transparent border-b border-border/40 py-4 text-foreground font-sans text-sm focus:outline-none focus:border-primary transition-colors peer"
                    />
                    <label
                      htmlFor={f.id}
                      className="absolute left-0 top-4 font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 transition-all peer-focus:-top-3 peer-focus:text-[9px] peer-focus:text-primary peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-[9px]"
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
                    className="w-full bg-transparent border-b border-border/40 py-4 text-foreground font-sans text-sm focus:outline-none focus:border-primary transition-colors peer resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-4 font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 transition-all peer-focus:-top-3 peer-focus:text-[9px] peer-focus:text-primary peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-[9px]"
                  >
                    Mensagem
                  </label>
                </div>

                <motion.button
                  type="submit"
                  data-testid="button-submit"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors font-sans text-[11px] uppercase tracking-[0.3em] pt-2 group"
                >
                  Enviar Mensagem
                  <span className="w-8 h-8 border border-current flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-background transition-colors">
                    <ArrowRight size={12} />
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
