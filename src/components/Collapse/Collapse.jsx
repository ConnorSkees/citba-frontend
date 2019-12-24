import React, { Component } from 'react';
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
    isCollapsed: true
  };

  toggleCollapse = () => {
      const { isCollapsed } = this.state;
      const { title } = this.props;
      calculateSize(title);
      this.setState({ isCollapsed: !isCollapsed });
  }

  render() {
    const { title, chair, cochairs, description, emails } = this.props;
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
            {cochairs ? (
              <h1>
                Co-Chairs: <a href={`mailto:${emails[0]}`}>{cochairs[0]}</a> and{" "}
                <a href={`mailto:${emails[1]}`}>{cochairs[1]}</a>
              </h1>
            ) : (
              <h1>
                Chair: <a href={`mailto:${emails[0]}`}>{chair}</a>
              </h1>
            )}
            {description}
          </div>
        </div>
      </div>
    );
  }
}

export default Collapse;
