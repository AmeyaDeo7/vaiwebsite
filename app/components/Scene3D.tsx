'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import { Mesh, BufferGeometry, Vector3, LineSegments, LineBasicMaterial, BufferAttribute } from 'three';

function CubeGrid({ size = 3, spacing = 2 }) {
  const cubes = useMemo(() => {
    const positions = [];
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          positions.push([
            (x - (size - 1) / 2) * spacing,
            (y - (size - 1) / 2) * spacing,
            (z - (size - 1) / 2) * spacing,
          ]);
        }
      }
    }
    return positions;
  }, [size, spacing]);

  const lines = useMemo(() => {
    const points: number[] = [];
    
    // Create lines between adjacent cubes
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          const pos = [
            (x - (size - 1) / 2) * spacing,
            (y - (size - 1) / 2) * spacing,
            (z - (size - 1) / 2) * spacing,
          ];

          // Connect to next cube in x direction
          if (x < size - 1) {
            points.push(...pos, pos[0] + spacing, pos[1], pos[2]);
          }
          // Connect to next cube in y direction
          if (y < size - 1) {
            points.push(...pos, pos[0], pos[1] + spacing, pos[2]);
          }
          // Connect to next cube in z direction
          if (z < size - 1) {
            points.push(...pos, pos[0], pos[1], pos[2] + spacing);
          }
        }
      }
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(new Float32Array(points), 3));
    return geometry;
  }, [size, spacing]);

  return (
    <group>
      {cubes.map((position, index) => (
        <Box key={index} position={new Vector3(...position)} />
      ))}
      <lineSegments geometry={lines}>
        <lineBasicMaterial color="#666666" linewidth={1} />
      </lineSegments>
    </group>
  );
}

function Box({ position }: { position?: Vector3 }) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <mesh
      position={position}
      ref={meshRef}
      scale={clicked ? 7.5 : 5}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? '#ff6b6b' : '#4c6ef5'} />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="h-[800px] w-full">
      <Canvas camera={{ position: [30, 30, 30] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[40, 40, 40]} />
        <CubeGrid size={2} spacing={15} />
        <OrbitControls />
      </Canvas>
    </div>
  );
} 