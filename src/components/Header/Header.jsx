import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./styles.scss";
// todo: border on top of header and footer `5px solid $orange`
import logo from "assets/citba-logo.png";
import Dropdown from 'components/Dropdown';

const NAV_ITEMS = [
  {
    text: "About CITBA",
    path: "/about/",
    els: [
      {
        text: "Board of Directors",
        path: "/board-of-directors/"
      },
      {
        text: "Committees",
        path: "/committees/"
      },
      {
        text: "By-laws",
        path: "/by-laws/"
      }
    ]
  },
  {
    text: "Membership",
    path: "/membership/",
    els: [
      {
        text: "Join CITBA",
        path: "/join/"
      },
      {
        text: "Renew Membership",
        path: "/renew-membership/"
      }
    ]
  },
  {
    text: "Policy",
    path: "/policy/"
  },
  {
    text: "Awards",
    path: "/awards/"
  },
  {
    text: "News & Events",
    path: "/news-events/",
    els: [
      {
        text: "Calendar",
        path: "/calendar/"
      },
      {
        text: "Events",
        path: "/events/"
      },
      {
        text: "Meetings",
        path: "/meetings/"
      },
      {
        text: "CITBA Newsletter",
        path: "/newsletter/"
      },
    ]
  },
  {
    text: "Resources",
    path: "/resources/"
  }
];

class Header extends Component {
    state = {};

    render() {
      return (
        <React.Fragment>
          <header>
            <nav id="header">
              <Link
                to={"/"}
                key={"home"}
              >
                <img src={logo} alt="logo" />
              </Link>
              <div className="nav-container">
                {NAV_ITEMS.map(el => {
                  if (el.els === undefined) {
                    return (
                      <Link
                        to={el.path.toLowerCase()}
                        key={el.value}
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
                        path={el.path}
                        els={el.els}
                      />
                    );
                  }
                })}
              </div>
            </nav>
          </header>
        </React.Fragment>
      );
    }
}

export default Header;
