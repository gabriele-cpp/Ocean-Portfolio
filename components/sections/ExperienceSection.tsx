"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types";

function TimelineContent({ exp, isLeft }: { exp: Experience; isLeft: boolean }) {
    const [hovered, setHovered] = useState(false);
    const isEdu = exp.type === "education";

    return (
        <div
            className={cn("relative overflow-hidden rounded-2xl p-6 transition-all duration-400 cursor-default", isLeft ? "ml-12 md:ml-0" : "ml-12 md:ml-0")}
            style={{
                background: hovered ? "rgba(10,61,107,0.45)" : "rgba(10,61,107,0.2)",
                border: hovered
                    ? `1px solid ${isEdu ? "rgba(255,107,107,0.4)" : "rgba(0,245,212,0.4)"}`
                    : "1px solid rgba(86,207,225,0.1)",
                boxShadow: hovered
                    ? `0 20px 50px ${isEdu ? "rgba(255,107,107,0.08)" : "rgba(0,245,212,0.08)"}`
                    : "none",
                transform: hovered ? "translateY(-4px)" : "translateY(0)",
                transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Glow sweep */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                    background: isEdu
                        ? "radial-gradient(ellipse at top right, rgba(255,107,107,0.06), transparent 60%)"
                        : "radial-gradient(ellipse at top left, rgba(0,245,212,0.06), transparent 60%)",
                    opacity: hovered ? 1 : 0,
                }}
            />

            {/* Top accent bar */}
            <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                style={{
                    background: isEdu
                        ? "linear-gradient(90deg, transparent, var(--c-coral), transparent)"
                        : "linear-gradient(90deg, transparent, var(--c-biolum), transparent)",
                    opacity: hovered ? 1 : 0,
                }}
            />

            <div className="relative z-10">
                {/* Period badge */}
                <div className="flex items-center gap-2 mb-3">
          <span
              className="font-mono text-xs tracking-widest uppercase px-2.5 py-1 rounded-full"
              style={{
                  color: isEdu ? "var(--c-coral)" : "var(--c-biolum)",
                  background: isEdu ? "rgba(255,107,107,0.1)" : "rgba(0,245,212,0.1)",
                  border: isEdu ? "1px solid rgba(255,107,107,0.2)" : "1px solid rgba(0,245,212,0.2)",
              }}
          >
            {exp.period}
          </span>
                </div>

                <h3 className="font-display font-bold text-xl text-ocean-sand mb-1 transition-colors duration-300"
                    style={{ color: hovered ? "white" : "" }}>
                    {exp.role}
                </h3>
                <p className="text-sm font-semibold mb-4 transition-colors duration-300"
                   style={{ color: isEdu ? "var(--c-coral)" : "var(--c-foam)" }}>
                    {exp.company}
                </p>

                <ul className="space-y-2.5">
                    {exp.description.map((desc, i) => (
                        <li
                            key={i}
                            className="text-ocean-mist text-sm leading-relaxed flex items-start gap-2.5"
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
              <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                      background: isEdu ? "var(--c-coral)" : "var(--c-biolum)",
                      boxShadow: hovered
                          ? `0 0 6px ${isEdu ? "var(--c-coral)" : "var(--c-biolum)"}`
                          : "none",
                      transition: "box-shadow 0.3s ease",
                  }}
              />
                            <span className="transition-colors duration-300" style={{ color: hovered ? "var(--c-mist)" : "" }}>
                {desc}
              </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function TimelineCard({ exp, index }: { exp: Experience; index: number }) {
    const isLeft = index % 2 === 0;
    const isEdu  = exp.type === "education";

    return (
        <div
            className="section-reveal relative grid md:grid-cols-2 gap-0 items-start"
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            {isLeft ? (
                <>
                    <div className="md:pr-14 md:text-right pb-8 md:pb-0">
                        <TimelineContent exp={exp} isLeft={true} />
                    </div>
                    <div className="hidden md:block" />
                </>
            ) : (
                <>
                    <div className="hidden md:block" />
                    <div className="md:pl-14 pb-8 md:pb-0">
                        <TimelineContent exp={exp} isLeft={false} />
                    </div>
                </>
            )}

            {/* Center dot */}
            <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 flex-col items-center z-10">
                <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                    style={{
                        background: isEdu
                            ? "linear-gradient(135deg, var(--c-coral), var(--c-gold))"
                            : "linear-gradient(135deg, var(--c-biolum), var(--c-shallow))",
                        boxShadow: isEdu
                            ? "0 0 24px rgba(255,107,107,0.5), 0 0 50px rgba(255,107,107,0.2)"
                            : "0 0 24px rgba(0,245,212,0.5), 0 0 50px rgba(0,245,212,0.2)",
                        animation: "biolumPulse 3s ease-in-out infinite",
                    }}
                >
                    {isEdu ? "🎓" : "💼"}
                </div>
            </div>

            {/* Mobile dot */}
            <div
                className="md:hidden absolute left-0 top-4 w-9 h-9 rounded-full flex items-center justify-center text-sm"
                style={{
                    background: isEdu
                        ? "linear-gradient(135deg, var(--c-coral), var(--c-gold))"
                        : "linear-gradient(135deg, var(--c-biolum), var(--c-shallow))",
                }}
            >
                {isEdu ? "🎓" : "💼"}
            </div>
        </div>
    );
}

export function ExperienceSection() {
    return (
        <SectionWrapper id="experience">
            <SectionHeading
                eyebrow="// journey"
                title="Timeline Experience"
                subtitle="I've just started my journey, so there's not much to show just yet."
            />

            <div className="relative">
                {/* Animated flowing timeline line */}
                <div
                    className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 overflow-hidden"
                    style={{ background: "rgba(86,207,225,0.1)" }}
                >
                    {/* Flowing particle */}
                    <div
                        className="absolute w-full"
                        style={{
                            height: "80px",
                            background: "linear-gradient(180deg, transparent, var(--c-biolum), transparent)",
                            animation: "flowDown 3s ease-in-out infinite",
                        }}
                    />
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, i) => (
                        <TimelineCard key={exp.id} exp={exp} index={i} />
                    ))}
                </div>

                {/* End marker */}
                <div className="section-reveal mt-12 flex flex-col items-center gap-3">
                    <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                        style={{
                            background: "linear-gradient(135deg, var(--c-mid), var(--c-deep))",
                            border: "2px solid rgba(0,245,212,0.3)",
                            boxShadow: "0 0 20px rgba(0,245,212,0.15)",
                            animation: "biolumPulse 3s ease-in-out infinite",
                        }}
                    >
                        🌱
                    </div>
                    <p className="text-ocean-mist text-sm font-mono tracking-wider">
                        {"// and the adventure continues..."}
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}