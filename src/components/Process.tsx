"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Wrapper from "./Wrapper";

const STEPS = [
  {
    n: "01",
    title: "Discovery & Strategy",
    duration: "Week 1–2",
    desc: "We run an intensive discovery sprint — market analysis, user research, competitor teardowns, and architecture planning. You receive a complete project blueprint before a single line of code is written.",
    deliverables: ["Brand Audit", "Technical Architecture", "Sprint Roadmap", "SLA Agreement"],
  },
  {
    n: "02",
    title: "Design System & Prototype",
    duration: "Week 2–3",
    desc: "Our designers build a complete design system in Figma — tokens, components, motion language — and produce high-fidelity prototypes that feel production-ready from day one.",
    deliverables: ["Figma Design System", "Interactive Prototype", "Motion Spec", "Brand Guidelines"],
  },
  {
    n: "03",
    title: "Engineering & Development",
    duration: "Week 3–7",
    desc: "Senior engineers implement the system in weekly sprints. You have access to a live staging environment throughout the build with daily async updates via Loom and Notion.",
    deliverables: ["Production Codebase", "CI/CD Pipeline", "Testing Suite", "Staging Environment"],
  },
  {
    n: "04",
    title: "Launch & Scale",
    duration: "Week 7–8",
    desc: "Zero-downtime production deployment. We run Lighthouse audits, Core Web Vitals validation, SEO indexing, and 30-day post-launch monitoring before handover.",
    deliverables: ["100/100 Lighthouse", "SEO Indexing", "30-day Support", "Full Source Transfer"],
  },
];

export default function Process() {
  const wrapRef = useRef<HTMLDivElement>(null);

  return (
    <section id="process" className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
      <Wrapper>

        {/* Header */}
        <div className="flex flex-col gap-4 mb-20 max-w-xl">
          <p className="t-label" style={{ color: "var(--cyan)" }}>How We Work</p>
          <h2 className="t-section" style={{ color: "var(--text-primary)" }}>
            A process built for speed without compromise.
          </h2>
        </div>

        {/* Steps */}
        <div ref={wrapRef} className="flex flex-col gap-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[var(--r-xl)] overflow-hidden"
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border)",
                transition: "border-color 350ms ease",
              }}
              whileHover={{ borderColor: "rgba(0,229,255,0.3)" } as any}
            >
              {/* Left sidebar */}
              <div className="lg:col-span-3 flex flex-col justify-between p-8 lg:p-10" style={{ borderRight: "1px solid var(--border)" }}>
                <div className="flex flex-col gap-2">
                  <span className="t-mono text-[10px]" style={{ color: "var(--text-muted)" }}>PHASE</span>
                  <span className="text-5xl font-black" style={{ fontFamily: "var(--font-heading)", color: "rgba(255,255,255,0.08)" }}>
                    {step.n}
                  </span>
                </div>
                <span className="t-label text-[9px] mt-6" style={{ color: "var(--cyan)" }}>{step.duration}</span>
              </div>

              {/* Center content */}
              <div className="lg:col-span-6 flex flex-col justify-center p-8 lg:p-10 gap-4">
                <h3 className="text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                  {step.title}
                </h3>
                <p className="t-body leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
              </div>

              {/* Right deliverables */}
              <div className="lg:col-span-3 flex flex-col justify-center p-8 lg:p-10 gap-3" style={{ borderLeft: "1px solid var(--border)" }}>
                <p className="t-label mb-2" style={{ color: "var(--text-muted)" }}>Deliverables</p>
                {step.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--cyan)" }} />
                    <span className="t-sm" style={{ color: "var(--text-secondary)" }}>{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
