import React, { Component } from 'react';
import "./styles.scss";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Banner from 'components/Banner/Banner';
import CountrySelect from "components/CountrySelect";
import Input from "components/Input";
import BannerBg from "assets/man-writing.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CheckBox(props) {
    const { text } = props;
    return (
      <label htmlFor={text} style={{ cursor: "pointer" }}>
        <input id={text} type="checkbox" />
        {text}
      </label>
    );
}

class Join extends Component {
  state = {
    membership: "unset",
    date: null,
    country: ""
  };

  changeMembership = event => {
    this.setState({ membership: event.target.value });
  };

  changeDate = date => {
    this.setState({ date });
  };

  changeCountry = country => {
    this.setState({ country })
  };

  getPrice() {
    const { membership } = this.state;
    switch (membership) {
      case "Active":
        return "$125.00";
      case "Active / Government Employee":
        return "$50.00";
      case "Foreign Lawyer":
        return "$125.00";
      case "Retired":
        return "$50.00";
      case "Student":
        return "$25.00";
      case "unset":
      default:
        return "$0.00";
    }
  }

  renderMembership = () => {
    const { membership } = this.state;
    switch (membership) {
      case "unset":
        break;
      case "Active":
        return (
          <React.Fragment>
            <Input
              required={false}
              field="State(s) Where Admitted to the Bar"
            />
            <label htmlFor="">
              Date Admitted to the Bar <span className="red">*</span>
            </label>
            <DatePicker selected={this.state.date} onChange={this.changeDate} />
          </React.Fragment>
        );
      case "Active / Government Employee":
        break;
      case "Foreign Lawyer":
        return (
          <React.Fragment>
            <Input required={false} field="Foreign Country" />
            <label htmlFor="">Date Admitted</label>
            <DatePicker selected={this.state.date} onChange={this.changeDate} />
            <Input
              required={false}
              field="Foreign Country Qualification Details"
            />
          </React.Fragment>
        );
      case "Retired":
        return (
          <React.Fragment>
            <label htmlFor="">Date of Retirement</label>
            <DatePicker selected={this.state.date} onChange={this.changeDate} />
            <Input
              required={false}
              field="For retirees, please provide specifics regarding prior membership in CITBA"
            />
          </React.Fragment>
        );
      case "Student":
        return (
          <React.Fragment>
            <Input required={false} field="What Law School do you attend?" />
            <label htmlFor="">Anticipated Graduation Date</label>
            <DatePicker selected={this.state.date} onChange={this.changeDate} />
          </React.Fragment>
        );
      default:
        break;
    }
  };

  render() {
    const { country } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Banner
          text="JOIN CITBA"
          subtitle={[
            "CITBA membership is open to all attorneys admitted to practice in any country and to law students."
          ]}
          src={BannerBg}
        />
        <form className="join membership-form">
          <div className="form-container">
            <Input required={true} field="Name" />
            <Input required={true} field="Firm or Organization" />

            <label>
              Address <span className="red">*</span>
            </label>
            <div className="address">
              <input
                type="text"
                className="address-line"
                placeholder="Address Line 1"
              />
              <input type="text" className="city" placeholder="City" />
              <input
                type="text"
                className="state-region"
                placeholder="State or Region"
              />
              <CountrySelect value={country} onChange={this.changeCountry} />
              <input type="text" className="zip" placeholder="Zip" />
            </div>

            <Input required={true} field="Telephone" />
            <Input required={true} field="Email" />
            <Input required={true} field="How did you hear about CITBA?" />

            <div className="form-divider" />

            <label htmlFor="membership">
              Class of Membership Applying for <span className="red">*</span>
            </label>

            <select
              id="membership"
              onChange={this.changeMembership}
              value={this.state.membership}
            >
              <option value="unset">Select an option</option>
              <option value="Active">Active</option>
              <option value="Active / Government Employee">
                Active / Government Employee
              </option>
              <option value="Foreign Lawyer">Foreign Lawyer</option>
              <option value="Retired">Retired</option>
              <option value="Student">Student</option>
            </select>

            {this.renderMembership()}

            <div className="form-divider" />

            <label>
              Please check any CITBA committees of which you are interested in
              becoming a member (or, if applying for student membership, an
              observer)
            </label>
            <div style={{ display: "grid" }}>
              <CheckBox text="Continuing Legal Education and Professional Responsibilities" />
              <CheckBox text="Customs" />
              <CheckBox text="Judicial Selection" />
              <CheckBox text="Membership" />
              <CheckBox text="Meetings and Special Events" />
              <CheckBox text="Export Control" />
              <CheckBox text="Liaison with Other Bar Associations" />
              <CheckBox text="Publications" />
              <CheckBox text="Technology" />
              <CheckBox text="Trial and Appellate Practice" />
              <CheckBox text="International Trade" />
              <CheckBox text="Young Lawyers" />
            </div>

            <Input field="Electronic Signature" required={true} />
            <Input field="Card Number" required={true} />
            <Input field="CVC/CVV" required={true} />
            <label>
              Month <span className="red">*</span>
            </label>
            <input type="number" min={1} max={12} />
            <label>
              Year <span className="red">*</span>
            </label>
            <input type="number" min={2019} max={2026} />
          </div>
          <div className="checkout">
            {/* todo: recaptcha */}
            <div className="price">Total Price: {this.getPrice()}</div>
            <input type="submit" value="Submit" className="submit" />
          </div>
        </form>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Join;
