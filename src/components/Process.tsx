"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Wrapper from "./Wrapper";

const steps = [
  {
    num: "01",
    title: "Discovery & Technical Interrogation",
    description: "We dive deep into your enterprise logic, target user cohorts, and performance bottlenecks to construct a high-conversion technical blueprint.",
    chips: ["Architecture", "Benchmarking", "UX Audit"]
  },
  {
    num: "02",
    title: "High-Fashion Editorial Design",
    description: "We craft bespoke UI prototypes, custom 3D WebGL assets, and dark-mode glassmorphism tokens that make your brand look like a market leader.",
    chips: ["Figma 3D", "Design Tokens", "Wireframing"]
  },
  {
    num: "03",
    title: "Next.js 15 & AI Engineering",
    description: "We write zero-vulnerability TypeScript codebases, configure server components, and integrate autonomous AI agents and automated workflows.",
    chips: ["Next.js 15", "React 19", "AI LLMs"]
  },
  {
    num: "04",
    title: "100 Lighthouse Launch & SLA",
    description: "Rigorous load testing, Core Web Vitals optimization, and automated SEO schema indexation ensure your product converts from day one.",
    chips: ["100/100 Audit", "Edge CDN", "24/7 SLA"]
  }
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative w-full ds-section z-10 bg-[#050505] text-white">
      <Wrapper>
        <div className="flex flex-col lg:flex-row gap-20 relative" ref={containerRef}>
          
          {/* Sticky Header */}
          <div className="lg:w-1/3 flex flex-col">
            <div className="lg:sticky lg:top-36">
              <span className="ds-small tracking-[0.1em] uppercase text-[#00F0FF] ds-mb-heading flex items-center gap-4">
                <div className="w-8 h-[1px] bg-[#00F0FF]" />
                The Story & Roadmap
              </span>
              <h2 className="ds-section-title text-white font-heading mb-6">
                A mathematical approach to digital perfection.
              </h2>
              <p className="ds-body text-slate-400">
                Every phase of our engineering workflow is choreographed to eliminate risk, maximize speed, and deliver a 100/100 Lighthouse product.
              </p>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="lg:w-2/3 relative flex flex-col pt-8 lg:pt-0">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-white/10 hidden md:block" />
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute left-[27px] top-0 w-[2px] bg-[#00F0FF] origin-top hidden md:block z-10 shadow-[0_0_10px_#00F0FF]"
            />

            <div className="flex flex-col gap-24">
              {steps.map((step, i) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="relative flex flex-col md:flex-row gap-8 items-start group"
                >
                  <div className="hidden md:flex absolute left-[22px] top-4 w-3 h-3 bg-[#050505] border-2 border-[#00F0FF] rounded-full z-20 group-hover:scale-150 transition-transform" />
                  
                  <div className="md:w-32 flex-shrink-0 md:text-right pt-2 md:pl-12">
                    <span className="text-5xl font-mono font-bold text-white/20 group-hover:text-[#00F0FF] transition-colors font-heading">
                      {step.num}
                    </span>
                  </div>

                  <div className="flex-1 ds-card p-8 group-hover:border-[#00F0FF]/40">
                    <h3 className="text-2xl font-bold font-heading text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.chips.map(chip => (
                        <span key={chip} className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Wrapper>
    </section>
  );
}
