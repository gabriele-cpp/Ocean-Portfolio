"use client";

import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

const categories = [
  { key: "frontend", label: "Frontend",  emoji: "🎨" },
  { key: "backend",  label: "Backend",   emoji: "⚙️" },
  { key: "tools",    label: "Tools",     emoji: "🔧" },
  { key: "design",   label: "Design",    emoji: "✏️" },
] as const;

function SkillBar({ skill, animate }: { skill: Skill; animate: boolean }) {
  return (
      <div className="group">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">{skill.icon}</span>
            <span className="text-ocean-sand text-sm font-medium">{skill.name}</span>
          </div>
          <span
              className="font-mono text-xs font-bold"
              style={{ color: "var(--c-biolum)" }}
          >
          {skill.level}%
        </span>
        </div>
        {/* Track */}
        <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ background: "rgba(86,207,225,0.1)" }}
        >
          <div
              className={cn("skill-bar-fill", animate && "animate")}
              style={{ width: `${skill.level}%` }}
          />
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

  // reset animation on tab change
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
            title="My weapons"
            subtitle="Technologies and tools I use daily to build high-quality digital products."
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
                        activeCategory === cat.key
                            ? "scale-105"
                            : "glass-card text-ocean-mist hover:text-ocean-foam"
                    )}
                    style={
                      activeCategory === cat.key
                          ? {
                            background: "linear-gradient(135deg, var(--c-biolum), var(--c-shallow))",
                            color: "var(--c-abyss)",
                            boxShadow: "0 0 20px rgba(0,245,212,0.3)",
                          }
                          : {}
                    }
                >
                  <span>{cat.emoji}</span>
                  {cat.label}
                </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="section-reveal grid md:grid-cols-2 gap-8">
            {filtered.map((skill) => (
                <div key={skill.name} className="glass-card p-6">
                  <SkillBar skill={skill} animate={animate} />
                </div>
            ))}
          </div>

          {/* Ocean depth metaphor */}
          <div className="section-reveal mt-16 glass-card p-8 text-center relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-5"
                style={{
                  background:
                      "radial-gradient(ellipse at center, var(--c-biolum) 0%, transparent 70%)",
                }}
            />
            <p className="font-mono text-xs text-ocean-biolum tracking-widest uppercase mb-3">
              // my philosophy
            </p>
            <p className="font-display text-2xl text-ocean-sand font-bold mb-2">
              &quot;Like the ocean that never stops moving,
            </p>
            <p className="font-display text-2xl text-ocean-foam font-bold">
              I never stop learning and growing.&quot;</p>
            <div className="flex justify-center gap-8 mt-8 flex-wrap">
              {["Clean Code", "Performance First", "User-Centric", "Continuous Learning"].map(
                  (tag) => (
                      <span
                          key={tag}
                          className="font-mono text-xs px-3 py-1.5 rounded-full"
                          style={{
                            background: "rgba(0,245,212,0.08)",
                            color: "var(--c-biolum)",
                            border: "1px solid rgba(0,245,212,0.2)",
                          }}
                      >
                  {tag}
                </span>
                  )
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
  );
}