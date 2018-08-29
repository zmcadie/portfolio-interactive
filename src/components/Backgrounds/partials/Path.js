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
      border-top: 90px solid #775111;
      border-right: 250px solid transparent;
    }
  
    &.b {
      left: 0;
      top: -4px;
      border-bottom: 107px solid #573B0C;
      border-left: 245px solid transparent;
      border-right: 150px solid transparent;
      transform: rotate(3.9deg);
    }

    &.c {
      left: 248px;
      top: 4px;
      border-top: 113px solid #67410E;
      border-left: 141px solid transparent;
      border-right: 184px solid transparent;
      transform: rotate(1.4deg);
    }

    &.d {
      left: 389px;
      top: 8px;
      border-bottom: 119px solid #775111;
      border-left: 183px solid transparent;
      border-right: 210px solid transparent;
      transform: rotate(3.1deg);
    }

    &.e {
      left: 577px;
      top: 6px;
      border-top: 132px solid #573B0C;
      border-left: 199px solid transparent;
      border-right: 130px solid transparent;
      transform: rotate(-0.8deg);
    }

    &.f {
      left: 765px;
      top: 3px;
      border-bottom: 111px solid #67410E;
      border-left: 147px solid transparent;
      border-right: 150px solid transparent;
      transform: rotate(-9.5deg);
    }

    &.g {
      left: 902px;
      top: 2px;
      border-top: 87px solid #775111;
      border-left: 162px solid transparent;
      border-right: 366px solid transparent;
      transform: rotate(-0.4deg);
    }

    &.h {
      right: 0px;
      top: 0px;
      border-bottom: 90px solid #67410E;
      border-left: 339px solid transparent;
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