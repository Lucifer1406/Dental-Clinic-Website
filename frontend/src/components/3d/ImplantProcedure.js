import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const ImplantProcedure = () => {
  const groupRef = useRef();
  const screwRef = useRef();
  const crownRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }

    if (screwRef.current) {
      // Simulate screw insertion
      const progress = (Math.sin(state.clock.elapsedTime) + 1) / 2;
      screwRef.current.position.y = THREE.MathUtils.lerp(-0.5, 0.5, progress);
      screwRef.current.rotation.z = progress * Math.PI * 4;
    }

    if (crownRef.current) {
      const progress = (Math.sin(state.clock.elapsedTime - 1) + 1) / 2;
      crownRef.current.position.y = THREE.MathUtils.lerp(3, 1.5, Math.max(0, progress));
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
      <group ref={groupRef}>
        {/* Gum/Bone */}
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 1, 32]} />
          <meshStandardMaterial color="#FFB6C1" opacity={0.8} transparent />
        </mesh>

        {/* Implant screw with threads */}
        <group ref={screwRef}>
          <mesh castShadow>
            <cylinderGeometry args={[0.2, 0.18, 1.5, 16]} />
            <meshStandardMaterial color="#A9A9A9" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Thread visualization */}
          {[...Array(8)].map((_, i) => (
            <mesh key={i} position={[0, 0.6 - i * 0.15, 0]}>
              <torusGeometry args={[0.22, 0.03, 8, 16]} />
              <meshStandardMaterial color="#696969" metalness={0.8} roughness={0.2} />
            </mesh>
          ))}
        </group>

        {/* Crown */}
        <mesh ref={crownRef} castShadow>
          <cylinderGeometry args={[0.5, 0.4, 1, 16]} />
          <meshStandardMaterial
            color="#FFFFFF"
            metalness={0.1}
            roughness={0.2}
            emissive="#E8F5E9"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Lighting */}
        <pointLight position={[2, 2, 2]} intensity={1} color="#4CAF50" />
        <ambientLight intensity={0.6} />
      </group>
    </Float>
  );
};

export default ImplantProcedure;
