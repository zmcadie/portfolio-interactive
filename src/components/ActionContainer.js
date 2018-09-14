import React from 'react'
import styled from 'styled-components'

const Key = styled.div`
  height: 65px;
  width: ${p => (p.wide ? "165px" : "65px")};
  background: #f8f8f8;
  border-radius: 4px;
  line-height: 65px;
  color: #444;
  border: 4px solid #ccc;
  border-bottom: 7px solid #888;
  border-top: 2px solid #ddd;
  font-size: 28px;
  margin-bottom: 15px;
  text-align: center;
  text-shadow: none;
  box-shadow: -1px 1px #444;
`;

const ActionsContainer = styled.div`
  position: absolute;
  right: 50px;
  top: 20px;
  text-align: center;
  color: #efefef
  text-shadow: -1px 1px #444;
`

const KeyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ActionContainer = ({ actions, isActive }) => {
  const keys = actions.map((a, i) => {
    return isActive 
    ? (
      <KeyContainer key={`action-${i}`}>
        <Key wide={!!a.wide}>
          {a.key}
        </Key>
        {a.action}
      </KeyContainer>
    )
    : ''
  })
  return <ActionsContainer>{keys}</ActionsContainer>
}

export default ActionContainer