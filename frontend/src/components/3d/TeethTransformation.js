import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const TeethTransformation = () => {
  const groupRef = useRef();
  const teethRefs = useRef([]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }

    // Animate color transformation from dark to white
    teethRefs.current.forEach((tooth, i) => {
      if (tooth) {
        const progress = (Math.sin(state.clock.elapsedTime * 0.5 + i * 0.5) + 1) / 2;
        const color = new THREE.Color();
        color.lerpColors(
          new THREE.Color('#8B4513'),
          new THREE.Color('#FFFFFF'),
          progress
        );
        tooth.material.color = color;
        tooth.material.emissive = new THREE.Color('#4CAF50');
        tooth.material.emissiveIntensity = progress * 0.2;
      }
    });
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Row of teeth */}
        {[...Array(8)].map((_, i) => (
          <mesh
            key={i}
            ref={(el) => (teethRefs.current[i] = el)}
            position={[(i - 3.5) * 0.6, 0, 0]}
            castShadow
          >
            <boxGeometry args={[0.4, 1, 0.4]} />
            <meshStandardMaterial
              color="#8B4513"
              metalness={0.1}
              roughness={0.3}
            />
          </mesh>
        ))}

        {/* Gum base */}
        <mesh position={[0, -0.7, 0]}>
          <boxGeometry args={[5, 0.3, 0.6]} />
          <meshStandardMaterial color="#FFB6C1" />
        </mesh>

        {/* Ambient lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 3, 3]} intensity={1.5} color="#FFFFFF" />
      </group>
    </Float>
  );
};

export default TeethTransformation;
