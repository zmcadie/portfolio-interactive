import React from "react"
import styled from "styled-components"
import RockyGrassPath from "./partials/RockyGrassPath"

const Bg = styled.div`
  background: linear-gradient(to right, #ff0, #8f0);
  height: 100vh;
  width: 100vw;
`

const Education = () => {
  return (
    <Bg>
      <RockyGrassPath />
    </Bg>
  )
}

export default Education