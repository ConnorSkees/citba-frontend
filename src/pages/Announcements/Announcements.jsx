import React, { Component } from 'react';
import "./styles.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import BannerBg from "assets/carousel-image-1.jpg";
import { Link } from "react-router-dom";

const ANNOUNCEMENTS = [
  {
    title: "Interview with Incoming President Kathleen Cannon",
    content: (
      <React.Fragment>
        <p>
          Incoming President Kathleen Cannon recently sat down with Alex Lawson
          and Law360 to discuss the prominent role that trade has had in the
          headlines recently and what her plans are for CITBA during her tenure.
        </p>
        <p>
          <a href="https://www.law360.com/articles/1048428/new-citba-head-eager-to-lead-with-trade-in-spotlight">
            The full article can be found here.
          </a>
        </p>
      </React.Fragment>
    )
  },
  {
    title: "Celebrate the Career of the Honorable Nicholas Tsoucalas",
    content: (
      <React.Fragment>
        <p>
          As he steps down from the bench, the U.S. Court of International Trade
          invites you to join its judges and staff in celebrating the past half
          century’s judicial service of the Honorable Nicholas Tsoucalas on
          courts of the City and State of New York, and of the United States of
          America.
        </p>
        <p>
          Thursday, June 16, 2016 at 5:00pm
          <br />
          8th Floor Library
          <br />
          United States Court of International Trade
          <br />
          One Federal Plaza
          <br />
          New York, NY
        </p>
        <p>
          RSVP Acceptance Only By June 8, 2016
          <br />
          elizabeth_cognata@cit.uscourts.gov | 212-264-4484
        </p>
      </React.Fragment>
    )
  },
  {
    title:
      "Small Claims Procedure Pilot Project at U.S. Court of International Trade",
    content: (
      <p>
        The U.S. Court of International Trade (CIT) has announced a pilot
        project to test the feasibility of a small claims procedure at the CIT.
        The project focuses on expediting discovery when all parties to a case
        agree that it is appropriate. While there is no specific monetary cap
        for a small claim, it is expected that the cases will have less than
        $50,000 in controversy and will have limited impact on future entries
        that might come before the Court. CITBA members are encouraged to review
        the materials the CIT has posted and, as appropriate, participate in the
        pilot project. More information, including a proposed discovery plan, is
        available here.
      </p>
    )
  },
  {
    title: "Andrew P. Vance Memorial Writing Competition",
    content: (
      <p>
        CITBA and Brooklyn Law School (BLS) sponsor this annual Writing
        Competition to encourage law students who are interested in careers in
        customs and international trade law. The competition honors the memory
        of Andrew Vance, past president of CITBA and a distinguished
        practitioner and public servant. Entrants must be currently enrolled in
        a JD or LLM program at any of the nation’s law schools. Additional
        information and instructions for participation in this competition is
        forth in this link (
        <em>
          you will need a program that reads .pdf files such as Adobe Acrobat
          Reader
        </em>
        ). <Link to="/awards/#andrew-p-vance">Click here to view winners since 1999</Link>
      </p>
    )
  }
];

function Announcement(props) {
    const { title, content } = props;
    return <div className="announcement">
        <h1>{title}</h1>
        <div className="content">
            {content}
        </div>
    </div>;
}

class Announcements extends Component {
    state = {};

    render() {
        return (
          <React.Fragment>
            <Header />
            <Banner src={BannerBg} text="Announcements" subtitle={[]} />
            <div className="announcements">
              {ANNOUNCEMENTS.map(a => (
                <Announcement key={a.title} title={a.title} content={a.content} />
              ))}
            </div>
            <Footer />
          </React.Fragment>
        );
    }
}

export default Announcements;
