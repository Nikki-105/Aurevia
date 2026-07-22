"use client";

import Wrapper from "./Wrapper";
import MagneticButton from "./MagneticButton";

const LINKS = {
  Services: ["Web Development", "AI Automation", "SaaS Development", "Mobile Apps", "UI/UX Design", "Branding"],
  Company:  ["About", "Work", "Process", "Pricing", "Blog", "Careers"],
  Legal:    ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const SOCIALS = [
  { name: "Twitter",   href: "#", icon: "𝕏" },
  { name: "LinkedIn",  href: "#", icon: "in" },
  { name: "Instagram", href: "#", icon: "◎" },
  { name: "Dribbble",  href: "#", icon: "◕" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface-0)", borderTop: "1px solid var(--border)" }}>
      {/* CTA band */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-20">
            <div className="flex flex-col gap-3 max-w-xl text-center md:text-left">
              <h2
                className="font-black tracking-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "var(--text-primary)",
                  lineHeight: 1.1,
                }}
              >
                Ready to build something
                <span style={{
                  background: "linear-gradient(120deg, var(--cyan), #0066ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline",
                }}> extraordinary?</span>
              </h2>
              <p className="t-body" style={{ color: "var(--text-tertiary)" }}>
                Join 127+ companies who trusted Aurevia to engineer their digital future.
              </p>
            </div>
            <MagneticButton>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Start Your Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </MagneticButton>
          </div>
        </Wrapper>
      </div>

      {/* Main footer content */}
      <Wrapper>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16" style={{ borderBottom: "1px solid var(--border)" }}>
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <div className="text-xl font-black" style={{ fontFamily: "var(--font-heading)" }}>
              <span style={{
                background: "linear-gradient(90deg, #00d2ff 0%, #0066ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Aurevia</span>
            </div>
            <p className="t-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Engineering digital experiences that convert. Awwwards-grade quality, enterprise-grade engineering.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                  style={{
                    background: "rgba(0,0,0,0.03)",
                    border: "1px solid var(--border)",
                    color: "var(--text-tertiary)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--cyan)";
                    (e.currentTarget as HTMLElement).style.color = "var(--cyan)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <p className="t-label" style={{ color: "var(--text-muted)" }}>{group}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="t-sm transition-colors"
                      style={{ color: "var(--text-tertiary)" }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)"}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
          <p className="t-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Aurevia Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--cyan)" }} />
            <span className="t-xs" style={{ color: "var(--text-muted)" }}>Built with Next.js 15 · Deployed on Vercel</span>
          </div>
        </div>

        {/* Giant wordmark */}
        <div
          className="text-center font-black tracking-tighter w-full overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#0066ff]"
          style={{
            fontSize: "clamp(60px, 16vw, 220px)",
            fontFamily: "var(--font-heading)",
            lineHeight: 0.85,
            WebkitMaskImage: "linear-gradient(180deg, black 0%, transparent 100%)",
            maskImage: "linear-gradient(180deg, black 0%, transparent 100%)",
          }}
        >
          AUREVIA
        </div>
      </Wrapper>
    </footer>
  );
}
