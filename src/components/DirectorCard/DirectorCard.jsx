import React, { Component } from "react";

import "./styles.scss";

class DirectorCard extends Component {
  state = {};

  render() {
    const { src, name, company, position, major } = this.props;
    return (
      <section className="director-card">
        <img src={src} alt={name} className="head-shot" />
        <h2>{name}</h2>
        <h4 className="company">{company}</h4>
        <h4 className={`${major ? "major" : ""}`}>{position}</h4>
      </section>
    );
  }
}

export default DirectorCard;
