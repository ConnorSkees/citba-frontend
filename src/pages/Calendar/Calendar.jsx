import React, { Component } from 'react';
import "./styles.scss";
import Header from 'components/Header';
import Footer from 'components/Footer';
// todo: calendar

const WEEKDAYS = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

class Weekday extends Component {
  render() {
    const { day, events } = this.props;
    return (
      <div className="day" style={{ opacity: day==="" ? 0 : 1 }}>
        <span className="number">{day}</span>
        {events.map(event => <a href>
          {event}
        </a>)}
      </div>
    );
  }
}

class Calendar extends Component {
  state = {
    year: 2019,
    month: 1,
    days: [],
  };

  getDays = () => {
    const { year, month } = this.state;
    let date = new Date(year, month, 1);
    let days = [];
    for (let i = 0; i < date.getDay(); i++) {
      days.push(<Weekday day={""} events={[""]} />);
    }
    while (date.getMonth() === month) {
      days.push(<Weekday day={date.getDate()} events={["fetchme"]} />);
      date.setDate(date.getDate() + 1);
    }
    this.setState({ days });
  };

  componentWillMount() {
    this.getDays();
  }

  render() {
    const { days } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="calendar">
          <div className="calendar-nav"></div>
          <div className="calendar-days">
            <div className="weekdays">
              {WEEKDAYS.map(day => (
                <div className="weekday">{day}</div>
              ))}
            </div>
            <div className="days">{days}</div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Calendar;
