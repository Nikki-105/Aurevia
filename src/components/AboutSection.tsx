"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

const pillars = [
  {
    title: "Mission",
    description: "To eliminate generic web templates and build bespoke, high-conversion digital engines that scale ambitious enterprises.",
  },
  {
    title: "Vision",
    description: "To pioneer the intersection of WebGL 3D design, Next.js 15 server architectures, and autonomous AI agents.",
  },
  {
    title: "Values",
    description: "Zero compromises on speed, pixel perfection, security, or mathematical 8px design hierarchy.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full ds-section z-10 bg-[#0b0b0b] text-white border-t border-white/10">
      <Wrapper>
        <div className="flex flex-col mb-16">
          <span className="ds-small tracking-[0.1em] uppercase text-[#00F0FF] ds-mb-heading flex items-center gap-4">
            <div className="w-8 h-[1px] bg-[#00F0FF]" />
            About WebAura Studio
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="ds-section-title text-white font-heading max-w-3xl"
          >
            We don't just build websites. We engineer digital assets.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="glow-card p-8 flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest">0{i + 1} // Pillars</span>
                <h3 className="ds-card-title text-white font-heading my-4 group-hover:text-[#00F0FF] transition-colors">
                  {p.title}
                </h3>
                <p className="ds-body text-slate-400">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
