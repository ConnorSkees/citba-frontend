import React, { Component } from "react";
import "./styles.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import BannerBg from "assets/map.jpg";
import SVG from "react-inlinesvg";

import Scale from "assets/balance-scale.svg";
import People from "assets/committees.svg";
import Book from "assets/book.svg";
import Briefcase from "assets/briefcase.svg";
import Gavel from "assets/gavel.svg";
import Newspaper from "assets/newspaper.svg";

function Benefit(props) {
  const { icon, title, text } = props;
  return (
    <div className="benefit">
      <SVG src={icon} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

class MembershipBenefits extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <section
          style={{ backgroundImage: `url(${BannerBg})` }}
          className="membership-banner"
        >
          <div className="overlay" />
          <h1>Membership</h1>
          <h3>
            Membership is open to all attorneys admitted to practice in any
            country and law students.
          </h3>
          <p>
            Five classes of membership are available: Active, Honorary, Foreign
            Lawyer, Retired, and Student. The classes of membership are
            described in Article I, Sections 1 through 6 of the CITBA By-Laws.
          </p>
        </section>
        <section className="membership-benefits">
          <h1>Benefits of Membership</h1>
          <div className="benefits">
            <Benefit
              icon={Briefcase}
              title="Attend CITBA’s Biannual Meetings"
              text="Fall and Spring Dinner Meetings and Winter Luncheon featuring Keynote
                        Speakers, with REDUCED COST for CITBA members"
            />
            <Benefit
              icon={Book}
              title="Attend regular CLE seminars"
              text="(Credit and non-credit) on topics related to customs and international
                        trade law, with REDUCED COST for CITBA members"
            />
            <Benefit
              icon={Gavel}
              title="Meet and interact with Judges of the U.S. Court of International Trade"
              text="In informal and unofficial settings, opportunities to interact with judges,
                        staff in the Office of the Clerk of the Court, and judges’ law clerks"
            />
            <Benefit
              icon={Newspaper}
              title="Receive CITBA’s periodic newsletter"
              text="Receive practice-related articles and news, as well as OPPORTUNITIES to
                        publish newsletter articles"
            />
            <Benefit
              icon={People}
              title="Network with members of the Bar"
              text="Meet and interact with your peers in private and government practice"
            />
            <Benefit
              icon={Scale}
              title="Collaborate on CITBA projects"
              text="Including amicus curiae briefs, proposed legislation, and comments on proposed rulemaking"
            />
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default MembershipBenefits;
