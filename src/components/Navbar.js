import React from "react"
import styled from "styled-components"

import Button from "./Button"

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 60px;
  width: 100%;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 1000;
`

export default ({ navbarItems }) => (
  <Container>
    {navbarItems.map(({ label, href }) => (
      <Button style={{ margin: "0px 15px" }}>
        <a href={href}>{label}</a>
      </Button>
    ))}
  </Container>
)
