import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(true);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const pupilX = useSpring(rawX, { stiffness: 2000, damping: 60, mass: 0.2 });
  const pupilY = useSpring(rawY, { stiffness: 2000, damping: 60, mass: 0.2 });

  const eyeX = useSpring(rawX, { stiffness: 500, damping: 38, mass: 0.3 });
  const eyeY = useSpring(rawY, { stiffness: 500, damping: 38, mass: 0.3 });

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

  const eyeScaleY = clicking ? 0.15 : hovered ? 1.25 : 1;
  const eyeScaleX = hovered ? 1.35 : 1;

  return (
    <>
      {/* Outer eye shape */}
      <motion.div
        style={{
          x: eyeX,
          y: eyeY,
          translateX: "-50%",
          translateY: "-50%",
          scaleX: eyeScaleX,
          scaleY: eyeScaleY,
        }}
        animate={{ opacity: hidden ? 0 : 0.85 }}
        transition={{ scaleY: { type: "spring", stiffness: 300, damping: 20 }, scaleX: { type: "spring", stiffness: 300, damping: 20 } }}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ mixBlendMode: "difference" } as React.CSSProperties}
      >
        <svg
          width="44"
          height="28"
          viewBox="0 0 44 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          {/* Eye outline */}
          <path
            d="M2 14 C8 3, 36 3, 42 14 C36 25, 8 25, 2 14 Z"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Iris */}
          <circle
            cx="22"
            cy="14"
            r="6.5"
            stroke="white"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Pupil — follows cursor precisely */}
      <motion.div
        style={{
          x: pupilX,
          y: pupilY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        } as React.CSSProperties}
        animate={{
          scale: clicking ? 0.5 : hovered ? 1.4 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ scale: { type: "spring", stiffness: 600, damping: 25 } }}
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
      >
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "white",
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>
    </>
  );
}
