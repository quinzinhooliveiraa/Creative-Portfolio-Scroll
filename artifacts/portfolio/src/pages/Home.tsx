import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PhotographySection } from "@/components/PhotographySection";
import { VideoSection } from "@/components/VideoSection";
import { TalksSection } from "@/components/TalksSection";
import { ContactSection } from "@/components/ContactSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <HeroSection />
      <AboutSection />
      <PhotographySection />
      <VideoSection />
      <TalksSection />
      <ContactSection />

      <footer className="bg-background py-10 px-6 md:px-12 border-t border-border/20">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-sm tracking-widest text-muted-foreground uppercase">Ana Luz Ferreira</span>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50"
          >
            &copy; {new Date().getFullYear()} — Todos os direitos reservados
          </motion.p>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
            São Paulo, Brasil
          </span>
        </div>
      </footer>
    </main>
  );
}
