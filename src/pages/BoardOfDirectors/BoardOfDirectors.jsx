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
import Alex_Hess from "assets/board-of-directors/Hess.JPG";
import Kristin_Mowry from "assets/board-of-directors/Mowry.jpg";
import Mary_Alves from "assets/board-of-directors/Alves.jpg";
import Stephanie_Bell from "assets/board-of-directors/Bell.jpeg";
import Justin_Miller from "assets/board-of-directors/Miller.jpg";
import BoardRoom from "assets/board-room.jpg";
import Banner from "components/Banner/Banner";

const DIRECTORS = [
  {
    name: "MATTHEW R. NICELY",
    company: "Hughes Hubbard & Reed LLP",
    position: "president",
    major: true,
    src: Matthew_Nicely,
  },
  {
    name: "MICHELE LYNCH",
    company: "U.S. Department of Commerce",
    position: "vice president",
    major: true,
    src: placeholder,
  },
  {
    name: "EMILY BELINE",
    company: "FedEx",
    position: "secretary",
    major: true,
    src: Emily_Beline,
  },
  {
    name: "ALICE A. KIPEL",
    company: "U.S. Customs and Border Protection",
    position: "treasurer",
    major: true,
    src: placeholder,
  },
  {
    name: "DEVIN S. SIKES",
    company: "Akin Gump Strauss Hauer & Feld LLP",
    position:
      "Co-Chair, Continuing Legal Education And Professional Responsibility Committee",
    src: Devin_Sikes,
  },
  {
    name: "MARY JANE ALVES",
    company: "Cassidy Levy Kent LLP",
    position:
      "Co-Chair, Continuing Legal Education And Professional Responsibility Committee",
    src: Mary_Alves,
  },
  {
    name: "ALEXANDRA HESS",
    company: "U.S. Customs and Border Protection",
    position: "Co-Chair, Customs Committee",
    src: Alex_Hess,
  },
  {
    name: "JOHN M. PETERSON",
    company: "Neville Peterson LLP",
    position: "Co-Chair, Customs Committee",
    src: placeholder,
  },
  {
    name: "DEANNA OKUN",
    company: "Adduci Mastriani & Schaumberg LLP",
    position: "Co-Chair, International Trade Committee",
    src: Deanna_Okun,
  },
  {
    name: "ELIZABETH DRAKE",
    company: "Schagrin Associates",
    position: "Co-Chair, International Trade Committee",
    src: Elizabeth_Drake,
  },
  {
    name: "SHARMA K. PATARI",
    company: "Lenovo",
    position: "Co-Chair, Export Committee",
    src: placeholder,
  },
  {
    name: "ANDREW CARIDAS",
    company: "Perkins Coie LLP",
    position: "Co-Chair, Export Committee",
    src: Andrew_Caridas,
  },
  {
    name: "NANCY NOONAN",
    company: "Arent Fox LLP",
    position: "Chair, Judicial Selection Committee",
    src: Nancy_Noonan,
  },
  {
    name: "RISHI GUPTA",
    company: "Covington & Burling LLP",
    position: "Chair, Liaison With Other Bar Associations Committee",
    src: Rishi_Gupta,
  },
  {
    name: "MARK LUDWIKOWSKI",
    company: "Clark Hill PLC",
    position: "Chair, Meetings And Special Events Committee",
    src: Mark_Ludwikowski,
  },
  {
    name: "KRISTIN MOWRY",
    company: "Mowry & Grimson, PLLC",
    position: "Chair, Membership Committee",
    src: Kristin_Mowry,
  },
  {
    name: "CHRISTINE MARTINEZ",
    company: "Precision Castparts Corp.",
    position: "Co-Chair, Publications Committee",
    src: placeholder,
  },
  {
    name: "STEPHANIE BELL",
    company: "Wiley Rein LLP",
    position: "Co-Chair, Publications Committee",
    src: Stephanie_Bell,
  },
  {
    name: "JOSHUA E. KURLAND",
    company: "U.S. Department of Justice",
    position: "Co-Chair, Technology Committee",
    src: Joshua_Kurland,
  },
  {
    name: "NAVPREET K. MOONGA",
    company: "Barnes, Richardson & Colburn LLP",
    position: "Co-Chair, Technology Committee",
    src: placeholder,
  },
  {
    name: "FRANCES P. HADFIELD",
    company: "Crowell & Moring LLP",
    position: "Co-Chair, Trial And Appellate Practice Committee",
    src: Frances_Hadfield,
  },
  {
    name: "JUSTIN R. MILLER",
    company: "U.S. Department of Justice",
    position: "Co-Chair, Trial And Appellate Practice Committee",
    src: Justin_Miller,
  },
  {
    name: "BARBARA BROUSSARD",
    company: "Sidley Austin LLP",
    position: "Co-Chair, Young Lawyers Committee",
    src: placeholder,
  },
  {
    name: "STEPHANIE HARTMAN",
    company: "Wilmer Hale LLP",
    position: "Co-Chair, Young Lawyers Committee",
    src: placeholder,
  },
  {
    name: "TINA KIMBLE",
    company: "Tata Steel",
    position: "At Large Member",
    src: placeholder,
  },
  {
    name: "CLAUDIA BURKE",
    company: "U.S. Department of Justice",
    position: "At Large Member",
    src: Claudia_Burke,
  },
  {
    name: "JANE DEMPSEY",
    company: "U.S. International Trade Commission",
    position: "At Large Member",
    src: placeholder,
  },
  {
    name: "KATHLEEN W. CANNON",
    company: "Kelley Drye & Warren LLP",
    position: "Past President",
    src: Kathleen_Cannon,
  },
];

class Pos {
  col = 1;
  row = 1;

  nextPos = () => {
    if (this.col >= 4) {
      this.col = 1;
      this.row += 1;
    } else {
      this.col += 1;
    }
  };
}

class BoardOfDirectors extends Component {
  state = {};

  renderDirectors() {
    let directors = [];
    let pos = new Pos();
    for (const dir of DIRECTORS) {
      directors.push(
        <DirectorCard
          style={{ msGridColumn: pos.col, msGridRow: pos.row }}
          name={dir.name}
          company={dir.company}
          position={dir.position}
          major={dir.major}
          src={dir.src}
          key={dir.name + dir.position}
        />
      );
      pos.nextPos();
    }
    return directors;
  }

  render() {
    return (
      <>
        <Header />
        <Banner src={BoardRoom} text="Board of Directors" subtitle={[]} />
        <div className="board">{this.renderDirectors()}</div>
        <div className="divider" />
        <Footer />
      </>
    );
  }
}

export default BoardOfDirectors;
