"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

// Wave-like stagger: elements flow in like ocean ripples
// Each element has a slight delay that creates a cascading wave effect
function getWaveDelay(index: number): number {
  // Non-linear stagger — faster at start, then settles like a wave
  return index === 0 ? 0 : Math.pow(index, 0.7) * 110;
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const revealEls = el.querySelectorAll(
                ".section-reveal, .section-reveal-left, .section-reveal-right"
            );

            revealEls.forEach((child, i) => {
              const delay = getWaveDelay(i);
              setTimeout(() => {
                child.classList.add("visible");
              }, delay);
            });
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
      <section
          ref={ref}
          id={id}
          className={cn("relative z-20 py-24 px-6", className)}
      >
        <div className="max-w-6xl mx-auto">{children}</div>
      </section>
  );
}