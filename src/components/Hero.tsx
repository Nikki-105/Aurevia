"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
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
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {/* ─── Light Overlay ─── */}
      <div className="absolute inset-0 z-0">
        {/* Light overlay so text stays readable over the global fluid */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(250,251,252,0.6) 55%, rgba(250,251,252,0.95) 100%)",
          }}
        />
      </div>

      {/* ─── Content (centred) ─── */}
      <div
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center"
        style={{ padding: "140px 24px 80px" }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full t-label"
            style={{
              background:  "rgba(0,229,255,0.09)",
              border:      "1px solid rgba(0,229,255,0.28)",
              color:       "var(--cyan)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--cyan)" }} />
            Award-Grade Digital Engineering Studio
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="t-display mb-8" style={{ color: "var(--text-primary)", maxWidth: "900px" }}>
          <motion.span className="block overflow-hidden" style={{ padding: "0.2em 0", margin: "-0.2em 0" }}>
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              We Build
            </motion.span>
          </motion.span>

          <motion.span className="block overflow-hidden" style={{ padding: "0.2em 0", margin: "-0.2em 0" }}>
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "linear-gradient(100deg, var(--cyan) 0%, #3399ff 45%, #aa55ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                padding: "0.2em 0",
                margin: "-0.2em 0",
              }}
            >
              Digital
            </motion.span>
          </motion.span>

          <motion.span className="block overflow-hidden" style={{ padding: "0.2em 0", margin: "-0.2em 0" }}>
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
            >
              Empires.
            </motion.span>
          </motion.span>
        </h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.74, ease: [0.16, 1, 0.3, 1] }}
          className="t-body-lg mb-10 max-w-[560px]"
          style={{ color: "var(--text-secondary)" }}
        >
          Aurevia engineers ultra-performance web platforms, autonomous AI
          systems, and award-grade interactive experiences that convert
          visitors into real revenue.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
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
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 max-w-2xl w-full"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {STATS.map((s) => (
            <div key={s.value} className="flex flex-col items-center gap-1.5">
              <span
                className="font-black leading-none tracking-tight"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "28px",
                  color: "var(--text-primary)",
                }}
              >
                {s.value}
              </span>
              <span className="t-xs text-center" style={{ color: "var(--text-tertiary)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── Tech ticker ─── */}
      <div
        className="relative z-10 overflow-hidden"
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "14px 0",
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex">
          <div className="flex shrink-0 marquee-fwd">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="t-mono text-[10px] mx-6 whitespace-nowrap flex items-center gap-3"
                style={{ color: "var(--text-muted)" }}
              >
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
