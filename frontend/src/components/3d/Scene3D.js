import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const Scene3D = ({ children, cameraPosition = [0, 0, 5] }) => {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <Canvas
        camera={{ position: cameraPosition, fov: 50 }}
        shadows
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          {children}
          <OrbitControls
            enableZoom={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
