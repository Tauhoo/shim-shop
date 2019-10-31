import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 26px 0px;
`

const Wrapper = styled.div`
  width: 100%;
  font-size: 30px;
  color: red;
  font-size: 48px;
  text-align: center;
`

const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
`

const RegisterButton = styled.button`
  width: 100%;
  padding: 10px 30px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #203a8f;
  border-width: 0px;
  transition-duration: 0.2s;
  box-shadow: 0 15px 30px 0 rgba(28, 78, 132, 0.4);
  outline: none;
  &:hover {
    box-shadow: none;
    background-color: #ffc107;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  max-width: 780px;
  margin-top: 15px;
`

const Link = styled.a`
  color: white;
  font-size: 24px;
  text-decoration: none;
`

export default ({ duration }) => (
  <Container>
    <Text>ตั้งแต่วันที่</Text>
    <Wrapper>{duration}</Wrapper>
    <ButtonContainer>
      <RegisterButton>
        <Link href='https://regist.ชิมช้อปใช้.com/Register/'>
          ลงทะเบียน เฟส 2 <br></br>
          ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบเวลา 6.00 และ 18.00 น.
          (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
        </Link>
      </RegisterButton>
    </ButtonContainer>
  </Container>
)
