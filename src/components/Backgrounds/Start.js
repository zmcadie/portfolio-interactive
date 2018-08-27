import React from "react"
import styled from "styled-components"
import RockyGrassPath from "./partials/RockyGrassPath"

const Bg = styled.div`
  background: #d66;
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