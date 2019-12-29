import React, { Component } from 'react';
import "./styles.scss";

class Input extends Component {
    state = {};

    render() {
        const { field, required } = this.props;
        return (
          <React.Fragment>
            <label htmlFor={field}>
              {field} {required ? <span className="red">*</span> : ""}
            </label>
            <input
              id={field}
              autoComplete={field.toLowerCase()}
              type="text"
              onChange={this.props.onChange}
              name={field}
              placeholder={field}
              pattern={"[^<>/'\"]*"}
            />
          </React.Fragment>
        );
    }
}

export default Input;
