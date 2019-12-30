import React, { Component } from 'react';
import Item from './Item';
import ArrowDown from "assets/arrow-down.svg";
import SVG from "react-inlinesvg";
import "./styles.scss"

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.display = React.createRef();
    this.focus = this.focus.bind(this);

    this.state = {
      showItems: false,
      cursorPos: -1,
    };
  }

  drop() {
    let { showItems } = this.state;
    if (!showItems) this.toggleShowItems();
  }

  focus() {
   this.display.current.focus();
  }

  toggleShowItems = () => {
    let { showItems } = this.state;
    this.setState({ showItems:!showItems });
  }

  handleKeyDown = (e) => {
    let { cursorPos } = this.state;
    let { items } = this.props;
    // console.log(e.key, e.keyCode);
    switch(e.keyCode){
      case 13:
      case 32:
        this.toggleShowItems();
        break;
      case 38: // up arrow
        cursorPos--;
        if (cursorPos < 0) {
          cursorPos = 0;
        }
        this.setState({ cursorPos })
        // console.log(cursorPos);
        break;
      case 40: // down arrow
        cursorPos++;
        if (cursorPos > items.length) {
          cursorPos = 0;
        }
        this.setState({ cursorPos })
        // console.log(cursorPos);
        break;
      default:
        break;
      }
  }

  render() {
    let { cursorPos, showItems } = this.state;
    let { text, items } = this.props;
    let height = items.length*36;
    return (
      <div className={`dropdown-wrapper ${this.props.className || ""}`}>
        <div
          key={text}
          tabIndex={0}
          ref={this.display}
          title={text}
          onKeyDown={e => this.handleKeyDown(e)}
          onMouseEnter={this.toggleShowItems}
          onClick={this.toggleShowItems}
          className={`display ${showItems ? "showing" : ""}`}
          value={text}
          name={"client"}
        >
          {text}
          <div className="icon">
            <SVG src={ArrowDown} />
          </div>
        </div>
        <div
          style={{ height: `${height}px`, ...this.props.style }}
          className={`item-container ${showItems ? "" : "hide"}`}
        >
          {items.map((val, idx) => (
            <Item
              path={val.path}
              text={val.text}
              key={val.path}
              index={idx}
              cursorPos={cursorPos}
            />
          ))}
        </div>
      </div>
    );
  };
}

export default Dropdown;
