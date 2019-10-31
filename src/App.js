import React, { Component } from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import RegisterSection from "./components/RegisterSection"
import BodyContainer from "./components/BodyContainer"
import DetailSection from "./components/DetailSection"
import CallList from "./components/CallList"
import fetchData from "./utils/fetch"

export default class extends Component {
  state = {
    navbarItems: [],
    duration: "",
    detail: "",
    condition: "",
  }
  async componentDidMount() {
    const { status, result, detail } = await fetchData()
    if (status === "error") return console.log(detail)
    this.setState(result)
  }
  render() {
    const { navbarItems, duration, detail, condition } = this.state
    console.log(this.state)

    return (
      <div>
        <Navbar navbarItems={navbarItems}></Navbar>
        <Banner style={{ marginTop: "60px" }}></Banner>
        <BodyContainer>
          <RegisterSection duration={duration}></RegisterSection>
          <DetailSection detail={detail} condition={condition}></DetailSection>
          <CallList style={{ marginTop: "100px" }}></CallList>
        </BodyContainer>
      </div>
    )
  }
}
