"use client";

import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Wrapper from "./Wrapper";

function ConstellationStars() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#00F0FF" transparent opacity={0.6} />
    </points>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#050505] text-white pt-32 pb-12 z-20 overflow-hidden border-t border-white/10">
      
      {/* 3D Galaxy Constellation Canvas Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ConstellationStars />
        </Canvas>
      </div>

      <Wrapper className="relative z-10 flex flex-col">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="flex flex-col lg:col-span-2">
            <h3 className="text-3xl font-extrabold font-heading text-white mb-4">WebAura<span className="text-[#00F0FF]">.</span></h3>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-6">
              Engineering Digital Experiences That Convert. An Awwwards-grade digital studio building bespoke Next.js 15, WebGL 3D, and AI platforms.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="text-xs font-mono text-slate-300">Available for Q3/Q4 Enterprise Partnerships</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Navigation</span>
            <a href="#hero" className="text-slate-300 hover:text-[#00F0FF] transition-colors text-sm">Home</a>
            <a href="#about" className="text-slate-300 hover:text-[#00F0FF] transition-colors text-sm">About Studio</a>
            <a href="#services" className="text-slate-300 hover:text-[#00F0FF] transition-colors text-sm">16 Capabilities</a>
            <a href="#portfolio" className="text-slate-300 hover:text-[#00F0FF] transition-colors text-sm">Case Studies</a>
            <a href="#process" className="text-slate-300 hover:text-[#00F0FF] transition-colors text-sm">Roadmap</a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Connect</span>
            <a href="#" className="text-slate-300 hover:text-[#00F0FF] transition-colors text-sm">Twitter / X</a>
            <a href="#" className="text-slate-300 hover:text-[#00F0FF] transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-slate-300 hover:text-[#00F0FF] transition-colors text-sm">GitHub</a>
            <a href="#" className="text-slate-300 hover:text-[#00F0FF] transition-colors text-sm">Awwwards Profile</a>
          </div>
        </div>

        {/* Massive 200px Glowing Typography Statement */}
        <div className="w-full border-b border-white/10 pb-12 mb-8 text-center flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[clamp(48px,14vw,220px)] font-extrabold font-heading leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-white/10 drop-shadow-[0_0_50px_rgba(0,240,255,0.2)]"
          >
            WEBAURA
          </motion.h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs font-mono">
          <span>© {new Date().getFullYear()} WebAura Studio. All rights reserved.</span>
          <span>100/100 Lighthouse • Handcrafted in San Francisco</span>
        </div>

      </Wrapper>
    </footer>
  );
}
