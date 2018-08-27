import React from "react"
import styled from "styled-components"

const SmallRock = styled.div`
  position: absolute;
  width: 150px;

  .grassbase {
    width: 150px;
    height: 30px;
    background: #7ebc6f;
    border-radius: 75px / 15px;
    position: absolute;
    left: -42px;
    top: 35px;
  }

  .small-rock {
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
  }

  .grassblade {
    border-color: transparent transparent #7ebc6f transparent;
    border-style: solid;
    width: 0;
    height: 0;
    border-width: 0 6px 40px;
    display: block;
    position: absolute;

    &.left {
      transform: rotate(-41deg);
    }

    &.right {
      transform: rotate(41deg);
    }

    &.one {
      top: 19px;
      left: -35px;
    }

    &.two {
      top: 19px;
      left: -45px;
    }

    &.three {
      top: 22px;
      left: -25px;
    }

    &.four {
      top: 19px;
      left: 97px;
    }

    &.five {
      top: 19px;
      left: 87px;
    }
  }

`

const Rock = (props) => {
  return (
    <SmallRock {...props}>
      <div className="grassbase" />
      <div className="small-rock" />
      <div className="grassblade left one" />
      <div className="grassblade left two" />
      <div className="grassblade left three" />
      <div className="grassblade right four" />
      <div className="grassblade right five" />
    </SmallRock>
  )
}

export default Rock