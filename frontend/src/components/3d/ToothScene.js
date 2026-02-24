import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const ToothScene = ({ children, autoRotate = true }) => {
  return (
    <div className="w-full h-full" style={{ minHeight: '400px' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        shadows
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {children}
          <OrbitControls
            enableZoom={false}
            autoRotate={autoRotate}
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ToothScene;
