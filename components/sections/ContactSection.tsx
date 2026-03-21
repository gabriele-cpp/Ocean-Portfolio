"use client";

import { useState, type FormEvent } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

const socialLinks = [
  { icon: "🐙", label: "GitHub",   href: "https://github.com/gabriele-cpp",    handle: "@gabriele-cpp",        color: "rgba(255,255,255,0.15)"  },
  { icon: "💼", label: "LinkedIn", href: "https://linkedin.com",               handle: "Gabriel Emil",          color: "rgba(10,102,194,0.2)"    },
  { icon: "🐦", label: "X",        href: "https://twitter.com/airaryyll",      handle: "@airaryyll",            color: "rgba(255,255,255,0.1)"   },
  { icon: "📧", label: "Email",    href: `mailto:${personalInfo.email}`,       handle: personalInfo.email,      color: "rgba(0,245,212,0.1)"     },
];

function InputField({
                      label, name, type = "text", placeholder, required, isTextarea,
                    }: {
  label: string; name: string; type?: string;
  placeholder: string; required?: boolean; isTextarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  const style = {
    background:  focused ? "rgba(10,61,107,0.35)" : "rgba(10,61,107,0.2)",
    border:      focused ? "1px solid rgba(0,245,212,0.5)"  : "1px solid rgba(86,207,225,0.12)",
    boxShadow:   focused ? "0 0 20px rgba(0,245,212,0.08)" : "none",
    transition:  "all 0.3s ease",
    color:       "var(--c-sand)",
    outline:     "none",
    width:       "100%",
    padding:     "12px 16px",
    borderRadius: "12px",
    fontSize:    "14px",
    fontFamily:  "var(--font-body)",
  };

  return (
      <div className="space-y-2">
        <label
            className="block font-mono text-xs tracking-wider uppercase transition-colors duration-300"
            style={{ color: focused ? "var(--c-biolum)" : "rgba(0,245,212,0.6)" }}
        >
          {label} {required && <span style={{ color: "var(--c-coral)" }}>*</span>}
        </label>
        {isTextarea ? (
            <textarea
                name={name}
                rows={5}
                placeholder={placeholder}
                required={required}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{ ...style, resize: "none" }}
                className="placeholder:text-ocean-mist/30"
            />
        ) : (
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={style}
                className="placeholder:text-ocean-mist/30"
            />
        )}
      </div>
  );
}

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [btnHovered, setBtnHovered] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name:    formData.get("name"),
        email:   formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }),
    });
    if (res.ok) {
      setFormState("success");
      setTimeout(() => setFormState("idle"), 4000);
    } else {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
      <SectionWrapper id="contact" className="bg-ocean-deep/30">
        <SectionHeading
            eyebrow="// contact"
            title="Let's Work Together!"
            subtitle="Have an exciting project? Or just want to talk about tech? I'm always open to connect."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            <div className="section-reveal">
              <p className="text-ocean-mist leading-relaxed">
                I&apos;m currently available for freelance projects or full-time roles.
                Whatever you need, don&apos;t hesitate to get in touch!
              </p>
            </div>

            {/* Social links */}
            <div className="section-reveal space-y-2.5">
              <p className="font-mono text-xs text-ocean-biolum tracking-widest uppercase mb-4">
                Find Me Online
              </p>
              {socialLinks.map((link) => (
                  <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300"
                      style={{
                        background: "rgba(10,61,107,0.2)",
                        border: "1px solid rgba(86,207,225,0.1)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.background = link.color;
                        el.style.border = "1px solid rgba(0,245,212,0.25)";
                        el.style.transform = "translateX(6px)";
                        el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.background = "rgba(10,61,107,0.2)";
                        el.style.border = "1px solid rgba(86,207,225,0.1)";
                        el.style.transform = "translateX(0)";
                        el.style.boxShadow = "none";
                      }}
                  >
                <span className="text-xl w-8 text-center transition-transform duration-300 group-hover:scale-125">
                  {link.icon}
                </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-ocean-sand text-sm font-semibold group-hover:text-white transition-colors">
                        {link.label}
                      </p>
                      <p className="text-ocean-mist text-xs font-mono truncate">{link.handle}</p>
                    </div>
                    <span
                        className="text-ocean-mist/30 group-hover:text-ocean-biolum transition-all duration-300 group-hover:translate-x-1"
                        style={{ display: "inline-block" }}
                    >
                  →
                </span>
                  </a>
              ))}
            </div>

            {/* Availability card */}
            <div
                className="section-reveal relative overflow-hidden rounded-2xl p-5"
                style={{
                  background: "rgba(10,61,107,0.25)",
                  border: "1px solid rgba(0,245,212,0.2)",
                }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <svg className="absolute bottom-0 w-[200%] animate-wave-slow" viewBox="0 0 600 30" preserveAspectRatio="none">
                  <path d="M0,15 C150,30 300,0 450,15 C525,22 600,8 600,15 L600,30 L0,30 Z" fill="var(--c-biolum)" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                  <span className="font-mono text-xs text-ocean-biolum tracking-widest uppercase">
                  Available for Work
                </span>
                </div>
                <p className="text-ocean-mist text-sm">
                  Not gonna responding <span className="text-ocean-sand font-bold">24 hours</span>.
                  Time Zone: <span className="text-ocean-sand font-bold">WIB (UTC+7)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 section-reveal">
            <div
                className="relative overflow-hidden rounded-2xl p-8"
                style={{
                  background: "rgba(10,61,107,0.2)",
                  border: "1px solid rgba(86,207,225,0.12)",
                }}
            >
              {/* Corner glow */}
              <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                  style={{ background: "rgba(0,245,212,0.05)" }}
              />

              {formState === "success" ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4 animate-float">🎉</div>
                    <h3 className="font-display text-2xl font-bold text-ocean-sand mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-ocean-mist">
                      Thank you! I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
              ) : formState === "error" ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">😵</div>
                    <h3 className="font-display text-2xl font-bold text-ocean-sand mb-2">
                      Something went wrong!
                    </h3>
                    <p className="text-ocean-mist">Please try again or email me directly.</p>
                  </div>
              ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <InputField label="Name"    name="name"    placeholder="Your name"         required />
                      <InputField label="Email"   name="email"   type="email" placeholder="email@example.com" required />
                    </div>
                    <InputField label="Subject"   name="subject" placeholder="I want to know about you..."   required />
                    <InputField label="Message"   name="message" placeholder="Tell me your story..."  isTextarea required />

                    <button
                        type="submit"
                        disabled={formState === "loading"}
                        onMouseEnter={() => setBtnHovered(true)}
                        onMouseLeave={() => setBtnHovered(false)}
                        className={cn(
                            "relative w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300",
                            formState === "loading" ? "opacity-70 cursor-not-allowed" : ""
                        )}
                        style={{
                          background: btnHovered
                              ? "linear-gradient(135deg, var(--c-shallow), var(--c-biolum))"
                              : "linear-gradient(135deg, var(--c-biolum), var(--c-shallow))",
                          color: "var(--c-abyss)",
                          boxShadow: btnHovered
                              ? "0 0 40px rgba(0,245,212,0.4), 0 8px 30px rgba(0,0,0,0.2)"
                              : "0 0 20px rgba(0,245,212,0.2)",
                          transform: btnHovered && formState !== "loading" ? "scale(1.01)" : "scale(1)",
                          letterSpacing: "0.1em",
                        }}
                    >
                      {/* Shimmer on hover */}
                      {btnHovered && (
                          <div
                              className="absolute inset-0 pointer-events-none"
                              style={{
                                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                                animation: "shimmer 1.5s linear infinite",
                              }}
                          />
                      )}
                      {formState === "loading" ? (
                          <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-ocean-abyss/30 border-t-ocean-abyss rounded-full animate-spin" />
                      Sending...
                    </span>
                      ) : (
                          <span className="relative z-10">Send Message 🚀</span>
                      )}
                    </button>
                  </form>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
  );
}