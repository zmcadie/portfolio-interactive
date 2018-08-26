import React from "react"
import Avatar from "./components/Avatar"
import styled from "styled-components"

const transitionTime = 3000

const bg1 = styled.div`
  background: #66dd66;
  height: 100vh;
  width: 100vw;
`

const bg2 = styled.div`
  background: #dd6666;
  height: 100vh;
  width: 100vw;
`

const bg3 = styled.div`
  background: #6666dd;
  height: 100vh;
  width: 100vw;
`

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: ${p => p.position * 100}vw;
  height: 100vh;
  width: 100vw;
  transition: all ${transitionTime/1000}s linear;
`

const BgContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

const backgrounds = [
  bg1,
  bg2,
  bg3
]

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isMoving: false,
      direction: null,
      position: 0,
      timeout: { isRunning: false }
    }
    this.onKeyDown = this.onKeyDown.bind(this)
    this.handleTimeout = this.handleTimeout.bind(this)
    this.changePosition = this.changePosition.bind(this)
  }

  handleTimeout(func) {
    const { isRunning, time, id } = this.state.timeout
    const timeNow = new Date()
    let length = transitionTime
    if (isRunning) {
      length = timeNow - time
      window.clearTimeout(id)
    }
    const newId = window.setTimeout(func, length)
    return { time: timeNow - transitionTime + length, id: newId, isRunning: true }
  }

  changePosition(modifier) {
    const currentPosition = this.state.position
    const newPosition = currentPosition + modifier
    const direction = currentPosition < newPosition ? "right" : "left"
    
    if (newPosition < 0 || newPosition >= backgrounds.length) return false
    if (this.state.isMoving && this.state.direction === direction) return false

    const timeout = this.handleTimeout(() => this.setState({ isMoving: false, timeout: { isRunning: false }}))
    this.setState({ position: newPosition, isMoving: true, direction, timeout })
  }

  onKeyDown(e) {
    const { keyCode } = e
    keyCode === 37 ? this.changePosition(-1) : keyCode === 39 ? this.changePosition(1) : null
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown)
  }

  render() {
    const { position } = this.state
    const bgs = backgrounds.map((B, i) => <Bg position={i - position}><B/></Bg>)
    return (
      <div className="App">
        <Avatar isMoving={this.state.isMoving} direction={this.state.direction} />
        <BgContainer>{bgs}</BgContainer>
      </div>
    )
  }
}