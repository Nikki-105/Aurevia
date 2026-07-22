"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

const TECH = [
  { name: "Next.js",      category: "Frontend",      level: 99 },
  { name: "React 19",     category: "Frontend",      level: 99 },
  { name: "TypeScript",   category: "Language",      level: 97 },
  { name: "Three.js",     category: "WebGL",         level: 90 },
  { name: "GSAP",         category: "Animation",     level: 93 },
  { name: "Framer Motion",category: "Animation",     level: 96 },
  { name: "Python",       category: "AI/Backend",    level: 94 },
  { name: "LangChain",    category: "AI",            level: 88 },
  { name: "GPT-4o",       category: "AI",            level: 92 },
  { name: "PostgreSQL",   category: "Database",      level: 91 },
  { name: "Supabase",     category: "Backend",       level: 93 },
  { name: "Redis",        category: "Cache",         level: 87 },
  { name: "Docker",       category: "DevOps",        level: 89 },
  { name: "Vercel",       category: "Deployment",    level: 98 },
  { name: "Stripe",       category: "Payments",      level: 95 },
  { name: "React Native", category: "Mobile",        level: 91 },
];

const CATEGORIES = ["Frontend", "AI", "Backend", "DevOps", "Mobile"];
const CATEGORY_COLORS: Record<string, string> = {
  Frontend:   "var(--cyan)",
  Language:   "var(--cyan)",
  WebGL:      "#aa00ff",
  Animation:  "#aa00ff",
  "AI/Backend": "#0052ff",
  AI:           "#0052ff",
  Database:   "#0052ff",
  Backend:    "#0052ff",
  Cache:      "#0052ff",
  DevOps:     "#00cc88",
  Deployment: "#00cc88",
  Payments:   "#ffaa00",
  Mobile:     "#ff6600",
};

export default function TechStack() {
  return (
    <section id="tech" className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
      <Wrapper>
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 max-w-xl">
          <p className="t-label" style={{ color: "var(--cyan)" }}>Our Stack</p>
          <h2 className="t-section" style={{ color: "var(--text-primary)" }}>
            Technologies we master.
          </h2>
          <p className="t-body" style={{ color: "var(--text-tertiary)" }}>
            We only work with best-in-class tools. No legacy stacks. No compromise.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {TECH.map((t, i) => {
            const color = CATEGORY_COLORS[t.category] || "var(--cyan)";
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col gap-4 rounded-[var(--r-lg)] p-6"
                style={{
                  background:  "var(--surface-card)",
                  border:      "1px solid var(--border)",
                  transition:  "border-color 300ms ease, box-shadow 300ms ease, transform 300ms ease",
                }}
                whileHover={{
                  borderColor: color,
                  boxShadow:   `0 0 30px ${color}22`,
                  y: -4,
                } as any}
              >
                {/* Category badge */}
                <div className="flex items-center justify-between">
                  <span className="t-label text-[8px] px-2 py-0.5 rounded-full"
                    style={{ background: `${color}18`, color, border: `1px solid ${color}33` }}>
                    {t.category}
                  </span>
                  <span className="t-mono text-[10px]" style={{ color: "var(--text-muted)" }}>{t.level}%</span>
                </div>

                {/* Name */}
                <p className="text-base font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                  {t.name}
                </p>

                {/* Proficiency bar */}
                <div className="h-[2px] w-full rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: color, boxShadow: `0 0 8px ${color}` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${t.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.04 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}
