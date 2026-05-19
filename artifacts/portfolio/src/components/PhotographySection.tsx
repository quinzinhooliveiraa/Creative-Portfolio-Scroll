import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const photos = [
  { id: 1, src: "/images/portfolio-1.png", alt: "Cinematic Portrait", category: "Retrato", aspect: "3/4" },
  { id: 2, src: "/images/portfolio-2.png", alt: "Landscape", category: "Paisagem", aspect: "16/9" },
  { id: 3, src: "/images/portfolio-3.png", alt: "Editorial Fashion", category: "Editorial", aspect: "3/4" },
  { id: 4, src: "/images/portfolio-4.png", alt: "Documentary Street", category: "Documental", aspect: "1/1" },
  { id: 5, src: "/images/portfolio-5.png", alt: "Cinematic Silhouette", category: "Retrato", aspect: "3/4" },
  { id: 6, src: "/images/portfolio-6.png", alt: "Architectural Details", category: "Documental", aspect: "16/9" },
];

export function PhotographySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={ref} className="relative w-full py-32 px-6 md:px-12 bg-background z-10">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          style={{ y: headerY, opacity: headerOpacity }}
          className="mb-20 text-center"
        >
          <h2 className="text-primary uppercase tracking-widest text-xs font-sans mb-4">Portfólio</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-foreground">Obras Selecionadas</h3>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="break-inside-avoid"
            >
              <TiltCard onClick={() => setSelectedPhoto(photo)}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-primary uppercase tracking-widest text-[10px] mb-2">{photo.category}</span>
                    <span className="text-white font-serif text-xl">{photo.alt}</span>
                  </div>
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="w-full h-auto object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" 
                    loading="lazy"
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none outline-none shadow-none flex items-center justify-center">
          <AnimatePresence>
            {selectedPhoto && (
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-[95vh] object-contain"
              />
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}
