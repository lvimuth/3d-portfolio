import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../component/HackerRoom";
import CanvasLoader from "../component/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import Target from "../component/Target";
import { calculateSizes } from "../constants";

function Hero() {
  //   const x = useControls("HackerRoom", {
  //     positionX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationX: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationY: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationZ: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     scale: {
  //       value: 1,
  //       min: 0.01,
  //       max: 10,
  //     },
  //   });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const sizes = calculateSizes(isMobile)
  return (
    <section className="min-h-screen w-full flrx flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-2xl text-xl font-medium text-white text-center font-generalsans">
          Hello, I'm Lakshitha Vimuth <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient ">
          Innovating the Web with AI-Driven Intelligence
        </p>
      </div>
      <div className="w-full absolute h-full inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera
              makeDefault
              position={isMobile ? [0, 0, 15] : [0, 0, 30]}
            />
            <HackerRoom
              scale={isMobile ? 0.07 : 0.1}
              rotation={[0.5, -3.2, 0]}
              position={[0.7, -3, -10]}
              //   scale={[x.scale, x.scale, x.scale]}
              //   position={[x.positionX, x.positionY, x.positionZ]}
              //   rotation={[x.rotationX, x.rotationY, x.rotationZ]}
            />

            <group>
              <Target position={sizes.targetPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Hero;
