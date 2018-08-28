import React from "react"
import styled from "styled-components"
import RockyGrassPath from "./partials/RockyGrassPath"
import Tree from "./partials/Tree"

const Bg = styled.div`
  background: linear-gradient(
    to bottom,
    #4680AB,
    #77A2BA 50%,
    #63a054 50%,
    #83c074 calc(50% + 101px),
    transparent calc(50% + 105px),
    transparent
  );
  height: 100vh;
  width: 100vw;
`

const Start = () => {
  return (
    <Bg>
      <Tree style={{ top: "calc(50% - 60px)", transform: "scale(0.5)" }} />
      <Tree style={{ top: "calc(50% - 115px)", left: "25vw", transform: "scale(0.9)" }} />
      <Tree style={{ top: "calc(50% - 105px)", left: "80vw", transform: "scale(0.7)" }} />
      <RockyGrassPath />
    </Bg>
  )
}

export default Start