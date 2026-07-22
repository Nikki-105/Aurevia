"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const { cursorType, cursorImage } = useCursor();
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for cursor trailing
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorXSpring = useSpring(cursorX, { stiffness: 500, damping: 40, mass: 0.5 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null; // Disable completely on touch devices
  }

  // Animation variants mapped directly to CursorContext states
  const variants = {
    default: {
      width: 14,
      height: 14,
      x: "-50%",
      y: "-50%",
      backgroundColor: "#ffffff",
      border: "0px solid transparent",
      opacity: 1
    },
    magnetic: {
      width: 48,
      height: 48,
      x: "-50%",
      y: "-50%",
      backgroundColor: "transparent",
      border: "1px solid #ffffff",
      opacity: 1
    },
    pointer: {
      width: 32,
      height: 32,
      x: "-50%",
      y: "-50%",
      backgroundColor: "#ffffff",
      border: "0px solid transparent",
      opacity: 0.1
    },
    text: {
      width: 120,
      height: 120,
      x: "-50%",
      y: "-50%",
      backgroundColor: "#ffffff",
      border: "0px solid transparent",
      opacity: 1
    },
    image: {
      width: 320,
      height: 220,
      x: "-50%",
      y: "-50%",
      backgroundColor: "transparent",
      border: "0px solid transparent",
      opacity: 1,
      mixBlendMode: "normal" as const,
    }
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center rounded-2xl overflow-hidden ${cursorType === 'image' ? 'shadow-2xl' : 'mix-blend-difference'}`}
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        opacity: isVisible ? 1 : 0,
        borderRadius: cursorType === 'image' ? '12px' : '9999px',
      }}
      variants={variants}
      animate={cursorType}
      transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
    >
      <AnimatePresence>
        {cursorType === "image" && cursorImage && (
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            src={cursorImage}
            className="w-full h-full object-cover"
            alt=""
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
