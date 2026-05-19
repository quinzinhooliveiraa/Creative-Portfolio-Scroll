import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-card z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary uppercase tracking-widest text-xs font-sans mb-4">Contato</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-foreground mb-8">Vamos criar juntos.</h3>
          <p className="text-muted-foreground font-sans font-light text-lg mb-12 max-w-md">
            Disponível para comissões editoriais, retratos e projetos documentais no Brasil e no exterior.
          </p>
          
          <div className="space-y-4 font-sans text-sm tracking-wider uppercase text-foreground/80">
            <p>contato@analuzferreira.com</p>
            <p>+55 11 99999-9999</p>
            <p className="pt-8 text-muted-foreground">São Paulo, SP — Brasil</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <input 
                type="text" 
                id="name"
                required
                className="w-full bg-transparent border-b border-border/50 py-4 px-0 text-foreground font-sans placeholder:text-transparent focus:outline-none focus:border-primary transition-colors peer"
                placeholder="Nome"
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-4 text-muted-foreground font-sans uppercase text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-primary/70"
              >
                Nome
              </label>
            </div>
            
            <div className="relative group">
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-transparent border-b border-border/50 py-4 px-0 text-foreground font-sans placeholder:text-transparent focus:outline-none focus:border-primary transition-colors peer"
                placeholder="E-mail"
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-4 text-muted-foreground font-sans uppercase text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-primary/70"
              >
                E-mail
              </label>
            </div>

            <div className="relative group">
              <textarea 
                id="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-border/50 py-4 px-0 text-foreground font-sans placeholder:text-transparent focus:outline-none focus:border-primary transition-colors peer resize-none"
                placeholder="Mensagem"
              />
              <label 
                htmlFor="message" 
                className="absolute left-0 top-4 text-muted-foreground font-sans uppercase text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-primary/70"
              >
                Mensagem
              </label>
            </div>

            <button className="flex items-center gap-4 text-primary uppercase font-sans text-xs tracking-widest hover:text-foreground transition-colors pt-4">
              Enviar Mensagem
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
