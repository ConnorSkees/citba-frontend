import React, { Component } from 'react';
import "./styles.scss";
import CountrySelect from 'components/CountrySelect/CountrySelect';
import SVG from "react-inlinesvg";
import CloseSVG from "assets/minus.svg";

function Input(props) {
    const { field } = props;
    return (
      <React.Fragment>
        <label htmlFor={field}>
          <span>{field}</span>
          <input
            type="text"
            id={field}
            name={field}
            required
            pattern={"[^<>/'\"]*"}
          />
        </label>
      </React.Fragment>
    );
}

class Popup extends Component {
    state = {
        visible: false,
        country: ""
    };

    show = () => {
        this.setState({ visible: true });
    }

    hide = () => {
        this.setState({ visible: false });
    }

    changeCountry = country => {
        this.setState({ country });
    }

    render() {
        const { visible } = this.props;
        const { country } = this.state;
        return (
          <React.Fragment>
            <div
              onClick={this.hide}
              className={`backdrop ${visible ? "" : "hidden"}`}
            />
            <form className={`popup-form ${visible ? "" : "hidden"}`}>
              <div className="header">
                <SVG src={CloseSVG} onClick={this.props.onHide} />
                <h1>Donate</h1>
                <p>Andrew P. Vance Donation</p>
              </div>
              <div className="content">
                <Input field="Enter amount" />
                <div className="row">
                  <Input field="Name" />
                  <Input field="Email" />
                </div>
                <p className="section-heading">Billing Info</p>
                <div className="row">
                  <Input field="Address" />
                  <Input field="City" />
                </div>
                <div className="row">
                  <label>
                    <span>Country</span>
                    <CountrySelect
                      onChange={this.changeCountry}
                      value={country}
                    />
                  </label>
                  <Input field="Zip code" />
                </div>
                {/* todo: zulip integration */}
                <Input field="Credit or debit card" />
              </div>
            </form>
          </React.Fragment>
        );
    }
}

export default Popup;
