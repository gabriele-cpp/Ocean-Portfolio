"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/lib/data";

// Simple typing animation without external deps
const TAGLINES = personalInfo.taglines;

function TypingText() {
  const [text,      setText]      = useState("");
  const [tagIdx,    setTagIdx]    = useState(0);
  const [phase,     setPhase]     = useState<"typing"|"pause"|"deleting">("typing");
  const [charIdx,   setCharIdx]   = useState(0);

  useEffect(() => {
    const current = TAGLINES[tagIdx];

    if (phase === "typing") {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setText(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pause"), 1800);
        return () => clearTimeout(t);
      }
    }

    if (phase === "pause") {
      const t = setTimeout(() => setPhase("deleting"), 600);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setText(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        }, 35);
        return () => clearTimeout(t);
      } else {
        setTagIdx(i => (i + 1) % TAGLINES.length);
        setPhase("typing");
      }
    }
  }, [phase, charIdx, tagIdx]);

  return (
    <span>
      {text}
      <span
        className="inline-block w-0.5 h-6 ml-0.5 align-middle"
        style={{
          background: "var(--c-biolum)",
          boxShadow: "0 0 8px var(--c-biolum)",
          animation: "pulse 1s steps(1) infinite",
        }}
      />
    </span>
  );
}

// Animated wave SVG
function OceanWaves() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-32 pointer-events-none">
      {/* Wave 1 */}
      <svg
        className="absolute bottom-0 w-[200%] animate-wave-slow"
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ opacity: 0.3 }}
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,0 1440,40 L1440,80 L0,80 Z"
          fill="var(--c-mid)"
        />
      </svg>
      {/* Wave 2 */}
      <svg
        className="absolute bottom-0 w-[200%] animate-wave-medium"
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ opacity: 0.5 }}
      >
        <path
          d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 C1350,50 1440,20 1440,30 L1440,60 L0,60 Z"
          fill="var(--c-deep)"
        />
      </svg>
      {/* Wave 3 solid */}
      <svg
        className="absolute bottom-0 w-[200%] animate-wave-fast"
        viewBox="0 0 1440 40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C240,40 480,0 720,20 C960,40 1200,0 1440,20 L1440,40 L0,40 Z"
          fill="var(--c-abyss)"
        />
      </svg>
    </div>
  );
}

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020c1b 0%, #031a36 50%, #0a3d6b 100%)" }}
    >
      {/* Parallax background orbs */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "var(--c-biolum)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ background: "var(--c-coral)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-5"
          style={{ background: "var(--c-shallow)" }}
        />
      </div>

      {/* Stars / plankton dots */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse-slow"
            style={{
              left:   `${Math.random() * 100}%`,
              top:    `${Math.random() * 70}%`,
              width:  `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: "var(--c-biolum)",
              opacity: Math.random() * 0.6 + 0.1,
              animationDelay: `${Math.random() * 4}s`,
              boxShadow: "0 0 6px var(--c-biolum)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Floating fish 🐟 */}
        <div className="absolute -left-12 top-0 text-3xl opacity-40 fish hidden lg:block">🐠</div>
        <div
          className="absolute -right-16 bottom-0 text-2xl opacity-30 hidden lg:block"
          style={{ animation: "swim 12s ease-in-out 4s infinite" }}
        >
          🐡
        </div>

        <p
          className="font-mono text-sm tracking-[0.3em] uppercase mb-6"
          style={{ color: "var(--c-biolum)" }}
        >
          &gt; Welcome to my portfolio
        </p>

        <h1
          className="font-display font-black leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
        >
          <span className="block text-ocean-sand">Bonjour, je suis</span>
          <span
            className="block glow-text"
            style={{
              background: "linear-gradient(135deg, var(--c-biolum), var(--c-foam), var(--c-shallow))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {personalInfo.name}
          </span>
        </h1>

        <div
          className="text-xl md:text-2xl font-medium mb-8 h-8"
          style={{ color: "var(--c-foam)" }}
        >
          <TypingText />
        </div>

        <p className="text-ocean-mist text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          {personalInfo.bio}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--c-biolum), var(--c-shallow))",
              color: "var(--c-abyss)",
              boxShadow: "0 0 30px rgba(0,245,212,0.3)",
            }}
          >
            Projects 🚀
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              background: "transparent",
              color: "var(--c-biolum)",
              border: "1.5px solid var(--c-biolum)",
              boxShadow: "inset 0 0 20px rgba(0,245,212,0.05)",
            }}
          >
            Message Me ✉️
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-50">
          <span className="font-mono text-xs text-ocean-mist tracking-widest">SCROLL</span>
          <div
            className="w-0.5 h-10 mx-auto"
            style={{
              background: "linear-gradient(180deg, var(--c-biolum), transparent)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <OceanWaves />
    </section>
  );
}
