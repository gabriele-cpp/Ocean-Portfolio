"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [visible,   setVisible]   = useState(false);
  const [activeId,  setActiveId]  = useState("");
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setVisible(y > 80); // navbar muncul setelah scroll 80px
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((n) => n.href.replace("#", ""));
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActiveId(e.target.id);
          });
        },
        { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
      <nav
          className={cn(
              "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
              scrolled
                  ? "py-3 bg-ocean-abyss/80 backdrop-blur-xl border-b border-ocean-foam/10 shadow-lg shadow-ocean-abyss/50"
                  : "py-6",
              visible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0 pointer-events-none"
          )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
              href="#"
              className="font-display text-xl font-bold"
              style={{ color: "var(--c-biolum)" }}
          >
            <span className="text-ocean-sand">{"<"}</span>
            GE
            <span className="text-ocean-sand">{"/>"}</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
                <li key={item.href}>
                  <a
                      href={item.href}
                      className={cn(
                          "nav-link text-sm font-medium tracking-wide transition-colors",
                          activeId === item.href.replace("#", "")
                              ? "text-ocean-biolum active"
                              : "text-ocean-mist hover:text-ocean-foam"
                      )}
                  >
                    {item.label}
                  </a>
                </li>
            ))}
          </ul>

          {/* CTA */}
          <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 biolum-pulse"
              style={{
                background: "linear-gradient(135deg, var(--c-biolum), var(--c-shallow))",
                color: "var(--c-abyss)",
              }}
          >
            Hire Me 🌊
          </a>

          {/* Mobile hamburger */}
          <button
              className="md:hidden text-ocean-foam"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
          >
            <div className={cn("w-6 flex flex-col gap-1.5 transition-all", menuOpen && "gap-0")}>
              <span className={cn("h-0.5 bg-ocean-foam rounded transition-all", menuOpen && "rotate-45 translate-y-1")} />
              <span className={cn("h-0.5 bg-ocean-foam rounded transition-all", menuOpen && "opacity-0")} />
              <span className={cn("h-0.5 bg-ocean-foam rounded transition-all", menuOpen && "-rotate-45 -translate-y-1")} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
            <div className="md:hidden mt-3 mx-6 glass-card p-4">
              <ul className="flex flex-col gap-3">
                {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                          href={item.href}
                          className="block py-2 px-4 text-ocean-mist hover:text-ocean-biolum transition-colors rounded-lg hover:bg-ocean-mid/20"
                          onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                ))}
              </ul>
            </div>
        )}
      </nav>
  );
}