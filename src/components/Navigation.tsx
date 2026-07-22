"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Button from "./Button";

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
      className="fixed top-[24px] left-0 right-0 z-50 flex justify-center px-[16px] md:px-0"
    >
      <motion.nav 
        className={`flex items-center justify-between px-[24px] py-[12px] glass-panel border border-[var(--color-border)] transition-all duration-300 ${isScrolled ? 'w-[90%] md:w-[60%] lg:w-[40%]' : 'w-full max-w-[1280px]'}`}
        style={{ borderRadius: isScrolled ? '32px' : '24px' }}
      >
        <div 
          className="text-[20px] font-[800] tracking-[-0.02em] text-slate-900 font-heading cursor-pointer"
          onMouseEnter={() => setCursorType("text")}
          onMouseLeave={() => setCursorType("default")}
        >
          Aurevia.
        </div>

        <div className="hidden md:flex items-center gap-[32px]">
          {['Work', 'Process', 'Services', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="ds-small text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
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
          <Button variant="primary" onMouseEnter={() => setCursorType("text")} onMouseLeave={() => setCursorType("default")}>
            Start Project
          </Button>
        </div>
      </motion.nav>
    </motion.header>
  );
}
