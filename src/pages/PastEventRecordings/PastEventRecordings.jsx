import React, { Component } from "react";
import "./styles.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import BannerBg from "assets/man-writing.jpg";

class PastEventRecordings extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Banner text="Past Event Recordings" src={BannerBg} subtitle={[]} />
        <div className="past-event-recordings">
          <ul>
            <li><a href="https://www.youtube.com/watch?v=wnrdDABh17U">CITBA presents Black Voices in Trade</a></li>
            <li><a href="https://www.youtube.com/watch?v=sTBqaWia9vs">Careers &amp; Internships in International Trade, Customs, and Export Controls Law</a></li>
          </ul>
        </div>
        <Footer />
      </>
    );
  }
}

export default PastEventRecordings;
