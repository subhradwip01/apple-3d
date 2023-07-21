import React, {useRef, useLayoutEffect} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

const Section = styled.section`
    width: 100vw;
    height: 200vh;
    position: relative;

    display: flex;
    justify-content: space-around;
    flex-direction: column;

    background-color: var(--dark);
    color: var(--white);

    &>*:nth-child(even){
        align-self: flex-end;
        margin-right: 4rem;
        text-align: right;
    }
    &>*:nth-child(odd){
        margin-left: 4rem;
    }
`

const MainTitle = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);
  text-transform: capitalize;
  background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Textblock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props=>props.alignItems};
    width: 50%;
`

const Title = styled.div`
    font-size: var(--fontlg);
    margin-bottom: 1rem;
`

const Text = styled.div`
    font-size: var(--fontxs);
    color: var(--grey-light);
    margin-bottom: 0.5rem;
    width: 55%;
`

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: rotate(-25deg);
    z-index: 99;
    margin-bottom: 4rem;  
    align-items : center;
`

const MovingText = styled.h1`
    font-size: var(--fontBig);
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`

const FLyingSection = () => {

  const textBlock = useRef();
  const text1 = useRef();
  const text2 = useRef();

  useLayoutEffect(() => {
    
    const tl = gsap.timeline({
        scrollTrigger:{
          trigger:textBlock.current,
          start:"top-=400px top",
          end:"bottom top",
          scrub:true,
        }
    }).fromTo(
        text1.current,{x:0},{x:"20%"}, "key1"
    ).fromTo(
        text2.current,{x:0},{x:"-20%"}, "key1"
    )
  
    return () => {
      if(tl) tl.kill();
    };
  }, [])

  return (
    <Section>
        <MainTitle>
            Experience the <br/> flying beast 
        </MainTitle>
        <Textblock alignItems="flex-end">
            <Title>HDR camera view</Title>
            <Text>The purpose of lorem ipsum is to create a natural
                 looking block of ipsum.The purpose of lorem ipsum is 
                 to create a natural looking block of ipsum. 
            </Text>
        </Textblock>
        <Textblock alignItems="flex-start" ref={textBlock}>
            <Title>Flowless design</Title>
            <Text>The purpose of lorem ipsum is to create a natural
                 looking block of ipsum.The purpose of lorem ipsum is 
                 to create a natural looking block of ipsum. 
            </Text>
        </Textblock>
        <TextContainer>
            <MovingText ref={text1}>High end technology</MovingText>
            <MovingText ref={text2}>Future is in your hand </MovingText>
        </TextContainer>
    </Section>
  )
}

export default FLyingSection