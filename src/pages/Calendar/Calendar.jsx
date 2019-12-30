import React, { Component } from 'react';
import "./styles.scss";
import Header from 'components/Header';
import Footer from 'components/Footer';
import SVG from "react-inlinesvg";
import ArrowRight from "assets/arrow-right.svg";
import ArrowLeft from "assets/arrow-left.svg";
import Close from "assets/minus.svg";

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthAsString = month => {
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
  };

class Weekday extends Component {
  state = {
    poppedOut: false,
  }

  render() {
    const { poppedOut } = this.state;
    let { month, day, events, not } = this.props;
    events = events || [];
    return (
      <div className={`day${poppedOut ? " popped" : ""}${not ? " not-this-month" : "" }`}>
        {poppedOut ? (
          <SVG
            src={Close}
            onClick={() => this.setState({ poppedOut: false })}
          />
        ) : (
          ""
        )}
        <span className="number">
          {poppedOut ? `${monthAsString(month)} ${day}` : day}
        </span>
        {events.map(event => {
          return (
            <React.Fragment key={`Weekday-${month}-${day}`}>
              <h1 onClick={() => this.setState({ poppedOut: true })}>
                {event.title}
              </h1>
              {poppedOut ? (
                <p dangerouslySetInnerHTML={{ __html: event.description }} />
              ) : (
                ""
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

class Calendar extends Component {
  state = {
    year: 2019,
    month: 11,
    days: [],
    events: {},
  };

  getKey = date => {
    let month = `${date.getMonth()+1}`.padStart(2, "0");
    let day = `${date.getDate()}`.padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`;
  }

  getDays = () => {
    const { year, month, events } = this.state;
    let thisMonth = new Date(year, month, 1);
    let prevMonth = new Date(thisMonth - 1);
    let nextMonth = new Date(year, month === 11 ? 0 : month + 1, 1);
    let days = [];
    let prevMonthDays = [];

    // add the days of the previous month
    // (this is done in reverse)
    for (let i = thisMonth.getDay(); i > 0; i--) {
      const key = this.getKey(prevMonth);
      prevMonthDays.push(
        <Weekday
          not
          key={key}
          month={prevMonth.getMonth()}
          day={prevMonth.getDate()}
          events={events[key]}
        />
      );
      prevMonth.setDate(prevMonth.getDate() - 1);
    }
    days.push(...prevMonthDays.reverse());

    // iterate over days in this month
    while (thisMonth.getMonth() === month) {
      const key = this.getKey(thisMonth);
      days.push(<Weekday key={key} month={thisMonth.getMonth()} day={thisMonth.getDate()} events={events[key]} />);
      thisMonth.setDate(thisMonth.getDate() + 1);
    }

    if (thisMonth.getDay() !== 0) {
      for (let i = thisMonth.getDay(); i < 7; i++) {
        const key = this.getKey(nextMonth);
        days.push(
          <Weekday
            not
            key={key}
            month={nextMonth.getMonth()}
            day={nextMonth.getDate()}
            events={events[key]}
          />
        );
        nextMonth.setDate(nextMonth.getDate() + 1);
      }
    }
    this.setState({ days });
  };

  getEvents = () => {
    const { year } = this.state;
    let events = {};
    fetch(`/api/events/year/${year}`)
      .then(res => res.json())
      .then(data => {
        data = data || [];
        data.map(el => {
          if (typeof events[el.day] === "undefined") {
            events[el.day] = [el];
          } else {
            events[el.day].push(el);
          }
        });
      });
    this.setState({ events }, this.getDays);
  };

  componentDidMount() {
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
    this.setState({ year, month }, this.getDays);
  };

  decrementMonth = () => {
    let { year, month } = this.state;
    if (month === 0) {
      year -= 1;
      month = 11;
    } else {
      month -= 1;
    }
    this.setState({ year, month }, this.getDays);
  };

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
                min={2016}
                max={new Date().getFullYear()+3}
                onChange={event =>
                  this.setState({ year: parseInt(event.target.value) })
                }
              />
              <select
                className="month-input"
                value={month}
                onChange={event => {
                  this.setState({
                    month: parseInt(event.target.value)
                  });
                }}
              >
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
            </div>
            <div className="month-picker">
            <SVG
              src={ArrowLeft}
              className="left"
              onClick={this.decrementMonth}
            />
            <p>{monthAsString(month)} {year}</p>
            <SVG
              src={ArrowRight}
              className="right"
              onClick={this.incrementMonth}
            />
            </div>
          </div>
          <div className="calendar-days">
            <div className="weekdays">
              {WEEKDAYS.map(day => (
                <div key={day} className="weekday">{day}</div>
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
