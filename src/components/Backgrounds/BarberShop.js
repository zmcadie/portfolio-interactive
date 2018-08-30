import React from "react"
import styled from "styled-components"
import RockyGrassPath from "./partials/RockyGrassPath"

const Bg = styled.div`
  background: linear-gradient(
    to bottom,
    #4680AB,
    #77A2BA calc(50% + 15px),
    #63a054 calc(50% + 15px),
    #83c074 calc(50% + 101px),
    transparent calc(50% + 105px),
    transparent
  );
  height: 100vh;
  width: 100vw;
`

const BarberShop = styled.div`
  background: #C38145;
  height: 375px;
  left: calc(50% - 300px);
  position: absolute;
  top: calc(50% - 275px);
  width: 600px;

  .lintel {
    background: #C38145;
    height: 20px;
    left: -4px;
    position: absolute;
    right: -4px;
    top: 0;

    &::after {
      background: #C38145;
      box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.75), inset 0px 4px 5px -2px rgba(0,0,0,0.75);
      content: "";
      height: 10px;
      left: 2px;
      position: absolute;
      right: 2px;
      top: 20px;
    }
  }

  .sign {
    background: #496493;
    border: 4px solid white;
    box-shadow: inset -1px 2px 5px rgba(0,0,0,0.75), -1px 3px 2px 0px rgba(0,0,0,0.75);
    color: white;
    font-family: Georgia;
    font-size: 42px;
    font-weight: bold;
    left: calc(50% - 224px);
    letter-spacing: 6px;
    padding: 10px 20px;
    position: absolute;
    text-align: center;
    text-shadow: -1px 2px 1px rgba(0,0,0,0.75);
    top: 55px;
    width: 400px;
  }

  .window {
    background: linear-gradient(
      to bottom right,
      #63B9DB,
      #63B9DB 25%,
      #85CCEB 25%,
      #85CCEB 29%,
      #63B9DB 29%,
      #63B9DB 35%,
      #85CCEB 35%,
      #85CCEB 55%,
      #63B9DB 55%,
      #63B9DB 72%,
      #85CCEB 72%,
      #85CCEB 73%,
      #63B9DB 73%,
      #63B9DB 77%,
      #85CCEB 77%,
      #85CCEB 83%,
      #63B9DB 83%,
      #63B9DB
    );
    border: 2px solid white;
    border-bottom-width: 12px;
    box-shadow: -1px 2px 2px -1px rgba(0,0,0,0.75);
    height: 150px
    position: absolute;
    top: 175px;
    width: 175px;

    &.left {
      left: 25px;
    }

    &.right {
      right: 25px;
    }
  }

  .door {
    background: #496493;
    border: 4px solid white;
    box-shadow: -2px 0px 2px -1px rgba(0,0,0,0.75), inset -1px 2px 2px -1px rgba(0,0,0,0.75);
    height: 192px
    left: calc(50% - 59px);
    position: absolute;
    top: 175px;
    width: 110px;

    &::before {
      background: linear-gradient(
        138.3deg,
        #63B9DB,
        #63B9DB 25%,
        #85CCEB 25%,
        #85CCEB 34%,
        #63B9DB 34%,
        #63B9DB 45%,
        #85CCEB 45%,
        #85CCEB 67%,
        #63B9DB 67%,
        #63B9DB
      );
      border: 4px solid white;
      box-shadow: -1px 1px 2px -1px rgba(0,0,0,0.75), inset -1px 2px 2px -1px rgba(0,0,0,0.75);
      content: "";
      height: 100px;
      left: calc(50% - 39px);
      position: absolute;
      top: 15px;
      width: 70px;
    }
    
    &::after {
      border: 4px solid white;
      box-shadow: -1px 1px 2px -1px rgba(0,0,0,0.75), inset -1px 2px 2px -1px rgba(0,0,0,0.75);
      content: "";
      height: 30px;
      left: calc(50% - 39px);
      position: absolute;
      top: 140px;
      width: 70px;
    }
  }
`

const Shop = () => {
  return (
    <BarberShop>
      <div className="lintel"></div>
      <div className="sign">BARBER SHOP</div>
      <div className="window left"></div>
      <div className="window right"></div>
      <div className="door"></div>
    </BarberShop>
  )
}

const Start = () => {
  return (
    <Bg>
      <RockyGrassPath />
      <Shop />
    </Bg>
  )
}

export default Start