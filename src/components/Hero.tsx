"use client";

import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import Wrapper from "./Wrapper";
import Button from "./Button";
import MagneticButton from "./MagneticButton";
import SplitText from "./SplitText";
import { useCursor } from "@/context/CursorContext";

const clientLogos = [
  { name: "Google", logo: "GOOGLE" },
  { name: "Stripe", logo: "STRIPE" },
  { name: "Vercel", logo: "VERCEL" },
  { name: "Framer", logo: "FRAMER" },
  { name: "Arc", logo: "ARC BROWSER" },
  { name: "OpenAI", logo: "OPENAI" },
];

function HolographicGlobe() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const count = 2400;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.9 + Math.random() * 0.1;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.15;
    }
  });

  return (
    <Float floatIntensity={1.8} rotationIntensity={1.2} speed={1.8}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.032}
          color="#00F0FF"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </Float>
  );
}

export default function Hero() {
  const { setCursorType, setCursorLabel } = useCursor();

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-between pt-[140px] pb-[48px] overflow-hidden bg-[#08080a] text-white">
      
      {/* Radial Background Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0066FF]/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#00F0FF]/10 blur-[140px] rounded-full pointer-events-none" />

      <Wrapper className="h-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols) - Editorial Content */}
          <div className="flex flex-col z-20 lg:col-span-7">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit ds-mb-badge"
            >
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
              <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
                WebAura Studio • 100/100 Lighthouse Agency
              </span>
            </motion.div>

            {/* Headline */}
            <SplitText 
              text="Engineering Digital Experiences That Convert."
              className="ds-hero font-heading text-white ds-mb-heading leading-[1.03]"
            />

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="ds-body text-slate-300 max-w-[560px] ds-mb-paragraph text-lg"
            >
              We engineer ultra-performance Next.js 15 applications, 3D WebGL canvases, custom AI automation agents, and enterprise SaaS platforms.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center gap-[24px] ds-mb-button"
            >
              <MagneticButton>
                <Button 
                  variant="primary"
                  className="bg-gradient-to-r from-[#0066FF] to-[#00F0FF] text-black font-bold h-[52px] px-8 shadow-[0_0_30px_rgba(0,240,255,0.4)]"
                  onMouseEnter={() => { setCursorType("text"); setCursorLabel("EXPLORE"); }}
                  onMouseLeave={() => setCursorType("default")}
                >
                  Start Your Project
                </Button>
              </MagneticButton>
              
              <MagneticButton>
                <Button 
                  variant="secondary"
                  className="border-white/20 text-white hover:bg-white/10 h-[52px] px-8"
                  onMouseEnter={() => setCursorType("text")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  Explore 16 Services
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Statistics Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg"
            >
              <div>
                <span className="text-3xl font-[800] text-white font-heading">$150M+</span>
                <p className="text-xs text-slate-400 font-mono mt-1">Client Revenue</p>
              </div>
              <div>
                <span className="text-3xl font-[800] text-[#00F0FF] font-heading">99.9%</span>
                <p className="text-xs text-slate-400 font-mono mt-1">Performance</p>
              </div>
              <div>
                <span className="text-3xl font-[800] text-white font-heading">40+</span>
                <p className="text-xs text-slate-400 font-mono mt-1">Global Awards</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column (5 cols) - 3D WebGL Globe Canvas */}
          <div className="lg:col-span-5 h-[450px] lg:h-[550px] relative pointer-events-none">
            <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 10]} intensity={1.5} />
              <HolographicGlobe />
            </Canvas>
          </div>

        </div>
      </Wrapper>

      {/* Infinite Client Logos Marquee */}
      <div className="w-full border-t border-white/10 py-6 mt-12 bg-black/40 backdrop-blur-md overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-400 font-mono font-bold tracking-widest text-sm hover:text-[#00F0FF] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF]/50" />
              <span>{client.logo}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
