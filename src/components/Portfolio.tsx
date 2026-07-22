"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Wrapper from "./Wrapper";

const PROJECTS = [
  {
    n: "01",
    title: "NexaFinance",
    category: "FinTech · SaaS Platform",
    year: "2024",
    description: "A real-time institutional trading platform processing $4.2B daily. Built with Next.js 15, WebSockets, and high-frequency data visualization dashboards.",
    result: "+340% user engagement · 99.99% uptime",
    color: "#00b7cc",
    bg: "linear-gradient(135deg, #e8f4fa 0%, #f4f5f7 100%)",
  },
  {
    n: "02",
    title: "AuraMed",
    category: "HealthTech · AI Platform",
    year: "2024",
    description: "AI-powered diagnostic workflow system adopted by 12 hospital networks. LangChain + GPT-4o integration with HIPAA-compliant infrastructure and real-time reporting.",
    result: "+62% diagnostic speed · 28 countries",
    color: "#aa00ff",
    bg: "linear-gradient(135deg, #f3ebfc 0%, #f4f5f7 100%)",
  },
  {
    n: "03",
    title: "SkyRoute",
    category: "Logistics · Enterprise SaaS",
    year: "2025",
    description: "Global supply chain visibility platform with live 3D globe tracking, predictive delay alerts, and automated carrier negotiations through AI agents.",
    result: "€22M ARR · 41% cost reduction",
    color: "#0052ff",
    bg: "linear-gradient(135deg, #eaf0fc 0%, #f4f5f7 100%)",
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="portfolio" className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
      <Wrapper>
        {/* Header */}
        <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
          <div className="flex flex-col gap-4 max-w-lg">
            <p className="t-label" style={{ color: "var(--cyan)" }}>Selected Work</p>
            <h2 className="t-section" style={{ color: "var(--text-primary)" }}>
              Where strategy meets craft.
            </h2>
          </div>
          <p className="t-body max-w-xs" style={{ color: "var(--text-tertiary)" }}>
            Case studies from brands who trusted us to engineer their most critical digital assets.
          </p>
        </div>

        {/* Projects */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-[var(--r-xl)] overflow-hidden cursor-pointer ${i % 2 === 1 ? "lg:mt-24" : ""}`}
              style={{
                background: p.bg,
                border: "1px solid var(--border)",
                transition: "border-color 350ms ease, box-shadow 350ms ease, transform 350ms ease",
              }}
              whileHover={{ borderColor: p.color, y: -4, boxShadow: `0 20px 40px ${p.color}22` } as any}
            >
              <div className="flex flex-col justify-between min-h-[420px] p-8 lg:p-12">
                
                {/* Top: Info */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="t-mono" style={{ color: "var(--text-muted)", fontSize: "10px" }}>{p.n}</span>
                    <span className="t-label text-[9px] px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "var(--text-tertiary)", border: "1px solid var(--border)" }}>
                      {p.year}
                    </span>
                  </div>
                  <p className="t-label" style={{ color: p.color }}>{p.category}</p>
                  <h3 className="text-3xl lg:text-4xl font-black tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                    {p.title}
                  </h3>
                  <p className="t-body leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                    {p.description}
                  </p>
                </div>

                {/* Bottom: Result + CTA */}
                <div className="flex flex-col gap-6 mt-auto pt-8" style={{ borderTop: "1px solid var(--border)" }}>
                  <div>
                    <p className="t-label mb-2" style={{ color: "var(--text-muted)" }}>Outcome</p>
                    <p className="t-body-lg font-semibold" style={{ color: p.color }}>
                      {p.result}
                    </p>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 t-sm font-semibold mt-2 group-hover:translate-x-2 transition-transform duration-300"
                    style={{ color: "var(--text-primary)" }}
                  >
                    View Case Study
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[var(--r-xl)]"
                style={{ boxShadow: `inset 0 0 80px ${p.color}11` }}
              />
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
