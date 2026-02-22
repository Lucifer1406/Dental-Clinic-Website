import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const ToothImplant = () => {
  const groupRef = useRef();
  const crownRef = useRef();
  const implantRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (crownRef.current) {
      crownRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Crown (tooth part) */}
        <mesh ref={crownRef} position={[0, 1.5, 0]} castShadow>
          <boxGeometry args={[1, 1.5, 1]} />
          <meshStandardMaterial
            color="#FFFFFF"
            metalness={0.1}
            roughness={0.2}
            emissive="#4CAF50"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Implant screw */}
        <mesh ref={implantRef} position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.25, 2, 16]} />
          <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Sparkle particles */}
        {[...Array(20)].map((_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          const radius = 2;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = (Math.random() - 0.5) * 3;
          return (
            <mesh key={i} position={[x, y, z]}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshBasicMaterial color="#4CAF50" />
            </mesh>
          );
        })}

        {/* Lighting */}
        <pointLight position={[2, 2, 2]} intensity={1} color="#4CAF50" />
        <spotLight
          position={[0, 5, 0]}
          angle={0.5}
          penumbra={0.5}
          intensity={1}
          castShadow
        />
      </group>
    </Float>
  );
};

export default ToothImplant;
