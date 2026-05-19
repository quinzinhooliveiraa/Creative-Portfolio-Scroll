import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Filme", href: "#film" },
  { label: "Palestras", href: "#talks" },
  { label: "Contato", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const scrollTo = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/20" : ""
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <span
            className="font-serif text-base tracking-[0.15em] text-foreground uppercase cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Ana Luz
          </span>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="text-[11px] font-sans uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="nav-menu-toggle"
            className="md:hidden flex flex-col gap-[5px] w-6"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              className="block h-[1px] w-full bg-foreground origin-center"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="block h-[1px] w-full bg-foreground"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              className="block h-[1px] w-full bg-foreground origin-center"
            />
          </button>
        </div>
      </motion.header>

      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[99] bg-background flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {links.map((l, i) => (
          <motion.button
            key={l.href}
            onClick={() => scrollTo(l.href)}
            initial={false}
            animate={{ opacity: open ? 1 : 0, y: open ? 0 : 20 }}
            transition={{ delay: i * 0.07 }}
            className="font-serif text-4xl text-foreground"
          >
            {l.label}
          </motion.button>
        ))}
      </motion.div>
    </>
  );
}
