import React, { Component } from 'react';
import "./styles.scss";
import Header from 'components/Header';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import BannerBg from "assets/carousel-image-1.jpg";

class Meetings extends Component {
    state = {};

    render() {
        return (
          <React.Fragment>
            <Header />
            <Banner src={BannerBg} text="Meetings" subtitle={[]} />
            <div className="meetings">
              <h2>2020 SEMI-ANNUAL MEETING</h2>
              <p>
                CITBA’s next semi-annual meeting will be held in spring of 2020.
                The meeting will be held at the Court of International Trade in
                New York City, New York. All members are invited to attend the
                meeting. A specific date is TBD.
              </p>
            </div>
            <Footer />
          </React.Fragment>
        );
    }
}

export default Meetings;
