"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types";

function TimelineCard({ exp, index }: { exp: Experience; index: number }) {
    const isLeft = index % 2 === 0;

    return (
        <div
            className={cn(
                "section-reveal relative grid md:grid-cols-2 gap-0 items-start",
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Left content (even) */}
            {isLeft ? (
                <>
                    <div className="md:pr-12 md:text-right pb-8 md:pb-0">
                        <TimelineContent exp={exp} />
                    </div>
                    <div className="hidden md:block" />
                </>
            ) : (
                <>
                    <div className="hidden md:block" />
                    <div className="md:pl-12 pb-8 md:pb-0">
                        <TimelineContent exp={exp} />
                    </div>
                </>
            )}

            {/* Center dot on the timeline (only visible md+) */}
            <div className="hidden md:flex absolute left-1/2 top-4 -translate-x-1/2 flex-col items-center z-10">
                <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl biolum-pulse"
                    style={{
                        background: exp.type === "work"
                            ? "linear-gradient(135deg, var(--c-biolum), var(--c-shallow))"
                            : "linear-gradient(135deg, var(--c-coral), var(--c-gold))",
                        boxShadow: exp.type === "work"
                            ? "0 0 20px rgba(0,245,212,0.4)"
                            : "0 0 20px rgba(255,107,107,0.4)",
                    }}
                >
                    {exp.type === "work" ? "💼" : "🎓"}
                </div>
            </div>

            {/* Mobile left dot */}
            <div
                className="md:hidden absolute left-0 top-4 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{
                    background: exp.type === "work"
                        ? "linear-gradient(135deg, var(--c-biolum), var(--c-shallow))"
                        : "linear-gradient(135deg, var(--c-coral), var(--c-gold))",
                }}
            >
                {exp.type === "work" ? "💼" : "🎓"}
            </div>
        </div>
    );
}

function TimelineContent({ exp }: { exp: Experience }) {
    return (
        <div className="glass-card glass-card-hover p-6 ml-12 md:ml-0">
            <div
                className="font-mono text-xs tracking-widest uppercase mb-2"
                style={{
                    color: exp.type === "work" ? "var(--c-biolum)" : "var(--c-coral)",
                }}
            >
                {exp.period}
            </div>
            <h3 className="font-display font-bold text-lg text-ocean-sand mb-1">
                {exp.role}
            </h3>
            <p className="text-ocean-foam text-sm font-medium mb-3">{exp.company}</p>
            <ul className="space-y-2">
                {exp.description.map((desc, i) => (
                    <li key={i} className="text-ocean-mist text-sm leading-relaxed flex items-start gap-2">
            <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{
                    background: exp.type === "work" ? "var(--c-biolum)" : "var(--c-coral)",
                }}
            />
                        {desc}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function ExperienceSection() {
    return (
        <SectionWrapper id="experience">
            <SectionHeading
                eyebrow="// experience"
                title="Timeline Experience"
                subtitle="I've just started my journey, so there's not much to show just yet."
            />

            <div className="relative">
                {/* Vertical timeline line (desktop) */}
                <div
                    className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 timeline-line"
                />

                <div className="space-y-10">
                    {experiences.map((exp, i) => (
                        <TimelineCard key={exp.id} exp={exp} index={i} />
                    ))}
                </div>

                {/* Timeline end marker */}
                <div className="section-reveal mt-10 flex justify-center">
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-lg biolum-pulse"
                        style={{
                            background: "linear-gradient(135deg, var(--c-mid), var(--c-deep))",
                            border: "2px solid rgba(0,245,212,0.4)",
                        }}
                    >
                        🌱
                    </div>
                </div>
                <p className="text-center text-ocean-mist text-sm mt-3 font-mono tracking-wider section-reveal">
                    // coming soon...
                </p>
            </div>
        </SectionWrapper>
    );
}