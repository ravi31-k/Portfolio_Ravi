import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const CyberModel = () => {
  const { scene } = useGLTF("/cyber_lock/scene.gltf"); // Example path
  return <primitive object={scene} scale={2.5} position-y={-1} />;
};

const CyberCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 5]} intensity={1} />
        <CyberModel />
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
  );
};

export default CyberCanvas;
