import React, { Component } from "react";
import "./styles.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import BannerBg from "assets/man-writing.jpg";

function Event(props) {
  const { title, subtitle, content } = props;
  return (
    <div className="event">
      <h1 id={title}>{title}</h1>
      <h2>{subtitle}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="content"
      ></div>
    </div>
  );
}

class Events extends Component {
  state = {
    upcoming: [],
    past: [],
  };

  componentDidMount() {
    fetch("/api/events/")
      .then((res) => res.json())
      .then((data) => {
        const { upcoming, past } = data;
        this.setState({ upcoming, past });
      });
  }

  render() {
    const { upcoming, past } = this.state;
    return (
      <>
        <Header />
        <Banner text="Events and Announcements" src={BannerBg} subtitle={[]} />
        <div className="upcoming-events">
          <h1 className="main-header">Upcoming Events</h1>
          {upcoming.map((e) => (
            <Event
              title={e.title}
              subtitle={e.subtitle}
              content={e.description}
            />
          ))}
        </div>
        <div className="past-events">
          <h1 className="main-header">Past Events</h1>
          {past.map((e) => (
            <Event
              title={e.title}
              subtitle={e.subtitle}
              content={e.description}
            />
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default Events;
