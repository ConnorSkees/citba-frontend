import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "pages/Home";

import About from "pages/About";
import BoardOfDirectors from "pages/BoardOfDirectors";
import Committees from "pages/Committees";
import ByLaws from "pages/ByLaws";
import DiversityPledge from "pages/DiversityPledge";

import Membership from "pages/MembershipBenefits";
import Join from "pages/Join";
import RenewMembership from "pages/RenewMembership";

import Calendar from "pages/Calendar";
import Events from "pages/Events";
import PastEventRecordings from "pages/PastEventRecordings";
import Newsletter from "pages/Newsletter";

import Policy from "pages/Policy";
import Awards from "pages/Awards";
import Resources from "pages/Resources";
import CareersInInternationalTrade from "pages/CareersInInternationalTrade";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("pk_test_Tu9HB2rgbQ1oroTpXx9oT9na");
const stripePromise = loadStripe("pk_live_kQNljkSzU24bpQzZDOPa41JE");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <Router basename="/">
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/board-of-directors/" component={BoardOfDirectors} />
          <Route path="/committees/" component={Committees} />
          <Route path="/by-laws/" component={ByLaws} />
          <Route path="/diversitypledge/" component={DiversityPledge} />

          <Route path="/benefits/" component={Membership} />
          <Route path="/join/" component={Join} />
          <Route path="/renew-membership/" component={RenewMembership} />

          <Route path="/awards/" component={Awards} />

          <Route path="/policy/" component={Policy} />

          <Route path="/calendar/" component={Calendar} />
          <Route path="/events/" component={Events} />
          <Route path="/newsletter/" component={Newsletter} />
          <Route path="/past-event-recordings/" component={PastEventRecordings} />

          <Route path="/resources/" component={Resources} />
          <Route path="/careers-in-international-trade/" component={CareersInInternationalTrade} />
        </Router>
      </div>
    </Elements>
  );
}

export default App;
