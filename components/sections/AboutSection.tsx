"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/data";

const stats = [
    { value: "1+",  label: "Years of Learning", icon: "⏱️" },
    { value: "∞",   label: "Curiosity",         icon: "🌊" },
    { value: "1", label: "Cups of Coffee",    icon: "☕" },
    { value: "0→1", label: "Journey Started",   icon: "🚀" },
];

const funFacts = [
    { icon: "🎵", text: "LNGSHOT4HO" },
    { icon: "☕", text: "Coffee? Yes (im caffeine intolerance)."    },
    { icon: "🌙", text: "Code for fun i guess..."       },
    { icon: "🐍", text: "Started with Python (Ular)"       },
];

function UnderwaterPhotos() {
    const [hovered, setHovered] = useState<number | null>(null);

    const floatingPhotos = [
        { src: "/photos/photo1.jpeg", size: 180, x: 5,  y: 15,  delay: 0,   duration: 5.5, rotate: -4 },
        { src: "/photos/photo2.jpeg", size: 155, x: 52, y: 5,   delay: 1.2, duration: 6.2, rotate: 3  },
        { src: "/photos/photo3.jpeg", size: 145, x: 25, y: 52,  delay: 0.6, duration: 5.0, rotate: -2 },
        { src: "/photos/photo4.jpg", size: 165, x: 60, y: 48,  delay: 1.8, duration: 6.8, rotate: 5  },
        { src: "/photos/photo5.jpg", size: 140, x: 38, y: 25,  delay: 2.4, duration: 4.8, rotate: -6 },
    ];

    return (
        <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{
                height: "460px",
                background: "linear-gradient(180deg, #021628 0%, #042340 40%, #063556 70%, #0a4a6e 100%)",
                border: "1px solid rgba(86,207,225,0.15)",
            }}
        >
            {/* Caustic light rays from above */}
            {[...Array(5)].map((_, i) => (
                <div
                    key={`ray-${i}`}
                    className="absolute top-0 pointer-events-none"
                    style={{
                        left:       `${15 + i * 18}%`,
                        width:      `${20 + i * 5}px`,
                        height:     "220px",
                        background: "linear-gradient(180deg, rgba(168,218,220,0.08) 0%, transparent 100%)",
                        transform:  `rotate(${-8 + i * 4}deg)`,
                        transformOrigin: "top center",
                        animation:  `lightRay ${3 + i * 0.7}s ease-in-out ${i * 0.4}s infinite alternate`,
                        filter:     "blur(4px)",
                    }}
                />
            ))}

            {/* Floating bubbles */}
            {[...Array(12)].map((_, i) => (
                <div
                    key={`bubble-${i}`}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        left:    `${(i * 23 + 7) % 90}%`,
                        bottom:  `${(i * 17 + 5) % 40}%`,
                        width:   `${(i % 4) + 3}px`,
                        height:  `${(i % 4) + 3}px`,
                        background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(86,207,225,0.2))",
                        border:  "1px solid rgba(86,207,225,0.3)",
                        animation: `bubbleFloat ${4 + (i % 3)}s ease-in ${(i * 0.6) % 4}s infinite`,
                    }}
                />
            ))}

            {/* Floating photos */}
            {floatingPhotos.map((photo, i) => (
                <div
                    key={i}
                    className="absolute"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                        left:      `${photo.x}%`,
                        top:       `${photo.y}%`,
                        width:     `${photo.size}px`,
                        height:    `${photo.size}px`,
                        animation: `underwaterFloat ${photo.duration}s ease-in-out ${photo.delay}s infinite`,
                        transform: `rotate(${photo.rotate}deg)`,
                        zIndex:    hovered === i ? 20 : 10,
                        transition: "z-index 0s, filter 0.3s ease, transform 0.4s ease",
                        cursor:    "pointer",
                    }}
                >
                    {/* Photo with underwater frame */}
                    <div
                        className="w-full h-full overflow-hidden"
                        style={{
                            borderRadius: "12px",
                            border:       hovered === i
                                ? "2px solid rgba(0,245,212,0.7)"
                                : "2px solid rgba(86,207,225,0.2)",
                            boxShadow:    hovered === i
                                ? "0 0 30px rgba(0,245,212,0.3), 0 8px 32px rgba(0,0,0,0.5)"
                                : "0 8px 32px rgba(0,0,0,0.4), inset 0 0 20px rgba(0,0,0,0.2)",
                            transition:   "border 0.3s ease, box-shadow 0.3s ease",
                            transform:    hovered === i ? "scale(1.08) rotate(0deg)" : "scale(1)",
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={photo.src}
                            alt={`photo ${i + 1}`}
                            style={{
                                width:      "100%",
                                height:     "100%",
                                objectFit:  "cover",
                                display:    "block",
                                filter:     hovered === i
                                    ? "contrast(1.1) saturate(1.1) brightness(1.05)"
                                    : "contrast(0.95) saturate(0.85) brightness(0.8) hue-rotate(5deg)",
                                transition: "filter 0.3s ease",
                            }}
                        />

                        {/* Underwater tint overlay */}
                        <div
                            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                            style={{
                                background: "linear-gradient(135deg, rgba(4,100,160,0.25), rgba(0,40,80,0.15))",
                                opacity:    hovered === i ? 0 : 1,
                            }}
                        />

                        {/* Shimmer on hover */}
                        <div
                            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                            style={{
                                background: "linear-gradient(135deg, rgba(0,245,212,0.06), transparent 60%)",
                                opacity:    hovered === i ? 1 : 0,
                            }}
                        />
                    </div>
                </div>
            ))}

            {/* Surface water effect at top */}
            <div
                className="absolute top-0 left-0 right-0 pointer-events-none"
                style={{
                    height:     "40px",
                    background: "linear-gradient(180deg, rgba(10,74,110,0.6) 0%, transparent 100%)",
                }}
            />

            {/* Bottom depth fog */}
            <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                    height:     "60px",
                    background: "linear-gradient(0deg, rgba(2,22,40,0.7) 0%, transparent 100%)",
                }}
            />
        </div>
    );
}

export function AboutSection() {
    return (
        <SectionWrapper id="about" className="bg-ocean-deep/30">
            <SectionHeading
                eyebrow="// about me"
                title="Diving Into the Code"
                subtitle="More than just a developer — I'm a digital explorer searching for creative solutions in every line of code."
            />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left — underwater floating photos */}
                <div className="section-reveal-left w-full">
                    <UnderwaterPhotos />
                </div>

                {/* Right — text content */}
                <div className="section-reveal-right space-y-7">
                    <div className="section-reveal relative pl-4">
                        {/* Vertical accent line */}
                        <div
                            className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                            style={{ background: "linear-gradient(180deg, var(--c-biolum), transparent)" }}
                        />
                        <p className="text-ocean-mist leading-relaxed text-base mb-4">
                            I started my coding journey in high school and instantly fell in love with programming.
                            Like the ocean — vast, deep, and full of mysteries — every new technology is a new world waiting to be explored.
                        </p>
                        <p className="text-ocean-mist leading-relaxed text-base">
                            I&apos;m currently studying Informatics at Universitas Pelita Harapan, building my skills one project at a time
                            and chasing the dream of crafting digital experiences that truly matter.
                        </p>
                    </div>

                    {/* Fun facts */}
                    <div className="section-reveal">
                        <p className="font-mono text-xs text-ocean-biolum tracking-widest uppercase mb-4">Fun Facts</p>
                        <div className="grid grid-cols-2 gap-3">
                            {funFacts.map((fact, i) => (
                                <div
                                    key={fact.text}
                                    className="relative overflow-hidden group px-4 py-3 flex items-center gap-3 rounded-xl cursor-default"
                                    style={{
                                        background: "rgba(10,61,107,0.2)",
                                        border: "1px solid rgba(86,207,225,0.12)",
                                        transition: "all 0.3s ease",
                                        transitionDelay: `${i * 60}ms`,
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget;
                                        el.style.background = "rgba(10,61,107,0.4)";
                                        el.style.border = "1px solid rgba(0,245,212,0.35)";
                                        el.style.transform = "translateY(-2px)";
                                        el.style.boxShadow = "0 8px 24px rgba(0,245,212,0.08)";
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget;
                                        el.style.background = "rgba(10,61,107,0.2)";
                                        el.style.border = "1px solid rgba(86,207,225,0.12)";
                                        el.style.transform = "translateY(0)";
                                        el.style.boxShadow = "none";
                                    }}
                                >
                                    {/* Glow sweep on hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(0,245,212,0.04), transparent 60%)",
                                        }}
                                    />
                                    <span className="text-xl relative z-10">{fact.icon}</span>
                                    <span className="text-ocean-mist text-sm relative z-10 group-hover:text-ocean-foam transition-colors duration-300">{fact.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Status badge */}
                    <div className="section-reveal">
                        <div
                            className="inline-flex items-center gap-3 px-4 py-3 rounded-xl"
                            style={{
                                background: "rgba(10,61,107,0.25)",
                                border: "1px solid rgba(0,245,212,0.2)",
                                boxShadow: "0 0 20px rgba(0,245,212,0.05)",
                            }}
                        >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
                            <span className="text-ocean-sand text-sm font-medium">Open to opportunities</span>
                            <span className="font-mono text-xs text-ocean-mist">· {personalInfo.location}</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="section-reveal">
                        <div className="relative group inline-block">
                            <a
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 cursor-not-allowed"
                                style={{
                                    background: "linear-gradient(135deg, var(--c-mid), var(--c-surface))",
                                    border: "1px solid rgba(86,207,225,0.3)",
                                    color: "var(--c-foam)",
                                    boxShadow: "0 0 20px rgba(14,107,168,0.3)",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget;
                                    el.style.background = "linear-gradient(135deg, #7f1d1d, #dc2626)";
                                    el.style.border = "1px solid rgba(255,100,100,0.5)";
                                    el.style.color = "#fca5a5";
                                    el.style.boxShadow = "0 0 30px rgba(220,38,38,0.4)";
                                    el.querySelector("span")!.textContent = "😅";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget;
                                    el.style.background = "linear-gradient(135deg, var(--c-mid), var(--c-surface))";
                                    el.style.border = "1px solid rgba(86,207,225,0.3)";
                                    el.style.color = "var(--c-foam)";
                                    el.style.boxShadow = "0 0 20px rgba(14,107,168,0.3)";
                                    el.querySelector("span")!.textContent = "📄";
                                }}
                            >
                                <span>📄</span> Download CV
                            </a>
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: "rgba(127,29,29,0.9)",
                                    color: "#fca5a5",
                                    border: "1px solid rgba(220,38,38,0.4)",
                                }}
                            >
                                CV not available yet 🙈
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats row */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div
                        key={stat.label}
                        className="section-reveal relative overflow-hidden text-center py-8 px-4 rounded-2xl group cursor-default"
                        style={{
                            background: "rgba(10,61,107,0.2)",
                            border: "1px solid rgba(86,207,225,0.1)",
                            transitionDelay: `${i * 80}ms`,
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "rgba(10,61,107,0.35)";
                            el.style.border = "1px solid rgba(0,245,212,0.3)";
                            el.style.transform = "translateY(-4px)";
                            el.style.boxShadow = "0 16px 40px rgba(0,245,212,0.08)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "rgba(10,61,107,0.2)";
                            el.style.border = "1px solid rgba(86,207,225,0.1)";
                            el.style.transform = "translateY(0)";
                            el.style.boxShadow = "none";
                        }}
                    >
                        {/* Background glow on hover */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                            style={{
                                background: "radial-gradient(ellipse at center, rgba(0,245,212,0.06) 0%, transparent 70%)",
                            }}
                        />
                        {/* Bottom wave accent */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: "linear-gradient(90deg, transparent, var(--c-biolum), transparent)",
                            }}
                        />
                        <div className="text-3xl mb-3 relative z-10">{stat.icon}</div>
                        <div
                            className="font-display text-4xl font-black mb-1 relative z-10"
                            style={{ color: "var(--c-biolum)", textShadow: "0 0 20px rgba(0,245,212,0.3)" }}
                        >
                            {stat.value}
                        </div>
                        <div className="text-ocean-mist text-sm relative z-10">{stat.label}</div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}