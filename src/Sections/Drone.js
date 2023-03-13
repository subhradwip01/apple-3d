import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Sparkles } from "@react-three/drei";
import { DroneModel } from "../assets/DroneV3/Scene";
// import { Dronev4 } from "../assets/DroneV4/Scene";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;

const Drone = () => {
  return (
    <Container id="drone">
      <Canvas >
        <ambientLight intensity={1} />
        <Environment preset="warehouse" />
        <Sparkles size={2} scale={[10, 10, 10]} color={"#fff"} />
        <Suspense fallback={null}>
          <DroneModel scale={[0.6,0.6,0.6]}/>
          {/* <Dronev4/> */}
        </Suspense>
        <meshStandardMaterial color="#0a1a1f" />
        {/* <OrbitControls /> */}
      </Canvas>
    </Container>
  );
};

export default Drone;
