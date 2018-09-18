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

const StartText = styled.div`
  color: #efefef;
  font-size: 22px;
  left: 0;
  overflow: hidden;
  padding: 15vh 150px 0;
  position: absolute;
  right: 0;
  text-shadow: -1px 1px #444;
  top: 0;
  z-index: 3;

  h1 {
    font-size: 26px;
  }
`

const Text = ({ isActive }) => {
  return isActive
  ? (
    <StartText>
      <div className="text-container">
        <h1>Hi, I'm Zola. I'm a front-end web developer based in Toronto, Canada.</h1>
        <p>Use your arrow keys to look around and learn more...</p>
      </div>
    </StartText>
  )
  : ''
}

class Start extends React.Component {
  render() {
    const { isActive } = this.props
    return (
      <Bg>
        <RockyGrassPath />
        <Tree style={{ top: "calc(50% - 60px)", transform: "scale(0.5)" }} />
        <Tree style={{ top: "calc(50% - 115px)", left: "20vw", transform: "scale(0.9)" }} />
        <Tree style={{ top: "calc(50% - 85px)", left: "34vw", transform: "scale(0.6)" }} />
        <Tree style={{ top: "calc(50% - 95px)", left: "30vw", transform: "scale(0.7)" }} />
        <Tree style={{ top: "calc(50% - 90px)", left: "58vw", transform: "scale(0.6)" }} />
        <Tree style={{ top: "calc(50% - 95px)", left: "68vw", transform: "scale(0.9)" }} />
        <Tree style={{ top: "calc(50% - 105px)", left: "80vw", transform: "scale(0.7)" }} />
        <Tree style={{ top: "calc(50% - 135px)", left: "87vw", transform: "scale(1.3)" }} />
        <Directions isActive={isActive} side="left" content="Barber Shop" />
        <Directions isActive={isActive} side="right" content="Education" />
        <Text isActive={isActive} />
      </Bg>
    )
  }
}

export default Start