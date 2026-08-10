"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/**
 * Rotating glowing orb with a wireframe shell and inner core.
 * Fully self-contained 3D scene rendered inside the hero section.
 * Tailored for a modern Light Theme using soft pastel blue and deep purple accents.
 */
function HeroOrb() {
  const outerRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.15;
      outerRef.current.rotation.y += delta * 0.2;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = -t * 0.1;
      wireRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group>
      {/* Soft pastel blue glowing distorted core */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh ref={outerRef}>
          <sphereGeometry args={[1.4, 64, 64]} />
          <MeshDistortMaterial
            color="#E1EEF8"
            emissive="#b9d9f5"
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.2}
            distort={0.35}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Wireframe shell in deep midnight purple */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[2.1, 1]} />
        <meshBasicMaterial
          color="#1A103C"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Inner glowing core sphere */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

/**
 * 3D animated scene placed inside the hero section.
 * Renders a floating glowing orb with star sparkles and mouse parallax.
 */
export default function Hero3D() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -5, -5]} intensity={1.0} color="#E1EEF8" />
        <Suspense fallback={null}>
          <HeroOrb />
          <Sparkles
            count={60}
            scale={8}
            size={2}
            speed={0.4}
            color="#1A103C"
            opacity={0.25}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
