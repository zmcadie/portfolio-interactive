import React from 'react'
import styled from 'styled-components'

const HalfArrow = styled.div`
  height: 20px;
  width: 100%;
  border-bottom: 2px solid #efefef;
  border-${p => p.side}: 3px solid #efefef;
  box-shadow: 0px 1px #444, inset ${p => p.side === 'right' ? '-1px' : '1px'} 0px #444;
  transform: skew(${p => p.side === 'right' ? '45deg' : '-45deg'});
  position: absolute;
  top: 0;
  ${p => p.side}: 7px;
`;

const Content = styled.div`
  color: #efefef;
  text-shadow: -1px 1px #444;
  width: 100%;
  text-align: center;
`

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  ${p => p.side}: 50px;
  width: 185px;
  opacity: ${p => p.isActive ? 1 : 0};
  transition: opacity 0.5s;
`

const Directions = ({ isActive, content, side }) => (
  <ArrowContainer isActive={isActive} side={side}>
    <Content>{content}</Content>
    <HalfArrow side={side} />
  </ArrowContainer>
)

export default Directions