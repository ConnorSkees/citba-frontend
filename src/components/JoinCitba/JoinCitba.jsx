import React, { Component } from 'react';
import "./styles.scss";
import { Link } from "react-router-dom";
import Background from "assets/man-writing.jpg";

class JoinCitba extends Component {
    state = {};

    render() {
        return (
          <section className="join-citba-banner">
            <div
              className="background"
              style={{ backgroundImage: `url(${Background})` }}
            >
              <div className="overlay" />
              <div className="content">
                <h2>Join CITBA</h2>
                <p>
                  CITBA membership is open to all attorneys admitted to practice
                  in any country and to law students.
                </p>
                <Link to={"/join/"} key={"join-citba"}>
                  Join Today
                </Link>
              </div>
            </div>
          </section>
        );
    }
}

export default JoinCitba;
