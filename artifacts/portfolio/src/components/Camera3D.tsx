import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";

function useTilt() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-22, 22]), { stiffness: 120, damping: 20 });
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [14, -14]), { stiffness: 120, damping: 20 });
  const lightX = useSpring(useTransform(rawX, [-0.5, 0.5], [120, 240]), { stiffness: 80, damping: 20 });
  const lightY = useSpring(useTransform(rawY, [-0.5, 0.5], [60, 180]), { stiffness: 80, damping: 20 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [rawX, rawY]);

  const onMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return { rotateX, rotateY, lightX, lightY, onMouseMove, onMouseLeave };
}

interface Camera3DProps {
  scrollYProgress: MotionValue<number>;
}

export function Camera3D({ scrollYProgress }: Camera3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { rotateX, rotateY, lightX, lightY, onMouseMove, onMouseLeave } = useTilt();

  const scale = useTransform(scrollYProgress, [0, 0.45], [1, 0.14]);
  const x = useTransform(scrollYProgress, [0, 0.45], ["0%", "155%"]);
  const y = useTransform(scrollYProgress, [0, 0.45], ["0%", "-195%"]);
  const opacity = useTransform(scrollYProgress, [0.38, 0.5], [1, 0]);

  const shimmer = useTransform(
    [lightX, lightY] as MotionValue[],
    ([lx, ly]: number[]) =>
      `radial-gradient(circle at ${lx}% ${ly}%, rgba(255,255,255,0.13) 0%, transparent 65%)`
  );

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, x, y, opacity, perspective: 900 }}
      className="relative flex items-center justify-center"
      initial={{ scale: 0.85, y: -20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-[260px] md:w-[300px] select-none"
      >
        {/* Shimmer overlay */}
        <motion.div
          style={{ background: shimmer }}
          className="absolute inset-0 z-30 rounded-[10px] pointer-events-none"
        />

        {/* Camera body */}
        <div
          className="relative rounded-[10px] overflow-visible"
          style={{
            background: "linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #111 100%)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.5)",
            height: "174px",
          }}
        >
          {/* Top hump / pentaprism */}
          <div
            className="absolute left-[30%] -top-[28px] w-[38%]"
            style={{
              height: "28px",
              background: "linear-gradient(to bottom, #252525, #1c1c1c)",
              borderRadius: "6px 6px 0 0",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
            }}
          >
            {/* Hot shoe */}
            <div
              className="absolute bottom-0 left-[15%] right-[15%] h-[4px]"
              style={{ background: "#333", borderRadius: "1px" }}
            />
          </div>

          {/* Shutter button */}
          <div
            className="absolute right-[22%] -top-[36px]"
            style={{
              width: "18px", height: "18px",
              background: "radial-gradient(circle at 40% 35%, #d4915a, #c8956c 40%, #a0704a)",
              borderRadius: "50%",
              boxShadow: "0 3px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          />

          {/* Mode dial */}
          <div
            className="absolute right-[8%] -top-[30px]"
            style={{
              width: "26px", height: "26px",
              background: "conic-gradient(#333 0deg, #444 60deg, #333 120deg, #444 180deg, #333 240deg, #444 300deg, #333 360deg)",
              borderRadius: "50%",
              boxShadow: "0 2px 6px rgba(0,0,0,0.6)",
            }}
          />

          {/* Main body content */}
          <div className="absolute inset-0 p-3 flex items-center gap-3">
            {/* LENS */}
            <div
              className="flex-shrink-0"
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #2c2c2c, #1a1a1a)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.7), inset 0 2px 4px rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "translateZ(14px)",
                position: "relative",
              }}
            >
              {/* Lens mount ring */}
              <div style={{
                position: "absolute",
                inset: "4px",
                borderRadius: "50%",
                border: "2px solid #444",
                boxShadow: "0 0 0 1px #222",
              }} />
              {/* Lens barrel */}
              <div style={{
                width: "82px",
                height: "82px",
                borderRadius: "50%",
                background: "radial-gradient(circle at 38% 34%, #3a3a3a, #151515 55%, #0a0a0a)",
                boxShadow: "inset 0 3px 8px rgba(0,0,0,0.8), inset 0 -1px 3px rgba(255,255,255,0.04)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}>
                {/* Focus ring markings */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                  <div key={deg} style={{
                    position: "absolute",
                    width: "1px",
                    height: "6px",
                    background: "rgba(255,255,255,0.15)",
                    transformOrigin: "50% 41px",
                    transform: `rotate(${deg}deg)`,
                    top: "0",
                    left: "50%",
                  }} />
                ))}
                {/* Inner glass */}
                <div style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 30%, rgba(80,130,200,0.18), rgba(10,30,80,0.85) 60%, rgba(5,10,30,0.95))",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {/* Lens flare */}
                  <div style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(180,210,255,0.5) 0%, transparent 70%)",
                    position: "absolute",
                    top: "10px",
                    left: "13px",
                  }} />
                  {/* Aperture blades */}
                  <div style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    border: "2px solid rgba(40,60,100,0.6)",
                  }} />
                </div>
              </div>
            </div>

            {/* Right panel controls */}
            <div className="flex-1 flex flex-col gap-2 pr-1">
              {/* Logo text */}
              <div className="flex items-center justify-between mb-1">
                <span style={{
                  fontFamily: "serif",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}>Ana Luz</span>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "radial-gradient(circle, #c8956c, #a0704a)",
                  boxShadow: "0 0 6px rgba(200,149,108,0.5)",
                }} />
              </div>

              {/* LCD screen */}
              <div style={{
                background: "linear-gradient(135deg, #0d1a0f, #0a1a0c)",
                borderRadius: "4px",
                padding: "5px 6px",
                border: "1px solid #333",
                boxShadow: "inset 0 1px 0 rgba(0,0,0,0.5)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2px" }}>
                  <span style={{ color: "#4af26a", fontSize: "8px", fontFamily: "monospace" }}>1/250</span>
                  <span style={{ color: "#4af26a", fontSize: "8px", fontFamily: "monospace" }}>f/2.8</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#4af26a", fontSize: "8px", fontFamily: "monospace" }}>ISO 400</span>
                  <span style={{ color: "rgba(74,242,106,0.5)", fontSize: "7px", fontFamily: "monospace" }}>RAW</span>
                </div>
              </div>

              {/* Control buttons row */}
              <div className="flex gap-1.5 justify-end mt-1">
                {[14, 10, 10, 10].map((size, i) => (
                  <div key={i} style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: i === 0 ? "3px" : "50%",
                    background: i === 0
                      ? "linear-gradient(135deg, #3a3a3a, #252525)"
                      : "linear-gradient(135deg, #2e2e2e, #1e1e1e)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                    border: "1px solid #383838",
                  }} />
                ))}
              </div>

              {/* D-pad area */}
              <div className="flex justify-center mt-0.5">
                <div style={{
                  width: "30px",
                  height: "30px",
                  position: "relative",
                }}>
                  {/* D-pad cross */}
                  <div style={{
                    position: "absolute",
                    top: "30%", left: 0, right: 0, height: "40%",
                    background: "#2a2a2a",
                    borderRadius: "2px",
                  }} />
                  <div style={{
                    position: "absolute",
                    left: "30%", top: 0, bottom: 0, width: "40%",
                    background: "#2a2a2a",
                    borderRadius: "2px",
                  }} />
                  {/* center dot */}
                  <div style={{
                    position: "absolute",
                    top: "35%", left: "35%",
                    width: "30%", height: "30%",
                    borderRadius: "50%",
                    background: "#383838",
                  }} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom grip detail */}
          <div
            className="absolute bottom-0 left-0 w-[28%]"
            style={{
              height: "100%",
              background: "linear-gradient(to right, #222, transparent)",
              borderRadius: "10px 0 0 10px",
              opacity: 0.6,
            }}
          />

          {/* Grip texture lines */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${5 + i * 2.5}px`,
                top: "15%",
                bottom: "15%",
                width: "1px",
                background: "rgba(0,0,0,0.4)",
                borderRadius: "1px",
              }}
            />
          ))}

          {/* Bottom panel */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "14px",
              background: "linear-gradient(to bottom, #1e1e1e, #161616)",
              borderRadius: "0 0 10px 10px",
              borderTop: "1px solid #2a2a2a",
            }}
          >
            {/* Tripod socket */}
            <div style={{
              position: "absolute",
              bottom: "3px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "10px",
              height: "6px",
              borderRadius: "2px",
              background: "#111",
              border: "1px solid #2a2a2a",
            }} />
          </div>

          {/* Strap lug left */}
          <div style={{
            position: "absolute",
            left: "-4px",
            top: "20%",
            width: "8px",
            height: "18px",
            background: "linear-gradient(to right, #1a1a1a, #222)",
            borderRadius: "2px",
            boxShadow: "-2px 0 4px rgba(0,0,0,0.5)",
          }} />

          {/* Strap lug right */}
          <div style={{
            position: "absolute",
            right: "-4px",
            top: "20%",
            width: "8px",
            height: "18px",
            background: "linear-gradient(to left, #1a1a1a, #222)",
            borderRadius: "2px",
            boxShadow: "2px 0 4px rgba(0,0,0,0.5)",
          }} />

          {/* Side face 3D depth */}
          <div style={{
            position: "absolute",
            top: 0,
            right: "-8px",
            width: "8px",
            height: "100%",
            background: "linear-gradient(to right, #111, #0a0a0a)",
            borderRadius: "0 4px 4px 0",
            transform: "none",
          }} />
        </div>

        {/* Shadow */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2"
          style={{
            width: "70%",
            height: "20px",
            background: "rgba(0,0,0,0.4)",
            borderRadius: "50%",
            filter: "blur(12px)",
            transform: "translateX(-50%) translateZ(-10px)",
          }}
        />

        {/* Subtle ambient ring */}
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: "-16px",
            borderRadius: "20px",
            background: "radial-gradient(ellipse at 50% 50%, rgba(200,149,108,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
