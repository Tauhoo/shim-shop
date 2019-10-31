import React from "react"
import styled from "styled-components"

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  width: 100%;
  max-width: 1200px;
  padding: 0px 50px;
  box-sizing: border-box;
  justify-items: center;
  padding: 50px 20px;
  @media (max-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
    > img:first-child {
      grid-column: 1/4;
    }
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    justify-items: flex-start;
    > img:first-child {
      grid-column: 1/2;
    }
    grid-gap: 20px;
  }
`

const TextContainer = styled.div``

const TextTitle = styled.div`
  color: red;
  font-size: 18px;
`
const TopCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #fafafa;
`

const Text = styled.div``

const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  color: white;
  grid-gap: 10px;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;

  > * {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    justify-items: flex-start;
    padding: 0px 20px;
  }
`

const BottomCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #213a8f;
  padding: 10px 0px;
  box-sizing: border-box;
`

const topData = [
  [
    "ข้อมูลลงทะเบียนประชาชน",
    "การรับสิทธิ การใช้งานแอปพลิเคชั่น “เป๋าตัง” และ “ถุงเงิน” ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.0 2111 1144",
  ],
  [
    "ข้อมูลลงทะเบียนผู้ประกอบการ",
    "เงื่อนไขและวิธีการเข้าร่วมมาตรการฯติดต่อ โทร.0 2270 6400 กด 7",
  ],
  ["ข้อมูลเที่ยวชิมช้อปใช้", "ติดต่อ ททท.โทร1672"],
]

export default () => (
  <>
    <TopCenter>
      <TopContainer>
        <img src={process.env.PUBLIC_URL + "/logoFooter.png"} />
        {topData.map(([name, text]) => (
          <TextContainer>
            <TextTitle>{name}</TextTitle>
            <Text>{text}</Text>
          </TextContainer>
        ))}
      </TopContainer>
    </TopCenter>
    <BottomCenter>
      <Bottom>
        <span>Copyright © 2003-2019</span>
        <a href='https://regist.ชิมช้อปใช้.com/Register/'>
          ลงทะเบียนเข้าร่วมมาตรการ
        </a>
        <a href='https://www2.ชิมช้อปใช้.com/howto-register'>
          ขั้นตอนการเข้าร่วมทั้งหมด
        </a>
        <a href='https://www2.ชิมช้อปใช้.com/thung-ngern-shop-province'>
          รายชื่อร้านค้าที่เข้าร่วมรายการ
        </a>
      </Bottom>
    </BottomCenter>
  </>
)
