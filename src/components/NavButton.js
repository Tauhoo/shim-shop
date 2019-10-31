import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  height: 30px;
  width: 30px;
`
const Line = styled.div`
  transform: translate(-50%, -50%) rotate(${({ radius }) => radius});
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: 100%;
  height: 3px;
  background-color: black;
  opacity: ${({ opacity }) => opacity};
  position: absolute;
  transition-duration: 0.3s;
`
export default ({ visible, onClick }) => (
  <Container onClick={onClick}>
    <Line
      top={visible ? "50%" : "0px"}
      left='50%'
      radius={visible ? "135deg" : "0deg"}
      opacity={1}
    ></Line>
    <Line
      top={visible ? "50%" : "100%"}
      left='50%'
      radius={visible ? "-135deg" : "0deg"}
      opacity={1}
    ></Line>
    <Line
      top={"50%"}
      left={visible ? "-50%" : "50%"}
      radius='0deg'
      opacity={visible ? 0 : 1}
    ></Line>
  </Container>
)
