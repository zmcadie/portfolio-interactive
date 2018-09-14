import React from 'react'
import { TwitterPicker } from 'react-color';
import styled from 'styled-components';

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.Button = this.Button.bind(this)
    this.Picker = this.Picker.bind(this)
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen })
  };

  handleClose() {
    this.setState({ isOpen: false })
  };

  handleChange(color) {
    this.props.onChange(color.hex)
  }

  Button() {
    const ButtonOuter = styled.div`
      background: #fdfdfd;
      border: 1px solid #aaa;
      border-radius: 4px;
      height: 15px;
      padding: 5px;
      width: 30px;
    `
    const ButtonInner = styled.div`
      box-shadow:
        1px 1px #ddd,
        1px -1px #ddd,
        -1px 1px #ddd,
        -1px -1px #ddd;
      background: ${ this.props.value };
      height: 100%;
    `
    return (
      <ButtonOuter onClick={this.handleClick}>
        <ButtonInner />
      </ButtonOuter>
    )
  }

  Picker() {
    const popover = {
      marginLeft: '-234px',
      position: 'absolute',
      zIndex: '5',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    const colors = [
      '#FF6900',
      '#FFF800',
      '#7BDCB5',
      '#00D084',
      '#8ED1FC',
      '#0693E3',
      '#ABB8C3',
      '#EB144C',
      '#F78DA7',
      '#9900EF'
    ]
    return this.state.isOpen
      ? (
        <div style={popover}>
          <div style={cover} onClick={this.handleClose} />
          <TwitterPicker triangle='top-right' colors={colors} color={this.props.value} onChangeComplete={this.handleChange} />
        </div>
      ) : null
  }

  render() {
    return (
      <div>
        <this.Button />
        <this.Picker />
      </div>
    )
  }
}