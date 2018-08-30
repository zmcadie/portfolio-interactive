import React from "react"
import styled from "styled-components"

const GrassBase = styled.div`
  background: #7ebc6f;
  border-radius: 75px / 15px;
  height: 30px;
  position: absolute;
  width: 150px;
`

const GrassBlade = styled.div`
  border-color: transparent transparent #7ebc6f transparent;
  border-style: solid;
  border-width: 0 6px 40px;
  display: block;
  height: 0;
  position: absolute;
  width: 0;
`

const SmallRock = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 50px solid lightgray;
  border-right: 100px solid transparent;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: -30px;
    border-bottom: 50px solid gray;
    border-left: 30px solid transparent;
  }
`

export const Rock = (props) => {
  return (
    <div  {...props} style={{ position: "absolute", width: "150px", ...props.style }}>
      <GrassBase style={{ left: "-42px", top: "35px" }} />
      <SmallRock />
      <GrassBlade style={{ left: "-35px", top: "19px", transform: "rotate(-41deg)" }} />
      <GrassBlade style={{ left: "-45px", top: "19px", transform: "rotate(-41deg)" }} />
      <GrassBlade style={{ left: "-25px", top: "22px", transform: "rotate(-41deg)" }} />
      <GrassBlade style={{ left: "97px", top: "19px", transform: "rotate(41deg)" }} />
      <GrassBlade style={{ left: "87px", top: "19px", transform: "rotate(41deg)" }} />
    </div>
  )
}

const TreeContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;

  .trunk {
    position: absolute;
    height: 0;
    width: 0;
    border-bottom: 200px solid brown;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;  
  }

  .trunk::before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    border-right: 45px solid brown;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    left: -43px;
    top: 50px;
    transform: rotate(30deg);
  }

  .trunk::after {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    border-left: 25px solid brown;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    left: -3px;
    top: 25px;
    transform: rotate(-45deg);
  }

  .leaves {
    position: absolute;
    height: 0;
    width: 0;
    top: -40px;
    left: -65px;
    border-left: 75px solid #4b4;
    border-top: 75px solid #4b4;
    border-right: 75px solid #6d6;
    border-bottom: 75px solid #6d6;
    border-radius: 50%;
    transform: rotate(-45deg)
  }
`

export const Tree = (props) => {
  return (
    <TreeContainer {...props}>
      <div className="leaves" />
      <div className="trunk" />
    </TreeContainer>
  )
}