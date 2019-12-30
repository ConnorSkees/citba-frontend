import React, { Component } from 'react';
import "./styles.scss";
import Header from 'components/Header';
import Footer from 'components/Footer';
import SVG from "react-inlinesvg";
import ArrowRight from "assets/arrow-right.svg";
import ArrowLeft from "assets/arrow-left.svg";
// todo: calendar

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

class Weekday extends Component {
  render() {
    const { day, events } = this.props;
    return (
      <div className="day" style={{ opacity: day==="" ? 0 : 1 }}>
        <span className="number">{day}</span>
        {events.map(event => <a href="#">
          {event}
        </a>)}
      </div>
    );
  }
}

class Calendar extends Component {
  state = {
    year: 2019,
    month: 2,
    days: [],
    events: []
  };

  monthAsString = () => {
    const { month } = this.state;
    switch (month) {
      case 0:
      case "0":
        return "January";
      case 1:
      case "1":
        return "February";
      case 2:
      case "2":
        return "March";
      case 3:
      case "3":
        return "April";
      case 4:
      case "4":
        return "May";
      case 5:
      case "5":
        return "June";
      case 6:
      case "6":
        return "July";
      case 7:
      case "7":
        return "August";
      case 8:
      case "8":
        return "September";
      case 9:
      case "9":
        return "October";
      case 10:
      case "10":
        return "November";
      case 11:
      case "11":
        return "December";
      default:
        console.error("unkown month", month);
        return "January";
    }
  }

  getDays = () => {
    const { year, month } = this.state;
    let thisMonth = new Date(year, month, 1);
    let prevMonth = new Date(thisMonth - 1);
    let nextMonth = new Date(year, month === 11 ? 0 : month+1, 1);
    let days = [];
    let prevMonthDays = [];

    // add the days of the previous month
    // (this is done in reverse)
    for (let i = thisMonth.getDay(); i > 0; i--) {
      prevMonthDays.push(<Weekday day={prevMonth.getDate()} events={[""]} />);
      prevMonth.setDate(prevMonth.getDate() - 1);
    }
    days.push(...prevMonthDays.reverse());

    // iterate over days in this month
    while (thisMonth.getMonth() === month) {
      days.push(<Weekday day={thisMonth.getDate()} events={[""]} />);
      thisMonth.setDate(thisMonth.getDate() + 1);
    }

    for (let i = thisMonth.getDay(); i < 7; i++) {
      days.push(<Weekday day={nextMonth.getDate()} events={[""]} />);
      nextMonth.setDate(nextMonth.getDate() + 1);
    }
    this.setState({ days });
  };

  getEvents = () => {
    const { year } = this.state;
    fetch(`/api/events/${year}`).then(res => res.json).then(data => {
      // todo: process events into hashmap `{ "2019-01-01": { title, .. } }`
    });
  }

  componentDidMount() {
    this.getDays();
    this.getEvents();
  }

  incrementMonth = () => {
    let { year, month } = this.state;
    if (month === 11) {
      year += 1;
      month = 0;
    } else {
      month += 1;
    }
    this.setState({ year, month });
    this.getDays();
  }
  
  decrementMonth = () => {
    let { year, month } = this.state;
    if (month === 0) {
      year -= 1;
      month = 11;
    } else {
      month -= 1;
    }
    this.setState({ year, month });
    this.getDays();
  }

  render() {
    const { year, month, days } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="calendar">
          <div className="calendar-nav">
            {/* todo: inputs to jump to day/year */}
            <div className="calendar-nav-inputs">
              <input
                type="number"
                className="year-input"
                value={year}
                onChange={event => this.setState({ year: event.target.value })}
              />
              <select
                className="month-input"
                value={month}
                onChange={event => {this.setState({ month: event.target.value })}}
              >
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={9}>September</option>
                <option value={8}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
            </div>
            <SVG
              src={ArrowLeft}
              className="left"
              onClick={this.decrementMonth}
            />
            {this.monthAsString()} {year}
            <SVG
              src={ArrowRight}
              className="right"
              onClick={this.incrementMonth}
            />
          </div>
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
