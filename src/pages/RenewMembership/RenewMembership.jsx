import React, { Component } from "react";
import "./styles.scss";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Banner from "components/Banner/Banner";
import Input from "components/Input";
import BannerBg from "assets/man-writing.jpg";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
  },
};

class RenewMembership extends Component {
  state = {
    membership_has_changed: false,
    name: "",
    firm: "",
    address_line: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    telephone: "",
    email: "",

    membership: "unset",
  };

  _element = null;

  togglemembership_has_changed = () => {
    const { membership_has_changed } = this.state;
    this.setState({ membership_has_changed: !membership_has_changed });
  };

  getPrice() {
    return this.priceFromMembership(this.state.membership);
  }

  priceFromMembership = (membership) => {
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
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    document.getElementById("renew-form-submit").disabled = true;
    let state = JSON.stringify(this.state);
    console.log(state);
    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      return;
    }

    await fetch("/api/renew", {
      method: "POST",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: state,
    }).then(async (res) => {
      if (res.ok) {
        const result = await stripe.confirmCardPayment(await res.text(), {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: this.state.name,
              email: this.state.email,
              phone: this.state.telephone,
            },
          },
        });

        if (result.error) {
          alert(result.error.message);
          return;
        } else if (result.paymentIntent.status === "succeeded") {
          alert("Transaction successful");
          document.getElementById("renew-form").reset();
          this._element.clear();
        }
      } else {
        alert("Failed to process request");
      }
      document.getElementById("renew-form-submit").disabled = false;
    });
    document.getElementById("renew-form-submit").disabled = false;
  };

  render() {
    const { membership_has_changed, loading } = this.state;
    return (
      <>
        <Header />
        <Banner
          text="RENEW YOUR MEMBERSHIP"
          subtitle={[
            "CITBA membership is open to all attorneys admitted to practice in any country and to law students.",
          ]}
          src={BannerBg}
        />
        <form
          onSubmit={this.handleSubmit}
          id="renew-form"
          className="membership-form"
        >
          <div className="form-container">
            <Input
              required
              field="Name"
              onChange={(event) => this.setState({ name: event.target.value })}
            />
            <Input
              required
              field="Email"
              onChange={(event) => this.setState({ email: event.target.value })}
            />

            <label>
              Check here if your membership information has changed from last
              year
            </label>
            <label
              onChange={this.togglemembership_has_changed}
              style={{ cursor: "pointer" }}
            >
              <input type="checkbox" />
              Yes, my membership information has changed
            </label>

            {membership_has_changed ? (
              <>
                <Input
                  onChange={(event) =>
                    this.setState({ firm: event.target.value })
                  }
                  field="Firm or Organization"
                />
                <Input
                  onChange={(event) =>
                    this.setState({ address_line: event.target.value })
                  }
                  field="Street Address"
                />
                <Input
                  onChange={(event) =>
                    this.setState({ city: event.target.value })
                  }
                  field="City"
                />
                <Input
                  onChange={(event) =>
                    this.setState({ state: event.target.value })
                  }
                  field="State"
                />
                <Input
                  onChange={(event) =>
                    this.setState({ zip: event.target.value })
                  }
                  field="Zip code"
                />
                <Input
                  onChange={(event) =>
                    this.setState({ telephone: event.target.value })
                  }
                  field="Telephone"
                />
              </>
            ) : (
              ""
            )}

            <div className="form-divider" />

            <label htmlFor="membership">
              Please select membership <span className="red">*</span>
            </label>
            <select
              id="membership"
              required
              onChange={(event) =>
                this.setState({ membership: event.target.value })
              }
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

            <label>Card information</label>
            <CardElement
              onReady={(c) => (this._element = c)}
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
          <div className="checkout">
            {/* todo: recaptcha */}
            <div className="price">Total Price: {this.getPrice()}</div>
            <input
              type="submit"
              value="Submit"
              id="renew-form-submit"
              className="submit"
            />
          </div>
        </form>
        <Footer />
      </>
    );
  }
}

export default function InjectedJoin() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <RenewMembership stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
