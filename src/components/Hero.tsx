"use client";

import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import ThreeWebGLHero from "./Three/ThreeWebGLHero";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 pb-20 md:py-[120px] overflow-hidden">
      
      {/* WebGL Experience */}
      <ThreeWebGLHero />

      <Wrapper className="relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-[12px] font-bold uppercase tracking-widest text-slate-600">
                Available for New Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="font-bold tracking-tight text-[var(--color-text-primary)] mb-8 font-heading"
              style={{ fontSize: "var(--text-hero)", lineHeight: 1.05 }}
            >
              Engineering Digital<br />
              <span className="text-[var(--color-accent)]">Experiences</span><br />
              That Convert.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-lg mb-12"
            >
              We partner with ambitious companies to build digital products that are fast, scalable, and trusted by millions.
            </motion.p>
          </div>
          
          {/* Right Column is kept empty to let the 3D element breathe, or we could add abstract content here */}
          
        </div>
      </Wrapper>
    </section>
  );
}
