"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const { cursorType } = useCursor();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    const leave = () => setIsVisible(false);
    const enter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [isVisible]);

  const isPointer = cursorType === "pointer";

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999999] rounded-full"
        animate={{
          x: pos.x - (isPointer ? 22 : 14),
          y: pos.y - (isPointer ? 22 : 14),
          width:   isPointer ? 44 : 28,
          height:  isPointer ? 44 : 28,
          opacity: isVisible ? 1 : 0,
          borderColor: isPointer ? "var(--cyan)" : "rgba(0,229,255,0.5)",
          backgroundColor: isPointer ? "rgba(0,229,255,0.08)" : "rgba(0,82,255,0.06)",
        }}
        style={{ border: "1px solid" }}
        transition={{ type: "spring", stiffness: 1000, damping: 35, mass: 0.02 }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-[5px] h-[5px] pointer-events-none z-[999999] rounded-full"
        animate={{
          x: pos.x - 2.5,
          y: pos.y - 2.5,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isPointer ? "var(--cyan)" : "#00aaff",
        }}
        style={{ boxShadow: "0 0 8px var(--cyan)" }}
        transition={{ type: "spring", stiffness: 3000, damping: 50, mass: 0.001 }}
      />
    </>
  );
}
