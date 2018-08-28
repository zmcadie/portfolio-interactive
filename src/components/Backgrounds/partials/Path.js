import React from "react"
import styled from "styled-components"

const PathContainer = styled.div`
  position: absolute;
  top: calc(50% + 150px);
  left: 0px;
  width: 1400px;
  transform:
    translateX(${p => (p.windowWidth - 1400) / 2}px)
    scaleX(${p => p.windowWidth / 1400});

  .dirt {
    position: absolute;
    height: 0;
    width: 0;

    &.a {
      left: 0;
      top: 0;
      border-top: 70px solid #775111;
      border-right: 250px solid transparent;
    }
  
    &.b {
      left: 0;
      top: -6px;
      border-bottom: 100px solid #573B0C;
      border-left: 245px solid transparent;
      border-right: 150px solid transparent;
      transform: rotate(6.6deg);
    }

    &.c {
      left: 258px;
      top: -21px;
      border-top: 132px solid #67410E;
      border-left: 120px solid transparent;
      border-right: 210px solid transparent;
      transform: rotate(-7.3deg);
    }

    &.d {
      left: 389px;
      top: -41px;
      border-bottom: 169px solid #775111;
      border-left: 183px solid transparent;
      border-right: 210px solid transparent;
      transform: rotate(3.3deg);
    }

    &.e {
      left: 566px;
      top: -19px;
      border-top: 151px solid #573B0C;
      border-left: 220px solid transparent;
      border-right: 110px solid transparent;
      transform: rotate(7.8deg);
    }

    &.f {
      left: 765px;
      top: -5px;
      border-bottom: 116px solid #67410E;
      border-left: 147px solid transparent;
      border-right: 260px solid transparent;
      transform: rotate(-8deg);
    }

    &.g {
      left: 905px;
      top: 2px;
      border-top: 81px solid #775111;
      border-left: 271px solid transparent;
      border-right: 225px solid transparent;
      transform: rotate(-0.5deg);
    }

    &.h {
      left: 1180px;
      top: 39px;
      border-top: 66px solid #67410E;
      border-left: 216px solid transparent;
      border-right: 24px solid transparent;
      transform: rotate(-20.3deg);
    }
  }
`

const Path = () => {
  const windowWidth = document.body.clientWidth
  return (
    <PathContainer windowWidth={windowWidth}>
      <div className="dirt a"></div>
      <div className="dirt b"></div>
      <div className="dirt c"></div>
      <div className="dirt d"></div>
      <div className="dirt e"></div>
      <div className="dirt f"></div>
      <div className="dirt g"></div>
      <div className="dirt h"></div>
    </PathContainer>
  )
}

export default Path