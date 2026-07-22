"use client";

import Wrapper from "./Wrapper";

const TESTIMONIALS_ROW1 = [
  { name: "Marcus Theil", role: "CEO, NexaFinance",    text: "WebAura delivered a platform that handles $4.2B daily volume without a single incident. Extraordinary engineers." },
  { name: "Sofia Andres",  role: "CPO, AuraMed",        text: "The team shipped in 6 weeks what our in-house team estimated 6 months for. Quality was 11/10." },
  { name: "Jamal Owusu",   role: "Founder, SkyRoute",   text: "Their 3D supply chain globe alone justified the entire project cost. Clients are genuinely stunned." },
  { name: "Priya Nair",    role: "CTO, Fluenta",        text: "The most technically sophisticated engineering partner we've ever worked with. They think at a different level." },
  { name: "Lars Bergqvist",role: "MD, Arktik Capital",  text: "Real-time trading dashboards that our quants actually love using. That alone is an achievement." },
];

const TESTIMONIALS_ROW2 = [
  { name: "Alice Moreau",  role: "CMO, Lumire Brand",   text: "They redesigned our entire brand experience. Revenue from the website tripled in 90 days." },
  { name: "Dev Patel",     role: "Founder, Traxr",      text: "Fastest, most professional team I've ever hired. Discovery to deploy in 7 weeks, 100/100 Lighthouse." },
  { name: "Elena Fischer", role: "COO, Merka Health",   text: "WebAura's AI chatbot reduced our support volume by 68% in the first month. Unbelievable ROI." },
  { name: "Tom Cahill",    role: "CEO, BoldStack",      text: "Every Awwwards site we showed them as inspiration — they matched the quality and then exceeded it." },
  { name: "Yuki Tanaka",   role: "Design Lead, Velta",  text: "The motion design and micro-interactions are something I've never seen from a dev agency. Art-level work." },
];

function Card({ name, role, text }: { name: string; role: string; text: string }) {
  return (
    <div
      className="shrink-0 w-80 flex flex-col gap-4 rounded-[var(--r-lg)] p-6 mx-3"
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="var(--cyan)">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <p className="t-body leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>"{text}"</p>

      <div className="flex flex-col gap-0.5" style={{ borderTop: "1px solid var(--border)", paddingTop: "12px" }}>
        <span className="t-sm font-semibold" style={{ color: "var(--text-primary)" }}>{name}</span>
        <span className="t-xs" style={{ color: "var(--text-tertiary)" }}>{role}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad overflow-hidden" style={{ borderBottom: "1px solid var(--border)" }}>
      <Wrapper>
        <div className="flex flex-col gap-3 mb-14 max-w-xl">
          <p className="t-label" style={{ color: "var(--cyan)" }}>Client Love</p>
          <h2 className="t-section" style={{ color: "var(--text-primary)" }}>
            Don't take our word for it.
          </h2>
        </div>
      </Wrapper>

      {/* Row 1 — forward */}
      <div className="relative w-full overflow-hidden mb-4">
        <div className="flex marquee-fwd">
          {[...TESTIMONIALS_ROW1, ...TESTIMONIALS_ROW1].map((t, i) => (
            <Card key={i} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="relative w-full overflow-hidden">
        <div className="flex marquee-rev">
          {[...TESTIMONIALS_ROW2, ...TESTIMONIALS_ROW2].map((t, i) => (
            <Card key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
