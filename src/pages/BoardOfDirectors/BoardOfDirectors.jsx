import React, { Component } from 'react';
import Header from "components/Header";
import "./styles.scss";
import Footer from 'components/Footer/Footer';
import DirectorCard from 'components/DirectorCard/DirectorCard';
import placeholder from "assets/board-of-directors/placeholder.png";
import Frances_Hadfield from "assets/board-of-directors/Frances Hadfield.JPG";
import Deanna_Okun from "assets/board-of-directors/Okun - Color Photo for Print.jpg";
import Joshua_Kurland from "assets/board-of-directors/J Kurland.jpg";
import Rishi_Gupta from "assets/board-of-directors/Gupta_Rishi.jpg";
import Emily_Beline from "assets/board-of-directors/E Beline.jpg";
import Kathleen_Cannon from "assets/board-of-directors/cannon_k.jpg";
import Dan_Pickard from "assets/board-of-directors/Pickard-Dan-Hero-1140px.jpg";
import BoardRoom from "assets/board-room.jpg";
import Banner from 'components/Banner/Banner';

const DIRECTORS = [
  {
    name: "KATHLEEN W. CANNON",
    position: "president",
    major: true,
    src: Kathleen_Cannon,
  },
  {
    name: "MATTHEW R. NICELY",
    position: "vice president",
    major: true,
    src: placeholder,
  },
  {
    name: "MICHELE LYNCH",
    position: "secretary",
    major: true,
    src: placeholder,
  },
  {
    name: "JOHN M. PETERSON",
    position: "treasurer",
    major: true,
    src: placeholder,
  },
  {
    name: "CLAUDIA BURKE",
    position:
      "Chair, Continuing Legal Education And Professional Responsibility Committee",
    src: placeholder,
  },
  {
    name: "LARRY HANSON",
    position: "Co-Chair, Customs Committee",
    src: placeholder,
  },
  {
    name: "ALEXANDRA HESS",
    position: "Co-Chair, Customs Committee",
    src: placeholder,
  },
  {
    name: "DANIEL B. PICKARD",
    position: "Co-Chair, International Trade Committee",
    src: Dan_Pickard,
  },
  {
    name: "DEANNA OKUN",
    position: "Co-Chair, International Trade Committee",
    src: Deanna_Okun,
  },
  {
    name: "ROBERT SHAPIRO",
    position: "Co-Chair, Export Committee",
    src: placeholder,
  },
  {
    name: "SHAMA K. PATARI",
    position: "Co-Chair, Export Committee",
    src: placeholder,
  },
  {
    name: "WILLIAM C. SJOBERG",
    position: "Chair, Judicial Selection Committee",
    src: placeholder,
  },
  {
    name: "JOSHUA E. KURLAND",
    position: "Chair, Liaison With Other Bar Associations Committee",
    src: Joshua_Kurland,
  },
  {
    name: "MARK LUDWIKOWSKI",
    position: "Chair, Meetings And Special Events Committee",
    src: placeholder,
  },
  {
    name: "WILLIAM J. MALONEY",
    position: "Chair, Membership Committee",
    src: placeholder,
  },
  {
    name: "CHRISTINE MARTINEZ",
    position: "Chair, Publications Committee",
    src: placeholder,
  },
  {
    name: "ALICE A. KIPEL",
    position: "Chair, Technology Committee",
    src: placeholder,
  },
  {
    name: "FRANCES P. HADFIELD",
    position: "Co-Chair, Trial And Appellate Practice Committee",
    src: Frances_Hadfield,
  },
  {
    name: "JUSTIN R. MILLER",
    position: "Co-Chair, Trial And Appellate Practice Committee",
    src: placeholder,
  },
  {
    name: "EMILY BELINE",
    position: "Co-Chair, Young Lawyers Committee",
    src: Emily_Beline,
  },
  {
    name: "RISHI GUPTA",
    position: "Co-Chair, Young Lawyers Committee",
    src: Rishi_Gupta,
  },
  {
    name: "VACANT",
    position: "At Large Member",
    src: placeholder,
  },
  {
    name: "LAWRENCE M. FRIEDMAN",
    position: "Past President",
    src: placeholder,
  }
];

class BoardOfDirectors extends Component {
    state = {};

    render() {
        return (
          <>
            <Header />
            <Banner src={BoardRoom} text="Board of Directors" subtitle={[]}/>
            <div className="board">
              {DIRECTORS.map(dir => (
                <DirectorCard
                  name={dir.name}
                  position={dir.position}
                  major={dir.major}
                  src={dir.src}
                  key={dir.name+dir.position}
                />
              ))}
            </div>
            <div className="divider" />
            <Footer />
          </>
        );
    }
}

export default BoardOfDirectors;
