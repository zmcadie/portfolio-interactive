import React from 'react'
import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% { transform: scale(0.2); z-index: 1 }
  25% { transform: scale(3); z-index: 1  }
  49% { transform: scale(0.2); z-index: 1 }
  50% { transform: scale(0.2); z-index: -1 }
  75% { transform: scale(3); z-index: -1 }
  100% { transform: scale(0.2); z-index: -1 }
`

const LighthouseContainer = styled.div`
  position: absolute;

  .top {
    background: black;
    border-top-left-radius: 135px;
    border-top-right-radius: 135px;
    height: 70px;
    margin-left: 40px;
    width: 135px;
  }

  .lantern {
    border: 20px solid black;
    border-bottom-width: 20px;
    border-top-width: 0px;
    height: 55px;
    margin-left: 40px;
    width: 95px;
  }

  .bulb {
    background: #4402;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    height: 45px;
    left: 80px;
    position: absolute;
    top: 80px;
    width: 55px;
  }

  .light {
    animation: ${pulse} 20s linear 0s infinite;
    background: radial-gradient(#ff08, #ff00 65%);
    border-radius: 50%;
    height: 400px;
    left: -90px;
    position: absolute;
    top: -95px;
    width: 400px;
    z-index: 1;
  }

  .deck {
    background: black;
    height: 20px;
    width: 215px;
  }

  .tower-container {
    height: 500px;
    overflow: hidden;
    width: 210px;
  }

  .tower {
    border-bottom: 150px solid white;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    height: 0;
    transform: skewY(-30deg) translateY(-40px);
    width: 190px;

    &.one {
      border-bottom-color: black;
      margin-left: 30px;
      width: 130px;
    }

    &.two {
      margin-left: 20px;
      width: 150px;
    }

    &.three {
      border-bottom-color: black;
      margin-left: 10px;
      width: 170px;
    }
  }
`

const Lighthouse = ({ style }) => (
  <LighthouseContainer style={style}>
    <div className="light" />
    <div className="top" />
    <div className="lantern" />
    <div className="bulb" />
    <div className="deck" />
    <div className="tower-container">
      <div className="tower one" />
      <div className="tower two" />
      <div className="tower three" />
      <div className="tower four" />
    </div>
  </LighthouseContainer>
)

export default Lighthouse