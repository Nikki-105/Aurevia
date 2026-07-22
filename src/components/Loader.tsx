"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate a cinematic loading sequence
    const duration = 2500; // 2.5 seconds total
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400); // Wait a beat at 100% before triggering out-animation
          return 100;
        }
        // Ease out math for a smooth slowdown at the end
        const next = prev + step * (1 - prev / 150); 
        return next > 99 ? 100 : next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-[var(--color-text-primary)]"
    >
      <div className="flex flex-col items-center gap-8 w-full max-w-sm px-6">
        
        {/* Sleek SVG Logo Draw Animation */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <motion.svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full stroke-[var(--color-text-primary)]"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M50 10 L50 50 M10 30 L50 50 M90 30 L50 50 M10 70 L50 50 M90 70 L50 50 M50 90 L50 50"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.svg>
        </div>

        {/* Minimal Typography */}
        <motion.div 
          className="flex flex-col items-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <span className="text-xl font-bold tracking-[0.2em] uppercase font-heading">WebAura</span>
          <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase mt-2">Loading Experience</span>
        </motion.div>

        {/* Minimal Progress Bar */}
        <div className="w-full h-[1px] bg-slate-100 relative mt-4 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[var(--color-accent)]"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
          />
        </div>
        
        {/* Progress Text */}
        <motion.div 
          className="text-[10px] font-mono text-slate-400 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {Math.floor(progress)}%
        </motion.div>

      </div>
    </motion.div>
  );
}
