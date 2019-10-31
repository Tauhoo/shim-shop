import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Picture = styled.img`
  width: 100%;
`

const ImageContainer = styled.a`
  flex: 1;
`

export default ({ style }) => (
  <Container style={style}>
    <ImageContainer href='tel:021111144'>
      <Picture src={process.env.PUBLIC_URL + "/Banner_CGD_Sq.png"}></Picture>
    </ImageContainer>
    <ImageContainer href='tel:022706400'>
      <Picture src={process.env.PUBLIC_URL + "/Banner_KTB_Sq.png"}></Picture>
    </ImageContainer>
    <ImageContainer href='tel:1672'>
      <Picture
        src={process.env.PUBLIC_URL + "/Banner_TAT_Hotline_Sq.png"}
      ></Picture>
    </ImageContainer>
  </Container>
)
