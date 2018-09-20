import React from "react"
import styled, { keyframes } from "styled-components"
import RockyGrassPath from "./partials/RockyGrassPath"
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
  transform: skewY(-2deg);
  z-index: 1;
`

const WorkItems = styled.div`
  color: #efefef;
  font-size: 22px;
  height: calc(50vh + 15px);
  overflow: hidden;
  position: absolute;
  text-shadow: -1px 1px #444;
  top: 0;
  width: 100vw;

  .work-item {
    left: calc(50vw - 250px);
    position: absolute;
    top: ${p => p.showHistory ? '15vh' : 'calc(50vh + 100px)'};
    transition: top 1s ease-in-out;
    width: 550px;

    &:nth-child(2) {
      top: ${p => p.showHistory ? 'calc(15vh + 155px)' : 'calc(50vh + 100px)'};
      transition: top 1s ease-in-out 1s;

      .work-item-aside {
        left: 148px;
      }
    }

    &:nth-child(3) {
      top: ${p => p.showHistory ? 'calc(15vh + 195px)' : 'calc(50vh + 100px)'};
      transition: top 1s ease-in-out 1.5s;

      .work-item-aside {
        left: 140px;
      }
    }

    &:nth-child(4) {
      top: ${p => p.showHistory ? 'calc(15vh + 235px)' : 'calc(50vh + 100px)'};
      transition: top 1s ease-in-out 2s;

      .work-item-aside {
        left: 130px;
      }
    }

    &:not(.main) {
      .work-item-title {
        font-size: 18px;
      }

      .work-item-aside {
        top: 5px;
      }
    }
  }

  .work-item-title {
    font-size: 26px;
  }

  .work-item-aside {
    font-size: 12px;
    left: 155px;
    position: absolute;
    top: 11px;
  }

  .work-item-subheader {
    font-size: 14px;
    margin: 5px 0 10px;
  }

  .work-item-description {
    font-size: 12px;
    margin-top: 5px;

    &::before {
      content: "•";
      margin-right: 10px;
    }
  }
`

const History = ({ showHistory }) => (
  <WorkItems showHistory={showHistory}>
    <div className="work-item main">
      <div className="work-item-title">SaaSquatch</div>
      <div className="work-item-aside">|&nbsp;&nbsp;&nbsp;Victoria, BC&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Sept 2017 - Sept 2018</div>
      <div className="work-item-subheader">Front-End Developer</div>
      <div className="work-item-description">
        Part of the front-end development team designing and building UI for the customer portal
      </div>
      <div className="work-item-description">
        UI / UX design for a platform upgrade
      </div>
      <div className="work-item-description">
        Implemented a reusable component library for internal use
      </div>
    </div>
    <div className="work-item">
      <div className="work-item-title">Lifestyle Markets</div>
      <div className="work-item-aside">|&nbsp;&nbsp;&nbsp;Department Manager&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Victoria, BC&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;2016 - 2017</div>
    </div>
    <div className="work-item">
      <div className="work-item-title">Public Outreach</div>
      <div className="work-item-aside">|&nbsp;&nbsp;&nbsp;Supervisor&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Victoria, BC&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;2014 - 2016</div>
    </div>
    <div className="work-item">
      <div className="work-item-title">Self-Employed</div>
      <div className="work-item-aside">|&nbsp;&nbsp;&nbsp;Musician&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Victoria, BC&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;2013 - 2015</div>
    </div>
  </WorkItems>
)

class WorkHistory extends React.Component {
  constructor() {
    super()
    this.state = {
      showHistory: false
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
    if (isActive && keyCode === 87) this.setState({showHistory: !this.state.showHistory})
  }
  
  render() {
    const { isActive } = this.props
    const { showHistory } = this.state
    return (
      <Bg>
        <WaveContainer>
          <Wave />
        </WaveContainer>
        <RockyGrassPath />
        <History showHistory={showHistory && isActive} />
        <Directions isActive={isActive} side="left" content="Work Experience" />
        <Directions isActive={isActive} side="right" content="Projects" />
        <ActionContainer isActive={isActive} actions={[{key: "W", action: <span>{showHistory ? 'Hide' : 'View'} Work History</span>}]} />
      </Bg>
    )
  }
}

export default WorkHistory