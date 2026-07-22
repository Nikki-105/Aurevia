"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader({ onComplete }: { onComplete: () => void }) {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 7) + 3;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 700);
        }, 400);
      }
      setPct(current);
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "var(--black)" }}
        >
          {/* Ambient glow */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          {/* Logo mark */}
          <div className="relative flex flex-col items-center z-10">
            <motion.svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              className="mb-6"
            >
              {/* Outer diamond */}
              <motion.path
                d="M28 4 L52 28 L28 52 L4 28 Z"
                stroke="var(--cyan)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: pct / 100 }}
                transition={{ duration: 0.1 }}
              />
              {/* Inner diamond */}
              <motion.path
                d="M28 14 L42 28 L28 42 L14 28 Z"
                stroke="var(--cyan)"
                strokeWidth="1"
                fill="none"
                strokeOpacity={0.5}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: pct / 100 }}
                transition={{ duration: 0.1 }}
              />
            </motion.svg>

            {/* Brand */}
            <motion.p
              className="t-mono text-[var(--text-primary)] font-bold text-lg tracking-[0.1em] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              WEBAURA
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${pct}%`,
                  background: "linear-gradient(90deg, var(--blue), var(--cyan))",
                  boxShadow: "0 0 12px var(--cyan)",
                }}
              />
            </div>

            {/* Percentage */}
            <p className="t-mono text-[var(--text-muted)] mt-3 text-xs tabular-nums">
              {pct.toString().padStart(3, "0")} %
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
