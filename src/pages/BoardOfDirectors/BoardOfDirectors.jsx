import React, { Component } from 'react';
import Header from "components/Header";
import "./styles.scss";
import Footer from 'components/Footer/Footer';
import DirectorCard from 'components/DirectorCard/DirectorCard';
import placeholder from "assets/board-of-directors/placeholder.png";
import BoardRoom from "assets/board-room.jpg";
import Banner from 'components/Banner/Banner';

const DIRECTORS = [
  {
    name: "KATHLEEN W. CANNON",
    position: "president",
    major: true,
    src: placeholder,
    email: ""
  },
  {
    name: "MATTHEW R. NICELY",
    position: "vice president",
    major: true,
    src: placeholder,
    email: ""
  },
  {
    name: "MICHELE LYNCH",
    position: "secretary",
    major: true,
    src: placeholder,
    email: ""
  },
  {
    name: "JOHN M. PETERSON",
    position: "treasurer",
    major: true,
    src: placeholder,
    email: ""
  },
  {
    name: "CLAUDIA BURKE",
    position:
      "Chair, Continuing Legal Education And Professional Responsibilities Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "LARRY HANSON",
    position: "Co-Chair, Customs Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "ALEXANDRA HESS",
    position: "Co-Chair, Customs Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "DANIEL B. PICKARD",
    position: "Co-Chair, International Trade Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "DEANNA OKUN",
    position: "Co-Chair, International Trade Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "ROBERT SHAPIRO",
    position: "Co-Chair, Export Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "SHAMA K. PATARI",
    position: "Co-Chair, Export Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "WILLIAM C. SJOBERG",
    position: "Chair, Judicial Selection Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "JOSHUA E. KURLAND",
    position: "Chair, Liaison With Other Bar Associations Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "MARK LUDWIKOWSKI",
    position: "Chair, Meetings And Special Events Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "WILLIAM J. MALONEY",
    position: "Chair, Membership Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "CHRISTINE MARTINEZ",
    position: "Chair, Publications Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "ALICE A. KIPEL",
    position: "Chair, Technology Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "FRANCES P. HADFIELD",
    position: "Co-Chair, Trial And Appellate Practice Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "JUSTIN R. MILLER",
    position: "Co-Chair, Trial And Appellate Practice Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "EMILY BELINE",
    position: "Co-Chair, Young Lawyers Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "RISHI GUPTA",
    position: "Co-Chair, Young Lawyers Committee",
    src: placeholder,
    email: ""
  },
  {
    name: "VACANT",
    position: "At Large Member",
    src: placeholder,
    email: ""
  },
  {
    name: "LAWRENCE M. FRIEDMAN",
    position: "Past President",
    src: placeholder,
    email: ""
  }
];

class BoardOfDirectors extends Component {
    state = {};

    render() {
        return (
          <React.Fragment>
            <Header />
            <Banner src={BoardRoom} text="Board of Directors" subtitle={[]}/>
            <div className="board">
              {DIRECTORS.map(dir => (
                <DirectorCard
                  name={dir.name}
                  position={dir.position}
                  major={dir.major}
                  email={dir.email}
                  src={dir.src}
                  key={dir.name+dir.position}
                />
              ))}
            </div>
            <div className="divider" />
            <Footer />
          </React.Fragment>
        );
    }
}

export default BoardOfDirectors;
