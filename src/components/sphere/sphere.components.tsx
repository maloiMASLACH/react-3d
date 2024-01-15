import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import texture from "../../assets/ball.jpg";

export const SphereComponent = () => {
  const textureMap = useLoader(TextureLoader, texture);

  return (
    <mesh position={[0, 0, -2]}>
      <sphereGeometry args={[2, 32]} />
      <meshStandardMaterial color={0x65eb5e} map={textureMap} />
    </mesh>
  );
};
