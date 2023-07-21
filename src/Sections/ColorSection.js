import React, { useLayoutEffect, useRef, Suspense } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Sparkles } from "@react-three/drei";
import { DroneModel2 } from "../assets/DroneV3/Scene2";
const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
`;
const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 2.4);
  position: relative;
`;
const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%) rotate(-90deg);
  top: 50%;
  left: 50%;
  z-index: 1;
  font-size: var(--fontxxl);
  text-transform: uppercase;
  filter: brightness(0.85);
`;

const ColorSection = () => {
  const section = useRef();
  const left = useRef();
  const right = useRef();
  const text = useRef();
  const { nodes, materials, animations } = useGLTF("/scene.gltf");
  useLayoutEffect(() => {
    let Elem = section.current;
    let leftElem = left.current;
    let rightElem = right.current;
    let textElem = text.current;
    let updateColor = (color, text, rgbColor) => {
      // materials.body.color.set(text);
      console.log(materials);
      rightElem.style.backgroundColor = `rgba(${rgbColor},0.8)`;
      leftElem.style.backgroundColor = `rgba(${rgbColor},2.4)`;
      textElem.innerText = text;
      textElem.style.color = color;
    };

    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `+=${Elem.offsetWidth + 1000}`,
          scrub: 1,
        },
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#A50011", "Red", "165, 0, 17"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
      });

    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <Section ref={section}>
      <Left ref={left} />
      <Center ref={text}>Sierra Blue</Center>
      <Right ref={right}>
        <Canvas >
          <ambientLight intensity={1} />
          <Environment preset="warehouse" />
          <Sparkles size={2} scale={[10, 10, 10]} color={"#fff"} />
          <Suspense fallback={null}>
            <DroneModel2 scale={[0.6, 0.6, 0.6]} />
          </Suspense>
          <meshStandardMaterial color="#0a1a1f" />
        </Canvas>
      </Right>
    </Section>
  );
};

export default ColorSection;
