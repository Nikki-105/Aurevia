"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import MagneticButton from "./MagneticButton";

export default function Navigation() {
  const { setCursorType, setCursorLabel } = useCursor();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6"
    >
      <motion.nav 
        className={`flex items-center justify-between h-[72px] px-8 bg-[#0e0f14]/80 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 ${
          isScrolled ? 'w-[90%] md:w-[65%] lg:w-[48%]' : 'w-full max-w-[1320px]'
        }`}
        style={{ borderRadius: isScrolled ? '36px' : '24px' }}
      >
        {/* Brand Logo */}
        <div 
          className="text-xl font-[800] tracking-tighter text-white font-heading cursor-pointer flex items-center gap-1 select-none"
          onMouseEnter={() => setCursorType("text")}
          onMouseLeave={() => setCursorType("default")}
        >
          WebAura<span className="text-[#00F0FF]">.</span>
        </div>

        {/* Navigation Links with 32px gap */}
        <div className="hidden md:flex items-center gap-[32px]">
          {['About', 'Services', 'Work', 'Process', 'Pricing', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-mono font-medium text-slate-300 hover:text-[#00F0FF] transition-colors"
              onMouseEnter={() => {
                setCursorType("pointer");
              }}
              onMouseLeave={() => setCursorType("default")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Elegant CTA Button (44px height, vertically aligned) */}
        <div className="hidden md:flex items-center">
          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-[44px] px-6 rounded-full bg-[#00F0FF] text-black text-xs font-bold font-sans hover:bg-white hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              onMouseEnter={() => setCursorType("text")} 
              onMouseLeave={() => setCursorType("default")}
            >
              Start Project
            </a>
          </MagneticButton>
        </div>
      </motion.nav>
    </motion.header>
  );
}
