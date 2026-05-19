import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = [
  { text: "sensibilidade", style: "normal" },
  { text: "artística", style: "italic" },
  { text: "potência", style: "normal" },
  { text: "visual", style: "italic" },
  { text: "percepção", style: "normal" },
  { text: "presença", style: "italic" },
  { text: "tradução", style: "normal" },
  { text: "sensorial", style: "italic" },
  { text: "escuta", style: "normal" },
  { text: "maneiras de ver", style: "italic" },
  { text: "imagem para além da visão.", style: "normal" },
];

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    // Set all words invisible initially
    wordRefs.current.forEach((el, i) => {
      if (el) gsap.set(el, { opacity: i === 0 ? 0 : 0, y: i === 0 ? 30 : 30 });
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      words.forEach((_, i) => {
        const el = wordRefs.current[i];
        if (!el) return;

        const isLast = i === words.length - 1;

        // Fade in
        tl.to(el, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });

        if (!isLast) {
          // Hold
          tl.to({}, { duration: 0.3 });
          // Fade out
          tl.to(el, { opacity: 0, y: -30, duration: 0.4, ease: "power2.in" });
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="manifesto"
      className="relative"
      style={{ height: `${words.length * 110}vh` }}
    >
      <div
        ref={innerRef}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-background overflow-hidden"
      >
        {/* Label */}
        <span className="absolute top-10 left-1/2 -translate-x-1/2 font-sans text-[9px] uppercase tracking-[0.5em] text-primary/60">
          Manifesto
        </span>

        {/* Words stacked on top of each other */}
        <div className="relative w-full px-6 md:px-16 flex items-center justify-center" style={{ height: "1.2em" }}>
          {words.map((word, i) => (
            <span
              key={word.text}
              ref={(el) => { wordRefs.current[i] = el; }}
              className={`absolute inset-x-0 text-center font-serif text-foreground leading-none select-none ${
                word.style === "italic" ? "italic" : ""
              }`}
              style={{
                fontSize: "clamp(2.8rem, 11vw, 9rem)",
                opacity: 0,
                transform: "translateY(30px)",
                letterSpacing: "-0.02em",
              }}
            >
              {word.text}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-[1px] h-10 bg-foreground/10 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-primary/50"
              style={{
                animation: "slideDown 1.6s ease-in-out infinite",
              }}
            />
          </div>
          <span className="font-sans text-[8px] uppercase tracking-[0.4em] text-muted-foreground/30">
            Role
          </span>
        </div>

        <style>{`
          @keyframes slideDown {
            0% { height: 0%; top: 0%; }
            50% { height: 100%; top: 0%; }
            100% { height: 0%; top: 100%; }
          }
        `}</style>
      </div>
    </div>
  );
}
