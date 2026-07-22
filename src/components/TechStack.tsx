"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

const techList = [
  { name: "Next.js 15", x: "-25%", y: "-35%", color: "#ffffff" },
  { name: "React 19", x: "35%", y: "-40%", color: "#61DAFB" },
  { name: "Three.js / WebGL", x: "30%", y: "25%", color: "#00F0FF" },
  { name: "TypeScript", x: "-40%", y: "25%", color: "#3178C6" },
  { name: "AI LLM Agents", x: "-45%", y: "-10%", color: "#7000FF" },
  { name: "TailwindCSS", x: "45%", y: "-5%", color: "#38BDF8" },
];

export default function TechStack() {
  return (
    <section className="relative w-full ds-section overflow-hidden z-10 bg-[#0b0b0b] text-white border-t border-white/10">
      <Wrapper>
        <div className="flex flex-col items-center text-center">
          <span className="ds-small tracking-[0.1em] uppercase text-[#00F0FF] ds-mb-heading">
            Modern Stack
          </span>
          <h2 className="ds-section-title text-white font-heading max-w-2xl mb-16">
            Powered by bleeding-edge technology.
          </h2>

          {/* 3D Orbit Node Visual */}
          <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
            <div className="z-20 w-36 h-36 rounded-full bg-[#111] border border-[#00F0FF]/50 shadow-[0_0_40px_rgba(0,240,255,0.3)] flex flex-col items-center justify-center relative animate-float">
              <div className="absolute inset-0 rounded-full border border-[#0066FF] animate-ping opacity-30" />
              <span className="font-mono font-bold text-xs text-[#00F0FF] uppercase tracking-widest">WebAura</span>
              <span className="font-heading font-bold text-xl text-white mt-1">Core Engine</span>
            </div>

            <div className="absolute inset-0 border border-white/10 rounded-full scale-75 opacity-40" />
            <div className="absolute inset-0 border border-white/5 rounded-full scale-100 opacity-40" />

            {techList.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="absolute z-10 animate-float"
                style={{ 
                  left: `calc(50% + ${t.x})`, 
                  top: `calc(50% + ${t.y})`,
                  animationDelay: `${i * 0.4}s`
                }}
              >
                <div className="bg-[#111]/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15 shadow-xl flex items-center gap-2 hover:scale-110 hover:border-[#00F0FF] transition-all">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }} />
                  <span className="text-xs font-mono font-bold text-slate-200">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
