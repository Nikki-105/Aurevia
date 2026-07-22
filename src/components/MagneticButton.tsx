"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useCursor } from "@/context/CursorContext";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  magneticForce?: number;
}

export default function MagneticButton({ children, magneticForce = 40, className, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { setCursorType } = useCursor();

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Calculate magnetic pull based on force
    setPosition({ x: (middleX * magneticForce) / width, y: (middleY * magneticForce) / height });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setCursorType("default");
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onMouseEnter={() => setCursorType("magnetic")}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center cursor-pointer ${className}`}
      {...props}
    >
      {/* Inner div also animates slightly for a parallax effect */}
      <motion.div
        animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="pointer-events-none w-full h-full flex items-center justify-center"
      >
        {children}
      </motion.div>
    </motion.button>
  );
}
