"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type Geometry = {
  width: number;
  height: number;
  path: string;
  firstY: number;
  lastY: number;
};

export default function ServicesTimeline({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [geometry, setGeometry] = useState<Geometry | null>(null);

  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);

  // Measure the real positions of the markers.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function measure() {
      if (!container) return;

      const markers = Array.from(
        container.querySelectorAll<HTMLElement>("[data-timeline-marker]"),
      );

      if (markers.length < 2) {
        setGeometry(null);
        return;
      }

      const parent = container.getBoundingClientRect();

      const points = markers.map((marker) => {
        const rect = marker.getBoundingClientRect();

        return {
          x: rect.left - parent.left + rect.width / 2,
          y: rect.top - parent.top + rect.height / 2,
        };
      });

      // Start at the center of marker 01.
      let path = `M ${points[0].x} ${points[0].y}`;

      for (let i = 0; i < points.length - 1; i++) {
        const start = points[i];
        const end = points[i + 1];

        const distanceY = end.y - start.y;

        // Vertical tangent at each marker:
        // this creates a continuous S-shaped route
        // through alternating left/right markers.
        const controlDistance = distanceY * 0.5;

        path +=
          ` C ${start.x} ${start.y + controlDistance}` +
          ` ${end.x} ${end.y - controlDistance}` +
          ` ${end.x} ${end.y}`;
      }

      setGeometry({
        width: parent.width,
        height: parent.height,
        path,
        firstY: points[0].y,
        lastY: points[points.length - 1].y,
      });
    }

    measure();

    const observer = new ResizeObserver(measure);

    observer.observe(container);

    container
      .querySelectorAll("[data-timeline-marker]")
      .forEach((marker) => observer.observe(marker));

    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Fill the path according to the user's scroll.
  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;

    if (!container || !path || !geometry) return;

    const length = path.getTotalLength();
    setPathLength(length);

    let frame = 0;

    function update() {
      if (!container || !path || !geometry) return;

      const rect = container.getBoundingClientRect();

      // Drawing point follows the viewport.
      const viewportPoint = window.innerHeight * 0.55;

      const targetY = Math.max(
        geometry.firstY,
        Math.min(geometry.lastY, viewportPoint - rect.top),
      );

      // Find the path distance corresponding
      // to the current vertical scroll position.
      let low = 0;
      let high = length;

      for (let i = 0; i < 18; i++) {
        const middle = (low + high) / 2;
        const point = path.getPointAtLength(middle);

        if (point.y < targetY) {
          low = middle;
        } else {
          high = middle;
        }
      }

      const nextLength = (low + high) / 2;

      setProgress(nextLength);
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [geometry]);

  return (
    <div ref={containerRef} className="relative">
      {geometry && (
        <svg
          aria-hidden="true"
          viewBox={`0 0 ${geometry.width} ${geometry.height}`}
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
        >
          {/* Full pale-green route */}
          <path
            d={geometry.path}
            fill="none"
            stroke="#CED8BE"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Scroll-filled dark-green route */}
          <path
            ref={pathRef}
            d={geometry.path}
            fill="none"
            stroke="#253D19"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={pathLength || 1}
            strokeDashoffset={Math.max(0, pathLength - progress)}
          />
        </svg>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
