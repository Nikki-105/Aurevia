"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Button from "./Button";
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
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-0"
    >
      <motion.nav 
        className={`flex items-center justify-between px-6 py-3 bg-[#0b0b0b]/80 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 ${
          isScrolled ? 'w-[90%] md:w-[60%] lg:w-[40%]' : 'w-full max-w-[1280px]'
        }`}
        style={{ borderRadius: isScrolled ? '32px' : '24px' }}
      >
        <div 
          className="text-xl font-[800] tracking-tighter text-white font-heading cursor-pointer flex items-center gap-1"
          onMouseEnter={() => setCursorType("text")}
          onMouseLeave={() => setCursorType("default")}
        >
          WebAura<span className="text-[#00F0FF]">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['About', 'Services', 'Work', 'Process', 'Pricing', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-mono font-medium text-slate-400 hover:text-[#00F0FF] transition-colors"
              onMouseEnter={() => {
                setCursorType("text");
                setCursorLabel("GOTO");
              }}
              onMouseLeave={() => setCursorType("default")}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <MagneticButton>
            <Button 
              variant="primary" 
              className="bg-[#00F0FF] text-black font-bold hover:bg-white text-xs"
              onMouseEnter={() => setCursorType("text")} 
              onMouseLeave={() => setCursorType("default")}
            >
              Start Project
            </Button>
          </MagneticButton>
        </div>
      </motion.nav>
    </motion.header>
  );
}
