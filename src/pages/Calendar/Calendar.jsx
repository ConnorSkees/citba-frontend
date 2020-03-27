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
    let { month, day, events, not, row, col } = this.props;
    events = events || [];
    return (
      <div style={{ msGridColumn: col, msGridRow: row }} className={`day${poppedOut ? " popped" : ""}${not ? " not-this-month" : "" }`}>
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

class Pos {
  col = 1;
  row = 1;

  nextPos = () => {
    if (this.col >= 7) {
      this.col = 1;
      this.row += 1;
    } else {
      this.col += 1;
    }
  }
}

class Calendar extends Component {
  state = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    days: [],
    events: {}
  };

  minYear = 2015;
  maxYear = new Date().getFullYear() + 3;

  getKey = date => {
    let month = `${date.getMonth() + 1}`.padStart(2, "0");
    let day = `${date.getDate()}`.padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`;
  };

  getDays = () => {
    const { year, month, events } = this.state;
    let thisMonth = new Date(year, month, 1);
    let prevMonth = new Date(thisMonth - 1);
    let nextMonth = new Date(year, month === 11 ? 0 : month + 1, 1);
    let days = [];
    let prevMonthDays = [];

    let pos = new Pos();

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
          col={pos.col}
          row={pos.row}
        />
      );
      prevMonth.setDate(prevMonth.getDate() - 1);
      pos.nextPos();
    }
    days.push(...prevMonthDays.reverse());

    // iterate over days in this month
    while (thisMonth.getMonth() === month) {
      const key = this.getKey(thisMonth);
      days.push(
        <Weekday
          key={key}
          month={thisMonth.getMonth()}
          day={thisMonth.getDate()}
          events={events[key]}
          col={pos.col}
          row={pos.row}
        />
      );
      pos.nextPos();
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
            col={pos.col}
            row={pos.row}
          />
        );
        pos.nextPos();
        nextMonth.setDate(nextMonth.getDate() + 1);
      }
    }
    this.setState({ days });
  };

  getEvents = async () => {
    const { year } = this.state;
    let events = {};
    await fetch(`/api/events/year/${year}`)
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
      if (year > this.maxYear) return;
      month = 0;
    } else {
      month += 1;
    }
    this.setState({ year, month }, this.getEvents);
  };

  decrementMonth = () => {
    let { year, month } = this.state;
    if (month === 0) {
      year -= 1;
      if (year < this.minYear) return;
      month = 11;
    } else {
      month -= 1;
    }
    this.setState({ year, month }, this.getEvents);
  };

  setYear = event => {
    const year = parseInt(event.target.value);
    if (year > this.maxYear || year < this.minYear) return;
    this.setState({ year }, this.getEvents);
  };

  render() {
    const { year, month, days } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="calendar">
          <div className="calendar-nav">
            <div className="calendar-nav-inputs">
              <input
                type="number"
                className="year-input"
                value={year}
                min={this.minYear}
                max={this.maxYear}
                onChange={this.setYear}
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
            <SVG
              src={ArrowLeft}
              className="left"
              onClick={this.decrementMonth}
            />
            {monthAsString(month)} {year}
            <SVG
              src={ArrowRight}
              className="right"
              onClick={this.incrementMonth}
            />
          </div>
          <div className="calendar-days">
            <div className="weekdays">
              {WEEKDAYS.map((day, idx) => (
                // we must set `msGridColumn` here for compatibility with ie11
                <div key={day} className="weekday" style={{ msGridColumn: `${idx+1}` }}>
                  {day}
                </div>
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
