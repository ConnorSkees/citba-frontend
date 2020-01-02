import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from 'pages/Home';

import About from 'pages/About';
import BoardOfDirectors from 'pages/BoardOfDirectors';
import Committees from 'pages/Committees';
import ByLaws from 'pages/ByLaws';

import Membership from "pages/MembershipBenefits";
import Join from "pages/Join";
import RenewMembership from "pages/RenewMembership";

import Announcements from 'pages/Announcements';
import Calendar from 'pages/Calendar';
import Events from 'pages/Events';
import Meetings from "pages/Meetings";
import Newsletter from "pages/Newsletter";

import Policy from "pages/Policy";
import Awards from "pages/Awards";
import Resources from "pages/Resources";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/board-of-directors/" component={BoardOfDirectors} />
        <Route path="/committees/" component={Committees} />
        <Route path="/by-laws/" component={ByLaws} />

        <Route path="/benefits/" component={Membership} />
        <Route path="/join/" component={Join} />
        <Route path="/renew-membership/" component={RenewMembership} />

        <Route path="/awards/" component={Awards} />

        <Route path="/policy/" component={Policy} />

        <Route path="/announcements/" component={Announcements} />
        <Route path="/calendar/" component={Calendar} />
        <Route path="/events/" component={Events} />
        <Route path="/meetings/" component={Meetings} />
        <Route path="/newsletter/" component={Newsletter} />

        <Route path="/resources/" component={Resources} />
      </Router>
    </div>
  );
}

export default App;
