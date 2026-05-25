import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";


export function BookingSection() {
  const [, navigate] = useLocation();

  return (
    <section id="booking" className="relative w-full bg-card overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-20 md:pt-40 pb-16 md:pb-24">

        {/* Header */}
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
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-5 md:max-w-xs"
          >
            <p
              className="font-sans font-light text-muted-foreground leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)" }}
            >
              Tratarei da sua imagem com o mesmo requinte e cuidado que a natureza dedica a cada folha ou flor que nasce.
            </p>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/sessao")}
              className="self-start flex items-center gap-3 bg-primary text-background px-7 py-4 font-sans text-[10px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors group whitespace-nowrap"
            >
              Agendar Sessão
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Custom project CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border/20 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary mb-3">Projeto personalizado</p>
            <p className="font-serif text-foreground mb-2" style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.8rem)" }}>
              Quer criar algo do zero?
            </p>
            <p className="font-sans text-[11px] text-muted-foreground/60 leading-relaxed max-w-md">
              Direção de vídeo, editorial, registro de espetáculos, arte conceitual — fala com a Hoana e a gente pensa junto.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-3 border border-border/30 px-7 py-4 font-sans text-[10px] uppercase tracking-[0.25em] text-foreground hover:border-primary hover:text-primary transition-colors group whitespace-nowrap"
            >
              Fala com a Hoana
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/sessao")}
              className="flex items-center gap-3 bg-primary text-background px-7 py-4 font-sans text-[10px] uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors group whitespace-nowrap"
            >
              Ver pacote e agendar
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
