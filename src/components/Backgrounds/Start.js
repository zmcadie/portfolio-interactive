import React from "react"
import styled from "styled-components"
import RockyGrassPath from "./partials/RockyGrassPath"
import { Tree } from "./partials/MiscScenery"
import ActionContainer from "../ActionContainer"
import Directions from "../Directions"

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

class Start extends React.Component {
  render() {
    const { isActive } = this.props
    return (
      <Bg>
        <Tree style={{ top: "calc(50% - 60px)", transform: "scale(0.5)" }} />
        <Tree style={{ top: "calc(50% - 115px)", left: "25vw", transform: "scale(0.9)" }} />
        <Tree style={{ top: "calc(50% - 105px)", left: "80vw", transform: "scale(0.7)" }} />
        <RockyGrassPath />
        <Directions isActive={isActive} side="left" content="Barber Shop" />
        <Directions isActive={isActive} side="right" content="Education" />
      </Bg>
    )
  }
}

export default Start