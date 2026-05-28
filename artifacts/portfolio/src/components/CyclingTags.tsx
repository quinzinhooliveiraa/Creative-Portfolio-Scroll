import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function CyclingTags({ tags, interval = 2200 }: { tags: string[]; interval?: number }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(i => (i + 1) % tags.length), interval);
    return () => clearInterval(t);
  }, [paused, tags.length, interval]);

  return (
    <div className="space-y-4">
      <div className="relative h-12 overflow-hidden">
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            animate={
              i === active
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: i === (active - 1 + tags.length) % tags.length ? -24 : 24 }
            }
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center font-serif text-foreground/90 cursor-pointer"
            style={{ fontSize: "clamp(1.25rem, 4vw, 1.6rem)" }}
            onClick={() => { setActive(i); setPaused(true); }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <div className="flex gap-1.5 flex-wrap">
        {tags.map((tag, i) => (
          <button
            key={tag}
            onClick={() => { setActive(i); setPaused(true); }}
            title={tag}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === active
                ? "w-6 bg-primary"
                : "w-1 bg-muted-foreground/25 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      {paused && (
        <button
          onClick={() => setPaused(false)}
          className="font-sans text-[9px] uppercase tracking-[0.25em] text-muted-foreground/40 hover:text-primary transition-colors"
        >
          retomar ›
        </button>
      )}
    </div>
  );
}
