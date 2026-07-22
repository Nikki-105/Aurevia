"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import Wrapper from "./Wrapper";
import Button from "./Button";
import MagneticButton from "./MagneticButton";

function GlowingCrystal() {
  const mesh = useRef<any>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={2} speed={2}>
      <mesh ref={mesh} scale={1.3}>
        <octahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          backside
          thickness={0.8}
          roughness={0.05}
          transmission={1}
          ior={1.6}
          chromaticAberration={0.2}
          color="#00F0FF"
        />
      </mesh>
    </Float>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full ds-section bg-[#050505] text-white z-10 border-t border-white/10">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Info Panel */}
          <div className="flex flex-col">
            <span className="ds-small tracking-[0.1em] uppercase text-[#00F0FF] ds-mb-heading flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#00F0FF]" />
              Start A Project
            </span>
            <h2 className="ds-section-title text-white font-heading ds-mb-heading">
              Let's engineer your next masterpiece.
            </h2>
            <p className="ds-body text-slate-400 max-w-md ds-mb-button">
              We selectively partner with ambitious enterprises ready to dominate their market through custom 3D WebGL platforms and AI automation.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">Direct Inquiries</span>
                <a href="mailto:hello@webaura.studio" className="text-xl font-bold font-heading text-white hover:text-[#00F0FF] transition-colors">
                  hello@webaura.studio
                </a>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">HQ Location</span>
                <span className="text-xl font-bold font-heading text-white">San Francisco, CA</span>
              </div>

              <div className="flex gap-4 mt-4">
                <a href="https://wa.me/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-colors">
                  WhatsApp Direct →
                </a>
                <a href="#calendar" className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-colors">
                  Book 15-min Call →
                </a>
              </div>
            </div>
          </div>

          {/* Right Floating Glass Form & 3D Crystal */}
          <div className="relative">
            {/* 3D Crystal Canvas Behind Form */}
            <div className="absolute -top-24 -right-12 w-64 h-64 pointer-events-none opacity-60">
              <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <GlowingCrystal />
              </Canvas>
            </div>

            <form onSubmit={handleSubmit} className="glow-card p-10 flex flex-col gap-6 relative z-10">
              {submitted ? (
                <div className="py-16 text-center">
                  <span className="text-4xl mb-4 block">🚀</span>
                  <h3 className="text-2xl font-bold text-white font-heading mb-2">Inquiry Received</h3>
                  <p className="text-sm text-slate-400">Our lead architect will review your project specs and respond within 2 hours.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Your Name</label>
                      <input type="text" required placeholder="John Doe" className="ds-input" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Work Email</label>
                      <input type="email" required placeholder="john@company.com" className="ds-input" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Estimated Budget</label>
                    <select className="ds-input appearance-none bg-[#111] cursor-pointer">
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000+</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Project Details</label>
                    <textarea rows={4} required placeholder="Tell us about your goals..." className="ds-input py-4 resize-none h-auto" />
                  </div>

                  <MagneticButton className="w-full">
                    <Button type="submit" variant="primary" className="w-full bg-gradient-to-r from-[#0066FF] to-[#00F0FF] text-black font-bold">
                      Transmit Project Inquiry
                    </Button>
                  </MagneticButton>
                </>
              )}
            </form>
          </div>

        </div>
      </Wrapper>
    </section>
  );
}
