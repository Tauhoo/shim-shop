import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  height: 350px;
  width: 100%;
  position: relative;
`

const Image = styled.div`
  flex: 1;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Center = styled.img`
  width: 240px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default ({ style }) => (
  <Container style={style}>
    <Image src={process.env.PUBLIC_URL + "/banner1.png"}></Image>
    <Image src={process.env.PUBLIC_URL + "/banner2.png"}></Image>
    <Image src={process.env.PUBLIC_URL + "/banner3.png"}></Image>
    <Center src={process.env.PUBLIC_URL + "/banner4.png"} />
  </Container>
)
