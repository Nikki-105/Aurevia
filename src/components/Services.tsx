"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "./Wrapper";

const SERVICES = [
  { n: "01", title: "Premium Web Development",  tag: "ENGINEERING",    desc: "Ultra-performance Next.js 15 platforms with 100/100 Lighthouse scores, edge rendering, and sub-second LCP." },
  { n: "02", title: "AI Automation",             tag: "INTELLIGENCE",   desc: "Autonomous AI pipelines, LLM-powered workflows, and business automation that eliminates manual bottlenecks." },
  { n: "03", title: "SaaS Development",          tag: "PRODUCT",        desc: "End-to-end SaaS architecture from database design to billing infrastructure to scalable API layers." },
  { n: "04", title: "Mobile Applications",       tag: "MOBILE",         desc: "React Native and Swift/Kotlin apps that feel native, perform flawlessly, and ship on time." },
  { n: "05", title: "UI/UX Design",              tag: "DESIGN",         desc: "Research-led interface design with motion-rich prototypes, 60fps interactions, and conversion-focused UX." },
  { n: "06", title: "Brand Identity",            tag: "BRAND",          desc: "Complete brand systems: logo, type, color, motion language, and comprehensive usage guidelines." },
  { n: "07", title: "AI Chatbots & Agents",      tag: "AI",             desc: "Intelligent conversational agents, voice interfaces, and autonomous business process agents." },
  { n: "08", title: "CRM & ERP Systems",         tag: "ENTERPRISE",     desc: "Custom CRM and ERP solutions tailored to your exact operational workflows and data requirements." },
  { n: "09", title: "Technical SEO",             tag: "GROWTH",         desc: "Core Web Vitals mastery, structured data, programmatic SEO, and indexing at scale." },
  { n: "10", title: "API & Backend Development", tag: "INFRASTRUCTURE", desc: "High-throughput REST & GraphQL APIs, microservices, real-time WebSocket systems, and robust backend infrastructure." },
  { n: "11", title: "Dashboards & Analytics",    tag: "DATA",           desc: "Beautiful, interactive data dashboards with real-time streaming, drill-downs, and executive reporting." },
  { n: "12", title: "Custom Software",           tag: "BESPOKE",        desc: "Fully custom software solutions scoped to your exact domain, team size, and long-term roadmap." },
];

export default function Services() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="services" className="section-pad" style={{ borderBottom: "1px solid var(--border)" }}>
      <Wrapper>

        {/* Header */}
        <div className="flex flex-col gap-4 mb-20 max-w-2xl">
          <p className="t-label" style={{ color: "var(--cyan)" }}>What We Do</p>
          <h2 className="t-section" style={{ color: "var(--text-primary)" }}>
            Sixteen capabilities.<br />One obsession — excellence.
          </h2>
          <p className="t-body" style={{ color: "var(--text-tertiary)" }}>
            From zero to launch, we own every layer of your digital product.
          </p>
        </div>

        {/* Service list */}
        <div className="flex flex-col" style={{ borderTop: "1px solid var(--border)" }}>
          {SERVICES.map((s, i) => {
            const isOpen = expanded === s.n;
            return (
              <motion.div
                key={s.n}
                layout
                className="overflow-hidden"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <button
                  className="w-full flex items-center justify-between py-7 gap-6 text-left group"
                  onClick={() => setExpanded(isOpen ? null : s.n)}
                >
                  {/* Number */}
                  <span className="t-mono text-[11px] w-8 shrink-0" style={{ color: "var(--text-muted)" }}>{s.n}</span>

                  {/* Title */}
                  <span
                    className="flex-1 text-xl font-semibold tracking-tight transition-colors"
                    style={{
                      color: isOpen ? "var(--cyan)" : "var(--text-primary)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {s.title}
                  </span>

                  {/* Tag — hidden on mobile */}
                  <span className="hidden md:block t-label text-[9px] px-2.5 py-1 rounded-full shrink-0"
                    style={{ background: "var(--surface-3)", color: "var(--text-tertiary)", border: "1px solid var(--border)" }}>
                    {s.tag}
                  </span>

                  {/* Indicator */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      border: "1px solid",
                      borderColor: isOpen ? "var(--cyan)" : "var(--border)",
                      background: isOpen ? "var(--cyan-dim)" : "transparent",
                      color: isOpen ? "var(--cyan)" : "var(--text-muted)",
                    }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col sm:flex-row gap-6 items-start justify-between pb-7 pl-14">
                        <p className="t-body max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          {s.desc}
                        </p>
                        <a
                          href="#contact"
                          className="shrink-0 inline-flex items-center gap-2 t-sm font-semibold transition-colors"
                          style={{ color: "var(--cyan)" }}
                          onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                        >
                          Get a quote
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}
