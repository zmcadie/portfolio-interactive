import React from "react"
import styled from "styled-components"

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

const Tree = (props) => {
  return (
    <TreeContainer {...props}>
      <div className="leaves" />
      <div className="trunk" />
    </TreeContainer>
  )
}

export default Tree