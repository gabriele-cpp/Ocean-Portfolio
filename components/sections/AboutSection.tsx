"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/data";

const stats = [
    { value: "1+",  label: "Years of Learning", icon: "⏱️" },
    { value: "∞",   label: "Curiosity",         icon: "🌊" },
    { value: "100", label: "Cups of Coffee",    icon: "☕" },
    { value: "0→1", label: "Journey Started",   icon: "🚀" },
];

const funFacts = [
    { icon: "🎵", text: "LNGSHOT4SHO" },
    { icon: "☕", text: "Anything. But i hate durian."    },
    { icon: "🌙", text: "Code for fun i guess?"       },
    { icon: "🐍", text: "Started with Python"       },
];

export function AboutSection() {
    return (
        <SectionWrapper id="about" className="bg-ocean-deep/30">
            <SectionHeading
                eyebrow="// about me"
                title="Diving Into the Code"
                subtitle="More than just a developer — I'm a digital explorer searching for creative solutions in every line of code."
            />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left — avatar + decoration */}
                <div className="section-reveal flex justify-center">
                    <div className="relative">
                        {/* Outer glow ring */}
                        <div
                            className="absolute -inset-4 rounded-3xl blur-xl opacity-30"
                            style={{ background: "linear-gradient(135deg, var(--c-biolum), var(--c-coral))" }}
                        />

                        {/* Avatar placeholder */}
                        <div
                            className="relative w-72 h-80 rounded-3xl flex flex-col items-center justify-center overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, var(--c-mid), var(--c-deep))",
                                border: "1px solid rgba(86,207,225,0.25)",
                            }}
                        >
                            {/* Animated ocean inside avatar */}
                            <div className="absolute inset-0 overflow-hidden opacity-20">
                                <svg className="absolute bottom-0 w-full animate-wave-slow" viewBox="0 0 300 60" preserveAspectRatio="none">
                                    <path d="M0,30 C75,60 150,0 225,30 C262,45 300,15 300,30 L300,60 L0,60 Z" fill="var(--c-foam)" />
                                </svg>
                            </div>

                            <div className="text-8xl mb-3 animate-float">👨‍💻</div>
                            <p className="font-mono text-xs text-ocean-biolum tracking-wider">
                                {personalInfo.location}
                            </p>

                            {/* Decorative corner lines */}
                            <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-ocean-biolum/50" />
                            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-ocean-biolum/50" />
                            <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-ocean-biolum/50" />
                            <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-ocean-biolum/50" />
                        </div>

                        {/* Status badge */}
                        <div className="absolute -bottom-6 -right-6 glass-card px-4 py-3">
                            <p className="font-mono text-xs text-ocean-biolum">Status</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-ocean-sand text-sm font-medium">Open to opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right — text content */}
                <div className="space-y-8">
                    <div className="section-reveal">
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
                            {funFacts.map((fact) => (
                                <div
                                    key={fact.text}
                                    className="glass-card glass-card-hover px-4 py-3 flex items-center gap-3"
                                >
                                    <span className="text-xl">{fact.icon}</span>
                                    <span className="text-ocean-mist text-sm">{fact.text}</span>
                                </div>
                            ))}
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
                            {/* Tooltip */}
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
                        className="section-reveal glass-card glass-card-hover text-center py-8 px-4"
                        style={{ transitionDelay: `${i * 80}ms` }}
                    >
                        <div className="text-3xl mb-2">{stat.icon}</div>
                        <div
                            className="font-display text-4xl font-black mb-1 glow-text"
                            style={{ color: "var(--c-biolum)" }}
                        >
                            {stat.value}
                        </div>
                        <div className="text-ocean-mist text-sm">{stat.label}</div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}