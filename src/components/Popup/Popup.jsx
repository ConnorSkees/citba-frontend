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
    const { field, onChange } = props;
    let type = props.type || "text";
    let pattern = props.pattern || ".*";
    return (
      <React.Fragment>
        <label htmlFor={field}>
          <span>{field}</span>
          <input
            type={type}
            id={field}
            name={field}
            pattern={pattern}
            onChange={onChange}
            required
          />
        </label>
      </React.Fragment>
    );
}

class Popup extends Component {
  state = {
    visible: false,
    amount: "$",
    name: "",
    email: ""
  };

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  changeAmount = event => {
    let amount = `$${event.target.value.replace(/\D/g, "")}`;
    this.setState({ amount });
  };

  changeName = event => {
    this.setState({ name: event.target.value });
  };

  changeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { name, email, amount } = this.state;
    if (amount === "$") {
      return;
    }
    let state = JSON.stringify({
      name,
      email,
      amount: amount.substr(1),
    });
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
          alert("Transaction successful. Thank you for your donation.");
        }
      } else {
        alert("Failed to connect to server");
      }
      document.getElementById("donation-form").reset();
      this.props.onHide();
    });
  };

  render() {
    const { visible, onHide } = this.props;
    const { amount } = this.state;
    return (
      <React.Fragment>
        <div
          onClick={this.hide}
          className={`backdrop ${visible ? "" : "hidden"}`}
        />
        <form
          id="donation-form"
          className={`popup-form ${visible ? "" : "hidden"}`}
          onSubmit={this.handleSubmit}
        >
          <div className="header">
            <SVG src={CloseSVG} onClick={onHide} />
            <h1>Donate</h1>
            <p>Andrew P. Vance Donation</p>
          </div>
          <div className="content">
            <label>
              <span>Amount</span>
              <input type="text" onChange={this.changeAmount} value={amount} />
            </label>
            <div className="row">
              <Input field="Name" onChange={this.changeName} />
              <Input field="Email" onChange={this.changeEmail} />
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

export default function InjectedPopup(props) {
  const { visible, onHide } = props;
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <Popup
          stripe={stripe}
          visible={visible}
          onHide={onHide}
          elements={elements}
        />
      )}
    </ElementsConsumer>
  );
};