"use client";

import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full bg-slate-900 text-white pt-[128px] pb-[48px] z-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[960px] h-[400px] bg-[var(--color-accent)] blur-[150px] opacity-20 rounded-[100%] pointer-events-none" />

      <Wrapper className="relative z-10 flex flex-col">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[64px] mb-[128px]">
          
          <div className="flex flex-col lg:col-span-2">
            <h3 className="text-[24px] font-[800] tracking-[-0.02em] font-heading mb-[24px]">Aurevia.</h3>
            <p className="text-slate-400 max-w-[320px] leading-[1.6] text-[16px]">
              An elite digital agency crafting timeless, high-performance web experiences for brands that refuse to blend in.
            </p>
          </div>

          <div className="flex flex-col gap-[16px]">
            <span className="text-[13px] font-[700] tracking-[0.05em] uppercase text-slate-500 mb-[8px]">Social</span>
            <a href="#" className="text-[15px] font-[500] text-slate-300 hover:text-white transition-colors w-fit">Twitter</a>
            <a href="#" className="text-[15px] font-[500] text-slate-300 hover:text-white transition-colors w-fit">LinkedIn</a>
            <a href="#" className="text-[15px] font-[500] text-slate-300 hover:text-white transition-colors w-fit">Instagram</a>
            <a href="#" className="text-[15px] font-[500] text-slate-300 hover:text-white transition-colors w-fit">Awwwards</a>
          </div>

          <div className="flex flex-col gap-[16px]">
            <span className="text-[13px] font-[700] tracking-[0.05em] uppercase text-slate-500 mb-[8px]">Studio</span>
            <a href="#" className="text-[15px] font-[500] text-slate-300 hover:text-white transition-colors w-fit">About Us</a>
            <a href="#" className="text-[15px] font-[500] text-slate-300 hover:text-white transition-colors w-fit">Careers</a>
            <a href="#" className="text-[15px] font-[500] text-slate-300 hover:text-white transition-colors w-fit">Privacy Policy</a>
            <a href="#" className="text-[15px] font-[500] text-slate-300 hover:text-white transition-colors w-fit">Terms of Service</a>
          </div>

        </div>

        {/* Massive Brand Statement */}
        <div className="w-full border-b border-white/10 pb-[64px] mb-[32px] text-center flex flex-col items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(48px,12vw,240px)] font-[800] tracking-[-0.04em] font-heading leading-[0.8] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20"
          >
            AUREVIA
          </motion.h1>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-[16px] text-slate-500 text-[14px]">
          <span>© {new Date().getFullYear()} Aurevia Studio. All rights reserved.</span>
          <span>Crafted with precision in San Francisco.</span>
        </div>

      </Wrapper>
    </footer>
  );
}
