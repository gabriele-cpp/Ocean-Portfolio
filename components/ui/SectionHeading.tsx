interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="section-reveal mb-16 text-center">
      {eyebrow && (
        <p
          className="font-mono text-sm tracking-widest uppercase mb-3"
          style={{ color: "var(--c-biolum)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-display text-4xl md:text-5xl font-bold text-ocean-sand mb-4"
        style={{ lineHeight: 1.15 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-ocean-mist text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {/* decorative line */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, var(--c-biolum))" }} />
        <div className="w-2 h-2 rounded-full" style={{ background: "var(--c-biolum)", boxShadow: "0 0 8px var(--c-biolum)" }} />
        <div className="h-px w-16" style={{ background: "linear-gradient(90deg, var(--c-biolum), transparent)" }} />
      </div>
    </div>
  );
}
