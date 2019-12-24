import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./styles.scss"

class Item extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.display = React.createRef();
    this.focus = this.focus.bind(this);
  }

  focus() {
   this.display.current.focus();
  }

  handleKeyPress = (e) => {
    let { children } = this.props;
    switch(e.charCode){
      case 13:
      case 32:
        this.props.onClick(children);
        break;
      case 40:
        break;
      default:
        break;
      }
  }

  render() {
    const { path, text, cursorPos, index } = this.props;
    if (cursorPos === index) {
      this.focus();
    }

    return (
      <Link
        to={path.toLowerCase()}
        key={text}
        className={"item"}
        tabIndex={0}
        ref={this.display}
        title={text}
      >
        {text}
      </Link>
    );
  };
}

export default Item;
