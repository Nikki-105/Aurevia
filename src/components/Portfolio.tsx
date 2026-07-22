"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "./Wrapper";
import { useCursor } from "@/context/CursorContext";

const projects = [
  {
    title: "Aura Finance Platform",
    category: "Fintech & WebGL",
    image: "/portfolio-1.png",
    chips: ["Next.js 15", "Three.js", "Stripe API"],
    stat: "+340% Conversion",
    details: "Re-engineered the global wealth management platform with custom 3D telemetry visualization, resulting in a 340% increase in qualified lead conversion."
  },
  {
    title: "Luxe Atelier Digital Flagship",
    category: "Luxury E-Commerce",
    image: "/portfolio-2.png",
    chips: ["React 19", "GSAP Motion", "TailwindCSS"],
    stat: "100/100 Lighthouse",
    details: "Created a high-fashion editorial shopping experience with sub-second page loads and zero layout shifts for a Parisian luxury house."
  },
  {
    title: "Vanguard Autonomous AI",
    category: "Enterprise AI Agent",
    image: "/portfolio-3.png",
    chips: ["AI Agents", "Python", "TypeScript"],
    stat: "90% Cost Reduction",
    details: "Built an autonomous customer service and voice agent pipeline processing 100,000+ monthly inquiries without human intervention."
  }
];

export default function Portfolio() {
  const { setCursorType, setCursorLabel } = useCursor();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="relative w-full ds-section z-10 bg-[#0b0b0b] text-white border-t border-white/10">
      <Wrapper>
        
        <div className="flex flex-col mb-20 text-left">
          <span className="ds-small tracking-[0.1em] uppercase text-[#00F0FF] ds-mb-heading flex items-center gap-4">
            <div className="w-8 h-[1px] bg-[#00F0FF]" />
            Selected Case Studies
          </span>
          <h2 className="ds-section-title text-white font-heading max-w-3xl">
            Immersive digital products built for scale.
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="group relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
              onClick={() => setSelectedProject(p)}
              onMouseEnter={() => {
                setCursorType("text");
                setCursorLabel("CASE STUDY");
              }}
              onMouseLeave={() => setCursorType("default")}
            >
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest mb-2 block">
                      {p.category}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
                      {p.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {p.chips.map((chip) => (
                        <span key={chip} className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-4 py-2 rounded-full border border-[#00F0FF]/30">
                      {p.stat}
                    </span>
                    <button className="bg-white text-black font-bold px-6 py-3 rounded-full text-xs hover:bg-[#00F0FF] transition-colors">
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </Wrapper>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#0f0f0f] border border-white/20 rounded-3xl p-8 z-10 text-white shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white"
              >
                ✕
              </button>
              <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest">{selectedProject.category}</span>
              <h3 className="text-3xl font-bold font-heading text-white my-3">{selectedProject.title}</h3>
              <p className="text-slate-300 leading-relaxed text-sm mb-6">{selectedProject.details}</p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 flex justify-between items-center">
                <span className="text-xs text-slate-400 font-mono">Impact Metric:</span>
                <span className="text-lg font-bold text-[#00F0FF]">{selectedProject.stat}</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full bg-[#0066FF] text-white font-bold py-3.5 rounded-full text-sm hover:bg-[#00F0FF] hover:text-black transition-colors"
              >
                Close Case Study
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
