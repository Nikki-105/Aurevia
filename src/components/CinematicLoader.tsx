"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white px-4"
        >
          {/* Subtle Aurora Glow in Loader */}
          <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,240,255,0.2)_0%,rgba(0,0,0,0)_70%)] blur-[100px] pointer-events-none" />

          {/* Logo Building Animation */}
          <div className="relative flex items-center justify-center mb-8">
            <motion.svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[#00F0FF]"
            >
              <motion.path
                d="M 20 50 L 50 20 L 80 50 L 50 80 Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: progress / 100, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                d="M 35 50 L 50 35 L 65 50 L 50 65 Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: progress / 100, opacity: 0.7 }}
                transition={{ duration: 0.2 }}
              />
            </motion.svg>
          </div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-[800] tracking-tighter font-heading mb-4 text-white"
          >
            WebAura<span className="text-[#00F0FF]">.</span>
          </motion.div>

          {/* Counter Progress */}
          <div className="flex items-center gap-3 font-mono text-sm text-slate-400">
            <div className="w-48 h-[2px] bg-white/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#0066FF] to-[#00F0FF]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="w-12 text-right">{progress.toString().padStart(3, "0")}%</span>
          </div>

          <p className="mt-8 text-xs font-mono tracking-widest text-slate-500 uppercase">
            Engineering Digital Experiences That Convert
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
