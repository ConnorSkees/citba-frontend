import React, { Component } from "react";
import Header from "components/Header";
import "./styles.scss";
import Footer from "components/Footer/Footer";
import DirectorCard from "components/DirectorCard/DirectorCard";
import placeholder from "assets/board-of-directors/placeholder.png";
import Frances_Hadfield from "assets/board-of-directors/Hadfield.JPG";
import Deanna_Okun from "assets/board-of-directors/Okun.jpg";
import Joshua_Kurland from "assets/board-of-directors/Kurland.jpg";
import Rishi_Gupta from "assets/board-of-directors/Gupta.jpg";
import Emily_Beline from "assets/board-of-directors/Beline.jpg";
import Kathleen_Cannon from "assets/board-of-directors/Cannon.jpg";
import Matthew_Nicely from "assets/board-of-directors/Nicely.jpg";
import Mark_Ludwikowski from "assets/board-of-directors/Ludwikowski.jpg";
import Devin_Sikes from "assets/board-of-directors/Sikes.jpg";
import Nancy_Noonan from "assets/board-of-directors/Noonan.jpg";
import Andrew_Caridas from "assets/board-of-directors/Caridas.jpg";
import Claudia_Burke from "assets/board-of-directors/Burke.jpg";
import Elizabeth_Drake from "assets/board-of-directors/Drake.jpg";
import BoardRoom from "assets/board-room.jpg";
import Banner from "components/Banner/Banner";

const DIRECTORS = [
  {
    name: "MATTHEW R. NICELY",
    position: "president",
    major: true,
    src: Matthew_Nicely,
  },
  {
    name: "MICHELE LYNCH",
    position: "vice president",
    major: true,
    src: placeholder,
  },
  {
    name: "EMILY BELINE",
    position: "secretary",
    major: true,
    src: Emily_Beline,
  },
  {
    name: "ALICE A. KIPEL",
    position: "treasurer",
    major: true,
    src: placeholder,
  },
  {
    name: "DEVIN SIKES",
    position:
      "Co-Chair, Continuing Legal Education And Professional Responsibility Committee",
    src: Devin_Sikes,
  },
  {
    name: "MARY JANES ALVES",
    position:
      "Co-Chair, Continuing Legal Education And Professional Responsibility Committee",
    src: placeholder,
  },
  {
    name: "ALEXANDRA HESS",
    position: "Co-Chair, Customs Committee",
    src: placeholder,
  },
  {
    name: "JOHN M. PETERSON",
    position: "Co-Chair, Customs Committee",
    src: placeholder,
  },
  {
    name: "DEANNA OKUN",
    position: "Co-Chair, International Trade Committee",
    src: Deanna_Okun,
  },
  {
    name: "ELIZABETH DRAKE",
    position: "Co-Chair, International Trade Committee",
    src: Elizabeth_Drake,
  },
  {
    name: "SHARMA K. PATARI",
    position: "Co-Chair, Export Committee",
    src: placeholder,
  },
  {
    name: "ANDREW CARIDAS",
    position: "Co-Chair, Export Committee",
    src: Andrew_Caridas,
  },
  {
    name: "NANCY NOONAN",
    position: "Chair, Judicial Selection Committee",
    src: Nancy_Noonan,
  },
  {
    name: "RISHI GUPTA",
    position: "Chair, Liaison With Other Bar Associations Committee",
    src: Rishi_Gupta,
  },
  {
    name: "MARK LUDWIKOWSKI",
    position: "Chair, Meetings And Special Events Committee",
    src: Mark_Ludwikowski,
  },
  {
    name: "KRISTIN MOWRY",
    position: "Chair, Membership Committee",
    src: placeholder,
  },
  {
    name: "CHRISTINE MARTINEZ",
    position: "Co-Chair, Publications Committee",
    src: placeholder,
  },
  {
    name: "STEPHANIE BELL",
    position: "Co-Chair, Publications Committee",
    src: placeholder,
  },
  {
    name: "JOSHUA E. KURLAND",
    position: "Co-Chair, Technology Committee",
    src: Joshua_Kurland,
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
    name: "BARBARA BROUSSARD",
    position: "Co-Chair, Young Lawyers Committee",
    src: placeholder,
  },
  {
    name: "STEPHANIE HARTMAN",
    position: "Co-Chair, Young Lawyers Committee",
    src: placeholder,
  },
  {
    name: "TINA KIMBLE",
    position: "At Large Member",
    src: placeholder,
  },
  {
    name: "CLAUDIA BURKE",
    position: "At Large Member",
    src: Claudia_Burke,
  },
  {
    name: "JANE DEMPSEY",
    position: "At Large Member",
    src: placeholder,
  },
  {
    name: "KATHLEEN W. CANNON",
    position: "Past President",
    src: Kathleen_Cannon,
  },
];

class BoardOfDirectors extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Banner src={BoardRoom} text="Board of Directors" subtitle={[]} />
        <div className="board">
          {DIRECTORS.map((dir) => (
            <DirectorCard
              name={dir.name}
              position={dir.position}
              major={dir.major}
              src={dir.src}
              key={dir.name + dir.position}
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
