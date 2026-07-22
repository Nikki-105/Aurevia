"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import Button from "./Button";
import MagneticButton from "./MagneticButton";
import SplitText from "./SplitText";

const STATS = [
  { value: "127+", label: "Projects Delivered" },
  { value: "$44M+", label: "Client Revenue Generated" },
  { value: "4.9★", label: "Average Client Rating" },
  { value: "6wk", label: "Avg. Time to Launch" },
];

const TICKER_ITEMS = [
  "Next.js 15", "React 19", "TypeScript", "Three.js", "WebGL", "GSAP",
  "Framer Motion", "Supabase", "PostgreSQL", "LangChain", "Stripe API",
  "GPT-4o", "Vercel Edge", "Redis", "Docker",
];

export default function Hero() {
  const tickerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-between overflow-hidden"
      style={{ minHeight: "100dvh", paddingTop: "120px", paddingBottom: "80px" }}
    >
      {/* Radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,82,255,0.12) 0%, transparent 70%)",
        }}
      />

      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">

          {/* ─── Left Column ─── */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Pre-label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 w-fit px-4 py-2 rounded-full"
              style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.25)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--cyan)" }} />
              <span className="t-label" style={{ color: "var(--cyan)", fontSize: "10px", letterSpacing: "0.12em" }}>
                Engineering Digital Experiences
              </span>
            </motion.div>

            {/* Headline */}
            <div>
              <h1 className="t-display font-black" style={{ color: "var(--text-primary)", lineHeight: 0.96 }}>
                <motion.span
                  className="block overflow-hidden"
                  initial={{ opacity: 1 }}
                >
                  <motion.span
                    className="block"
                    initial={{ y: "105%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    We Build
                  </motion.span>
                </motion.span>
                <motion.span
                  className="block overflow-hidden"
                >
                  <motion.span
                    className="block"
                    initial={{ y: "105%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      background: "linear-gradient(120deg, var(--cyan), #0066ff, #aa00ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Digital
                  </motion.span>
                </motion.span>
                <motion.span
                  className="block overflow-hidden"
                >
                  <motion.span
                    className="block"
                    initial={{ y: "105%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Empires.
                  </motion.span>
                </motion.span>
              </h1>
            </div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="t-body-lg max-w-[460px] leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              WebAura engineers ultra-performance web platforms, autonomous AI systems,
              and award-grade interactive experiences that convert visitors into revenue.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton>
                <Button variant="primary" href="#contact">
                  Start Your Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </MagneticButton>
              <Button variant="secondary" href="#portfolio">
                Explore Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {STATS.map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-black text-2xl tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>{s.value}</span>
                  <span className="t-xs" style={{ color: "var(--text-tertiary)" }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── Right Column — Visual Orb ─── */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[420px] h-[420px] float"
            >
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 65%)", filter: "blur(40px)" }}
              />

              {/* Main sphere */}
              <div
                className="absolute inset-[40px] rounded-full"
                style={{
                  background: "conic-gradient(from 180deg, #00e5ff22, #0052ff44, #6600ff22, #00e5ff22)",
                  boxShadow: "0 0 80px rgba(0,229,255,0.25), inset 0 0 80px rgba(0,82,255,0.3)",
                  animation: "float 7s ease-in-out infinite",
                }}
              >
                <div
                  className="absolute inset-[2px] rounded-full"
                  style={{ background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 60%), var(--surface-2)" }}
                />
              </div>

              {/* Orbiting rings */}
              <div
                className="absolute inset-[20px] rounded-full"
                style={{ border: "1px solid rgba(0,229,255,0.2)", animation: "spin 20s linear infinite" }}
              />
              <div
                className="absolute inset-[8px] rounded-full"
                style={{ border: "1px dashed rgba(0,82,255,0.25)", animation: "spin 30s linear infinite reverse" }}
              />

              {/* Floating tech badges */}
              {[
                { label: "Next.js 15", top: "8%",  left: "-10%", delay: 0 },
                { label: "AI ✦",       top: "75%", left: "-8%",  delay: 0.2 },
                { label: "WebGL",      top: "10%", right: "-8%", delay: 0.4 },
                { label: "Three.js",   top: "80%", right: "-12%", delay: 0.6 },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  className="absolute px-3 py-1.5 rounded-full t-label text-[9px] whitespace-nowrap"
                  style={{
                    top: b.top, left: (b as any).left, right: (b as any).right,
                    background: "rgba(12,12,20,0.9)",
                    border: "1px solid var(--border-strong)",
                    color: "var(--cyan)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + b.delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {b.label}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Wrapper>

      {/* ─── Tech Ticker ─── */}
      <div
        className="relative overflow-hidden py-4 mt-12"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex" ref={tickerRef}>
          <div className="flex shrink-0 marquee-fwd">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="t-mono text-[10px] mx-6 whitespace-nowrap"
                style={{ color: "var(--text-muted)" }}
              >
                {item} <span style={{ color: "var(--cyan)", marginLeft: "12px" }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Add spin keyframe to head
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
  if (!document.head.querySelector("style[data-spin]")) {
    style.setAttribute("data-spin", "true");
    document.head.appendChild(style);
  }
}
