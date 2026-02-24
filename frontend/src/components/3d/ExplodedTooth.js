import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const ToothLayer = ({ 
  position, 
  geometry, 
  color, 
  explodeOffset, 
  animationProgress, 
  metalness = 0.3, 
  roughness = 0.2, 
  transparent = false, 
  opacity = 1,
  emissive = '#A8D5A2',
  emissiveIntensity = 0.1
}) => {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      // Calculate exploded position
      const t = animationProgress;
      meshRef.current.position.x = position[0] + explodeOffset[0] * t;
      meshRef.current.position.y = position[1] + explodeOffset[1] * t;
      meshRef.current.position.z = position[2] + explodeOffset[2] * t;
      
      // Slight rotation during animation
      meshRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      {geometry}
      <meshStandardMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
        transparent={transparent}
        opacity={opacity}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
      />
    </mesh>
  );
};

const LayerLabel = ({ position, text, animationProgress }) => {
  return (
    <Float speed={1} rotationIntensity={0} floatIntensity={0.5}>
      <Text
        position={[position[0], position[1], position[2] + 1.5]}
        fontSize={0.15}
        color="#2E7D32"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
        outlineWidth={0.02}
        outlineColor="#ffffff"
      >
        {text}
      </Text>
    </Float>
  );
};

const ExplodedTooth = () => {
  const [animationTime, setAnimationTime] = useState(0);
  
  useFrame((state, delta) => {
    setAnimationTime((prev) => {
      const newTime = prev + delta * 0.3;
      return newTime % 10; // 10 second loop
    });
  });

  // Animation progress (0 = assembled, 1 = exploded)
  const getAnimationProgress = () => {
    if (animationTime < 3) {
      // Exploding phase (0 to 3 seconds)
      return Math.min(animationTime / 3, 1);
    } else if (animationTime < 6) {
      // Pause exploded (3 to 6 seconds)
      return 1;
    } else if (animationTime < 9) {
      // Reassembling phase (6 to 9 seconds)
      return Math.max(1 - (animationTime - 6) / 3, 0);
    } else {
      // Pause assembled (9 to 10 seconds)
      return 0;
    }
  };

  const progress = getAnimationProgress();

  // Define tooth layers from bottom to top
  const layers = [
    {
      name: 'Implant Base',
      position: [0, -2, 0],
      explodeOffset: [0, -1.5, 0],
      geometry: <cylinderGeometry args={[0.25, 0.3, 1, 16]} />,
      color: '#C0C0C0',
      metalness: 0.8,
      roughness: 0.2,
      emissive: '#A8D5A2',
      emissiveIntensity: 0.2,
    },
    {
      name: 'Root Canal',
      position: [0, -1, 0],
      explodeOffset: [0, -0.8, 0],
      geometry: <cylinderGeometry args={[0.35, 0.25, 1.5, 16]} />,
      color: '#D8C8E8',
      metalness: 0.2,
      roughness: 0.3,
      transparent: true,
      opacity: 0.9,
    },
    {
      name: 'Pulp Chamber',
      position: [0, 0, 0],
      explodeOffset: [0, 0, 0],
      geometry: <sphereGeometry args={[0.4, 16, 16]} />,
      color: '#FFB6C1',
      metalness: 0.1,
      roughness: 0.4,
      transparent: true,
      opacity: 0.8,
      emissive: '#FF69B4',
      emissiveIntensity: 0.2,
    },
    {
      name: 'Dentin',
      position: [0, 0.2, 0],
      explodeOffset: [0, 0.5, 0],
      geometry: (
        <group>
          <cylinderGeometry args={[0.7, 0.5, 1.2, 16]} />
        </group>
      ),
      color: '#F8F8FF',
      metalness: 0.3,
      roughness: 0.2,
      transparent: true,
      opacity: 0.85,
    },
    {
      name: 'Enamel',
      position: [0, 0.8, 0],
      explodeOffset: [0, 1, 0],
      geometry: (
        <group>
          <cylinderGeometry args={[0.75, 0.72, 0.8, 16]} />
        </group>
      ),
      color: '#FFFFFF',
      metalness: 0.4,
      roughness: 0.1,
      transparent: true,
      opacity: 0.7,
      emissive: '#A8D5A2',
      emissiveIntensity: 0.15,
    },
    {
      name: 'Crown',
      position: [0, 1.4, 0],
      explodeOffset: [0, 1.5, 0],
      geometry: (
        <group>
          <sphereGeometry args={[0.8, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        </group>
      ),
      color: '#F8F8FF',
      metalness: 0.5,
      roughness: 0.1,
      emissive: '#A8D5A2',
      emissiveIntensity: 0.1,
    },
  ];

  return (
    <group>
      {/* Tooth Layers */}
      {layers.map((layer, index) => (
        <ToothLayer
          key={index}
          position={layer.position}
          geometry={layer.geometry}
          color={layer.color}
          explodeOffset={layer.explodeOffset}
          animationProgress={progress}
          metalness={layer.metalness}
          roughness={layer.roughness}
          transparent={layer.transparent}
          opacity={layer.opacity}
          emissive={layer.emissive}
          emissiveIntensity={layer.emissiveIntensity}
        />
      ))}

      {/* Labels (only show when exploded) */}
      {progress > 0.3 && layers.map((layer, index) => {
        const labelPos = [
          layer.position[0] + layer.explodeOffset[0] * progress,
          layer.position[1] + layer.explodeOffset[1] * progress,
          layer.position[2] + layer.explodeOffset[2] * progress,
        ];
        return (
          <LayerLabel
            key={`label-${index}`}
            position={labelPos}
            text={layer.name}
            animationProgress={progress}
          />
        );
      })}

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
      <directionalLight position={[-5, 3, -5]} intensity={0.4} />
      <pointLight position={[0, 3, 3]} intensity={0.6} color="#A8D5A2" />
      <spotLight
        position={[0, 5, 0]}
        angle={0.6}
        penumbra={0.5}
        intensity={0.5}
        castShadow
      />
    </group>
  );
};

export default ExplodedTooth;
