"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/lib/data";
import { SpotifyWidget } from "@/components/ui/SpotifyWidget";

// Fixed positions to avoid hydration mismatch
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

// Animated wave SVG — calm, layered ocean
function OceanWaves() {
    return (
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-48 pointer-events-none">
            {/* Moon/light reflection on water */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 blur-2xl opacity-20"
                style={{
                    height: "120px",
                    background: "linear-gradient(180deg, rgba(168,218,220,0.6), transparent)",
                    borderRadius: "50%",
                }}
            />
            {/* Wave 1 — deep, slow */}
            <svg
                className="absolute bottom-0 w-[200%] animate-wave-slow"
                viewBox="0 0 1440 90"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                style={{ opacity: 0.18 }}
            >
                <path
                    d="M0,50 C120,80 240,20 360,50 C480,80 600,20 720,50 C840,80 960,20 1080,50 C1200,80 1320,20 1440,50 L1440,90 L0,90 Z"
                    fill="#56cfe1"
                />
            </svg>
            {/* Wave 2 — mid */}
            <svg
                className="absolute bottom-0 w-[200%] animate-wave-medium"
                viewBox="0 0 1440 70"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                style={{ opacity: 0.25 }}
            >
                <path
                    d="M0,35 C180,65 360,5 540,35 C720,65 900,5 1080,35 C1260,65 1380,15 1440,35 L1440,70 L0,70 Z"
                    fill="#0e6ba8"
                />
            </svg>
            {/* Wave 3 — surface shimmer */}
            <svg
                className="absolute bottom-0 w-[200%] animate-wave-slow"
                viewBox="0 0 1440 50"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                style={{ opacity: 0.35, animationDirection: "reverse" }}
            >
                <path
                    d="M0,25 C200,45 400,5 600,25 C800,45 1000,5 1200,25 C1320,35 1400,15 1440,25 L1440,50 L0,50 Z"
                    fill="#0a3d6b"
                />
            </svg>
            {/* Wave 4 — foreground solid */}
            <svg
                className="absolute bottom-0 w-[200%] animate-wave-medium"
                viewBox="0 0 1440 36"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                style={{ animationDirection: "reverse" }}
            >
                <path
                    d="M0,18 C180,36 360,0 540,18 C720,36 900,0 1080,18 C1260,36 1380,6 1440,18 L1440,36 L0,36 Z"
                    fill="#020c1b"
                />
            </svg>
        </div>
    );
}

export function HeroSection() {
    const parallaxRef = useRef<HTMLDivElement>(null);
    const [timeData, setTimeData] = useState(() => getTimeData());

    function getTimeData() {
        const hour = new Date().getHours();
        const minute = new Date().getMinutes();
        const totalMinutes = hour * 60 + minute;

        // 0–360 arc across the sky based on time (6am = left, 6pm = right, midnight = below horizon)
        // Visible arc: 5:00 (300min) to 22:00 (1320min)
        const riseMinutes  = 5 * 60;   // 5:00 AM
        const setMinutes   = 22 * 60;  // 10:00 PM
        const totalArc     = setMinutes - riseMinutes;
        const elapsed      = Math.min(Math.max(totalMinutes - riseMinutes, 0), totalArc);
        const progress     = elapsed / totalArc; // 0 = rising, 1 = setting

        // Arc: travels from left (5%) to right (95%), peak height at midday (noon)
        const x = 5 + progress * 90; // % from left
        // Sine curve for height — peak at progress=0.5
        const y = 8 + (1 - Math.sin(progress * Math.PI)) * 55; // % from top

        const isDay   = hour >= 6 && hour < 18;
        const isDawn  = hour >= 5  && hour < 7;
        const isDusk  = hour >= 17 && hour < 19;
        const isNight = hour >= 19 || hour < 5;

        // Sky gradient based on time
        let skyGradient = "linear-gradient(180deg, #010914 0%, #021628 25%, #042340 55%, #063556 75%, #0a4a6e 100%)";
        if (isDawn)       skyGradient = "linear-gradient(180deg, #0d1b3e 0%, #1a2d5a 20%, #2d4a7a 40%, #8b4a6b 65%, #c4703a 85%, #0a4a6e 100%)";
        else if (isDay && hour < 12) skyGradient = "linear-gradient(180deg, #0a2d5e 0%, #1a4a8a 25%, #2d6aaa 55%, #1e5a8a 75%, #0e4a7a 100%)";
        else if (isDay)   skyGradient = "linear-gradient(180deg, #0d2d5a 0%, #1a4a8a 30%, #2d6aaa 60%, #1e5a8a 80%, #0e4a7a 100%)";
        else if (isDusk)  skyGradient = "linear-gradient(180deg, #0d1b3e 0%, #1a2d5a 20%, #3d3060 45%, #8b3a5a 65%, #c45a2a 85%, #0a4a6e 100%)";

        return { x, y, isDay, isDawn, isDusk, isNight, hour, skyGradient, progress };
    }

    useEffect(() => {
        const onScroll = () => {
            if (parallaxRef.current) {
                parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        // Update time every minute
        const timer = setInterval(() => setTimeData(getTimeData()), 60_000);

        return () => {
            window.removeEventListener("scroll", onScroll);
            clearInterval(timer);
        };
    }, []);

    const { x, y, isDay, isDawn, isDusk, isNight, skyGradient } = timeData;

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                background: skyGradient,
                transition: "background 2s ease",
            }}
        >

            {/* ── Dynamic Sun / Moon ── */}
            <div className="absolute pointer-events-none"
                 style={{ left:`${x}%`, top:`${y}%`, transform:"translate(-50%,-50%)", zIndex:2, transition:"left 60s linear, top 60s linear" }}>
                {isDay && !isDawn && !isDusk ? (
                    <>
                        <div className="absolute rounded-full" style={{ width:"140px",height:"140px",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"radial-gradient(circle, rgba(255,220,80,0.12) 0%, rgba(255,160,30,0.06) 50%, transparent 75%)",filter:"blur(12px)" }} />
                        <div className="absolute rounded-full" style={{ width:"80px",height:"80px",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"radial-gradient(circle, rgba(255,230,100,0.4) 0%, rgba(255,180,40,0.15) 60%, transparent 80%)",filter:"blur(6px)" }} />
                        <div className="relative rounded-full" style={{ width:"42px",height:"42px",background:"radial-gradient(circle at 35% 30%, #fff9c4 0%, #ffd54f 40%, #ffb300 100%)",boxShadow:"0 0 20px rgba(255,210,60,0.7), 0 0 50px rgba(255,160,30,0.3)" }} />
                    </>
                ) : (isDawn || isDusk) ? (
                    <>
                        <div className="absolute rounded-full" style={{ width:"160px",height:"160px",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"radial-gradient(circle, rgba(255,120,40,0.15) 0%, transparent 70%)",filter:"blur(16px)" }} />
                        <div className="absolute rounded-full" style={{ width:"90px",height:"90px",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"radial-gradient(circle, rgba(255,140,50,0.35) 0%, transparent 70%)",filter:"blur(8px)" }} />
                        <div className="relative rounded-full" style={{ width:"44px",height:"44px",background:"radial-gradient(circle at 35% 30%, #ffccaa 0%, #ff8c42 50%, #e05a1a 100%)",boxShadow:"0 0 20px rgba(255,120,40,0.6), 0 0 50px rgba(255,80,20,0.25)" }} />
                    </>
                ) : (
                    <>
                        <div className="absolute rounded-full" style={{ width:"180px",height:"180px",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"radial-gradient(circle, rgba(220,235,245,0.07) 0%, transparent 70%)",filter:"blur(16px)" }} />
                        <div className="absolute rounded-full" style={{ width:"80px",height:"80px",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"radial-gradient(circle, rgba(220,235,245,0.18) 0%, transparent 75%)",filter:"blur(8px)" }} />
                        <div className="relative rounded-full" style={{ width:"44px",height:"44px",background:"radial-gradient(circle at 35% 35%, #f0f4f8 0%, #d8e8f0 40%, #b8cfe0 100%)",boxShadow:"0 0 12px rgba(220,235,245,0.5), 0 0 30px rgba(168,218,220,0.2), inset -6px -4px 12px rgba(100,140,170,0.35)" }}>
                            <div className="absolute rounded-full" style={{ width:"7px",height:"7px",top:"22%",left:"28%",background:"rgba(150,180,200,0.3)",filter:"blur(1px)" }} />
                            <div className="absolute rounded-full" style={{ width:"5px",height:"5px",top:"52%",left:"55%",background:"rgba(150,180,200,0.2)",filter:"blur(1px)" }} />
                            <div className="absolute rounded-full" style={{ width:"4px",height:"4px",top:"65%",left:"30%",background:"rgba(150,180,200,0.2)",filter:"blur(0.5px)" }} />
                        </div>
                        <div className="absolute" style={{ top:"100%",left:"50%",transform:"translateX(-50%)",width:"2px",height:"100px",background:"linear-gradient(180deg, rgba(168,218,220,0.15), transparent)",filter:"blur(3px)" }} />
                    </>
                )}
            </div>

            {/* Stars — only at night/dawn/dusk */}
            {(isNight || isDawn || isDusk) && (
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 35 }).map((_, i) => (
                        <div key={i} className="absolute rounded-full animate-pulse-slow"
                             style={{
                                 left:           `${(i * 37 + 11) % 100}%`,
                                 top:            `${(i * 53 + 7)  % 65}%`,
                                 width:          `${(i % 3) + 1}px`,
                                 height:         `${(i % 3) + 1}px`,
                                 background:     i % 5 === 0 ? "rgba(168,218,220,0.8)" : "rgba(255,255,255,0.6)",
                                 opacity:        0.15 + (i % 4) * 0.08,
                                 animationDelay: `${(i * 0.7) % 5}s`,
                             }}
                        />
                    ))}
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">


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

                {/* Spotify widget */}
                <div className="flex justify-center mb-8">
                    <SpotifyWidget />
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a href="#projects" className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                       style={{ background: "linear-gradient(135deg, var(--c-biolum), var(--c-shallow))", color: "var(--c-abyss)", boxShadow: "0 0 30px rgba(0,245,212,0.3)" }}>
                        View Projects 🚀
                    </a>
                    <a href="#contact" className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
                       style={{ background: "transparent", color: "var(--c-biolum)", border: "1.5px solid var(--c-biolum)", boxShadow: "inset 0 0 20px rgba(0,245,212,0.05)" }}>
                        Contact Me ✉️
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