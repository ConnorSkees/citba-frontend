import React, { Component } from 'react';
import "./styles.scss";

class Input extends Component {
    state = {};

    render() {
        const { field, required } = this.props;
        const type = this.props.type || "text";
        return (
          <>
            <label htmlFor={field}>
              {field} {required ? <span className="red">*</span> : ""}
            </label>
            <input
              id={field}
              autoComplete={field.toLowerCase()}
              onChange={this.props.onChange}
              name={field}
              type={type}
              placeholder={field}
              required={required}
            />
          </>
        );
    }
}

export default Input;
