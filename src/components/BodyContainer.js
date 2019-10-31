import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0px 20px;
  box-sizing: border-box;
`
export default ({ children }) => (
  <Container>
    <Wrapper>{children}</Wrapper>
  </Container>
)
