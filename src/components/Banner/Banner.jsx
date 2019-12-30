import React, { Component } from 'react';
import "./styles.scss";

class Banner extends Component {
    state = {};

    render() {
        const { src, text, subtitle } = this.props;
        return (
          <div className="banner" style={{ backgroundImage: `url(${src})` }}>
            <div className="overlay" />
            <div className="text">
              <p className="title">{text}</p>
              {subtitle.map(s => (
                <p className="subtitle" key={s}>{s}</p>
              ))}
            </div>
          </div>
        );
    }
}

export default Banner;
