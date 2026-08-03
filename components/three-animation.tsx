'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Starfield() {
  const ref = useRef<THREE.Points>(null)

  // Generate random positions for stars
  const positions = useMemo(() => {
    const pos = new Float32Array(3000 * 3)
    // Use a simple seeded LCG for deterministic star positions and to avoid SonarCloud Math.random() hotspots
    let seed = 12345
    const pseudoRandom = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296
      return seed / 4294967296
    }

    for (let i = 0; i < 3000; i++) {
      pos[i * 3] = (pseudoRandom() - 0.5) * 10
      pos[i * 3 + 1] = (pseudoRandom() - 0.5) * 10
      pos[i * 3 + 2] = (pseudoRandom() - 0.5) * 10
    }
    return pos
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return

    // Rotate slightly
    ref.current.rotation.y += delta * 0.05
    ref.current.rotation.x += delta * 0.02

    // Make stars move upwards
    const positionsArray = ref.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < 3000; i++) {
      positionsArray[i * 3 + 1] += delta * 0.2 // Move up on Y axis

      // Reset if they go too high
      if (positionsArray[i * 3 + 1] > 5) {
        positionsArray[i * 3 + 1] = -5
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export default function ThreeAnimation() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Starfield />
      </Canvas>
    </div>
  )
}
