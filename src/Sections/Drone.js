import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";
import { DroneModel } from "../assets/DroneV3/Scene";
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
    <Container>
      <Canvas>
        <ambientLight intensity={0.8} />
        {/* <directionalLight intensity={0.4} /> */}
        <DroneModel />
        <OrbitControls />
      </Canvas>
    </Container>
  );
};

export default Drone;
