import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PhotographySection } from "@/components/PhotographySection";
import { VideoSection } from "@/components/VideoSection";
import { TalksSection } from "@/components/TalksSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <PhotographySection />
      <VideoSection />
      <TalksSection />
      <ContactSection />
      
      <footer className="py-8 text-center border-t border-border/20 text-muted-foreground text-xs font-sans tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Ana Luz Ferreira. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
