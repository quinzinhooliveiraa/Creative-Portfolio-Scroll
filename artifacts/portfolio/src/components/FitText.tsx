import { useEffect, useRef, useState, ReactNode, ElementType } from "react";

interface FitTextProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  maxSize?: number;
}

export function FitText({ children, className = "", as: Tag = "span", maxSize }: FitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState(80);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const span = measureRef.current;
      if (!container || !span) return;

      span.style.fontSize = "80px";
      const baseWidth = span.scrollWidth;
      const containerWidth = container.offsetWidth;

      if (baseWidth > 0 && containerWidth > 0) {
        let size = (containerWidth / baseWidth) * 80 * 0.997;
        if (maxSize && size > maxSize) size = maxSize;
        setFontSize(size);
        setReady(true);
      }
    };

    const t = setTimeout(measure, 0);
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => { clearTimeout(t); ro.disconnect(); };
  }, [children, maxSize]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden relative">
      <span
        ref={measureRef}
        aria-hidden="true"
        className={`block whitespace-nowrap leading-none pointer-events-none absolute opacity-0 ${className}`}
        style={{ fontSize: "80px" }}
      >
        {children}
      </span>
      <Tag
        className={`block whitespace-nowrap leading-none ${className} ${ready ? "" : "invisible"}`}
        style={{ fontSize: `${fontSize}px` }}
      >
        {children}
      </Tag>
    </div>
  );
}
