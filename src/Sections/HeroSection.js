import React from 'react'
import styled from 'styled-components'
import bgVideo from '../assets/video/Ink - 21536.mp4'


const Section = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    overflow: hidden;
    background-color: var(--dark);
`

const Title = styled.h1`
    position: absolute;
    top:2rem;
    left:2rem;

    font-size:var(--fontlg);
    font-family: var(--fontL);
    color: var(--greyLight);
`

const TextContainer = styled.div`
    width: 100%;;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    z-index: 99;

    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span{
        font-size: var(--fontxxxl);
        padding: 2rem;
        font-weight: 600;
        text-transform: uppercase;
    }
`

const VideoContainer = styled.div`
    width: 100vw;
    min-height: 100vh;

    position: absolute;
    top:0;
    left: 0;
    z-index: 0;

    video{
        width: 100%;
        height: 100vh;
        object-fit: cover;
        object-position: bottom;
    }
`

const HeroSection = () => {
  return (
    <Section>
        <VideoContainer>


        <video src={bgVideo} type="video/mp4" autoPlay muted loop/>
        </VideoContainer>
        <Title>
            DX 100 Pro Vision
        </Title>
        <TextContainer>
            <span>Fly Skyy</span>
            <span>Fly Hard</span>
        </TextContainer>
    </Section>
  )
}

export default HeroSection