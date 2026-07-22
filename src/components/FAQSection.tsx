"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "./Wrapper";

const FAQS = [
  { q: "How long does a typical project take?", a: "Most projects run 4–8 weeks from signed contract to production launch. Complex SaaS platforms or AI systems can take 10–16 weeks. We always provide a fixed timeline before work begins." },
  { q: "Do you work with startups or enterprise only?", a: "Both. We work with well-funded startups who need a premium product fast, and enterprise teams who need senior engineering capacity. Project minimums start at $9,500." },
  { q: "What does 'full IP transfer' mean?", a: "You own 100% of the code, design assets, and all deliverables from day one of final payment. No licensing, no lock-in, no recurring fees to us." },
  { q: "Do you offer ongoing support after launch?", a: "All plans include post-launch support (30–90 days depending on plan). We also offer monthly retainers for teams who want a dedicated engineering partner long-term." },
  { q: "Can you integrate with our existing systems?", a: "Yes. We regularly integrate with Salesforce, HubSpot, Notion, Stripe, Intercom, custom APIs, and legacy databases. We assess complexity during discovery and price accordingly." },
  { q: "What makes Aurevia different from other agencies?", a: "We don't have account managers who don't code. Every client gets access to senior engineers and a design director. We build fewer projects per year and give each one full attention." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="t-label" style={{ color: "var(--cyan)" }}>FAQ</p>
            <h2 className="t-section" style={{ color: "var(--text-primary)" }}>
              Common questions.
            </h2>
            <p className="t-body" style={{ color: "var(--text-tertiary)" }}>
              Can't find what you're looking for? Drop us a message and we'll reply within 2 hours.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-4 t-sm font-semibold"
              style={{ color: "var(--cyan)" }}
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Ask directly
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right */}
          <div className="lg:col-span-8 flex flex-col" style={{ borderTop: "1px solid var(--border)" }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                <button
                  className="group w-full flex items-center justify-between py-6 text-left gap-6"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className="t-body font-medium transition-all duration-300 group-hover:translate-x-2 group-hover:text-[var(--text-primary)]"
                    style={{ color: open === i ? "var(--text-primary)" : "var(--text-secondary)" }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 45 : 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.22 }}
                    className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center transition-colors"
                    style={{
                      border: "1px solid",
                      borderColor: open === i ? "var(--cyan)" : "var(--border)",
                      background:  open === i ? "var(--cyan-dim)" : "transparent",
                      color:       open === i ? "var(--cyan)"  : "var(--text-muted)",
                    }}
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="t-body pb-6 leading-relaxed" style={{ color: "var(--text-tertiary)" }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
