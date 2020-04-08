import React, { Component } from 'react';
import "./styles.scss";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Banner from 'components/Banner/Banner';
import BannerBg from "assets/man-writing.jpg";
import Collapse from 'components/Collapse/Collapse';

const COMMITTEES = [
  {
    title:
      "Continuing Legal Education and Professional Responsibility Committee",
    emails: ["claudia.burke@usdoj.gov"],
    chair: "Claudia Burke",
    description:
      <p>The CLE/Professional Responsibility Committee fosters and promotes the continuing legal education of CITBA members, and arranges for and conducts applicable meetings for lectures, discussions, and courses of study – subject to approval by CITBA’s Board.  This Committee works closely with the Meetings and Special Events Committee regarding the logistics of events.  The Committee also keeps itself and the CITBA Bar informed with respect to all matters concerning the professional responsibility of its members and to all matters relevant to professional conduct standards.</p>
  },
  {
    title: "Customs Committee",
    emails: ["lwhanson@lwhansonassociates.com", "alexandra.b.hess@gmail.com"],
    cochairs: ["Larry Hanson", "Alexandra Hess"],
    description:
      <p>The Customs Committee monitors (1) the policies, procedures, and practices of U.S. Customs and Border Protection and other federal agencies involved in regulating imports, (2) proposed legislation and regulations affecting the administration of the customs and tariff laws and regulations, and (3) customs and tariff matters raised under the auspices of international organizations (including but not limited to the World Customs Organization), in international agreements or in pending international negotiations.</p>
  },
  {
    title: "International Trade Committee",
    emails: ["dpickard@wileyrein.com", "okun@adduci.com"],
    cochairs: ["Daniel B. Pickard", "Deanna Okun"],
    description:
      <p>The International Trade Committee monitors and obtains information respecting the policies, procedures, and practices of federal agencies, as well as proposed legislation and regulations, affecting the administration of the international trade laws and regulations, with special emphasis on trade rules and remedies (e.g., antidumping, countervailing duty, and other unfair trade remedies, safeguards or escape clause provisions, and trade adjustment assistance) and international dispute resolution in trade matters.  These administrative agencies include, but are not limited to, the United States International Trade Commission, the International Trade Administration of the U.S. Department of Commerce, the United States Trade Representative, and United States Customs and Border Protection.  The Committee also monitors and obtains information respecting the foregoing matters under the auspices of international organizations (including but not limited to the World Trade Organization) in international agreements or in pending international negotiations.</p>
  },
  {
    title: "Export Control Committee",
    emails: ["rshapiro@thompsoncoburn.com", "spatari@barnesrichardson.com"],
    cochairs: ["Robert Shapiro", "Shama K. Patari"],
    description:
      <p>The Export Control Committee (i) monitors and obtains information regarding the policies, procedures, and practices of those federal agencies administering U.S. export controls, including the U.S. Department of Commerce - Bureau of Industry and Security, U.S. Department of State - Directorate of Defense Trade Controls, and U.S. Department of Treasury - Office of Foreign Assets Control, (ii) follows proposed legislation and regulations affecting U.S. export control requirements, (iii) submits comments on such proposed regulations, and (iv) organizes seminars and meetings for members of the bar at which speakers discuss topics of export control interest.</p>
  },
  {
    title: "Judicial Selection Committee",
    emails: ["wsjoberg@porterwright.com"],
    chair: "William C. Sjoberg",
    description:
      <p>The Judicial Selection Committee inquires into the qualifications of nominees and prospective nominees for Judgeships in the United States Court of International Trade and in the United States Court of Appeals for the Federal Circuit, and reports its findings to the Board of Directors for transmittal to the appropriate bodies.  The Committee may invite and will consider all communications regarding such nominees.</p>
  },
  {
    title: "Membership Committee",
    emails: ["wmaloney@strtrade.com"],
    chair: "William J. Maloney",
    description:
      <p>The Membership Committee ascertains the existence of the prescribed qualifications of candidates for membership in the various categories identified in CITBA’s by-laws, and reports its recommendations on membership applications to the Board of Directors.  The Committee also promotes an understanding of CITBA to lawyers practicing in the customs or international trade area, identifies membership services of interest to the members, and otherwise assists in membership retention and development.</p>
  },
  {
    title: "Meetings and Special Events Committee",
    emails: ["mludwikowski@ClarkHill.com"],
    chair: "Mark Ludwikowski",
    description:
      <p>The Meetings and Special Events Committee arranges a suitable place for the meetings to be held by CITBA and reports its selection to the Board.  The Committee arranges the logistics of the event(s) sponsored by CITBA and prepares the notices of such event(s).  The Committee also notifies CITBA’s membership of any special events of interest to members, upon direction by the President or the Board.</p>
  },
  {
    title: "Liaison With Other Bar Associations Committee",
    emails: ["joshua.e.kurland@usdoj.gov"],
    chair: "Joshua E. Kurland",
    description:
      <p>The Committee helps to manage CITBA's collaboration with other professional organizations active in the trade and customs field, mainly with regard to events and programming, and occasionally with regard to policy issues of shared interest.</p>
  },
  {
    title: "Publications Committee",
    emails: ["Christine_Henry@msn.com"],
    chair: "Christine Martinez",
    description:
      <><p>The Publications Committee is charged with the distribution, circulation, and marketing of CITBA brochures, circulars, and other publications, which CITBA may publish from time to time.  This Committee also prepares and edits the quarterly CITBA Newsletter.  The primary purpose of the newsletter is to review, discuss, and advise CITBA’s membership regarding recent customs and international trade issues.  The newsletter and other circulars are also intended to provide topical information from the United States Court of International Trade and the United States Court of Appeals for the Federal Circuit as well as upcoming events of interest.  To this end, the Publications Committee coordinates with other CITBA committees that may be involved with preparing, contributing, or disseminating information to members.</p><p>The Committee is continually working to improve the newsletter’s quality.  If you have any ideas or contributions that you would like to make to the quarterly CITBA newsletter, please do not hesitate to contact the Chair.</p></>
  },
  {
    title: "Technology Committee",
    emails: ["vmroczka@yahoo.com"],
    chair: "Alice A. Kipel",
    description:
      <p>The Committee is responsible for maintenance and continuous improvement of the CITBA website, coordinating technology issues between and among other CITBA committees, and serving as the CITBA liaison on technology issues with the United States Court of International Trade.</p>
  },
  {
    title: "Trial and Appellate Practice Committee",
    emails: ["FrancesPHadfield@gmail.com", "Justin.R.Miller@usdoj.gov"],
    cochairs: ["Frances P. Hadfield", "Justin R. Miller"],
    description:
      <p>The Trial and Appellate Practice Committee monitors and obtains information respecting the policies, procedures, and practices of all federal and state courts affecting the administration of the trade and tariff laws.  These courts shall include, but not be limited to, the United States Court of International Trade, the United States Court of Appeals for the Court the Federal Circuit, and the United States Supreme Court.  This Committee also identifies pending judicial or dispute settlement proceedings in which presentations of the views of CITBA or participation of CITBA as <em>amicus curiae </em>might be warranted.</p>
  },
  {
    title: "Young Lawyers Committee",
    emails: ["emily.beline@fedex.com", "rrgupta@gmail.com"],
    cochairs: ["Emily Beline", "Rishi Gupta"],
    description:
      <p>The Young Lawyers Committee provides opportunities for associates and younger partners in law firms, junior and mid-level agency lawyers, and judicial clerks to meet and form relationships with their peers.  The Committee sponsors and plans both substantive and social events, and is engaged in CITBA initiatives that give younger CITBA members guidance in pursuing their careers in customs and international trade.</p>
  }
];

class Committees extends Component {
    state = {};

    render() {
        return (
          <>
            <Header />
            <Banner
              src={BannerBg}
              text="Committees"
              subtitle={["Committee membership is open to all CITBA members.", "If you are interested in joining any of the Committees below, please contact the respective Chair(s)."]}
            />
            <div className="committees">
                <div className="collapses">
                    {COMMITTEES.map(el => <Collapse
                        title={el.title}
                        chair={el.chair}
                        emails={el.emails}
                        cochairs={el.cochairs}
                        description={el.description}
                        key={el.title}
                    />)}
                </div>
            </div>
            <Footer />
          </>
        );
    }
}

export default Committees;
