"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import Button from "./Button";
import MagneticButton from "./MagneticButton";

const plans = [
  {
    name: "Growth Agency Package",
    price: "$25,000",
    period: "one-time investment",
    desc: "Perfect for fast-growing startups needing a high-conversion 100 Lighthouse Next.js web application.",
    features: [
      "Bespoke Next.js 15 Platform",
      "Custom WebGL Hero Canvas",
      "Core Web Vitals 100 Guarantee",
      "Basic AI Chatbot Integration",
      "30-Day Post-Launch Support"
    ],
    recommended: false,
  },
  {
    name: "Enterprise Flagship",
    price: "$50,000",
    period: "one-time investment",
    desc: "Full-scale luxury digital engineering with bespoke 3D physics, AI Voice Agents, and ERP integration.",
    features: [
      "Full 3D WebGL Interactive Canvas Architecture",
      "Autonomous AI Voice & Chatbot Agents",
      "Enterprise CRM / ERP API Connections",
      "Custom Real-Time Telemetry Dashboard",
      "24/7 Priority SLA & Dedicated Architect"
    ],
    recommended: true,
  },
  {
    name: "Custom Enterprise SLA",
    price: "Custom Quote",
    period: "custom scope",
    desc: "Dedicated team of engineers, 3D artists, and AI researchers for continuous digital transformation.",
    features: [
      "Dedicated Lead Solutions Architect",
      "Unlimited Custom AI Workflows",
      "Bespoke Shaders & Canvas FX",
      "Continuous Core Web Vitals Audits",
      "Dedicated Slack Channel & 99.99% SLA"
    ],
    recommended: false,
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<"project" | "retainer">("project");

  return (
    <section id="pricing" className="relative w-full ds-section z-10 bg-[#0e0f14] text-white border-t border-white/10">
      <Wrapper>
        
        {/* Header Rhythm: Badge (32px) -> Heading (24px) -> Description (48px) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Badge */}
          <span className="ds-small tracking-[0.1em] uppercase text-[#00F0FF] ds-mb-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            Transparent Pricing
          </span>

          {/* Huge Editorial Heading */}
          <h2 className="ds-section-title text-white font-heading ds-mb-heading leading-tight">
            Invest in digital infrastructure that converts.
          </h2>

          {/* Description */}
          <p className="ds-body text-slate-300 ds-mb-paragraph max-w-xl">
            No hidden fees. Every package guarantees 100/100 Lighthouse performance and zero technical debt.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center gap-3 p-1.5 rounded-full bg-[#14151a] border border-white/15 mb-16 shadow-lg">
            <button
              onClick={() => setBilling("project")}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold transition-all ${
                billing === "project" 
                  ? "bg-[#00F0FF] text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Project Based
            </button>
            <button
              onClick={() => setBilling("retainer")}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold transition-all ${
                billing === "retainer" 
                  ? "bg-[#00F0FF] text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Retainer
            </button>
          </div>

        </div>

        {/* Pricing Cards Grid with 32px-48px gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {plans.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col justify-between relative ${
                p.recommended ? "featured-card" : "ds-card"
              }`}
            >
              {/* Top Right "Most Popular" Badge inside Featured Card */}
              {p.recommended && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-[#00F0FF] text-black text-[10px] font-mono font-bold tracking-wider uppercase rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                  Most Popular
                </div>
              )}

              <div>
                {/* 1. Title */}
                <h3 className="text-xl font-bold font-heading text-white mb-4 pr-24">
                  {p.name}
                </h3>

                {/* 2. Price Dominates (48px font-heading) */}
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight block">
                    {p.price}
                  </span>
                  <span className="text-xs font-mono text-slate-400 mt-1 block">
                    {p.period}
                  </span>
                </div>

                {/* 3. Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-8 border-b border-white/10 pb-6">
                  {p.desc}
                </p>

                {/* 4. Features List with 16px Gaps */}
                <div className="space-y-4 mb-10">
                  {p.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3 text-xs text-slate-200">
                      <span className="text-[#00F0FF] font-bold mt-0.5">✓</span>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Elegant CTA Button (48px height) */}
              <MagneticButton className="w-full">
                <Button 
                  variant={p.recommended ? "primary" : "secondary"} 
                  className={`w-full h-[48px] text-xs font-bold ${
                    p.recommended 
                      ? "bg-[#00F0FF] text-black hover:bg-white shadow-[0_0_25px_rgba(0,240,255,0.4)]" 
                      : "border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {p.recommended ? "Get Started Today" : "Select Package"}
                </Button>
              </MagneticButton>

            </motion.div>
          ))}
        </div>

      </Wrapper>
    </section>
  );
}
