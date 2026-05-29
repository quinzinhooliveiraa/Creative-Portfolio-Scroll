import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { AboutSection } from "@/components/AboutSection";
import { PhotographySection } from "@/components/PhotographySection";
import { VideoSection } from "@/components/VideoSection";
import { OlhoArtistaSection } from "@/components/OlhoArtistaSection";
import { TalksSection } from "@/components/TalksSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {

  return (
    <main className="bg-background text-foreground">
      <Nav />
      <HeroSection />
      <ManifestoSection />
      <AboutSection />
      <PhotographySection />
      <TalksSection />
      <VideoSection />
      <OlhoArtistaSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
