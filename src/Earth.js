import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

function Earth(props) {
  const ref = useRef();

  const texture1 = useTexture("Material.001_baseColor.jpeg");
  const texture2 = useTexture("Material.002_baseColor.jpeg");
  const normalMap = useTexture("Material.001_normal.jpeg");
  const roughnessMap = useTexture("Material.001_metallicRoughness.png");

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh {...props} scale={[2.5, 2.5, 2.5]} ref={ref} rotation={[0.4, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={texture1}
          aoMap={texture2}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          roughness={1}
          matalness={0.1}
        />
      </mesh>
      <ambientLight intensity={0.8} />
      <directionalLight position={[0.2, 0, 1]} />
    </>
  );
}

export default Earth;