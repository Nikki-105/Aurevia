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
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[12px] font-bold uppercase tracking-widest text-slate-600">
                Available for New Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="font-bold tracking-tight text-slate-900 mb-8"
              style={{ fontSize: "var(--text-hero)", lineHeight: 1.05 }}
            >
              Engineering Digital<br />
              <span className="text-blue-600">Experiences</span> That Convert.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-lg md:text-xl text-slate-500 max-w-lg mb-12"
            >
              We partner with ambitious companies to build digital products that are fast, scalable, and trusted by millions.
            </motion.p>
          </div>

          {/* Right Column: Graphic/Visual to prevent empty right side */}
          <div className="w-full aspect-square md:aspect-auto md:h-full min-h-[400px] bg-slate-50 rounded-3xl border border-slate-200 flex items-center justify-center relative overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-slate-400 font-semibold tracking-wider uppercase text-sm"
            >
              Interactive Visual Experience
            </motion.div>
          </div>
          
        </div>
      </Wrapper>
    </section>
  );
}
