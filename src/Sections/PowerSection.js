import React, {useLayoutEffect, useRef} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'


const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--white);

`

const Title = styled.h1`
  position: absolute;
  top:50%;
  left:55%;
  transform: translate(-80%,-50%);

  text-transform: uppercase;
  font-size: var(--fontBig);
  z-index: 1;
`

const Battery = styled.ul`
  position: absolute;
  right: 4rem;
  background-color: var(--white);
  border: 3px solid var(--dark);
  border-radius: 8px;
  padding: 0.5rem;
  width:15rem;
  list-style: none;

  li{
    width: 100%;
    height: 5rem;
    background-color: var(--dark);
    background-image: linear-gradient(-90deg,var(--gradient));
    margin: 0.5rem 0;
    opacity: 0;
  }
  &>*:not(:first-child):not(:last-child){
    margin: 0.5rem 0;
  }
`

const PowerSection = () => { 

  const battery = useRef();

  let elements = gsap.utils.selector(battery)

  useLayoutEffect(()=>{
    let t1=gsap.timeline({});

    elements('li').forEach(el=>{
      t1.to(el,{
        scrollTrigger:{
          trigger:el,
          start:"top center",
          end:"bottom center",
          scrub:true,
        },
        opacity:1
      })
    })
  },[])

  return (
    <Section>
      <Title>
        Go High With Super Power...
      </Title>
      <Battery ref={battery}>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
      </Battery>
    </Section>
  )
}

export default PowerSection