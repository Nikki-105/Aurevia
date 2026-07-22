"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <>
      {/* Film Grain Noise Overlay */}
      <div className="noise-overlay mix-blend-overlay" />

      {/* Fixed Ambient Glow System */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[var(--color-bg-secondary)]">
        
        {/* Soft Aurora Blobs */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-40 animate-aurora-1"
          style={{ background: 'var(--color-aurora-1)' }}
        />
        
        <div 
          className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full blur-[100px] opacity-30 animate-aurora-2"
          style={{ background: 'var(--color-aurora-2)' }}
        />

        <div 
          className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-30 animate-aurora-1"
          style={{ background: 'var(--color-aurora-3)' }}
        />

        {/* Barely visible geometric mesh grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{ 
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />

      </div>
    </>
  );
}
