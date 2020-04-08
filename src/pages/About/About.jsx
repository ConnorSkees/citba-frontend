import React, { Component } from 'react';
import Header from "components/Header";
import Footer from "components/Footer";
import scales from "assets/scales.jpg";
import directors from "assets/board-of-directors.svg";
import committees from "assets/committees.svg";
import book from "assets/book.svg";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import "./styles.scss";

const QUICK_LINKS = [
    {
        icon: directors,
        path: "/board-of-directors",
        text: "Board of Directors"
    },
    {
        icon: committees,
        path: "/committees",
        text: "Committees"
    },
    {
    icon: book,
    path: "/by-laws",
    text: "By-Laws"
    },
];

class About extends Component {
    state = {};

    render() {
        return (
          <>
            <Header />
            <div className="about-banner-1">
              <img src={scales} alt="scales" />
              <section id="about-text">
                <div className="text">
                  <h1>ABOUT CITBA</h1>
                  <p>
                    The Customs and International Trade Bar Association (CITBA)
                    was founded in 1917 and incorporated in 1926. Its members
                    are attorneys who are interested in the field of customs
                    law, international trade law and related matters.
                  </p>
                  <p>
                    CITBA members work with importers, exporters and domestic
                    producers in matters involving U.S. customs laws,
                    antidumping and countervailing duty laws, safeguards, export
                    licensing, and other federal laws and regulations that
                    affect imported or exported merchandise or international
                    commerce. CITBA also includes U.S. Government lawyers at
                    federal departments and agencies responsible for
                    administering the customs and international trade laws.
                  </p>
                  <p>
                    Meetings are held at least twice per year, usually in
                    Washington, DC and New York City. A number of seminars are
                    conducted throughout the year, concerning various matters of
                    interest to the membership.
                  </p>
                </div>
              </section>
            </div>
            <div className="about-quick-links">
              {QUICK_LINKS.map(el => (
                <Link to={el.path.toLowerCase()} key={el.path}>
                  <div className="link-container">
                    <SVG src={el.icon} className={"quick-link"} />
                    <h2>{el.text}</h2>
                  </div>
                </Link>
              ))}
            </div>
            <Footer />
          </>
        );
    }
}

export default About;
