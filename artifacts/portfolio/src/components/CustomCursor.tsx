import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(true);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const dotX = useSpring(rawX, { stiffness: 2000, damping: 60, mass: 0.2 });
  const dotY = useSpring(rawY, { stiffness: 2000, damping: 60, mass: 0.2 });

  const ringX = useSpring(rawX, { stiffness: 600, damping: 40, mass: 0.3 });
  const ringY = useSpring(rawY, { stiffness: 600, damping: 40, mass: 0.3 });

  const isTouchRef = useRef(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      if (isTouchRef.current) return;
      setHidden(false);
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovered(
        !!(t.closest("a") || t.closest("button") || t.tagName === "IMG" || t.dataset.cursor === "hover")
      );
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, [rawX, rawY]);

  return (
    <>
      <motion.div
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: clicking ? 0.6 : hovered ? 0 : 1, opacity: hidden ? 0 : 1 }}
        transition={{ scale: { type: "spring", stiffness: 600, damping: 30 } }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary z-[10000] pointer-events-none"
      />
      <motion.div
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: clicking ? 0.8 : hovered ? 2 : 1,
          opacity: hidden ? 0 : 0.7,
          borderColor: hovered ? "hsl(var(--primary))" : "hsl(var(--foreground))",
        }}
        transition={{ scale: { type: "spring", stiffness: 200, damping: 20 } }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[9999]"
      />
    </>
  );
}
