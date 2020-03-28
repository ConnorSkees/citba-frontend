import React, { Component } from 'react';
import "./styles.scss";
import SVG from "react-inlinesvg";
import CloseSVG from "assets/minus.svg";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    }
  }
};


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
  };

  hide = () => {
    this.setState({ visible: false });
  };

  changeCountry = country => {
    this.setState({ country });
  };

  handleSubmit = async event => {
    event.preventDefault();
    let state = JSON.stringify(this.state);
    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      return;
    }

    await fetch("/api/donate", {
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
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            <label htmlFor="submit-button" className="submit-button">
              <input type="submit" value="Submit" />
            </label>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Popup;
