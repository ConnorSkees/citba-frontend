import React, { Component } from "react";
import "./styles.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import BannerBg from "assets/man-writing.jpg";

class CareersInInternationalTrade extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Banner text="Careers in International Trade" src={BannerBg} subtitle={[]} />
        <Footer />
      </>
    );
  }
}

export default CareersInInternationalTrade;
