"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import MagneticButton from "./MagneticButton";

const STATS = [
  { value: "127+",  label: "Projects Delivered" },
  { value: "$44M+", label: "Client Revenue" },
  { value: "4.9★",  label: "Client Rating" },
  { value: "6wk",   label: "Avg. Launch Time" },
];

const TICKER_ITEMS = [
  "Next.js 15", "React 19", "TypeScript", "Three.js", "WebGL", "GSAP",
  "Framer Motion", "Supabase", "PostgreSQL", "LangChain", "GPT-4o",
  "Stripe API", "Vercel Edge", "Redis", "Docker", "Tailwind CSS",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col"
      style={{ minHeight: "100dvh", paddingTop: "140px", paddingBottom: "60px" }}
    >
      {/* Centre radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 65% 55% at 65% 45%, rgba(0,87,255,0.13) 0%, transparent 70%)",
      }} />

      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-200px)]">

          {/* ─── LEFT ─── */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full t-label"
                style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.24)", color: "var(--cyan)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--cyan)" }} />
                Award-Grade Digital Engineering Studio
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="t-display" style={{ color: "var(--text-primary)" }}>
              <motion.span
                className="block overflow-hidden"
                initial={{ opacity: 1 }}
              >
                <motion.span
                  className="block"
                  initial={{ y: "108%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  We Build
                </motion.span>
              </motion.span>

              <motion.span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "108%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: "linear-gradient(100deg, var(--cyan) 0%, #3399ff 40%, #a855f7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Digital
                </motion.span>
              </motion.span>

              <motion.span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "108%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
                >
                  Empires.
                </motion.span>
              </motion.span>
            </h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="t-body-lg max-w-[480px]"
              style={{ color: "var(--text-secondary)" }}
            >
              WebAura engineers ultra-performance web platforms, autonomous AI systems,
              and award-grade interactive experiences that convert visitors into real revenue.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.88, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
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

              <a
                href="#portfolio"
                className="btn btn-secondary"
                onClick={(e) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                View Our Work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {STATS.map((s) => (
                <div key={s.value} className="flex flex-col gap-1.5">
                  <span
                    className="font-black text-[26px] leading-none tracking-tight"
                    style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)" }}
                  >
                    {s.value}
                  </span>
                  <span className="t-xs" style={{ color: "var(--text-tertiary)" }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── RIGHT — Orb ─── */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[440px] h-[440px]"
              style={{ animation: "float 7s ease-in-out infinite" }}
            >
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full" style={{
                background: "radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 65%)",
                filter: "blur(50px)",
              }} />

              {/* Main sphere */}
              <div className="absolute inset-[44px] rounded-full" style={{
                background: "conic-gradient(from 180deg at 50% 50%, #00e5ff18, #0057ff38, #6600ff20, #00e5ff18)",
                boxShadow: "0 0 100px rgba(0,229,255,0.2), inset 0 0 80px rgba(0,87,255,0.25)",
              }}>
                <div className="absolute inset-[2px] rounded-full" style={{
                  background: "radial-gradient(circle at 38% 32%, rgba(255,255,255,0.12) 0%, transparent 55%), var(--surface-2)",
                }} />
              </div>

              {/* Orbiting rings */}
              <div className="absolute inset-[22px] rounded-full" style={{
                border: "1px solid rgba(0,229,255,0.18)",
                animation: "spin 22s linear infinite",
              }} />
              <div className="absolute inset-[8px] rounded-full" style={{
                border: "1px dashed rgba(0,87,255,0.22)",
                animation: "spin-rev 34s linear infinite",
              }} />

              {/* Tech badges */}
              {[
                { label: "Next.js 15", top: "5%",  left: "-8%"  },
                { label: "AI ✦",       top: "78%", left: "-10%" },
                { label: "WebGL",      top: "7%",  right: "-5%" },
                { label: "Three.js",   top: "82%", right: "-10%"},
              ].map((b, i) => (
                <motion.div
                  key={i}
                  className="absolute px-3 py-1.5 rounded-full t-label text-[9px] whitespace-nowrap"
                  style={{
                    top: b.top, left: (b as any).left, right: (b as any).right,
                    background: "rgba(10,10,20,0.92)",
                    border: "1px solid var(--border-strong)",
                    color: "var(--cyan)",
                  }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {b.label}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Wrapper>

      {/* Tech ticker */}
      <div
        className="relative overflow-hidden mt-auto"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "14px 0" }}
      >
        <div className="flex">
          <div className="flex shrink-0 marquee-fwd">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="t-mono text-[10px] mx-6 whitespace-nowrap flex items-center gap-3"
                style={{ color: "var(--text-muted)" }}>
                {item}
                <span style={{ color: "var(--cyan)" }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
