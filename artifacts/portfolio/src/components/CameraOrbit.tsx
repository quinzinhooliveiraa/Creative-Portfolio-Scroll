import { useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

const CAMERA_COUNT = 8;
const ORBIT_RADIUS = 150;
const TOTAL_SIZE = ORBIT_RADIUS * 2 + 80;

function CameraIcon({ size = 44, tilt = 0 }: { size?: number; tilt?: number }) {
  const s = size;
  return (
    <svg width={s} height={s * 0.72} viewBox="0 0 80 58" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${tilt}deg)`, display: "block" }}>
      <rect x="2" y="13" width="76" height="43" rx="6" stroke="currentColor" strokeWidth="2.8" />
      <path d="M26 13 L26 7 Q26 3 30 3 L50 3 Q54 3 54 7 L54 13" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <circle cx="40" cy="35" r="15" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="35" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="40" cy="35" r="3.5" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
      <rect x="7" y="19" width="9" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="65" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

interface CameraOrbitProps {
  scrollYProgress: MotionValue<number>;
}

export function CameraOrbit({ scrollYProgress }: CameraOrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  /* ── Scroll-driven: orbit rotates as you scroll ── */
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 300]);

  /* ── Scroll-driven: whole thing shrinks + flies to corner ── */
  const wrapScale = useTransform(scrollYProgress, [0, 0.42], [1, 0.12]);
  const wrapX = useTransform(scrollYProgress, [0, 0.42], [0, 560]);
  const wrapY = useTransform(scrollYProgress, [0, 0.42], [0, -340]);
  const wrapOpacity = useTransform(scrollYProgress, [0.35, 0.48], [1, 0]);

  /* ── Mouse 3D tilt ── */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-16, 16]), { stiffness: 180, damping: 22 });
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [10, -10]), { stiffness: 180, damping: 22 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  }, [rawX, rawY]);

  const onMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  /* Camera icons counter-rotate so they stay upright as orbit spins */
  const counterRotate = useTransform(orbitRotate, (v) => -v);

  return (
    /* Scroll shrink/fly wrapper — positioned absolutely, no layout impact */
    <motion.div
      style={{
        scale: wrapScale,
        x: wrapX,
        y: wrapY,
        opacity: wrapOpacity,
        transformOrigin: "center center",
      }}
    >
      {/* 3D tilt on mouse */}
      <motion.div
        ref={containerRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative flex items-center justify-center"
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* ── Orbit ring ── */}
        <motion.div
          style={{ rotate: orbitRotate, width: TOTAL_SIZE, height: TOTAL_SIZE, position: "relative" }}
        >
          {/* Subtle track circle */}
          <div style={{
            position: "absolute",
            inset: 20,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
          }} />
          <div style={{
            position: "absolute",
            inset: 30,
            borderRadius: "50%",
            border: "1px solid rgba(200,149,108,0.06)",
          }} />

          {/* Camera icons on orbit */}
          {Array.from({ length: CAMERA_COUNT }).map((_, i) => {
            const angle = (i / CAMERA_COUNT) * 360;
            const rad = (angle * Math.PI) / 180;
            const cx = Math.cos(rad) * ORBIT_RADIUS + TOTAL_SIZE / 2;
            const cy = Math.sin(rad) * ORBIT_RADIUS + TOTAL_SIZE / 2;
            const highlighted = i % 3 === 0;
            const size = highlighted ? 46 : 34;

            return (
              <motion.div
                key={i}
                style={{
                  position: "absolute",
                  left: cx,
                  top: cy,
                  transform: "translate(-50%, -50%)",
                  rotate: counterRotate,
                  color: highlighted
                    ? "rgba(200,149,108,0.95)"
                    : "rgba(255,255,255,0.22)",
                  filter: highlighted
                    ? "drop-shadow(0 0 10px rgba(200,149,108,0.5))"
                    : "none",
                }}
              >
                <CameraIcon size={size} tilt={angle + 90} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Center lens / emblem ── */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          gap: 10,
        }}>
          <motion.div
            animate={{ opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 86,
              height: 86,
              borderRadius: "50%",
              border: "1px solid rgba(200,149,108,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{
              width: 58,
              height: 58,
              borderRadius: "50%",
              border: "1px solid rgba(200,149,108,0.22)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <div style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "radial-gradient(circle at 36% 30%, rgba(90,140,220,0.28), rgba(6,14,50,0.92) 65%)",
                border: "1px solid rgba(255,255,255,0.13)",
                boxShadow: "0 0 22px rgba(80,120,200,0.18), inset 0 0 12px rgba(0,0,0,0.85)",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  top: "18%",
                  left: "20%",
                  width: "30%",
                  height: "30%",
                  borderRadius: "50%",
                  background: "rgba(200,220,255,0.45)",
                }} />
              </div>
            </div>
          </motion.div>

          <p style={{
            fontFamily: "serif",
            fontSize: "8px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.28)",
            marginTop: 2,
          }}>
            Ana Luz
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
