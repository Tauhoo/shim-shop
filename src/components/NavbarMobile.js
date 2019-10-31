import React, { Component } from "react"
import styled from "styled-components"
import NavbarButton from "./NavButton"

const Container = styled.div`
  width: 100%;
  z-index: 1000;
  height: 60px;
  position: fixed;
  top: 0px;
  background-color: white;
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 470px) {
    display: flex;
  }
`

const List = styled.div`
  display: none;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  width: 100%;
  top: ${({ visible }) => (visible ? "60px" : "-150px")};
  align-items: center;
  justify-items: flex-end;
  height: 150px;
  position: fixed;
  z-index: 999;
  background-color: white;
  transition-duration: 0.3s;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 470px) {
    display: grid;
  }
`

const Child = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
`

export default class extends Component {
  state = { visible: false }
  render() {
    const { visible } = this.state
    return (
      <>
        <Container>
          <img src={process.env.PUBLIC_URL + "/logoNav.png"} height='48px' />
          <NavbarButton
            visible={visible}
            onClick={() => this.setState({ visible: !visible })}
          ></NavbarButton>
        </Container>
        <List visible={visible}>
          <Child href='https://regist.ชิมช้อปใช้.com/Register/'>
            ลงทะเบียนเข้าร่วมมาตรการ
          </Child>
          <Child href='https://www2.ชิมช้อปใช้.com/howto-register'>
            ขั้นตอนการเข้าร่วม
          </Child>
          <Child href='https://www2.ชิมช้อปใช้.com/thung-ngern-shop-province'>
            ร้านค้าที่เข้าร่วม
          </Child>
        </List>
      </>
    )
  }
}
