"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

const FLUID_SHAPES = [
  "40% 60% 70% 30% / 40% 50% 60% 50%",
  "60% 40% 30% 70% / 60% 30% 70% 40%",
  "50% 50% 20% 80% / 25% 80% 20% 75%",
  "30% 70% 70% 30% / 30% 30% 70% 70%",
  "70% 30% 50% 50% / 50% 70% 30% 50%",
];

const FLUID_COLORS = [
  "linear-gradient(135deg, #00d2ff 0%, #0066ff 100%)", // Cyan/Blue
  "linear-gradient(135deg, #aa00ff 0%, #0057ff 100%)", // Purple/Blue
  "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)", // Light Aqua
];

function FluidBlob({ top, left, delay }: { top: string, left: string, delay: number }) {
  const [shapeIdx, setShapeIdx] = useState(0);
  const [colorIdx, setColorIdx] = useState(0);
  const [isBouncing, setIsBouncing] = useState(false);
  const { setCursorType } = useCursor();
  
  const blobRef = useRef<HTMLDivElement>(null);
  
  // Mouse repel logic
  const [repel, setRepel] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!blobRef.current) return;
    const rect = blobRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const dist = Math.sqrt(distX * distX + distY * distY);
    
    // If mouse is within 150px, repel it
    if (dist < 150) {
      const angle = Math.atan2(distY, distX);
      const force = (150 - dist) * 0.4; // Strength of repel
      setRepel({
        x: -Math.cos(angle) * force,
        y: -Math.sin(angle) * force,
      });
    } else {
      setRepel({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setRepel({ x: 0, y: 0 });
    setCursorType("default");
  };

  const handleClick = () => {
    // Change shape and color
    setShapeIdx((prev) => (prev + 1) % FLUID_SHAPES.length);
    setColorIdx((prev) => (prev + 1) % FLUID_COLORS.length);
    
    // Trigger bounce
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 600); // Reset after bounce
  };

  return (
    <div
      className="absolute"
      style={{ top, left, zIndex: 0 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setCursorType("hover")}
    >
      <motion.div
        ref={blobRef}
        onClick={handleClick}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 0.25, // Subtle watermark look
          scale: isBouncing ? 1.4 : 1,
          x: repel.x,
          y: repel.y,
          borderRadius: FLUID_SHAPES[shapeIdx],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          rotate: { duration: 25 + delay, repeat: Infinity, ease: "linear" },
          scale: isBouncing ? { type: "spring", stiffness: 400, damping: 10 } : { duration: 0.3 },
          borderRadius: { duration: 1.5, ease: "easeInOut" },
          x: { type: "spring", stiffness: 120, damping: 10 },
          y: { type: "spring", stiffness: 120, damping: 10 },
        }}
        style={{
          width: "140px",
          height: "140px",
          background: FLUID_COLORS[colorIdx],
          cursor: "pointer",
          filter: "blur(6px)",
        }}
        whileHover={{ opacity: 0.6, filter: "blur(0px)" }}
      />
    </div>
  );
}

export default function FloatingFluids() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Container is pointer-events-none, but children are pointer-events-auto */}
      <div className="relative w-full h-full pointer-events-auto">
        
        {/* Placed in empty spaces between sections (using percentages) */}
        <FluidBlob top="15%" left="8%" delay={0} />
        <FluidBlob top="25%" left="85%" delay={2} />
        
        <FluidBlob top="45%" left="10%" delay={5} />
        <FluidBlob top="55%" left="88%" delay={1} />
        
        <FluidBlob top="75%" left="6%" delay={3} />
        <FluidBlob top="85%" left="82%" delay={4} />

      </div>
    </div>
  );
}
