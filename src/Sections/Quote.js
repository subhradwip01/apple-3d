import React, { useLayoutEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'
// import 

const Section = styled.section `
    width: 100vw;
    height: 100vh;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

`

const TextContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



    background-color: var(--dark);
    color:var(--white);
`

const moveUp = keyframes`
    100%{
        transform: translateY(0);
    }
`

const Text = styled.p`
    width: 25%;
    font-size: var(--fontlg);
    position: relative;
    height: var(--fontmd);
    overflow: hidden;
   

    span{
        /* background-color: lightblue; */
        position: absolute;
        transform: translateY(1.2rem);
        animation: ${moveUp} 2.5s ease forwards ${props=>props.delay};
        font-family: var(--fontL);
        background-image: linear-gradient(-45deg, var(--gradient));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }

    .author{
        width: 100%;
        text-align: end;
        background-image: linear-gradient(-180deg, var(--gradient));
    }
`

const Quote = () => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef();
    useLayoutEffect(()=>{
        let elem = sectionRef.current;
        let trigger = ScrollTrigger.create({
            trigger : elem,
            start: "top top",
            pin:true,
            pinSpacing:false,
        })
        return () => {
            trigger && trigger.kill()
        }
    },[])
  return (
    <Section id="#quoto" ref={sectionRef}>
        <TextContainer>
        <Text delay="0s"><span>&quot; You Want To Have Future Where </span></Text>
        <Text delay="0.4s"><span>&nbsp;&nbsp;&nbsp; You're Expecting Things To Be</span></Text>
        <Text delay="0.8s"><span>&nbsp;&nbsp;&nbsp; Better, Not One Where You're</span></Text>
        <Text delay="1.3s"><span>&nbsp;&nbsp;&nbsp; Expecting things To Be Worse &quot;</span></Text>
        <Text delay="1.6s"><span className='author'>--&nbsp;Elon Musk  </span></Text>
        </TextContainer>
    </Section>
  )
}

export default Quote