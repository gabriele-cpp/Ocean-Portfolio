"use client";

import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

const categories = [
    { key: "frontend", label: "Frontend", emoji: "🎨" },
    { key: "backend",  label: "Backend",  emoji: "⚙️" },
    { key: "tools",    label: "Tools",    emoji: "🔧" },
    { key: "design",   label: "Design",   emoji: "✏️" },
] as const;

function SkillBar({ skill, animate }: { skill: Skill; animate: boolean }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="group relative overflow-hidden rounded-xl p-5 cursor-default transition-all duration-300"
            style={{
                background: hovered ? "rgba(10,61,107,0.45)" : "rgba(10,61,107,0.2)",
                border: hovered ? "1px solid rgba(0,245,212,0.3)" : "1px solid rgba(86,207,225,0.1)",
                boxShadow: hovered ? "0 8px 30px rgba(0,245,212,0.07)" : "none",
                transform: hovered ? "translateY(-2px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Background glow on hover */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                    background: "radial-gradient(ellipse at top left, rgba(0,245,212,0.05), transparent 60%)",
                    opacity: hovered ? 1 : 0,
                }}
            />

            <div className="flex items-center justify-between mb-3 relative z-10">
                <div className="flex items-center gap-2.5">
          <span
              className="text-xl transition-transform duration-300"
              style={{ transform: hovered ? "scale(1.2) rotate(-5deg)" : "scale(1)" }}
          >
            {skill.icon}
          </span>
                    <span className="text-ocean-sand text-sm font-semibold">{skill.name}</span>
                </div>
                <span
                    className="font-mono text-xs font-bold px-2 py-0.5 rounded-full transition-all duration-300"
                    style={{
                        color: "var(--c-biolum)",
                        background: hovered ? "rgba(0,245,212,0.12)" : "transparent",
                        border: hovered ? "1px solid rgba(0,245,212,0.2)" : "1px solid transparent",
                    }}
                >
          {skill.level}%
        </span>
            </div>

            {/* Bar track */}
            <div
                className="relative h-2 rounded-full overflow-hidden"
                style={{ background: "rgba(86,207,225,0.08)" }}
            >
                {/* Bar fill */}
                <div
                    className={cn("skill-bar-fill", animate && "animate")}
                    style={{ width: `${skill.level}%` }}
                />
                {/* Particle dots at the tip when filled */}
                {animate && (
                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-1000"
                        style={{
                            left: `calc(${skill.level}% - 4px)`,
                            background: "var(--c-biolum)",
                            boxShadow: "0 0 8px var(--c-biolum), 0 0 16px rgba(0,245,212,0.5)",
                            animation: "biolumPulse 2s ease-in-out infinite",
                        }}
                    />
                )}
            </div>

            {/* Depth label */}
            <div className="mt-2 flex justify-between items-center relative z-10">
        <span className="font-mono text-xs" style={{ color: "rgba(168,218,220,0.35)" }}>
          {skill.level >= 85 ? "deep waters" : skill.level >= 70 ? "mid ocean" : "exploring"}
        </span>
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1 rounded-full transition-all duration-300"
                            style={{
                                height: "6px",
                                background: i < Math.round(skill.level / 20)
                                    ? "var(--c-biolum)"
                                    : "rgba(86,207,225,0.15)",
                                opacity: i < Math.round(skill.level / 20) ? 1 : 0.4,
                                boxShadow: i < Math.round(skill.level / 20) ? "0 0 4px var(--c-biolum)" : "none",
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState<string>("frontend");
    const [animate, setAnimate] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        setAnimate(false);
        const t = setTimeout(() => setAnimate(true), 50);
        return () => clearTimeout(t);
    }, [activeCategory]);

    const filtered = skills.filter((s) => s.category === activeCategory);

    return (
        <SectionWrapper id="skills">
            <SectionHeading
                eyebrow="// skills"
                title="My Arsenal"
                subtitle="Technologies and tools I use to build high-quality digital products."
            />

            <div ref={sectionRef}>
                {/* Category tabs */}
                <div className="section-reveal flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={cn(
                                "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                                activeCategory === cat.key ? "scale-105" : "text-ocean-mist hover:text-ocean-foam"
                            )}
                            style={
                                activeCategory === cat.key
                                    ? {
                                        background: "linear-gradient(135deg, var(--c-biolum), var(--c-shallow))",
                                        color: "var(--c-abyss)",
                                        boxShadow: "0 0 20px rgba(0,245,212,0.3)",
                                    }
                                    : {
                                        background: "rgba(10,61,107,0.2)",
                                        border: "1px solid rgba(86,207,225,0.12)",
                                    }
                            }
                        >
                            <span>{cat.emoji}</span>
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Skills grid */}
                <div className="section-reveal grid md:grid-cols-2 gap-4">
                    {filtered.map((skill) => (
                        <SkillBar key={skill.name} skill={skill} animate={animate} />
                    ))}
                </div>

                {/* Philosophy card — animated */}
                <div
                    className="section-reveal mt-16 p-8 text-center relative overflow-hidden rounded-2xl"
                    style={{
                        background: "rgba(10,61,107,0.2)",
                        border: "1px solid rgba(86,207,225,0.12)",
                    }}
                >
                    {/* Animated wave background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                        <svg className="absolute bottom-0 w-[200%] animate-wave-slow" viewBox="0 0 1440 60" preserveAspectRatio="none">
                            <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="var(--c-biolum)" />
                        </svg>
                        <svg className="absolute bottom-0 w-[200%] animate-wave-medium" viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ opacity: 0.5 }}>
                            <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1440,10 1440,20 L1440,40 L0,40 Z" fill="var(--c-shallow)" />
                        </svg>
                    </div>

                    {/* Radial glow */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: "radial-gradient(ellipse at center, rgba(0,245,212,0.06) 0%, transparent 65%)" }}
                    />

                    <p className="font-mono text-xs text-ocean-biolum tracking-widest uppercase mb-4 relative z-10">
                        {"// my philosophy"}
                    </p>
                    <p className="font-display text-2xl md:text-3xl text-ocean-sand font-bold mb-1 relative z-10">
                        &quot;Like the ocean that never stops moving,
                    </p>
                    <p className="font-display text-2xl md:text-3xl text-ocean-foam font-bold mb-8 relative z-10">
                        I never stop learning and growing.&quot;
                    </p>

                    <div className="flex justify-center gap-3 mt-2 flex-wrap relative z-10">
                        {["Clean Code", "Performance First", "User-Centric", "Continuous Learning"].map((tag, i) => (
                            <span
                                key={tag}
                                className="font-mono text-xs px-4 py-2 rounded-full transition-all duration-300 cursor-default hover:scale-105"
                                style={{
                                    background: "rgba(0,245,212,0.08)",
                                    color: "var(--c-biolum)",
                                    border: "1px solid rgba(0,245,212,0.2)",
                                    animationDelay: `${i * 0.2}s`,
                                    boxShadow: "0 0 0 rgba(0,245,212,0)",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(0,245,212,0.15)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(0,245,212,0.2)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(0,245,212,0.08)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,245,212,0)";
                                }}
                            >
                {tag}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}