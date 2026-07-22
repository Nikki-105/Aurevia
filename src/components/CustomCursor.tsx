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
      {/* Outer Precision Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#00F0FF]/50 bg-[#0066FF]/10 backdrop-blur-[2px]"
        animate={{
          x: mousePosition.x - (cursorType === "pointer" ? 24 : 16),
          y: mousePosition.y - (cursorType === "pointer" ? 24 : 16),
          width: cursorType === "pointer" ? 48 : 32,
          height: cursorType === "pointer" ? 48 : 32,
          scale: cursorType === "pointer" ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
      />

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
