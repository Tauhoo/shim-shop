import React from "react"
import styled from "styled-components"

const source = [
  [process.env.PUBLIC_URL + "./sponser1.png", "https://www.mof.go.th/th/home"],
  [process.env.PUBLIC_URL + "./sponser2.png", "http://www.fpo.go.th/"],
  [process.env.PUBLIC_URL + "./sponser3.png", "https://www.cgd.go.th/"],
  [process.env.PUBLIC_URL + "./sponser4.png", "https://www.newcb.ktb.co.th/"],
  [process.env.PUBLIC_URL + "./sponser5.png", "https://www.mots.go.th/"],
  [
    process.env.PUBLIC_URL + "./sponser6.png",
    "https://thai.tourismthailand.org/",
  ],
]

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${source.length}, 1fr);
  @media (max-width: 760px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Child = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 100px;
`

export default ({ style }) => (
  <Container style={style}>
    {source.map(([image, src], index) => (
      <Child href={src} key={index}>
        <Image src={image}></Image>
      </Child>
    ))}
  </Container>
)
