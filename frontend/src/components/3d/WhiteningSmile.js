import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WhiteningSmile = () => {
  const groupRef = useRef();
  const teethRefs = useRef([]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }

    teethRefs.current.forEach((tooth, i) => {
      if (tooth) {
        const offset = i * 0.3;
        const brightness = (Math.sin(state.clock.elapsedTime * 2 + offset) + 1) / 2;
        tooth.material.emissiveIntensity = brightness * 0.5;
      }
    });
  });

  const getSmilePosition = (index, total) => {
    const angle = ((index / (total - 1)) * Math.PI) / 2 - Math.PI / 4;
    const radius = 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius - 0.5,
      rotation: -angle,
    };
  };

  return (
    <group ref={groupRef}>
      {[...Array(10)].map((_, i) => {
        const pos = getSmilePosition(i, 10);
        return (
          <mesh
            key={i}
            ref={(el) => (teethRefs.current[i] = el)}
            position={[pos.x, pos.y, 0]}
            rotation={[0, 0, pos.rotation]}
            castShadow
          >
            <boxGeometry args={[0.3, 0.8, 0.3]} />
            <meshStandardMaterial
              color="#FFFFFF"
              metalness={0.2}
              roughness={0.1}
              emissive="#4CAF50"
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      })}

      <pointLight position={[0, 0, 2]} intensity={2} color="#FFFFFF" />
      <pointLight position={[0, 0, -1]} intensity={1} color="#4CAF50" />
      <ambientLight intensity={0.5} />

      {[...Array(15)].map((_, i) => {
        const angle = (i / 15) * Math.PI;
        const radius = 2.5;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius - 0.5;
        return (
          <mesh key={`sparkle-${i}`} position={[x, y, 0.5]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
        );
      })}
    </group>
  );
};

export default WhiteningSmile;
