import { useRef, useMemo, useState, useEffect, Component, ReactNode } from "react";

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function CssFallback() {
  const particles = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.4 + 0.15,
        dx: (Math.random() - 0.5) * 40,
        dy: -(Math.random() * 40 + 10),
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: "hsl(28 45% 58%)",
            opacity: p.opacity,
            animation: `particle-float-${p.id % 5} ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes particle-float-0 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(12px,-18px) scale(1.2)} }
        @keyframes particle-float-1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-15px,-25px) scale(0.9)} }
        @keyframes particle-float-2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(8px,-30px) scale(1.1)} }
        @keyframes particle-float-3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-10px,-15px) scale(1.3)} }
        @keyframes particle-float-4 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-22px) scale(0.8)} }
      `}</style>
    </div>
  );
}

function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let renderer: import("three").WebGLRenderer | null = null;

    (async () => {
      const THREE = await import("three");

      if (!mountRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 100);
      camera.position.z = 1;

      try {
        renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      } catch {
        return;
      }

      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      mountRef.current.appendChild(renderer.domElement);

      const count = 1000;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = Math.cbrt(Math.random()) * 2.5;
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: new THREE.Color("hsl(28, 45%, 58%)"),
        size: 0.005,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
      });

      const points = new THREE.Points(geometry, material);
      points.rotation.z = Math.PI / 4;
      scene.add(points);

      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        points.rotation.x -= delta / 10;
        points.rotation.y -= delta / 15;
        renderer?.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        if (!mountRef.current || !renderer) return;
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    })();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}

class ErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { error: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { error: false };
  }
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    return this.state.error ? this.props.fallback : this.props.children;
  }
}

export function ParticlesBackground() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-background overflow-hidden">
      {webglSupported === null ? null : webglSupported ? (
        <ErrorBoundary fallback={<CssFallback />}>
          <ThreeCanvas />
        </ErrorBoundary>
      ) : (
        <CssFallback />
      )}
    </div>
  );
}
