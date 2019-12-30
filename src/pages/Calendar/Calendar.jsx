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
    events: {
      "2019-12-19": [{
        pk: 1,
        title: "CITBA Young Lawyers Committee (YLC) Holiday Happy Hour",
        subtitle: null,
        description:
          "<p><strong>Where:</strong> SPIN Washington DC</p><p><strong>When:</strong> 6-8pm on December 19</p>",
        day: "2019-12-19",
        start_time: "18:00:00",
        end_time: "20:00:00",
        cost: 0,
        url: null,
        location: "SPIN Washington DC"
      }],
      "2019-11-18": [{
        pk: 4,
        title: "20th CIT Judicial Conference",
        subtitle:
          "20th Judicial Conference of the United States Court of International Trade",
        description:
          "<p><strong>Date:</strong> Monday, November 18, 2019</p><p><strong>Time:</strong> 8:00 AM - 5:30 PM</p><p><strong>Location:</strong> The Mayflower Hotel 1127 Connecticut Ave NW Washington, DC 20036</p>",
        day: "2019-11-18",
        start_time: "08:00:00",
        end_time: "17:30:00",
        cost: 0,
        url: null,
        location:
          "The Mayflower Hotel 1127 Connecticut Ave NW Washington, DC 20036"
      }],
      "2019-11-06": [{
        pk: 5,
        title:
          "Unpacking FP&F: Inside View of CBP's Fines, Penalties, & Forfeitures Process",
        subtitle: "November 6 @ 12:00 pm - 1:30 pm",
        description:
          '<div><p>Topic:</p><p>The Customs Lawyers Association (CLA) and Customs and International Trade Bar Association (CITBA) present a luncheon event on U.S. Customs and Border Protection\'s (CBP) administrative enforcement process. Come listen to prominent members of the government and private bar unpack the enforcement process at the Port and Headquarters level. The discussion promises to be insightful for new and seasoned attorneys alike.</p><p>Panel:</p><p>Paul Pizzeck, Fines, Penalties and Forfeitures Officer, Port of New Orleans, CBP</p><p>Coraly Schreiber, Branch Chief, FP&amp;F Headquarters, Office of Field Operations, &amp; Acting Chief, Penalties Branch, Regulations&amp; Rulings, Office of Trade, CBP</p><p>Lawrence W. Hanson, Partner, The Law Office of Lawrence W. Hanson, P.C.</p><p>Moderator:</p><p>Kristina Frolova, Attorney-Advisor, Regulations and Rulings, Office of Trade, CBP</p><p>When:</p><p>Wednesday, November 6, 2019</p><p>Time:</p><p>12:00 p.m. - 1:30 p.m. (lunch provided)</p><p>Location:</p><p>U.S. Customs and Border Protection 717 M 90 KSt., NE, 12th Floor, Washington, DC 20229</p><p>Call-In:</p><p>To be provided to those who RSVP under the "Call-In RSVP" ticket (see below)., Washington, DC 20439</p><p>RSVP:</p><p>The event is free, but please kindly RSVP. In-person tickets are limited to the first twenty-five. RSVP <a href="https://fpfprocess.eventbrite.com">here</a></p></div>',
        day: "2019-11-06",
        start_time: "12:00:00",
        end_time: "13:30:00",
        cost: 0,
        url: null,
        location:
          "The Mayflower Hotel 1127 Connecticut Ave NW Washington, DC 20036"
      }],
      "2019-10-25": [{
        pk: 6,
        title:
          "FOURTH FALL TRADE LAW UPDATE: YEAR THREE OF U.S. TRADE AND SUPPLY CHAIN RESTRUCTURING",
        subtitle: null,
        description:
          '<p>Date: Friday, October 25th, 2019</p><p>Time: 8:00AM - 12:00PM</p><p>3 Hours of In-Person CLE Credits</p><p><a href="https://case.edu/law/our-school/events-lectures/event-registration?eventid=420">REGISTER HERE</a></p><p>Year three of a new era in trade policy and enforcement has seen the United States, the key constituent and supporter of multilateral and regional trade liberalization, busy with restructuring trade frameworks it perceives as failing to effectively address mercantilist policies and practices. In response to this perceived failure, the Trump Administration has aggressively enforced trade remedy laws and dusted off Cold War-era statutes to force its biggest trade partners to the negotiating table.</p><p>The "Fourth Fall Trade Law Update," a practice-orientated update, will bring together federal judges, trade and customs officials and counsel to examine recent policy developments and their effects on the planning and practice of trade and customs law.</p><p>Professor Juscelino F. Colares, associate dean of Global Legal Studies and the Honorable Leo M. Gordon, Judge of the U.S. Court of International Trade, will engage in a one-on-one discussion on CIT jurisdiction andprocedure.</p><p>In addition, the conference will feature two panel discussions with trade and customs counsel/officials from the Washington, D.C., New York City Chicago and Los Angeles. The first panel will address "Year Three of the Trump Trade Agenda," focusing on the fully materialized repercussions of the return to aggressive trade enforcement on trade litigation and diplomacy. The second panel will focus on daily practice implications of Section 301 and EAPA enforcement on customs law for domestic manufacturers and importers alike.</p>',
        day: "2019-10-25",
        start_time: "08:00:00",
        end_time: "12:00:00",
        cost: 0,
        url:
          "https://case.edu/law/our-school/events-lectures/event-registration?eventid=420",
        location: null
      }]
    }
  };

  getKey = date => {
    let month = `${date.getMonth() + 1}`.padStart(2, "0");
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
      const key = this.getKey(thisMonth);
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
    // const { year } = this.state;
    // let events = {};
    // fetch(`/api/events/year/${year}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     // todo: process events into hashmap `{ "2019-01-01": { title, .. } }`
    //     // data = data || [];
    //     console.log(data);
    //     data.map(el => {
    //       events[el.day] = el;
    //     });
    //   });
    // this.setState({ events });
  };

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
  };

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
