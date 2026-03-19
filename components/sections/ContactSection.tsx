"use client";

import { useState, type FormEvent } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

const socialLinks = [
  { icon: "🐙", label: "GitHub",   href: "https://github.com/gabriele-cpp",    handle: "@gabriele-cpp"   },
  { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-emil-2029b0185/",  handle: "Gabriel Emil"   },
  { icon: "🐦", label: "X",  href: "https://x.com/airaryyll",   handle: "@airaryyll"        },
  { icon: "📧", label: "Email",    href: `mailto:${personalInfo.email}`, handle: personalInfo.email },
];

function InputField({
  label, name, type = "text", placeholder, required, isTextarea,
}: {
  label: string; name: string; type?: string;
  placeholder: string; required?: boolean; isTextarea?: boolean;
}) {
  const baseClass = cn(
    "w-full px-4 py-3 rounded-xl text-ocean-sand text-sm outline-none transition-all duration-300",
    "placeholder:text-ocean-mist/40 font-body",
    "focus:border-ocean-biolum/60 focus:shadow-[0_0_20px_rgba(0,245,212,0.15)]"
  );
  const style = {
    background: "rgba(10,61,107,0.2)",
    border: "1px solid rgba(86,207,225,0.15)",
  };

  return (
    <div className="space-y-2">
      <label className="block font-mono text-xs tracking-wider uppercase" style={{ color: "var(--c-biolum)" }}>
        {label} {required && <span className="text-ocean-coral">*</span>}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          rows={5}
          placeholder={placeholder}
          required={required}
          className={cn(baseClass, "resize-none")}
          style={style}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className={baseClass}
          style={style}
        />
      )}
    </div>
  );
}

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");

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
        {/* Left — contact info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="section-reveal">
            <p className="text-ocean-mist leading-relaxed">
              I&#39;m currently available for freelance projects or full-time roles. Whatever you need, don&#39;t hesitate to get in touch!
            </p>
          </div>

          {/* Social links */}
          <div className="section-reveal space-y-3">
            <p className="font-mono text-xs text-ocean-biolum tracking-widest uppercase mb-4">
              Find Me Online
            </p>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card glass-card-hover px-4 py-3 rounded-xl group"
              >
                <span className="text-xl w-8 text-center">{link.icon}</span>
                <div>
                  <p className="text-ocean-sand text-sm font-medium group-hover:text-ocean-biolum transition-colors">
                    {link.label}
                  </p>
                  <p className="text-ocean-mist text-xs font-mono">{link.handle}</p>
                </div>
                <span className="ml-auto text-ocean-mist/30 group-hover:text-ocean-biolum transition-colors text-sm">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Availability card */}
          <div className="section-reveal glass-card p-5 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{ background: "radial-gradient(ellipse at bottom right, var(--c-biolum), transparent)" }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-ocean-biolum tracking-widest uppercase">
                  Available for Work
                </span>
              </div>
              <p className="text-ocean-mist text-sm">
                Not gonna responding <span className="text-ocean-sand font-semibold">24 hours</span>.
                Time Zone: <span className="text-ocean-sand font-semibold">WIB (UTC+7)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-3 section-reveal">
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Background glow */}
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(0,245,212,0.04)" }}
            />

            {formState === "success" ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 animate-float">🎉</div>
                <h3 className="font-display text-2xl font-bold text-ocean-sand mb-2">
                  Message Sent!
                </h3>
                <p className="text-ocean-mist">
                  Thank you! I will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField label="Name"  name="name"  placeholder="Your name" required />
                  <InputField label="Email" name="email" type="email" placeholder="emil@example.com" required />
                </div>
                <InputField label="Subject" name="subject" placeholder="I want to know about you..." required />
                <InputField label="Message" name="message" placeholder="Tell me your story..." isTextarea required />

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className={cn(
                    "w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300",
                    formState === "loading" ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"
                  )}
                  style={{
                    background: "linear-gradient(135deg, var(--c-biolum), var(--c-shallow))",
                    color: "var(--c-abyss)",
                    boxShadow: "0 0 30px rgba(0,245,212,0.2)",
                  }}
                >
                  {formState === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-ocean-abyss/30 border-t-ocean-abyss rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message 🚀"
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
