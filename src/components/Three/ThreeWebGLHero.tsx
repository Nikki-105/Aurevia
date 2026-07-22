"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Pointer responsiveness (normalized coordinates -1 to +1)
      const targetRotationX = (state.pointer.y * Math.PI) / 8;
      const targetRotationY = (state.pointer.x * Math.PI) / 8;
      
      // Smooth interpolation
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere
        ref={meshRef}
        args={[2, 64, 64]}
        position={[0, 0, 0]}
      >
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={1.5}
        />
      </Sphere>
    </Float>
  );
}

export default function ThreeWebGLHero() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" style={{ pointerEvents: "auto" }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        {/* Subtle gradients from lighting */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#e0f2fe" /> {/* Light blue */}
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#f3e8ff" /> {/* Light purple */}
        <directionalLight position={[0, 0, 10]} intensity={0.5} color="#ffffff" />
        
        <AbstractShape />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
