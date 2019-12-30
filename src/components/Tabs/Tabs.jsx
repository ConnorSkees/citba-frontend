import React, { Component } from 'react';
import SVG from "react-inlinesvg";
import "./styles.scss";

function calculateSize(activeTab) {
  Array.from(document.getElementsByClassName("inner-tab-content")).forEach(
    element => {
      element.style.maxHeight = 0;
    }
  );
  const el = document.getElementById(`tab${activeTab}`);
  el.style.maxHeight = el.scrollHeight + "px";
}

class Tabs extends Component {
  state = {
    activeTab: 0
  };

  changeTab = activeTab => {
      calculateSize(activeTab);
      this.setState({ activeTab });
  };

  componentDidMount() {
      calculateSize(this.state.activeTab);
  }

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;
    return (
      <div className="tabs-container">
        <div className="tabs">
          {tabs.map((tab, idx) => (
            <div
              className={`tab${idx === activeTab ? " active" : ""}`}
              onClick={() => this.changeTab(idx)}
              key={`tab-header${idx}`}
            >
              <SVG src={tab.icon} />
              <span>{tab.title}</span>
            </div>
          ))}
        </div>
        <div className="tab-content">
          {tabs.map((tab, idx) => (
            <div
              className="inner-tab-content"
              id={`tab${idx}`}
              key={`tab${idx}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Tabs;
