import React from "react"
import styled from "styled-components"
import RockyGrassPath from "./partials/RockyGrassPath"

const Bg = styled.div`
  background: linear-gradient(
    to bottom,
    #4680AB,
    #77A2BA 50%,
    #63a054 50%,
    #83c074 calc(50% + 100px),
    transparent calc(50% + 100px),
    transparent
  );
  height: 100vh;
  width: 100vw;
`

const Start = () => {
  return (
    <Bg>
      <RockyGrassPath />
    </Bg>
  )
}

export default Start