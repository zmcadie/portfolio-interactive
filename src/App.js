import React from "react"
import Avatar from "./components/Avatar"
import styled from "styled-components"
import backgrounds from "./components/Backgrounds"
import CharacterCustomization from './pages/CharacterCustomization'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const transitionTime = 3000

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: ${p => p.position * 100}vw;
  height: 100vh;
  width: 100vw;
  transition: ${p => p.isMoving ? `left ${transitionTime/1000}s linear` : ""};
`

const BgContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

const ClickModal = styled.div`
  cursor: default;
  display: ${p => p.isOpen ? 'initial' : 'none'};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #0008;
  z-index: 3;
  padding: 25vh 25vw;
  color: #efefef;
  text-shadow: -1px 1px #000;
  font-size: 18px;
`

const ModalEsc = styled.div`
  cursor: pointer;
  background: #efefef;
  position: absolute;
  top: 20px;
  left: 20px;
  color: #444;
  text-shadow: none;
  height: 20px;
  width: 20px;
  border-radius: 20px;

  &:hover {
    transform: scale(1.2);
  }

  &::after {
    content: 'x';
    position: absolute;
    line-height: 18px;
    width: 20px;
    top: 0;
    left: 0;
    text-align: center;
  }
`

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMoving: false,
      direction: null,
      position: props.match.params.position * 1,
      timeout: { isRunning: false },
      clickModalIsOpen: false
    }
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onClick = this.onClick.bind(this)
    this.handleTimeout = this.handleTimeout.bind(this)
    this.changePosition = this.changePosition.bind(this)
    
    window.history.replaceState({}, null, "/")
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
    const { key } = e
    if (this.state.clickModalIsOpen && key !== "Escape") return false
    const actions = {
      ArrowLeft: () => this.changePosition(-1),
      ArrowRight: () => this.changePosition(1),
      Escape: () => this.setState({clickModalIsOpen: false})
    }
    if (actions[key]) actions[key]()
  }

  onClick() {
    if (this.state.isMoving) return false
    this.setState({ clickModalIsOpen: !this.state.clickModalIsOpen })
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown)
    window.addEventListener("mousedown", this.onClick)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown)
    window.removeEventListener("mousedown", this.onClick)
  }

  render() {
    const { position } = this.state
    const bgs = backgrounds.map((B, i) => {
      return (
        <Bg key={i} isMoving={this.state.isMoving} position={i - position}>
          <B isActive={i - position === 0 && !this.state.isMoving && !this.state.clickModalIsOpen} history={this.props.history} />
        </Bg>
      )
    })
    return (
      <div className="Main">
        <Avatar avatar={this.props.avatar} isMoving={this.state.isMoving} direction={this.state.direction} />
        <BgContainer>{bgs}</BgContainer>
        <ClickModal isOpen={this.state.clickModalIsOpen}>
          <ModalEsc />
          <p>To navigate this path use your 'left' and 'right' arrow keys.</p>
          <p>Descriptions will appear in the bottom corners giving you an idea of what lies in each direction.</p>
          <p>Some parts of the path have other actions you can take, these will appear in the top corners of the screen.</p>
        </ClickModal>
      </div>
    )
  }
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      avatar: {
        head: "#FFF800",
        body: "#EB144C",
        legs: "#0693E3"
      }
    }
    this.updateAvatar = this.updateAvatar.bind(this)
  }

  updateAvatar(avatar) {
    this.setState({ avatar })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Redirect to="/p/1" />} />
          <Route path="/p/:position" render={p => <Main {...p} avatar={this.state.avatar} />} />
          <Route path="/character" render={() => <CharacterCustomization avatar={this.state.avatar} update={this.updateAvatar} />} />
        </div>
      </Router>
    )
  }
}