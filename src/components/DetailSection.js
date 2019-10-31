import React from "react"
import styled from "styled-components"

const Container = styled.div`
  * {
    font-size: 18px;
  }
`
const Title = styled.div`
  color: red;
  font-size: 36px;
`

const Detail = styled.div`
  margin-top: 24px;
`

const List = styled.div`
  margin-top: 18px;
`

const Child = styled.div``

const Header = styled.div`
  font-weight: bold;
  margin-top: 24px;
`
export default ({ style, detail, condition }) => {
  console.log(detail, condition)

  return (
    <Container style={style}>
      <Title>
        มาตรการส่งเสริมการบริโภค
        <br /> ในประเทศ “ชิมช้อปใช้”
      </Title>
      <Detail dangerouslySetInnerHTML={{ __html: detail }}></Detail>
      <Header>เงื่อนไขการเข้าร่วมมาตรการ</Header>
      <List dangerouslySetInnerHTML={{ __html: condition }}></List>
    </Container>
  )
}
