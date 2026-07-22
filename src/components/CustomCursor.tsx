"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const { cursorType, cursorLabel } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      {/* Outer Neon Glow Circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#00F0FF]/50 bg-[#0066FF]/10 backdrop-blur-[2px] flex items-center justify-center"
        animate={{
          x: mousePosition.x - (cursorType === "text" ? 36 : 16),
          y: mousePosition.y - (cursorType === "text" ? 36 : 16),
          width: cursorType === "text" ? 72 : 32,
          height: cursorType === "text" ? 72 : 32,
          scale: cursorType === "pointer" ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
      >
        {cursorLabel && (
          <span className="text-[9px] font-bold tracking-widest text-[#00F0FF] uppercase">
            {cursorLabel}
          </span>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#00F0FF] rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#00F0FF]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.05 }}
      />
    </>
  );
}
