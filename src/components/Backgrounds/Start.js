import React from "react"
import styled from "styled-components"
import RockyGrassPath from "./partials/RockyGrassPath"

const Bg = styled.div`
  background: linear-gradient(to right, #f80, #ff0);
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