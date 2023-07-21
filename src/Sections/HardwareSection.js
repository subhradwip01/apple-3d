import React from 'react'
import styled, { keyframes } from 'styled-components'

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: var(--dark);
    color: var(--white);
    overflow: hidden;


`

const Title = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 2rem;
    left:50%;
    transform: translateX(-50%);
    font-size: var(--fontBig);
    font-family: var(--fontL);
    z-index: 99;
    background-image: linear-gradient(90deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Text = styled.div`
    font-size: var(--fontxs);
    color: var(--greyLight);
    width: 33%;
    height: 40%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    span{
        margin: 0.2rem 0;
        padding-left:2rem;
    }
`

const HardwareSection = () => {
  return (
    <Section>
        {/* Add model of human */}
        <Title>AI empowered teleportaion</Title>
        <Text>
            <span>The purpose of lorem ipsum is to create a natural
                 looking block of ipsum.The purpose of lorem ipsum is 
                 to create a natural looking block of ipsum. 
                 The purpose of lorem ipsum is to create a natural
                 looking block of ipsum.
            </span>
            <span>The purpose of lorem ipsum is to create a natural
                 looking block of ipsum.The purpose of lorem ipsum is 
                 to create a natural looking block of ipsum. 
                 The purpose of lorem ipsum is to create a natural
                 looking block of ipsum. 
            </span>
            </Text>
    </Section>
  )
}

export default HardwareSection