import React from "react"
import styled, { keyframes } from "styled-components"

const moveright = keyframes`
  0% { transform: rotate(0deg) translate(0, 0px) }
  25% { transform: rotate(10deg) translate(0, -5px) }
  50% { transform: rotate(0deg) translate(0, -20px) }
  75% { transform: rotate(-10deg) translate(0, -5px) }
  100% { transform: rotate(0deg) translate(0, 0px) }
`

const moveleft = keyframes`
  0% { transform: rotate(0deg) translate(0, 0px) }
  25% { transform: rotate(-10deg) translate(0, -5px) }
  50% { transform: rotate(0deg) translate(0, -20px) }
  75% { transform: rotate(10deg) translate(0, -5px) }
  100% { transform: rotate(0deg) translate(0, 0px) }
`

const shadowright = keyframes`
  0% { transform: rotate(0deg) translate(0, 0px) }
  25% { transform: rotate(-10deg) translate(0, 5px) }
  50% { transform: rotate(0deg) translate(0, 20px) }
  75% { transform: rotate(10deg) translate(0, 5px) }
  100% { transform: rotate(0deg) translate(0, 0px) }
`

const shadowleft = keyframes`
  0% { transform: rotate(0deg) translate(0, 0px) }
  25% { transform: rotate(10deg) translate(0, 5px) }
  50% { transform: rotate(0deg) translate(0, 20px) }
  75% { transform: rotate(-10deg) translate(0, 5px) }
  100% { transform: rotate(0deg) translate(0, 0px) }
`

const AvatarContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(50% - 20px);
  left: calc(50% - 50px);
  width: 50px;
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
    z-index: 2;
  }

  .avatar-shadow {
    background: #0005;
    bottom: 0;
    border-radius: 50%;
    height: 10px;
    position: absolute;
    width: 50px;
    z-index: 1;
  }

  &.movingleft {
    animation: ${moveleft} 1s linear 0s infinite;

    .avatar-shadow {
      animation: ${shadowleft} 1s linear 0s infinite;
    }
  }

  &.movingright {
    animation: ${moveright} 1s linear 0s infinite;

    .avatar-shadow {
      animation: ${shadowright} 1s linear 0s infinite;
    }
  }
`

const Avatar = ({ isMoving, direction }) => {
  return (
    <AvatarContainer className={isMoving ? direction === "right" ? "movingright" : "movingleft" : ""}>
      <div className="avatar-head" />
      <div className="avatar-body" />
      <div className="avatar-legs" />
      <div className="avatar-shadow" />
    </AvatarContainer>
  )
}

export default Avatar