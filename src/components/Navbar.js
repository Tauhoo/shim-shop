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
`

export default () => (
  <Container>
    <Button style={{ margin: "0px 15px" }}>ลงทะเบียนเข้าร่วมมาตรการ</Button>
    <Button style={{ margin: "0px 15px" }}>ขั้นตอนการเข้าร่วม</Button>
    <Button style={{ margin: "0px 15px" }}>ร้านค้าที่เข้าร่วม</Button>
  </Container>
)
