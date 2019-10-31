import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  height: 350px;
  width: 100%;
  position: relative;
  @media (max-width: 570px) {
    height: 300px;
  }
  @media (max-width: 420px) {
    height: 220px;
  }
  @media (max-width: 330px) {
    height: 150px;
  }
`

const Image = styled.div`
  flex: 1;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`

const Center = styled.img`
  width: 100%;
  max-width: 240px;
`

export default ({ style }) => (
  <Container style={style}>
    <Image src={process.env.PUBLIC_URL + "/banner1.png"}></Image>
    <Image src={process.env.PUBLIC_URL + "/banner2.png"}>
      <Center src={process.env.PUBLIC_URL + "/banner4.png"} />
    </Image>
    <Image src={process.env.PUBLIC_URL + "/banner3.png"}></Image>
  </Container>
)
