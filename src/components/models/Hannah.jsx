"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Hannah = React.memo(function Hannah(props) {
  const hannahTexture = useTexture("/models/hannah-home.jpeg");
  const contactTexture = useTexture("/models/hannah-contact.png");
  const aboutTexture = useTexture("/models/hannah-about.png");
  const projectsTexture = useTexture("/models/hannah-projects.png");

  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <mesh position={props.position}>
        <planeGeometry args={props.args ? props.args : [2.8, 4.3]} />
        <meshBasicMaterial
          map={
            props.page === "home"
              ? hannahTexture
              : props.page === "about"
              ? aboutTexture
              : props.page === "contact"
              ? contactTexture
              : props.page === "projects"
              ? projectsTexture
              : hannahTexture
          }
          transparent={true}
          alphaTest={0.5}
        />
      </mesh>
    </group>
  );
});

export default Hannah;
