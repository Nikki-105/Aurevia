"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float, Lightformer } from "@react-three/drei";
import Wrapper from "./Wrapper";
import Button from "./Button";
import { useCursor } from "@/context/CursorContext";

function GlassSculpture() {
  const mesh = useRef<any>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={2} speed={2}>
      <mesh ref={mesh} scale={1.2}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial 
          backside
          thickness={0.5}
          roughness={0.05}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.08}
          anisotropy={0.3}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color="#ffffff"
        />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  const { setCursorType, setCursorLabel } = useCursor();

  return (
    <section className="relative w-full min-h-screen flex items-center pt-[96px] pb-[48px] overflow-hidden">
      <Wrapper className="h-full relative z-10 ds-grid items-center">
        
        {/* Left: Editorial Typography */}
        <div className="flex flex-col z-20 col-span-4 md:col-span-8 lg:col-span-6 mt-[80px] lg:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="ds-hero text-[var(--color-text-primary)] font-heading ds-mb-heading"
          >
            Engineering <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400">
              the extraordinary.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="ds-body max-w-[480px] ds-mb-button"
          >
            Aurevia is an elite digital agency crafting timeless, high-performance web experiences for brands that refuse to blend in.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="flex flex-wrap items-center gap-[32px]"
          >
            <Button 
              variant="primary"
              onMouseEnter={() => { setCursorType("text"); setCursorLabel("START"); }}
              onMouseLeave={() => setCursorType("default")}
            >
              Start Project
            </Button>
            <Button 
              variant="text"
              onMouseEnter={() => setCursorType("text")}
              onMouseLeave={() => setCursorType("default")}
            >
              Our Process
            </Button>
          </motion.div>
        </div>

      </Wrapper>

      {/* Right: WebGL Canvas */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0 lg:left-1/2 z-0 h-[60vh] lg:h-full w-full lg:w-1/2 pointer-events-none mt-24 lg:mt-0"
      >
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={2} />
          <GlassSculpture />
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
              <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
              <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
            </group>
          </Environment>
        </Canvas>
      </motion.div>

    </section>
  );
}
