import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLocation } from "wouter";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Retratos", href: "#portfolio" },
  { label: "Artes", href: "#film" },
  { label: "Palestras", href: "#talks" },
  { label: "Contato", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [, navigate] = useLocation();
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 60);
    setVisible(v > 80);
  });

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

  const goToSessao = () => {
    setOpen(false);
    navigate("/sessao");
  };

  return (
    <>
      <motion.header
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        initial={{ y: -80, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/20 nav-glass" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-6">
          <span
            className="font-serif text-base tracking-[0.15em] text-foreground uppercase cursor-pointer flex-shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Hoana Bonito
          </span>

          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-[11px] font-sans uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              title={theme === "dark" ? "Modo claro" : "Modo escuro"}
              className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.25 }}
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </motion.div>
            </motion.button>

            <motion.button
              onClick={goToSessao}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-primary text-primary-foreground font-sans text-[10px] uppercase tracking-[0.25em] px-5 py-2.5 hover:bg-primary/90 transition-colors"
            >
              Agendar Sessão
            </motion.button>
          </div>

          <div className="md:hidden flex items-center gap-3 -mr-2">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.25 }}
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </motion.div>
            </motion.button>

            <button
              onClick={() => setOpen((v) => !v)}
              data-testid="nav-menu-toggle"
              className="flex flex-col gap-[5px] w-11 h-11 items-center justify-center"
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
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[99] bg-background flex flex-col items-center justify-center gap-7 md:hidden"
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
        <motion.button
          onClick={goToSessao}
          initial={false}
          animate={{ opacity: open ? 1 : 0, y: open ? 0 : 20 }}
          transition={{ delay: links.length * 0.07 }}
          className="mt-4 bg-primary text-primary-foreground font-sans text-[11px] uppercase tracking-[0.25em] px-8 py-4"
        >
          Agendar Sessão
        </motion.button>
      </motion.div>
    </>
  );
}
