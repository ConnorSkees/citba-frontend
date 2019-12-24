import React, { Component } from 'react';
import "./styles.scss";
import Header from 'components/Header';
import Footer from 'components/Footer';
// todo: calendar
class Calendar extends Component {
    state = {};

    render() {
        return (
          <React.Fragment>
            <Header />
            <div className="calendar-placeholder">
              UNIMPLEMENTED
            </div>
            <Footer />
          </React.Fragment>
        );
    }
}

export default Calendar;
