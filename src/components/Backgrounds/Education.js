import React from "react"
import styled from "styled-components"
import RockyGrassPath from "./partials/RockyGrassPath"
import Lighthouse from "./partials/Lighthouse"

const Bg = styled.div`
  background: linear-gradient(
    to bottom,
    #4680AB,
    #77A2BA calc(50% + 15px),
    #63a054 calc(50% + 15px),
    #83c074 calc(50% + 101px),
    transparent calc(50% + 105px),
    transparent
  );
  height: 100vh;
  width: 100vw;
`

const Education = () => {
  return (
    <Bg>
      <Lighthouse style={{transform: "scale(0.5)", top: "calc(50% - 483px)", left: "6%"}} />
      <RockyGrassPath />
    </Bg>
  )
}

export default Education