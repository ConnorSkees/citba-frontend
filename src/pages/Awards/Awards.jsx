import React, { Component } from "react";
import "./styles.scss";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Recipient from "assets/richard-belanger-2019.jpg";
import BannerBg from "assets/awards.jpg";
import Popup from "components/Popup";

class Awards extends Component {
  state = {
    showing: false,
  };

  scroll = (event) => {
    document.querySelector(event.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  };

  showPopup = () => {
    this.setState({ showing: true });
  };

  hidePopup = () => {
    this.setState({ showing: false });
  };

  render() {
    return (
      <>
        <Header />
        <section
          style={{ backgroundImage: `url(${BannerBg})` }}
          className="award-banner"
        >
          <div className="overlay" />
          <h1>Awards</h1>
          <p>
            CITBA membership is open to all attorneys admitted to practice in
            any country and to law students.
          </p>
          <div className="links">
            <button href="#barbara-s-williams" onClick={this.scroll}>
              Barbara S. Williams Lifetime Achievement Award
            </button>
            <button href="#andrew-p-vance" onClick={this.scroll}>
              Andrew P. Vance Memorial Writing Competition
            </button>
          </div>
        </section>
        <section id="barbara-s-williams" className="award-section">
          <div className="recipients">
            <h1>Barbara S. Williams Lifetime Achievement Award</h1>
            <h2>Past Winners</h2>
            <p>
              RICHARD M. BELANGER <span>2019</span>
            </p>
            <p>
              DONALD B. CAMERON, JR. <span>2018</span>
            </p>
            <p>
              JEANNE E. DAVIDSON <span>2018</span>
            </p>
            <p>
              TINA P. KIMBLE <span>2017</span>
            </p>
            <p>
              DAVID M. COHEN <span>2016</span>
            </p>
            <p>
              GAIL T. CUMINS <span>2016</span>
            </p>
            <p>
              WILLIAM D. OUTMAN III <span>2016</span>
            </p>
            <p>
              VALERIE A. SLATER <span>2016</span>
            </p>
            <p>
              TERENCE P. STEWART <span>2016</span>
            </p>
          </div>
          <div className="content">
            <div className="recipient-container">
              <img src={Recipient} alt="Richard Bellanger" />
              <div className="text">
                <h3>November 18, 2019</h3>
                <h3>
                  Richard M. Belanger receives CITBA’s Barbara S. Williams
                  Lifetime Achievement Award
                </h3>
              </div>
            </div>
            <p>
              The lifetime achievement award honors the memory of Ms. Barbara S.
              Williams, a former board member of the Customs and International
              Trade Bar Association and the former Attorney in Charge of the
              International Trade Field Office of the U.S. Department of
              Justice. During her tenure, Ms. Williams served the United States
              with great distinction, integrity, and honor, defending the
              interests of the government while heeding the legitimate concerns
              of its citizens seeking redress. She was admired for her
              dedication, work ethic, generosity, and candor. Ms. Williams was
              an active member of the Advisory Committee for the U.S. Court of
              International Trade, was the first U.S. government Board Member of
              the Customs and International Trade Bar Association, and served as
              the first law clerk to the Hon. Richard W. Goldberg of the U.S.
              Court of International Trade. Ms. Williams’ career exemplifies the
              ideals of this award.
            </p>
            <p>
              <strong>Award Criteria:</strong>
            </p>
            <p>
              A strong candidate for the award should have demonstrated one or
              more of the following criteria:
            </p>
            <ul>
              <li>
                Substantial and long-term contributions to the practice of
                international trade and/or customs law. A “substantial and
                long-term contribution” shall be considered to be one
                demonstrating a level of dedication and achievement beyond that
                expected in the normal course of an individual’s or
                organization’s work.
              </li>
              <li>
                Service and support to the U.S. Court of International Trade and
                its legal community.
              </li>
              <li>
                Created, influenced, or expanded opportunities in the practice
                of international trade and customs law for the next generation
                of lawyers.
              </li>
              <li>
                Service to the development of the international trade and
                customs legal profession.
              </li>
              <li>Service to the bar.</li>
              <li>
                Advanced ethical practice and professional responsibility in the
                field of international trade and customs law.
              </li>
            </ul>
            <p>
              Nominees may be CITBA members or nonmembers. Sitting members of
              the CITBA Nomination Committee or CITBA Board may not be nominated.
            </p>
          </div>
        </section>
        <section id="andrew-p-vance" className="award-section">
          <div className="content">
            <p>
              The Customs and International Trade Bar Association (CITBA) and
              partner law schools sponsor an annual writing competition to
              encourage law students who are interested in careers in customs
              and international trade law. The competition honors the memory of
              Andrew Vance, past president of CITBA and a distinguished
              practitioner and public servant. To get additional information
              regarding the requirements of the competition, please click <a href="https://www.law.miami.edu/vance-memorial-writing-competition
"><strong>here.</strong></a> 
            </p>
            <p>
              Rotenberg, Julian (2020, First Prize) – “Privacy Before Trade: Assessing the WTO-Consistency of Privacy-Based Cross-Border Data Flows”
            </p>
            <p>
              Whittington, Ryan (2020, Second Prize) – “Backdoor Mercantilism: The Use and Abuse of National Security at the World Trade Organization”
            </p>
            <p>
            Mello, Jr., Daniel (2018, First Prize) – “TRIPs &amp; the Apparel Value Chain: 
            Implications of Recent US Copyright Law Developments for International Trade”
            </p>
            <p>
            Brewer, Elliott (2018, Second Prize) – “Closed Loophole: Investigating Forced 
            Labor in Corporate Supply Chains Following the Repeal of the Consumptive Demand Exception”
            </p>
            <p>
              Carr, Kaitlyn (2017, First Prize) – “The International Enforcement
              of Mediated Settlement Agreements”
            </p>
            <p>
              Figueiredo Ribeiro De Sena, Bianca (2017, Second Prize) –
              “Strategies for Competitive Advantage: The Steel Industry and
              International Trade”
            </p>
            <p>
              Wood, Cody (2016, First Prize) – “How Patents and 3-D Printing
              Could Undo the Gains in Global Welfare Promised by Free Trade”
            </p>
            <p>
              Launchbaugh, Alina (2016, Second Prize) – “Increased Trade and
              Decreased Human Trafficking: Harmonizing The European Union and
              United States’ Public Procurement Regulations”
            </p>
            <p>
              Cox, Courtney (2015, First Prize) – “International Trade’s
              Zero-Sum Game: How Zeroing In Accordance With The Tariff Act of
              1930 Harms The American Economy And Why It Must Go” (publication
              pending)
            </p>
            <p>
              Pham, Duy D. (2015, Second Prize) – “Dark Clouds: Privacy Law as a
              Barrier to Trade in Cloud Computing”
            </p>
            <p>
              Baroody, Anne Horn (2014, First Prize) – “Real Problems with Fake
              Antiquities and How Geographical Indications May Help”
            </p>
            <p>
              Eddy, Jessica K. (2014, Second Prize) – “Re-focusing Export
              Control: A Review of the Obama Administration’s Export Control
              Reform Initiative and Suggestions for the Future”
            </p>
            <p>
              Elofsson, Niklas (2013, First Prize) – “Ex Parte Interviews of
              Party-Appointed Arbitrator Candidates: A Study Based on the Views
              of Counsel and Arbitrators in Sweden and the United States”
            </p>
            <p>
              Torpy Elizabeth (2013, Second Prize) – “If Criminal Offenses Were
              Added To CITES, Would Nations Be Better Able To Restrict
              International Trade In Endangered Species And Protect
              Biodiversity?”
            </p>
            <p>
              Springer, Timothy S. (2012, First Prize) – “Two and a Half Hurdles
              Between Eurozone Debts and U.S. Courts: How Recent Distressed
              Foreign Deals Could Soon Be Unwound Domestically”
            </p>
            <p>
              Buder, Kimberly B. (2012, Second Prize) – “Cross-Sector
              Retaliation”
            </p>
            <p>
              Langille, Joanna (2011, First Prize) – “Neither Constitution nor
              Contract: Understanding the WTO By Examining the Legal Limits on
              Contracting Out Through Regional Trade Agreements”
            </p>
            <p>
              Leaver, Joshua D. (2011, Second Prize) – “Building Consumer Trust
              in Cross-Border E-Commerce Transactions: UNCITRAL and the
              Globalization of Online Dispute Resolution”
            </p>
            <p>
              Torem, Steven (2010, First Prize) – “Electronic Data at the
              Border: Safeguarding the Privacy of Our Thoughts”
            </p>
            <p>
              John, Soji (2010, Second Prize) – “Improper Seizures by Sovereigns
              at Customs”
            </p>
            <p>
              Templin, James S. (2009, First Prize) – “University Research Under
              Siege: How the War on Terror Has Placed Academic Freedom Under
              Fire”
            </p>
            <p>
              Vanden Brink, Ryan M. (2009, Second Prize) – “Competitiveness
              Border Adjustments in US Climate Change Proposals Violate GATT:
              Suggestions to Utilize GATT’s Environmental Exceptions”
            </p>
            <p>
              Zuckerman, Michael A. (2008, First Prize) – “The Offshoring of
              American Government”
            </p>
            <p>
              Stephenson, Christina (2008, Second Prize) – “Reproductive
              Outsourcing to India: WTO Obligations in the Absence of U.S.
              National Legislation,” 43 Journal of World Trade 189 (2009)
            </p>
            <p>
              Waggoner, Justin M. (2007, First Prize) – “Acquiring a European
              Taste for Geographical Indications”
            </p>
            <p>
              Grieb, Owen (2007, Second Prize) – “The Potential for U.S. Action
              Under WTO Law Against China’s Fixed Foreign Currency Exchange
              System”
            </p>
            <p>
              Canizares, Alex O. (2006, First Prize) – “Is Charming Betsy Losing
              Her Charm? Construing U.S. International Trade Statutes
              Consistently with International Law and Chevron”
            </p>
            <p>
              Broome, Stephen A. (2006, Second Prize) – “Conflicting Obligations
              For Oil Exporting Nations?: Satisfying The Membership Requirements
              Of Both OPEC and the WTO”
            </p>
            <p>
              Athanasakou, Konstantina (2005, First Prize) – “Why Invoking The
              SCM Agreement May Not Be A Good Response To Chinese Textiles,” 4
              Loy. U. Chi. Int’l L. Rev. 281 (2006)
            </p>
            <p>
              Smith, Derek (2005, Second Prize) – “Establishing a Global
              Quarantine Against Weapons of Mass Destruction”
            </p>
            <p>
              DiLascio, Tracey (2004, First Prize) – “How Safe is the Safe
              Harbor? U.S. and E.U. Data Privacy Law and the Enforcement of the
              FTC’s Safe Harbor Program”
            </p>
            <p>
              Emslie, John J. (2004, Second Prize) – “Labeling Programs As A
              Reasonably Available Least Restrictive Trade Measure Under Article
              XX’s Nexus Requirement”
            </p>
            <p>
              Siprut, Joseph J. (2003, First Prize) – “Rational Irrationality:
              Why Playing The World Trade Organization as a Scapegoat Reduces
              the Social Costs of Armchair Economics,” 29 Brook. J. Int’l L. 709
              (2004).
            </p>
            <p>
              Leicht, Chad (2003, Second Prize) – “Air Wars Trade Laws and the
              Battle for Dominance in the Aircraft Industry”
            </p>
            <p>
              Hicks, J. Noelle (2002, First Prize) – “Facilitating International
              Trade: The United States Needs Federal Legislation Governing the
              Enforcement of Foreign Judgments,” 28 Brook. J. Int’l L. 155
              (2002).
            </p>
            <p>
              Minella, Nicholas J (2002, Second Prize) – “Motives and
              Consequences of the FSC Dispute: Recent Salvo In A Long Standing
              Trade War or Fashioning A Bargaining Chip?,” 27 Brook. J. Int’l L.
              1065 (2002).
            </p>
            <p>
              Ford, Rosemary (2001, First Prize) – “Carousel Sanctions: A
              Roundabout Way to Force Compliance With World Trade Organization
              Decisions,” 27 Brook. J. Int’l L. 543 (2002).
            </p>
            <p>
              Gong, Hongliu (2001, Second Prize) – “Legal Strategies for
              Challenging Current EU Antidumping Campaign Against Imports From
              China: A Chinese Perspective,” 27 Brook. J. Int’l L. 575 (2002).
            </p>
            <p>
              Renaud, John Robert (2000, First Prize) – “Can’t Get There From
              Here: How NAFTA and GATT Have Reduced Protection for Geographical
              Trademarks,” 26 Brook. J. Int’l L. 1097 (2001).
            </p>
            <p>
              Monte, Mark J. (2000, Second Prize) – “How Corporate
              Factory/Supplier Monitoring Programs Succeed in Curbing Abusive A
              Sweatshop,” 26 Brook. J. Int’l L. 1125 (2001).
            </p>
            <p>
              Slater, Scott S. (1999, First Prize) – “Overcome By Hardship: The
              Inapplicability of the UNIDROIT Principles – Hardship Provisions
              to CISG,” 12 Fla. J. Int’l L. 231 (1998).
            </p>
            <p>
              Moisant, Jay P. (1999, Second Prize) – “Addressing the Grey Market
              – What the Supreme Court Should Have Done,” 25 Brook. J. Int’l L.
              639 (1999).
            </p>
          </div>
          <div className="donation-container">
            <h1>Andrew P. Vance Memorial Writing Competition</h1>
            <div className="donation">
              <span className="title">ANDREW P. VANCE DONATION</span>
              <br />
              <button type="button" onClick={this.showPopup}>
                Donate
              </button>
              <Popup visible={this.state.showing} onHide={this.hidePopup} />
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Awards;
