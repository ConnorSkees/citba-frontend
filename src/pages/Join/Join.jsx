import React, { Component } from 'react';
import "./styles.scss";
import Header from 'components/Header';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import CountrySelect from "components/CountrySelect";
import Input from "components/Input";
import BannerBg from "assets/man-writing.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
  }
};


function CheckBox(props) {
    const { text, onChange } = props;
    return (
      <label htmlFor={text} style={{ cursor: "pointer" }}>
        <input id={text} type="checkbox" onChange={onChange} />
        {text}
      </label>
    );
}

class Join extends Component {
  state = {
    name: "",
    firm: "",
    address_line: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    telephone: "",
    email: "",
    referrer: "",

    membership: "unset",

    // active
    states: "",

    // foreign lawyer
    foreign_country: "",
    qualification_details: "",

    // retired
    prior_membership: "",

    // student
    law_school: "",

    committeesSet: new Set(),
    committees: [],

    date: "",
    date_admitted: "",
    date_retired: "",
    graduation_date: ""
  };

  changeMembership = event => {
    this.setState({ membership: event.target.value });
  };

  changeName = event => {
    this.setState({ name: event.target.value });
  };

  changeFirm = event => {
    this.setState({ firm: event.target.value });
  };

  changeCity = event => {
    this.setState({ city: event.target.value });
  };

  changeState = event => {
    this.setState({ state: event.target.value });
  };

  changeZip = event => {
    this.setState({ zip: event.target.value });
  };

  changeTelephone = event => {
    this.setState({ telephone: event.target.value });
  };

  changeEmail = event => {
    this.setState({ email: event.target.value });
  };

  changeReferrer = event => {
    this.setState({ referrer: event.target.value });
  };

  toggleCommittee = event => {
    let { committeesSet } = this.state;
    const { id } = event.target;
    if (committeesSet.has(id)) {
      committeesSet.delete(id);
    } else {
      committeesSet.add(id);
    }
    this.setState({ committeesSet, committees: Array.from(committeesSet) });
  };

  changeDate = date => {
    this.setState({
      date,
      date_admitted: date,
      date_retired: date,
      graduation_date: date
    });
  };

  changeCountry = country => {
    this.setState({ country });
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
              field="State(s) Where Admitted to the Bar"
              onChange={event => this.setState({ states: event.target.value })}
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
            <Input field="Foreign Country" />
            <label htmlFor="">Date Admitted</label>
            <DatePicker selected={this.state.date} onChange={this.changeDate} />
            <Input
              field="Foreign Country Qualification Details"
              onChange={event =>
                this.setState({ foreign_country: event.target.value })
              }
            />
          </React.Fragment>
        );
      case "Retired":
        return (
          <React.Fragment>
            <label htmlFor="">Date of Retirement</label>
            <DatePicker selected={this.state.date} onChange={this.changeDate} />
            <Input
              onChange={event =>
                this.setState({ prior_membership: event.target.value })
              }
              field="For retirees, please provide specifics regarding prior membership in CITBA"
            />
          </React.Fragment>
        );
      case "Student":
        return (
          <React.Fragment>
            <Input
              field="What Law School do you attend?"
              onChange={event =>
                this.setState({ law_school: event.target.value })
              }
            />
            <label htmlFor="">Anticipated Graduation Date</label>
            <DatePicker selected={this.state.date} onChange={this.changeDate} />
          </React.Fragment>
        );
      default:
        break;
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    let state = JSON.stringify(this.state);
    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      return;
    }

    await fetch("/api/join", {
      method: "POST",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: state
    }).then(async res => {
      if (res.ok) {
        const result = await stripe.confirmCardPayment(await res.text(), {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: this.state.name
            }
          }
        });

        if (result.error) {
          alert(result.error.message);
          return;
        } else if (result.paymentIntent.status === "succeeded") {
          alert("Transaction successful");
        }
      } else {
        alert("Failed to process request");
      }
    });
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
        <form className="join membership-form" onSubmit={this.handleSubmit}>
          <div className="form-container">
            <Input required field="Name" onChange={this.changeName} />
            <Input
              required
              field="Firm or Organization"
              onChange={this.changeFirm}
            />
            <label>
              Address <span className="red">*</span>
            </label>
            <div className="address">
              <input
                type="text"
                className="address-line"
                placeholder="Address Line 1"
                onChange={event =>
                  this.setState({ address_line: event.target.value })
                }
                required
              />
              <input
                type="text"
                className="city"
                placeholder="City"
                onChange={this.changeCity}
                required
              />
              <input
                type="text"
                className="state-region"
                placeholder="State or Region"
                onChange={this.changeState}
                required
              />
              <CountrySelect value={country} onChange={this.changeCountry} />
              <input
                type="text"
                className="zip"
                placeholder="Zip"
                onChange={this.changeZip}
                required
              />
            </div>
            <Input required field="Telephone" type="tel" onChange={this.changeTelephone} />
            <Input required field="Email" onChange={this.changeEmail} />
            <Input
              required
              field="How did you hear about CITBA?"
              onChange={this.changeReferrer}
            />
            <div className="form-divider" />
            <label htmlFor="membership">
              Class of Membership Applying for <span className="red">*</span>
            </label>
            <select
              id="membership"
              onChange={event => this.setState({ membership: event.target.value })}
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
              <CheckBox
                onChange={this.toggleCommittee}
                text="Continuing Legal Education and Professional Responsibilities"
              />
              <CheckBox onChange={this.toggleCommittee} text="Customs" />
              <CheckBox
                onChange={this.toggleCommittee}
                text="Judicial Selection"
              />
              <CheckBox onChange={this.toggleCommittee} text="Membership" />
              <CheckBox
                onChange={this.toggleCommittee}
                text="Meetings and Special Events"
              />
              <CheckBox onChange={this.toggleCommittee} text="Export Control" />
              <CheckBox
                onChange={this.toggleCommittee}
                text="Liaison with Other Bar Associations"
              />
              <CheckBox onChange={this.toggleCommittee} text="Publications" />
              <CheckBox onChange={this.toggleCommittee} text="Technology" />
              <CheckBox
                onChange={this.toggleCommittee}
                text="Trial and Appellate Practice"
              />
              <CheckBox
                onChange={this.toggleCommittee}
                text="International Trade"
              />
              <CheckBox onChange={this.toggleCommittee} text="Young Lawyers" />
            </div>
            <label>Card information</label>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
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

export default function InjectedJoin() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <Join stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
};