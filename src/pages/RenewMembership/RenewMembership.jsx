import React, { Component } from 'react';
import "./styles.scss";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Banner from "components/Banner/Banner";
import BannerBg from "assets/man-writing.jpg";

function Input(props) {
  const { field, required } = props;
  return (
    <React.Fragment>
      <label htmlFor={field}>
        {field} {required ? <span className="red">*</span> : ""}
      </label>
      <input id={field} type="text" placeholder={field} />
    </React.Fragment>
  );
}

class RenewMembership extends Component {
  state = {
    hasNewMembershipInfo: false
  };

  toggleHasNewMembershipInfo = () => {
    const { hasNewMembershipInfo } = this.state;
    this.setState({ hasNewMembershipInfo: !hasNewMembershipInfo });
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

  render() {
    const { hasNewMembershipInfo } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Banner
          text="RENEW YOUR MEMBERSHIP"
          subtitle={[
            "CITBA membership is open to all attorneys admitted to practice in any country and to law students."
          ]}
          src={BannerBg}
        />
        <form>
          <div className="form-container">
            <Input required={true} field="Name" />
            <Input required={true} field="Email" />

            <label>
              Check here if your membership information has changed from last
              year
            </label>
            <label
              onClick={this.toggleHasNewMembershipInfo}
              style={{ cursor: "pointer" }}
            >
              <input type="checkbox" />
              Yes, my membership information has changed
            </label>

            {hasNewMembershipInfo ? (
              <React.Fragment>
                <Input required={true} field="Firm or Organization" />
                <Input required={true} field="Street Address" />
                <Input required={true} field="City" />
                <Input required={true} field="State" />
                <Input required={true} field="Zip code" />
                <Input required={true} field="Telephone" />
              </React.Fragment>
            ) : (
              ""
            )}

            <div className="form-divider" />

            <label htmlFor="membership">
              Please select payment <span className="red">*</span>
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

            <Input field="Electronic Signature" required={true} />
            <Input field="Card Number" />
            <Input field="CVC/CVV" />
            <label>Month</label>
            <input type="number" min={1} max={12} />
            <label>Year</label>
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

export default RenewMembership;