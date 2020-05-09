import React, { Component } from "react";
import "./styles.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import Tabs from "components/Tabs";
import Home from "assets/home.svg";
import TwitterLogo from "assets/twitter-logo.svg";
import Banner from "components/Banner/Banner";
import BannerBg from "assets/woman-typing.jpg";

const TABS = [
  {
    title: "Websites",
    icon: Home,
    content: (
      <ul>
        <li>
          <a href="https://www.law.cornell.edu/supremecourt/text">
            Cornell University Web Site-Recent U.S. Supreme Court Opinions
          </a>
        </li>
        <li>Federal Register</li>
        <li>
          <a href="http://www.cit.uscourts.gov/">
            U.S. Court of International Trade Recent Slip Opinions, Court Rules
            and other information.
          </a>
        </li>
        <li>
          <a href="http://www.loc.gov/">Library of Congress</a>
        </li>
        <li>
          <a href="http://www.usitc.gov/">
            U.S. International Trade Commission
          </a>
        </li>
        <li>
          <a href="http://www.ustr.gov/">United States Trade Representative</a>
        </li>
        <li>
          <a href="http://www.wto.org/">World Trade Organization</a>
        </li>
        <li>
          <a href="http://trade.gov/index.asp">
            U.S. Department of Commerce International Trade Administration
          </a>
        </li>
        <li>
          <a href="http://www.dcbar.org/marketplace/index.cfm?cat=cle_inperson.">
            DC Bar Upcoming CLE Events
          </a>
        </li>
        <li>
          <a href="http://www.cafc.uscourts.gov/">
            U.S. Court of Appeals for the Federal Circuit (CAFC)-Recent Slip
            Opinions and other information about the Court.
          </a>
        </li>
        <li>
          <a href="http://www.cbp.gov/">
            U.S. Customs and Border Protection Notices, Customs Rulings with
            search capabilities, and much more.
          </a>
        </li>
        <li>
          <a href="http://www.wcoomd.org/">World Customs Organization</a>
        </li>
        <li>
          <a href="http://thomas.loc.gov/">
            Legislative information from the Library of Congress: Thomas – U.S.
            Congress web site
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Twitter Feeds",
    icon: TwitterLogo,
    content: (
      <ul>
        <li>
          Export Gov – <a href="http://twitter.com/ExportGov">@ExportGov</a>
        </li>
        <li>
          President of the United States –{" "}
          <a href="http://twitter.com/POTUS">@POTUS</a>
        </li>
        <li>
          U.S. Department of State –{" "}
          <a href="http://twitter.com/StateDept">@StateDept</a>
        </li>
        <li>
          International Trade Administration –{" "}
          <a href="http://twitter.com/TradeGov">@TradeGov</a>
        </li>
        <li>
          Office of the United States Trade Representative –{" "}
          <a href="http://twitter.com/USTradeRep">@USTradeRep</a>
        </li>
        <li>
          Select USA – <a href="http://twitter.com/SelectUSA">@SelectUSA</a>
        </li>
        <li>
          Small Business Administration –{" "}
          <a href="http://twitter.com/SBAgov">@SBAgov</a>
        </li>
        <li>
          U.S. Department of Commerce –{" "}
          <a href="http://twitter.com/CommerceGov">@CommerceGov</a>
        </li>
        <li>
          U.S. Department of Treasury –{" "}
          <a href="http://twitter.com/USTreasury">@USTreasury</a>
        </li>
        <li>
          U.S. Secretary of State John Kerry –{" "}
          <a href="http://twitter.com/JohnKerry">@JohnKerry</a>
        </li>
        <li>
          Under Secretary of Commerce for International Trade –{" "}
          <a href="http://twitter.com/TradeUnderSec">@TradeUnderSec</a>
        </li>
      </ul>
    ),
  },
];

class Resources extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Banner
          src={BannerBg}
          text="Resources"
          subtitle={[
            "Useful resources for practitioners in customs and international trade law, and other interested persons.",
          ]}
        />
        <Tabs tabs={TABS} />
        <Footer />
      </>
    );
  }
}

export default Resources;
