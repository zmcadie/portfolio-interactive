import React from "react"
import styled from "styled-components"

const AvatarContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  width: 100px;
  height: 200px;
  z-index: 2;

  .avatar-head {
    height: 50px;
    width: 50px;
    background: #ffff66;
  }

  .avatar-body {
    width: 50px;
    height: 65px;
    background: #ff2255;
  }

  .avatar-legs {
    width: 50px;
    height: 85px;
    background: #3333ff;
  }
`

const Avatar = () => {
  return (
    <AvatarContainer>
      <div className="avatar-head" />
      <div className="avatar-body" />
      <div className="avatar-legs" />
    </AvatarContainer>
  )
}

export default Avatar