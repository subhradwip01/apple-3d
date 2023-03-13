import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--white);
  overflow: hidden;
`;

const TextContainer = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.alignItems};
  color: var(--dark);

  span {
    font-size: ${(props) => props.fontSize};
    width: ${(props) => props.width};
    font-weight: 600;
    text-transform: capitalize;
  }
`;

const DesignSection = () => {
  const container = useRef();
  const text1 = useRef();
  const text2 = useRef();

  useLayoutEffect(() => {
    
    const tl = gsap.timeline({
        scrollTrigger:{
          trigger:container.current,
          start:"top-=400px top",
          end:"bottom top",
          scrub:true,
        }
    }).fromTo(
        text1.current,{x:0},{x:"10%"}, "key1"
    ).fromTo(
        text2.current,{x:0},{x:"-10%"}, "key1"
    )
  
    return () => {
      if(tl) tl.kill();
    };
  }, [])


  return (
    <Section ref={container}>
      <TextContainer
        ref={text1}
        alignItems="flex-start"
        width="90%"
        fontSize="var(--fontBig)"
      >
        <span>Fly high with powerful and high efficient engine</span>
      </TextContainer>
      <TextContainer
        ref={text2}
        alignItems="flex-end"
        width="80%"
        fontSize="var(--fontxxxl)"
      >
        <span>Long durabality with metalic body and weather proof</span>
      </TextContainer>
    </Section>
  );
};

export default DesignSection;
