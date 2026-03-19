"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const PROJECT_BG_COLORS = [
  "linear-gradient(135deg, #031a36, #0a3d6b)",
  "linear-gradient(135deg, #0a3d6b, #0e6ba8)",
  "linear-gradient(135deg, #020c1b, #031a36)",
  "linear-gradient(135deg, #0e6ba8, #0496ff)",
  "linear-gradient(135deg, #031a36, #2ec4b6)",
  "linear-gradient(135deg, #020c1b, #0a3d6b)",
];

const PROJECT_EMOJIS = ["🌊", "📊", "💬", "🎨", "🔍", "⚡"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
      <div
          className={cn(
              "section-reveal glass-card gradient-border relative overflow-hidden transition-all duration-500 cursor-pointer",
              project.featured ? "md:col-span-1" : ""
          )}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      >
        {/* Project thumbnail area */}
        <div
            className="h-44 relative overflow-hidden flex items-center justify-center"
            style={{ background: PROJECT_BG_COLORS[index % PROJECT_BG_COLORS.length] }}
        >
          {/* Animated wave inside card */}
          <div
              className="absolute inset-0 opacity-20 transition-opacity duration-500"
              style={{ opacity: hovered ? 0.35 : 0.15 }}
          >
            <svg
                className="absolute bottom-0 w-[200%] animate-wave-slow"
                viewBox="0 0 600 40"
                preserveAspectRatio="none"
            >
              <path
                  d="M0,20 C150,40 300,0 450,20 C525,30 600,10 600,20 L600,40 L0,40 Z"
                  fill="var(--c-foam)"
              />
            </svg>
          </div>

          {/* Project number + emoji */}
          <div className="relative z-10 text-center">
            <div className="text-5xl mb-2 transition-transform duration-500"
                 style={{ transform: hovered ? "scale(1.2) rotate(5deg)" : "scale(1)" }}>
              {PROJECT_EMOJIS[index % PROJECT_EMOJIS.length]}
            </div>
            <div
                className="font-mono text-xs tracking-widest"
                style={{ color: "rgba(86,207,225,0.6)" }}
            >
              PROJECT_{String(index + 1).padStart(2, "0")}
            </div>
          </div>

          {/* Featured badge */}
          {project.featured && (
              <div
                  className="absolute top-3 right-3 font-mono text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(0,245,212,0.15)",
                    color: "var(--c-biolum)",
                    border: "1px solid rgba(0,245,212,0.3)",
                  }}
              >
                ⭐ Featured
              </div>
          )}
        </div>

        {/* Card body */}
        <div className="p-6">
          <h3 className="font-display font-bold text-xl text-ocean-sand mb-2 group-hover:text-ocean-biolum">
            {project.title}
          </h3>
          <p className="text-ocean-mist text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
                <span
                    key={tag}
                    className="font-mono text-xs px-2.5 py-1 rounded-md"
                    style={{
                      background: "rgba(4,150,255,0.1)",
                      color: "var(--c-foam)",
                      border: "1px solid rgba(4,150,255,0.2)",
                    }}
                >
              {tag}
            </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.github && (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-ocean-mist hover:text-ocean-biolum text-sm font-medium transition-colors"
                >
                  <span>🐙</span> GitHub
                </a>
            )}
            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium transition-colors ml-auto px-4 py-2 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, var(--c-biolum), var(--c-shallow))",
                      color: "var(--c-abyss)",
                    }}
                >
                  Live Demo →
                </a>
            )}
          </div>
        </div>
      </div>
  );
}

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
      <SectionWrapper id="projects" className="bg-ocean-deep/20">
        <SectionHeading
            eyebrow="// projects"
            title="My Projects"
            subtitle="Every project is a new adventure — from a simple idea to a product used by thousands."
        />

        {projects.length === 0 ? (
            <div className="section-reveal text-center py-20">
              <div className="glass-card max-w-md mx-auto p-12 relative overflow-hidden">
                {/* background glow */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, var(--c-biolum), transparent 70%)" }}
                />
                <div className="text-6xl mb-5 animate-float">🌊</div>
                <h3 className="font-display text-2xl font-bold text-ocean-sand mb-3">
                  In progress...
                </h3>
                <p className="text-ocean-mist text-sm leading-relaxed mb-6">
                  Projects are brewing. The ocean of ideas is churning — expect something amazing soon!
                </p>
                <span
                    className="inline-block font-mono text-xs px-4 py-2 rounded-full"
                    style={{
                      background: "rgba(0,245,212,0.08)",
                      color: "var(--c-biolum)",
                      border: "1px solid rgba(0,245,212,0.2)",
                    }}
                >
              {"// coming soon 🚀"}
            </span>
              </div>
            </div>
        ) : (
            <>
              <div className="grid md:grid-cols-3 gap-6">
                {displayed.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>

              {projects.length > 3 && (
                  <div className="section-reveal mt-10 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                        style={{
                          background: "transparent",
                          color: "var(--c-foam)",
                          border: "1.5px solid rgba(86,207,225,0.3)",
                        }}
                    >
                      {showAll ? "↑ Tampilkan Lebih Sedikit" : `↓ Lihat ${projects.length - 3} Proyek Lainnya`}
                    </button>
                  </div>
              )}
            </>
        )}
      </SectionWrapper>
  );
}