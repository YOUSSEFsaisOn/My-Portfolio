"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/**
 * Rotating glowing orb with a wireframe shell and inner core.
 * Fully self-contained 3D scene rendered inside the hero section.
 * Tailored for a premium SaaS theme using accent blue and soft lighting.
 */
function HeroOrb() {
  const outerRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.12;
      outerRef.current.rotation.y += delta * 0.16;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = -t * 0.08;
      wireRef.current.rotation.y = t * 0.12;
    }
  });

  return (
    <group>
      {/* Premium blue glowing distorted core */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.0}>
        <mesh ref={outerRef}>
          <sphereGeometry args={[1.4, 64, 64]} />
          <MeshDistortMaterial
            color="#4F7CFF"
            emissive="#070B14"
            emissiveIntensity={0.5}
            roughness={0.15}
            metalness={0.3}
            distort={0.3}
            speed={1.5}
          />
        </mesh>
      </Float>

      {/* Wireframe shell in soft white/blue */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[2.0, 1]} />
        <meshBasicMaterial
          color="#EBF1FF"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Inner glowing core sphere */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
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
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-10, -5, -5]} intensity={0.8} color="#0B1020" />
        <Suspense fallback={null}>
          <HeroOrb />
          <Sparkles
            count={50}
            scale={7}
            size={1.5}
            speed={0.3}
            color="#EBF1FF"
            opacity={0.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
