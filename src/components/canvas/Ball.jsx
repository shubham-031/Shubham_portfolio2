import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  try {
    const textureUrl = typeof props.imgUrl === 'string' ? props.imgUrl : props.imgUrl;
    let decal = null;
    
    try {
      [decal] = useTexture([textureUrl]);
    } catch (e) {
      console.warn("Texture failed to load:", textureUrl, e);
    }

    return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          {decal && (
            <Decal
              position={[0, 0, 1]}
              rotation={[2 * Math.PI, 0, 6.25]}
              scale={1}
              map={decal}
              flatShading
            />
          )}
        </mesh>
      </Float>
    );
  } catch (error) {
    console.warn("Ball component error:", error);
    return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color='#86efac' flatShading />
        </mesh>
      </Float>
    );
  }
};

const BallCanvas = ({ icon }) => {
  if (!icon) {
    console.warn("BallCanvas: No icon provided");
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#f0fdf4] rounded-lg">
        <span className="text-xs text-[#0d3323]">Loading...</span>
      </div>
    );
  }

  return (
    <Canvas
      frameloop='auto'
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true,
        failIfMajorPerformanceCaveat: false
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0xffffff, 0);
      }}
      onError={(error) => {
        console.warn("Canvas error:", error);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;