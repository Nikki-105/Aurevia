"use client";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";
import { useCursor } from "@/context/CursorContext";

export default function ThreeWebGLHero() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      className="w-full h-full"
    >
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} intensity={3} />
      <directionalLight position={[-10, -10, -10]} intensity={1} color="#2563EB" />
      <LiquidShape />
      <Environment preset="studio" />
    </Canvas>
  );
}

function LiquidShape() {
  const { cursorType } = useCursor();
  
  // React to the cursor state: speed up the liquid when hovering over text
  const isHovering = cursorType === "text" || cursorType === "magnetic";

  return (
    <Sphere args={[1.5, 64, 64]}>
      <MeshDistortMaterial 
        color="#ffffff" 
        envMapIntensity={1} 
        clearcoat={1} 
        clearcoatRoughness={0.1} 
        metalness={0.2}
        roughness={0.1}
        distort={isHovering ? 0.6 : 0.4} 
        speed={isHovering ? 3 : 1.5}
      />
    </Sphere>
  );
}
