import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight , Environment, Sparkles} from "@react-three/drei";
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
        <ambientLight intensity={1} />
        
      <Environment
        // background
        preset="warehouse"
       />
        <Sparkles size={2} scale={[10,10,10]} color={'#fff'}/>
        {/* <directionalLight intensity={0.4} /> */}
        <DroneModel />
        <meshStandardMaterial color="#0a1a1f" />
        <OrbitControls />
      </Canvas>
    </Container>
  );
};

export default Drone;
