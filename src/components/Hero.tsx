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
          <div className="flex flex-col items-start text-left z-10">
            {/* Ultra Minimal Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="flex h-4 w-4 items-center justify-center">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-40"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-black"></span>
                </span>
              </div>
              <span className="text-[12px] font-normal tracking-widest text-neutral-500 uppercase">
                Available for new projects
              </span>
            </motion.div>

            {/* Typography-focused Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="font-light tracking-tight text-neutral-900 mb-8 font-heading"
              style={{ fontSize: "var(--text-hero)", lineHeight: 1.1 }}
            >
              Engineering Digital<br />
              <span className="font-semibold">Experiences</span><br />
              That Convert.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-lg md:text-xl font-light text-neutral-500 max-w-lg mb-12 leading-relaxed"
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
