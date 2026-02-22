import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const Scene3D = ({ children, cameraPosition = [0, 0, 5] }) => {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <Canvas
        camera={{ position: cameraPosition, fov: 50 }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
