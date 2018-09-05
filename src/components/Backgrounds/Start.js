import React from "react"
import styled from "styled-components"
import RockyGrassPath from "./partials/RockyGrassPath"
import { Tree } from "./partials/MiscScenery"

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

const Component = () => {
  return (
    <Bg>
      <Tree style={{ top: "calc(50% - 60px)", transform: "scale(0.5)" }} />
      <Tree style={{ top: "calc(50% - 115px)", left: "25vw", transform: "scale(0.9)" }} />
      <Tree style={{ top: "calc(50% - 105px)", left: "80vw", transform: "scale(0.7)" }} />
      <RockyGrassPath />
    </Bg>
  )
}

const Start = {
  component: Component
}

export default Start