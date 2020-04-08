import React, { Component } from 'react';
import "./styles.scss";
import JoinCitba from 'components/JoinCitba';

import FooterImg from "assets/citba-footer.png";

class Footer extends Component {
    state = {};

    render() {
        return (
          <>
            <JoinCitba />
            <footer>
              <img src={FooterImg} alt="logo" />
              <em>
                Customs law, international trade law, and related matters since
                1926.
              </em>
            </footer>
          </>
        );
    }
}

export default Footer;
