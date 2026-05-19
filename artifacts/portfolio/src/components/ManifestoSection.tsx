import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const phrases = [
  { text: "sensibilidade artística", size: "large", italic: true },
  { text: "potência visual", size: "large", italic: false },
  { text: "percepção · presença", size: "medium", italic: false },
  { text: "tradução sensorial", size: "medium", italic: true },
  { text: "escuta", size: "xl", italic: false },
  { text: "maneiras de ver", size: "large", italic: true },
  { text: "imagem para além da visão.", size: "medium", italic: false },
];

const closing = "Tô aqui pra fazer da liberdade criativa o meu meio de vida.";

function usePhaseOpacity(
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"],
  enter: number,
  peak: number,
  exit: number
) {
  return useTransform(
    scrollYProgress,
    [enter, peak, exit > 1 ? 1 : exit],
    [0, 1, exit > 1 ? 1 : 0]
  );
}

const TOTAL = phrases.length + 1;
const step = 1 / (TOTAL + 1);

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const phaseOpacities = phrases.map((_, i) => {
    const enter = i * step;
    const peak = enter + step * 0.4;
    const exit = enter + step * 0.9;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return usePhaseOpacity(scrollYProgress, enter, peak, exit);
  });

  const closingOpacity = usePhaseOpacity(
    scrollYProgress,
    phrases.length * step,
    phrases.length * step + step * 0.4,
    2
  );

  const closingY = useTransform(
    scrollYProgress,
    [phrases.length * step, phrases.length * step + step * 0.4],
    [30, 0]
  );

  const labelOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${(TOTAL + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-background">

        <motion.p
          style={{ opacity: labelOpacity }}
          className="absolute top-12 left-1/2 -translate-x-1/2 font-sans text-[9px] uppercase tracking-[0.5em] text-primary"
        >
          Manifesto
        </motion.p>

        <div className="relative w-full max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          {phrases.map((phrase, i) => (
            <motion.div
              key={phrase.text}
              style={{ opacity: phaseOpacities[i], position: "absolute", inset: 0 }}
              className="flex items-center justify-center"
            >
              <span
                className={`font-serif text-foreground leading-tight select-none ${
                  phrase.italic ? "italic" : ""
                }`}
                style={{
                  fontSize:
                    phrase.size === "xl"
                      ? "clamp(4rem, 16vw, 11rem)"
                      : phrase.size === "large"
                      ? "clamp(2.4rem, 9vw, 6.5rem)"
                      : "clamp(1.8rem, 6vw, 4.2rem)",
                  letterSpacing: phrase.size === "xl" ? "0.08em" : "-0.01em",
                }}
              >
                {phrase.text}
              </span>
            </motion.div>
          ))}

          <motion.div
            style={{ opacity: closingOpacity, y: closingY, position: "absolute", inset: 0 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <p
              className="font-serif italic text-foreground/80 leading-tight text-center"
              style={{ fontSize: "clamp(1.3rem, 4.5vw, 3rem)" }}
            >
              "{closing}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-primary/50" />
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary">
                Hoana Bonito
              </span>
              <div className="w-8 h-[1px] bg-primary/50" />
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: labelOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-8 bg-foreground/15 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary/60"
              animate={{ height: ["0%", "100%"], top: ["0%", "100%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="font-sans text-[8px] uppercase tracking-[0.4em] text-muted-foreground/40">
            Role
          </span>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[1px] h-full bg-border/10" style={{ left: "8vw" }} />
          <div className="absolute top-0 right-0 w-[1px] h-full bg-border/10" style={{ right: "8vw" }} />
        </div>
      </div>
    </div>
  );
}
