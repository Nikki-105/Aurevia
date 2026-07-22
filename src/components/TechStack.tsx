"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

const technologies = [
  { name: "React", x: "-20%", y: "-30%", delay: 0 },
  { name: "Next.js", x: "40%", y: "-40%", delay: 0.2 },
  { name: "WebGL", x: "30%", y: "20%", delay: 0.4 },
  { name: "Three.js", x: "-40%", y: "30%", delay: 0.1 },
  { name: "TypeScript", x: "-50%", y: "-10%", delay: 0.5 },
  { name: "Tailwind", x: "50%", y: "0%", delay: 0.3 },
];

export default function TechStack() {
  return (
    <section className="relative w-full ds-section overflow-hidden z-10 bg-[var(--color-bg-secondary)]">
      <Wrapper>
        <div className="flex flex-col items-center text-center">
          
          <span className="ds-small tracking-[0.1em] uppercase text-[var(--color-text-tertiary)] ds-mb-heading">
            The Stack
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="ds-section-title text-[var(--color-text-primary)] font-heading max-w-[800px] mb-[96px]"
          >
            Powered by bleeding-edge technology.
          </motion.h2>

          {/* Floating Nodes System */}
          <div className="relative w-full max-w-[800px] h-[400px] flex items-center justify-center">
            
            {/* Center Node */}
            <div className="z-20 w-[128px] h-[128px] rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex items-center justify-center relative animate-float">
              <div className="absolute inset-0 rounded-full border border-[var(--color-accent)] animate-ping opacity-20" />
              <span className="font-heading font-[800] text-[24px] text-[var(--color-text-primary)]">Core</span>
            </div>

            {/* Orbiting Lines */}
            <div className="absolute inset-0 border border-[var(--color-border)] rounded-full scale-75 opacity-50" />
            <div className="absolute inset-0 border border-[var(--color-border)] rounded-full scale-100 opacity-50" />
            
            {/* Tech Nodes */}
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: tech.delay, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-10 animate-float"
                style={{ 
                  left: `calc(50% + ${tech.x})`, 
                  top: `calc(50% + ${tech.y})`,
                  animationDelay: `${tech.delay}s`
                }}
              >
                <div className="bg-[var(--color-bg-elevated)] px-[24px] py-[12px] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-[var(--color-border)] cursor-pointer hover:scale-[1.1] hover:border-[var(--color-border-hover)] transition-all duration-300 group">
                  <span className="text-[14px] font-[600] tracking-[-0.01em] text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </Wrapper>
    </section>
  );
}
