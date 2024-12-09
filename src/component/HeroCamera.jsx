import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef } from "react";

function HeroCamera({ children, isMobile }) {
  const groupRef = useRef();
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
    if (!isMobile) {
      easing.damp3(
        groupRef.current.rotation,
        [state.pointer.y / 3, -state.pointer.x / 5, 20],
        0.25,
        delta
      );
    }
  });
  if (!isMobile) {
  }
  return (
    <group ref={groupRef} scale={1.0}>
      {children}
    </group>
  );
}

export default HeroCamera;
