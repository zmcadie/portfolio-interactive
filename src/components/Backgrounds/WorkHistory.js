import React from "react"
import styled, { keyframes } from "styled-components"
import RockyGrassPath from "./partials/RockyGrassPath"
import ActionContainer from "../ActionContainer"
import Directions from "../Directions"

const history = require("../../data/workHistory.json")

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

const WorkItemsList = styled.div`
  box-sizing: border-box;
  color: #efefef;
  font-size: 22px;
  height: calc(50vh + 15px);
  overflow: hidden;
  padding-top: 75px;
  position: absolute;
  text-shadow: -1px 1px #444;
  top: 0;
  width: 100vw;

  .work-item {
    left: calc(50vw - 250px);
    margin-bottom: 20px;
    position: relative;
    top: ${p => p.showHistory ? '0' : '600px'};
    transition: top 1s ease-in-out;
    width: 550px;

    .work-item-header {
      /* display: flex; */
    }

    &:nth-child(2) {
      transition: top 1s ease-in-out 1s;
    }

    &:nth-child(3) {
      transition: top 1s ease-in-out 1.5s;
    }

    &:nth-child(4) {
      transition: top 1s ease-in-out 2s;
    }
  }

  .work-item-company {
    font-size: 26px;
  }

  .work-item-aside {
    font-size: 12px;
    position: relative;
    bottom: 3px;
    margin-left: 15px;

    span {
      padding: 0 15px;
      position: relative;

      ::before {
        content: "|";
        position: absolute;
        left: 0;
        top: 0;
      }
    }
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

const WorkItem = ({ item }) => (
  <div className="work-item">
    <div className="work-item-header">
      <span className="work-item-company">{ item.company }</span>
      <span className="work-item-aside">
        <span>{ item.location }</span>
        <span>{ `${item.start} - ${item.end}` }</span>
      </span>
    </div>
    <div className="work-item-subheader">{ item.title }</div>
    { item.bullets ? item.bullets.map(bul => <div className="work-item-description">{ bul }</div>) : "" }
  </div>
)

const History = ({ showHistory, style }) => (
  <WorkItemsList showHistory={showHistory} style={style}>
    { history.map(item => <WorkItem item={ item } />) }
  </WorkItemsList>
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
          <History showHistory={showHistory && isActive} style={{transform: 'rotate(180deg) scaleX(-1)', color: '#efefef88', textShadow: 'none'}}/>
        </WaveContainer>
        <RockyGrassPath />
        <History showHistory={showHistory && isActive} />
        <Directions isActive={isActive} side="left" content="Work Experience" />
        {/* <Directions isActive={isActive} side="right" content="Projects" /> */}
        <ActionContainer isActive={isActive} actions={[{key: "W", action: <span>{showHistory ? 'Hide' : 'View'} Work History</span>}]} />
      </Bg>
    )
  }
}

export default WorkHistory