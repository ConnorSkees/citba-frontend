import React, { Component } from 'react';
import "./styles.scss";
import Header from 'components/Header';
import Carousel from 'components/Carousel';
import Footer from 'components/Footer';

import BalanceScale from "assets/balance-scale.svg";
import SVG from "react-inlinesvg";

class Home extends Component {
    state = {};

    render() {
        return (
          <React.Fragment>
            <Header />
            <Carousel />
            <div className="home-banner">
              <SVG src={BalanceScale} />
              <h2>
                The Customs and International Trade Bar Association (CITBA)
                membership consists of attorneys who maintain an interest in the
                field of customs law, international trade law and related
                matters.
              </h2>
              <div className="divider-small" />
              <p>
                CITBA members work with importers, exporters and domestic
                parties with respect to matters that involve the United States
                customs laws, antidumping, countervailing duty and other
                international trade laws, and related laws and regulations of
                U.S. federal agencies concerned with international commerce.
              </p>
            </div>
            <Footer />
          </React.Fragment>
        );
    }
}

export default Home;
