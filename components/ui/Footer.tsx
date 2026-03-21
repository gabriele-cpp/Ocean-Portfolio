export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-ocean-foam/10 bg-ocean-abyss py-10 px-6">
      {/* Wave top decoration */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-12 pointer-events-none" style={{ transform: "translateY(-100%)" }}>
        <svg viewBox="0 0 1440 48" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z"
            fill="var(--c-abyss)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / name */}
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-xl font-bold">
              <span className="text-ocean-sand">{"<"}</span>
              <span style={{ color: "var(--c-biolum)" }}>GE</span>
              <span className="text-ocean-sand">{"/>"}</span>
            </a>
            <p className="text-ocean-mist text-xs mt-1 font-mono">
              Made with 🌊 &amp; ❤️ in Tangerang
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["#about","#skills","#projects","#experience","#contact"].map((href) => (
              <a
                key={href}
                href={href}
                className="text-ocean-mist hover:text-ocean-biolum text-sm transition-colors nav-link capitalize"
              >
                {href.replace("#", "")}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-ocean-mist/50 text-xs font-mono text-center md:text-right">
            © {year} Gabriel Emil<br />
            All rights reserved.
          </p>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 flex items-center justify-center gap-2 opacity-30"
          style={{ borderTop: "1px solid rgba(86,207,225,0.1)" }}
        >
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, var(--c-biolum))" }} />
          <span className="text-ocean-biolum text-xs font-mono">🌊 Ocean Portfolio v1.1</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, var(--c-biolum), transparent)" }} />
        </div>
      </div>
    </footer>
  );
}
