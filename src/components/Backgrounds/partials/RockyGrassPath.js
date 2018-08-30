import React from "react"
import styled from "styled-components"
import Path from "./Path"
import { Rock } from "./MiscScenery"

const Grass = styled.div`
  background: linear-gradient(
    to bottom,
    transparent,
    transparent calc(50% + 100px),
    #83c074 calc(50% + 100px),
    #83c074
  );
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top : 0;
`

const rockOne = { left: "7vw", top: "calc(50% + 205px)" }
const rockTwo = { left: "15vw", top: "calc(50% + 260px)", transform: "scale(-0.3, 0.5)" }
const rockThree = { left: "45vw", top: "calc(50% + 250px)", transform: "scaleX(-1)" }
const rockFour = { left: "85vw", top: "calc(50% + 325px)" }

const RockyGrassPath = () => {
  return (
    <div>
      <Grass />
      <Path />
      <Rock style={rockOne} />
      <Rock style={rockTwo} />
      <Rock style={rockThree} />
      <Rock style={rockFour} />
    </div>
  )
}

export default RockyGrassPath