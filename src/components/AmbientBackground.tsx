"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1, background: "var(--surface-0)" }}
    >
      {/* Aurora orb 1 — blue */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "70vw", height: "70vw",
          top: "-20%", left: "-10%",
          background: "radial-gradient(circle, var(--aurora-1) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Aurora orb 2 — purple */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "60vw", height: "60vw",
          top: "30%", right: "-15%",
          background: "radial-gradient(circle, var(--aurora-2) 0%, transparent 70%)",
        }}
        animate={{ x: [0, -40, 30, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Aurora orb 3 — cyan */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "55vw", height: "55vw",
          bottom: "-15%", left: "20%",
          background: "radial-gradient(circle, var(--aurora-3) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 25, -35, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}
