import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import logo from "assets/citba-logo.png";
import Dropdown from "components/Dropdown";

const NAV_ITEMS = [
  {
    text: "About CITBA",
    els: [
      {
        text: "What We Do",
        path: "/about/",
      },
      {
        text: "Board of Directors",
        path: "/board-of-directors/",
      },
      {
        text: "Committees",
        path: "/committees/",
      },
      {
        text: "By-laws",
        path: "/by-laws/",
      },
      {
        text: "Diversity Pledge",
        path: "/diversitypledge/",
      },
    ],
  },
  {
    text: "Membership",
    els: [
      {
        text: "Benefits",
        path: "/benefits/",
      },
      {
        text: "Join CITBA",
        path: "/join/",
      },
      {
        text: "Renew Membership",
        path: "/renew-membership/",
      },
    ],
  },
  {
    text: "Policy",
    path: "/policy/",
  },
  {
    text: "Awards",
    path: "/awards/",
  },
  {
    text: "Events & Newsletters",
    els: [
      {
        text: "Calendar",
        path: "/calendar/",
      },
      {
        text: "Events",
        path: "/events/",
      },
      {
        text: "Past Event Recordings",
        path: "/past-event-recordings/",
      },
      {
        text: "CITBA Newsletter",
        path: "/newsletter/",
      },
    ],
  },
  {
    text: "Resources",
    els: [
      {
        text: "Resources",
        path: "/resources/"
      },
      {
        text: "Careers in International Trade",
        path: "/careers-in-international-trade/"
      }
    ],
  },
];

class Header extends Component {
  state = {};

  render() {
    return (
      <>
        <header>
          <nav id="header">
            <Link to={"/"} key={"home"}>
              <img src={logo} alt="logo" />
            </Link>
            <div className="nav-container">
              {NAV_ITEMS.map((el) => {
                if (el.els === undefined) {
                  return (
                    <Link
                      to={el.path.toLowerCase()}
                      key={el.text}
                      className={"nav-item"}
                    >
                      {el.text}
                    </Link>
                  );
                } else {
                  return (
                    <Dropdown
                      items={el.els}
                      text={el.text}
                      els={el.els}
                      key={el.text}
                    />
                  );
                }
              })}
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
