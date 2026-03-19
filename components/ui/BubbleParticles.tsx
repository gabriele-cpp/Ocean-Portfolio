"use client";

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function BubbleParticles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generated: Bubble[] = Array.from({ length: 18 }, (_, i) => ({
      id:       i,
      x:        Math.random() * 100,
      size:     Math.random() * 20 + 6,
      duration: Math.random() * 10 + 6,
      delay:    Math.random() * 8,
      opacity:  Math.random() * 0.4 + 0.1,
    }));
    setBubbles(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            left:        `${b.x}%`,
            width:       `${b.size}px`,
            height:      `${b.size}px`,
            opacity:      b.opacity,
            "--duration": `${b.duration}s`,
            "--delay":    `${b.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
