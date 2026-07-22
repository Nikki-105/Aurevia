"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Icosahedron, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MinimalWireframe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Very slow, delicate rotation
      meshRef.current.rotation.x += delta * 0.05;
      meshRef.current.rotation.y += delta * 0.08;
      
      // Pointer responsiveness (subtle)
      const targetRotationX = (state.pointer.y * Math.PI) / 12;
      const targetRotationY = (state.pointer.x * Math.PI) / 12;
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.02;
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.02;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Icosahedron
        ref={meshRef}
        args={[2, 1]}
        position={[2, 0, -2]}
      >
        <meshBasicMaterial 
          color="#000000" 
          wireframe={true} 
          transparent={true} 
          opacity={0.08} // Extremely faint
        />
      </Icosahedron>
    </Float>
  );
}

export default function ThreeWebGLHero() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <MinimalWireframe />
      </Canvas>
    </div>
  );
}
