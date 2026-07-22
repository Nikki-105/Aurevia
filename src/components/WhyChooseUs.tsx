"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

const features = [
  {
    title: "100 Lighthouse Guarantee",
    description: "Every web experience we launch is optimized for 100 Performance, Accessibility, SEO, and Best Practices.",
    icon: "⚡",
  },
  {
    title: "Bespoke 3D & WebGL",
    description: "No stock templates or Bootstrap grids. Handcrafted Three.js and Framer Motion visual physics.",
    icon: "💎",
  },
  {
    title: "Autonomous AI Agents",
    description: "Integrated AI Chatbots, Voice Assistants, and automated lead scoring built into your stack.",
    icon: "🤖",
  },
  {
    title: "Enterprise SLA & Security",
    description: "Bank-grade TypeScript codebases with zero vulnerabilities and continuous monitoring.",
    icon: "🛡️",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full ds-section z-10 bg-[#050505] text-white">
      <Wrapper>
        <div className="flex flex-col mb-16 text-center items-center">
          <span className="ds-small tracking-[0.1em] uppercase text-[#00F0FF] ds-mb-heading">
            Why WebAura
          </span>
          <h2 className="ds-section-title text-white font-heading max-w-2xl">
            Built for brands that demand perfection.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, index) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="ds-card p-8 flex flex-col group hover:border-[#00F0FF]/40 transition-colors"
            >
              <div className="text-4xl mb-6 p-4 rounded-2xl bg-white/5 w-fit border border-white/10 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-[#00F0FF] transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
