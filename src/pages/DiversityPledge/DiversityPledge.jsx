import React, { Component } from "react";
import "./styles.scss";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Banner from "components/Banner/Banner";
import BannerBg from "assets/library.jpg";

class DiversityPledge extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Banner
          src={BannerBg}
          text="Diversity Pledge"
          subtitle={["The Customs and International Bar Association's Commitment to Diversity"]}
        />
        <div className="diversitypledge">
          <h1>STATEMENT</h1>
                   
          <div className="divider-small" />
          <div className="footnote">
          <p>
            Watch our event from 2020 promoting racial justice through opportunity and advancement in our Industry: <a href="https://www.youtube.com/watch?v=wnrdDABh17U">
              <strong>Black Voices in Trade.</strong></a></p>
            
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default DiversityPledge;
