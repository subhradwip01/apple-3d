import React from 'react'
import drone from "../assets/Images/drone.png"
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100vh;
    width: 100vw;

    background-color: var(--dark);
    color: var(--white);
`

const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  position: relative;
`

const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const InnerContainer =  styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  gap:2rem;
  z-index: 99;
`

const Text = styled.p`
    font-size: 5rem;
`
const Button = styled.button`
    font-size: 3rem;
    background-color: transparent;
    border: 2px solid white;
    color: white;
    padding: 5px 15px;
    cursor: pointer;
    transition: all 200ms ease-in;
    position: relative;
    outline: none;
    &:hover{
        transform: scale(1.1);
        color: black;
    }
    &:after{
        content: "";
        position: absolute;
        top:0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: white;
        transition: all 200ms linear;
        z-index: -1;

    }
    &:hover::after{
        width: 100%;
    }
`

const Footer = () => {
  return (
    <Container>
        <Left/>
        <Right>
           <InnerContainer> 
            <Text>Feel the future</Text>
            <Button>Order now</Button>
            </InnerContainer>
        </Right>
    </Container>
  )
}

export default Footer