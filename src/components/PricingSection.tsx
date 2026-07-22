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
    desc: "Perfect for fast-growing startups needing a high-conversion 100 Lighthouse Next.js web application.",
    features: ["Bespoke Next.js 15 Platform", "Custom WebGL Hero Scene", "SEO & Core Web Vitals 100", "Basic AI Chatbot Integration", "30-Day Post-Launch Support"],
    recommended: false,
  },
  {
    name: "Enterprise Flagship",
    price: "$50,000",
    desc: "Full-scale luxury digital engineering with bespoke 3D physics, AI Voice Agents, and ERP integration.",
    features: ["Full 3D WebGL Interactive Architecture", "Custom AI Voice & Chatbot Agents", "Enterprise CRM / ERP Connections", "Custom Analytics Dashboard", "24/7 Priority SLA & Support"],
    recommended: true,
  },
  {
    name: "Custom Enterprise SLA",
    price: "Custom Quote",
    desc: "Dedicated team of engineers, 3D artists, and AI researchers for ongoing digital transformation.",
    features: ["Dedicated Lead Architect", "Unlimited Custom AI Workflows", "Bespoke Shaders & Canvas FX", "Continuous Core Web Vitals Audit", "Dedicated Slack Channel & SLA"],
    recommended: false,
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<"project" | "retainer">("project");

  return (
    <section id="pricing" className="relative w-full ds-section z-10 bg-[#0b0b0b] text-white border-t border-white/10">
      <Wrapper>
        <div className="flex flex-col items-center text-center mb-16">
          <span className="ds-small tracking-[0.1em] uppercase text-[#00F0FF] ds-mb-heading">
            Transparent Pricing
          </span>
          <h2 className="ds-section-title text-white font-heading max-w-2xl mb-8">
            Invest in digital infrastructure that converts.
          </h2>

          {/* Toggle */}
          <div className="flex items-center gap-3 p-1.5 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setBilling("project")}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                billing === "project" ? "bg-[#00F0FF] text-black" : "text-slate-400 hover:text-white"
              }`}
            >
              Project Based
            </button>
            <button
              onClick={() => setBilling("retainer")}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                billing === "retainer" ? "bg-[#00F0FF] text-black" : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Retainer
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`glow-card p-8 flex flex-col justify-between relative ${
                p.recommended ? "border-[#00F0FF] shadow-[0_0_40px_rgba(0,240,255,0.2)]" : ""
              }`}
            >
              {p.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00F0FF] text-black text-[10px] font-bold tracking-widest uppercase rounded-full">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold font-heading text-white mb-2">{p.name}</h3>
                <p className="text-xs text-slate-400 mb-6">{p.desc}</p>
                <div className="text-4xl font-extrabold font-heading text-white mb-8">
                  {p.price}
                </div>

                <div className="flex flex-col gap-3 mb-8">
                  {p.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="text-[#00F0FF]">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <MagneticButton className="w-full">
                <Button variant={p.recommended ? "primary" : "secondary"} className="w-full">
                  Select Package
                </Button>
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
