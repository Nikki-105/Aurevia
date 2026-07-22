"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "./Wrapper";

const faqs = [
  { q: "What is your typical project timeline?", a: "Most bespoke web platforms and AI automation suites take between 4 to 8 weeks from discovery to 100/100 Lighthouse deployment." },
  { q: "Do you guarantee 100 Lighthouse scores?", a: "Yes. Every line of TypeScript code, image asset, and WebGL shader is mathematically audited to achieve 100 Performance, Accessibility, SEO, and Best Practices." },
  { q: "Can WebAura integrate custom AI agents into our existing workflow?", a: "Absolutely. We build custom LLM agents, automated lead scoring bots, and voice synthesis assistants that interface directly with your CRM and ERP APIs." },
  { q: "What tech stack do you use?", a: "We build primarily on Next.js 15, React 19, TypeScript, TailwindCSS, Framer Motion, and Three.js / WebGL." },
  { q: "How do we get started?", a: "Schedule a strategy call or send an inquiry below. We selectively partner with ambitious enterprises." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full ds-section z-10 bg-[#050505] text-white">
      <Wrapper>
        <div className="flex flex-col mb-16 text-center items-center">
          <span className="ds-small tracking-[0.1em] uppercase text-[#00F0FF] ds-mb-heading">
            Got Questions?
          </span>
          <h2 className="ds-section-title text-white font-heading max-w-2xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="ds-card p-6 border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold font-heading text-white">{faq.q}</h3>
                <span className="text-[#00F0FF] text-xl font-mono">{openIndex === idx ? "−" : "+"}</span>
              </div>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-white/10 text-sm text-slate-400 leading-relaxed font-sans"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
