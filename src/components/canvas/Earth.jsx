import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");
  
  return (
    <group>
      <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
    </group>
  );
};

useGLTF.preload("/planet/scene.gltf");

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true 
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0xffffff, 0);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.8} color="#ffffff" />
        <directionalLight position={[5, 10, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, 5]} intensity={0.5} color="#22c55e" />
        <pointLight position={[10, 10, -5]} intensity={0.3} color="#4ade80" />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;