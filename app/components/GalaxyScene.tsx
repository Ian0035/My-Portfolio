// components/GalaxyScene.tsx
'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function SpinningPlanet({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.rotation.y = t * (0.2 + index * 0.1);
      ref.current.rotation.x = t * 0.05;
    }
  });

  return (
    <mesh>
  <sphereGeometry args={[1, 32, 32]} />
  <meshStandardMaterial color="red" />
</mesh>
  );
}

export default function GalaxyScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      {[...Array(3)].map((_, i) => (
        <SpinningPlanet key={i} index={i} />
      ))}
    </Canvas>
  );
}
