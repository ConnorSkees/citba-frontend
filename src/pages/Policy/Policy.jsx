import React, { Component } from 'react';
import "./styles.scss";
import Header from "components/Header"
import Footer from "components/Footer"
import BannerBg from "assets/man-with-papers.jpg";
document.querySelectorAll('button[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("hi");

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
class Policy extends Component {
    state = {};

    scroll = event => {
      document.querySelector(event.target.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    }

    render() {
        return (
          <React.Fragment>
            <Header />
            <section
              style={{ backgroundImage: `url(${BannerBg})` }}
              className="policy-banner"
            >
              <div className="overlay" />
              <h1>Policy</h1>
              <div className="links">
                <button href="#amicus-briefs" onClick={this.scroll}>
                  The Filing of Amicus Briefs
                </button>
                <button href="#comments" onClick={this.scroll}>
                  The Filing of Comments with an Adminsitrative Agency
                </button>
                <button
                  href="#trade-adjustment-assistance"
                  onClick={this.scroll}
                >
                  CITBA and Trade Adjustment Assistance
                </button>
              </div>
            </section>
            <section id="amicus-briefs" className="policy-section">
              <h1>Policy Regarding the Filing of Amicus Briefs by CITBA</h1>
              <div className="content">
                <p>
                  It is the policy of the Customs and International Trade Bar
                  Association (“CITBA”) to file amicus briefs sparingly. Amicus
                  briefs will typically only be authorized for cases appearing
                  before the U.S. Court of Appeals for the Federal Circuit
                  (“CAFC”) and the U.S. Supreme Court. CITBA will consider
                  filing an amicus brief only where the matter is considered to
                  be in the broad interest of the public and the membership of
                  CITBA as a whole. CITBA amicus briefs will not address
                  arguments unlikely to affect the broad interests of the
                  international trade community or factual issues. An amicus
                  brief will be approved for filing only where CITBA has a
                  unique and/or distinct interest and may provide a significant
                  contribution to the court’s consideration of the customs or
                  trade issues involved.
                </p>
                <p>
                  CITBA will only file an amicus brief if both the position
                  asserted and final brief to be filed have been approved by a
                  majority of the board members eligible to vote on the matter
                  (government attorneys who are on the board or board members
                  whose firms have an interest in the case are not eligible to
                  vote, nor can they participate in deliberations with respect
                  to the filing of such a brief). All amicus motions or briefs
                  filed in matters in which the government is a party will
                  indicate that while CITBA “includes U.S. Government lawyers,
                  government attorneys did not participate in the decision to
                  file or the preparation of this motion [or brief].”
                </p>
                <p>
                  The proponent of the requested brief bears the burden of
                  persuading CITBA’s board of the importance of advocating the
                  asserted position. Accordingly, to request an amicus brief, an
                  e-mail request should be sent to a Chair of CITBA’s Trial and
                  Appellate Practice Committee. The e-mail should include:
                </p>
                <ol>
                  <li>
                    The date on which the proposed brief is due and the relevant
                    court. Absent extraordinary circumstances, no requests that
                    are due in less than 30 days will be entertained by CITBA.
                  </li>
                  <li>The full caption of the case.</li>
                  <li>A copy of the lower court’s decision.</li>
                  <li>
                    Disclosure of the relevant interests in the case. List each
                    individual organization who has or had any personal or
                    professional interest in the case, and the bases for that
                    interest.
                  </li>
                  <li>
                    Disclosure of the names, firm connections and contact
                    information of those who represent the party requesting
                    CITBA’s amicus participation.
                  </li>
                  <li>A brief summary of the relevant procedural history.</li>
                  <li>A brief summary of the facts.</li>
                  <li>
                    The question to be presented by the party requesting CITBA’s
                    amicus participation.
                  </li>
                  <li>
                    A paragraph explaining why CITBA should participate as an
                    amicus.
                  </li>
                  <li>
                    Any other amicus that are participating or considering
                    participating.
                  </li>
                  <li>
                    A 1-2 page statement describing specifically what issues
                    CITBA is being requested to provide an opinion regarding.
                  </li>
                  <li>Any related cases.</li>
                </ol>
                <p>
                  CITBA is also amenable to joining as an amicus in briefs by
                  other organizations. However, the same material must be
                  disclosed if the request is for CITBA to join another amicus’
                  brief.
                </p>
                <p>
                  For amicus briefs filed by CITBA, the association pays no
                  legal fees for the preparation or review of an amicus brief;
                  however, it will incur the cost of printing and filing the
                  brief.
                </p>
                <p>
                  A CITBA amicus brief will normally be signed by CITBA’s
                  President. However, if the President is ineligible to vote
                  with respect to the brief in question, the brief will be
                  signed by the President’s designee.
                </p>
                <p>
                  Finally, it should be noted that the filing of an amicus brief
                  by CITBA before the Federal Circuit does not mean that CITBA
                  is committed to filing an amicus brief in support of a
                  Petition for Certiorari before the U.S. Supreme Court in the
                  same matter.
                </p>
              </div>
            </section>
            <section id="comments" className="policy-section">
              <div className="content">
                <p>
                  It is the policy of the Customs and International Trade Bar
                  Association (“CITBA”) to file Comments with Administrative
                  Agencies. Comments by CITBA will typically be authorized for
                  matters concerning the Bureau of Industry and Security
                  (“BIS”), Customs and Border Protection (“CBP”), the
                  International Trade Administration (“ITA”), U.S. International
                  Trade Commission (“ITC”), and the Office of Foreign Assets
                  Control (“OFAC”).
                </p>
                <p>
                  CITBA will consider filing Comments only where the matter is
                  considered to be in the broad interest of the public and the
                  membership of CITBA as a whole. CITBA’s comments will not
                  address arguments unlikely to affect the broad interests of
                  the international trade community or factual issues. Comments
                  will be approved for filing only where CITBA has a unique
                  and/or distinct interest and may provide a significant
                  contribution to the agency’s consideration of the issues
                  involved.
                </p>
                <p>
                  CITBA will only file Comments if both the position asserted
                  and Comments to be filed have been approved by a majority of
                  the board members eligible to vote on the matter (government
                  attorneys who are on the board or board members whose firms
                  have an interest in the case are not eligible to vote, nor can
                  they participate in deliberations with respect to the filing
                  of such comments).[1] The proponent of the requested Comments
                  bears the burden of persuading CITBA’s board of the importance
                  of advocating the asserted position. Accordingly, to request
                  Comments by CITBA, an e-mail request should be sent to the
                  relevant CITBA Committee Chair, (e.g., a Customs Committee
                  Chair). The e-mail should include:
                </p>
                <ol>
                  <li>
                    The date on which the Comments are due and the relevant
                    administrative agency. Absent extraordinary circumstances,
                    no requests that are due in less than 30 days will be
                    entertained by CITBA.
                  </li>
                  <li>
                    The full caption of the relevant Federal Register Notice (if
                    applicable).
                  </li>
                  <li>
                    A copy of the regulation, rule, or policy under
                    consideration.
                  </li>
                  <li>
                    Disclosure of the relevant interests. List each individual
                    or organization who has or had any personal or professional
                    interest in the issue, and the bases for that interest.
                  </li>
                  <li>
                    Disclosure of the names, firm connections and contact
                    information of those who represent the party requesting
                    CITBA’s participation.
                  </li>
                  <li>
                    A brief summary of the relevant regulatory or administrative
                    history.
                  </li>
                  <li>A brief summary of the facts.</li>
                  <li>
                    The issue in the policy, procedure, rule, or regulation to
                    be addressed by the party requesting CITBA’s participation.
                  </li>
                  <li>A paragraph explaining why CITBA should comment.</li>
                  <li>
                    Any other Bar Associations or Trade Organizations that are
                    commenting.
                  </li>
                  <li>
                    A 1-2 page statement describing specifically what issues
                    CITBA is being requested to provide a Comment regarding.
                  </li>
                </ol>
                <p>
                  CITBA is also amenable to joining Comments filed by other
                  organizations. However, the same material must be still
                  disclosed if the request is for CITBA to join another
                  organization’s Comments.
                </p>
                <p>
                  For Comments filed by CITBA, the association pays no legal
                  fees for the preparation or review.
                </p>
                <p>
                  CITBA Comments will normally be signed by CITBA’s President.
                  However, if the President is ineligible to vote with respect
                  to the Comments in question, the Comments will be signed by
                  the President’s designee.
                </p>
                <p>
                  Finally, it should be noted that the filing of Comments to
                  proposed rules, regulations, or policies does not mean that
                  CITBA is committed to filing Comments again in the same
                  matter.
                </p>
              </div>
              <h1>
                Policy Regarding the Filing of Comments with an Administrative
                Agency by CITBA
              </h1>
            </section>
            <section
              id="trade-adjustment-assistance"
              className="policy-section "
            >
              <h1>CITBA and Trade Adjustment Assistance</h1>
              <div className="content">
                <p>
                  Trade Adjustment Assistance (TAA) is a federal program that
                  provides financial and other assistance to U.S. workers,
                  farmers, and fishermen who have lost their jobs as a result of
                  the U.S. policy of reducing barriers to trade. The program
                  reflects a broad policy consensus that the United States, as
                  it pursues trade policies that benefit the U.S. economy as a
                  whole, must maintain a strong commitment to helping address
                  the special adjustment problems of individuals adversely
                  affected by increased competition from abroad.
                </p>
                <p>
                  If claimants are denied eligibility for TAA benefits, the
                  claimants are entitled to challenge the denial in the U.S.
                  Court of International Trade (CIT) and the U.S. Court of
                  Appeals for the Federal Circuit. CITBA members regularly
                  represent TAA claimants in these lawsuits. This representation
                  is nearly always undertaken without charge, as part of a
                  lawyer’s professional obligation to offer pro bono legal
                  services to those unable to afford a lawyer. CITBA has also
                  sponsored continuing legal education programs on TAA.
                </p>
                <p>
                  CITBA has prepared a Primer on Trade Adjustment Assistance
                  Cases to assist attorneys who volunteered to represent
                  claimants under the TAA Act in the CIT. This Primer is current
                  as of the TAA Extension Act of 2011.
                </p>
                <p>
                  This Primer provides an overview of the TAA, reviews the
                  filing procedures for petitioners, and discusses some of the
                  recent cases that have reached the CIT. The cases involve the
                  following issues: inadequate investigations, the definition of
                  an article, like or directly competitive products, causation,
                  statute of limitations, and attorneys fees under the Equal
                  Access to Justice Act. This Primer deals only with petitions
                  filed with Labor for the TAA for Workers program, according to
                  the Trade Act of 2002, the Globalization Adjustment Assistance
                  Act of 2009, and Trade Adjustment Assistance Extension Act of
                  2011. This document is meant for discussion/basic introduction
                  purposes only and should not be cited. It is part of an
                  ongoing project by CITBA and its Ad Hoc Subcommittee on Trade
                  Adjustment Assistance (TAA) to improve the handling of TAA
                  cases by attorneys, the government and the courts. The primer
                  can be found here.
                </p>
              </div>
            </section>
            <Footer />
          </React.Fragment>
        );
    }
}

export default Policy;
