import React, { Component } from "react";
import Plus from "assets/plus.svg";
import Minus from "assets/minus.svg";
import SVG from "react-inlinesvg";
import "./styles.scss";

function calculateSize(title) {
  const el = document.getElementById(title);
  if (el.style.maxHeight) {
    el.style.maxHeight = null;
  } else {
    el.style.maxHeight = el.scrollHeight + "px";
  }
}

class Collapse extends Component {
  state = {
    isCollapsed: true,
  };

  toggleCollapse = () => {
    const { isCollapsed } = this.state;
    const { title } = this.props;
    calculateSize(title);
    this.setState({ isCollapsed: !isCollapsed });
  };

  renderChairs() {
    const { chairs, emails } = this.props;
    if (chairs.length === 1) {
      return (
        <h1>
          Chair: <a href={`mailto:${emails[0]}`}>{chairs[0]}</a>
        </h1>
      );
    } else {
      return (
        <h1>
          Co-Chairs:{" "}
          {chairs
            .map((chair, idx) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${emails[idx]}`}
              >
                {chair}
              </a>
            ))
            .reduce((prev, curr) => [prev, " and ", curr])}
        </h1>
      );
    }
  }

  render() {
    const { title, description } = this.props;
    const { isCollapsed } = this.state;
    return (
      <div className="collapse">
        <div
          onClick={this.toggleCollapse}
          className={`title${isCollapsed ? "" : " active"}`}
        >
          <div className="icon">
            <SVG src={isCollapsed ? Plus : Minus} />
          </div>
          {title}
        </div>
        <div id={title} className={`content${isCollapsed ? " collapsed" : ""}`}>
          <div className="text">
            {this.renderChairs()}
            {description}
          </div>
        </div>
      </div>
    );
  }
}

export default Collapse;
