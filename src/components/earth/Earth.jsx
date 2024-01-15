import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import texture from "../../assets/Material.002_diffuse.jpeg";

export const Earth = (props) => {
  const earthRef = useRef(null);

  useFrame(() => (earthRef.current.rotation.y -= 0.01), [earthRef]);

  const { nodes } = useGLTF("/earth/earth.gltf");

  const textureMap = useLoader(TextureLoader, texture);

  return (
    <group ref={earthRef} {...props} dispose={null}>
      {/* <OrbitControls /> */}
      <mesh
        geometry={nodes.Sphere_Material002_0.geometry}
        // material={materials["Material.002"]}
        rotation={[-Math.PI / 2, Math.PI, 0]}
        scale={1}
      >
        <meshStandardMaterial map={textureMap} />
      </mesh>
    </group>
  );
};

useGLTF.preload("/earth/earth.gltf");
