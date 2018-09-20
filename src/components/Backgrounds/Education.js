import React from "react"
import styled, { keyframes } from "styled-components"
import RockyGrassPath from "./partials/RockyGrassPath"
import Lighthouse from "./partials/Lighthouse"
import ActionContainer from "../ActionContainer"
import Directions from "../Directions"

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

const wave = keyframes`
  0% { top: -40px }
  100% { top: 75px }
`

const WaveContainer = styled.div`
  background: linear-gradient(to bottom, #4ebdae, #37b8b4);
  height: 50px;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: calc(50% + 15px);
`

const Wave = styled.div`
  animation: ${wave} 10s linear infinite;
  background: linear-gradient(to bottom, #fff0, #fff8);
  height: 5px;
  left: 0;
  position: absolute;
  right: 0;
  top: calc(50% + 13px);
  transform: skewY(2deg);
  z-index: 0;
`

const Sand = styled.div`
  border-right: 30vw solid transparent;
  border-top: 75px solid #ece292;
  position: absolute;
  left: 0;
  top: calc(50% + 15px);
  z-index: 1;
`

const EducationItems = styled.div`
  color: #efefef;
  font-size: 22px;
  position: absolute;
  text-shadow: -1px 1px #444;

  .education-item {
    left: calc(50vw - 220px);
    position: absolute;
    top: ${p => p.showEducation ? '15vh' : '-500px'};
    transition: top 1s ease-in-out;
    width: 500px;

    &::before {
      content: "•";
      left: -20px;
      position: absolute;
      top: 3px;
    }

    &:nth-child(2) {
      top: ${p => p.showEducation ? 'calc(15vh + 75px)' : '-500px'};
      transition: top 1s ease-in-out 1s;
    }
  }

  .education-item-title {
    font-size: 26px;
  }

  .education-item-description {
    font-size: 14px;
    margin-top: -15px;
    position: relative;
    top: -3px;
  }

  .education-item-year {
    font-size: 12px;
    margin-top: -10px;
    position: relative;
    top: -3px;
  }
`

class Education extends React.Component {
  constructor() {
    super()
    this.state = {
      showEducation: false
    }
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown)
  }

  onKeyDown(e) {
    const { keyCode } = e
    const { isActive } = this.props
    if (isActive && keyCode === 69) this.setState({showEducation: !this.state.showEducation})
  }
  
  render() {
    const { isActive } = this.props
    const { showEducation } = this.state
    return (
      <Bg>
        <Sand />
        <WaveContainer>
          <Wave />
        </WaveContainer>
        <Lighthouse style={{transform: "scale(0.5)", top: "calc(50% - 483px)", left: "6%"}} />
        <RockyGrassPath />
        <EducationItems showEducation={showEducation && isActive}>
          <div className="education-item">
            <span className="education-item-title">Lighthouse Labs</span>
            <span className="education-item-description">
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Web Development Bootcamp&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            </span>
            <span className="education-item-year">2017</span>
          </div>
          <div className="education-item">
            <span className="education-item-title">Seneca College</span>
            <span className="education-item-description">
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Independent Music Production&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            </span>
            <span className="education-item-year">2013</span>
          </div>
        </EducationItems>
        <Directions isActive={isActive} side="left" content="The Beginning" />
        <Directions isActive={isActive} side="right" content="Work Experience" />
        <ActionContainer isActive={isActive} actions={[{key: "E", action: <span>{showEducation ? 'Hide' : 'View'} Education</span>}]} />
      </Bg>
    )
  }
}

export default Education