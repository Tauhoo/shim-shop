import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: max-content;
  height: 45px;
  &:hover {
    div:last-child {
      width: 100%;
    }
  }
`

const UnderLine = styled.div`
  position: absolute;
  transition-duration: 0.3s;
  background-color: black;
  transform: translate(-50%, -100%);
  height: 5px;
  top: 100%;
  left: 50%;
  width: 0px;
`

export default ({ style, children }) => (
  <Container style={style}>
    {children}
    <UnderLine></UnderLine>
  </Container>
)
