"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

const industries = [
  { name: "AI & Machine Learning", desc: "Empowering Next-Gen AI platforms with WebGL and cloud infrastructure.", icon: "🧠" },
  { name: "Fintech & Banking", desc: "Bank-grade secure financial dashboards and crypto transaction portals.", icon: "💳" },
  { name: "Luxury E-Commerce", desc: "Conversion-optimized digital flagships for high-end fashion brands.", icon: "👑" },
  { name: "Enterprise SaaS", desc: "Multi-tenant software platforms handling millions of active requests.", icon: "🚀" },
  { name: "Healthtech & Biotech", desc: "HIPAA-compliant medical portals and telemetry data engines.", icon: "🩺" },
  { name: "Real Estate & PropTech", desc: "3D virtual property tours and automated investor portals.", icon: "🏙️" },
];

export default function Industries() {
  return (
    <section className="relative w-full ds-section z-10 bg-[#050505] text-white">
      <Wrapper>
        <div className="flex flex-col mb-16 text-center items-center">
          <span className="ds-small tracking-[0.1em] uppercase text-[#00F0FF] ds-mb-heading">
            Target Verticals
          </span>
          <h2 className="ds-section-title text-white font-heading max-w-2xl">
            Tailored solutions for high-stakes industries.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="ds-card p-8 border border-white/10 hover:border-[#00F0FF]/50 transition-colors"
            >
              <div className="text-4xl mb-4">{ind.icon}</div>
              <h3 className="text-xl font-bold font-heading text-white mb-2">{ind.name}</h3>
              <p className="text-sm text-slate-400">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
