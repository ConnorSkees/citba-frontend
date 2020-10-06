import React, { Component } from "react";
import "./styles.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import BannerBg from "assets/carousel-image-1.jpg";
import SVG from "react-inlinesvg";
import PDF from "assets/file-pdf.svg";

// We must explicitly enumerate newsletters here because
// some years are missing newsletters. It is not necessary
// to worry about the order in which they appear in *this* list
// as they are automatically sorted to be in chronological order.
// However, for readability they *are* currently sorted with the
// oldest being at the top and the most recent at the bottom.
//
// CITBA releases 4 newletters in a year, one in spring (1),
// summer (2), fall (3), and winter (4). The newletters in this list
// are in the form of `[YEAR, SEASON]`
const NEWSLETTERS = [
  [2008, 1],
  [2008, 2],
  [2009, 1],
  [2009, 2],
  [2009, 4],
  [2010, 1],
  [2010, 2],
  [2010, 4],
  [2011, 2],
  [2011, 4],
  [2012, 2],
  [2012, 3],
  [2012, 4],
  [2013, 1],
  [2013, 2],
  [2013, 3],
  [2013, 4],
  [2014, 1],
  [2014, 4],
  [2016, 1],
  [2016, 2],
  [2016, 4],
  [2017, 1],
  [2017, 2],
  [2017, 3],
  [2018, 2],
  [2018, 3],
  [2018, 4],
  [2019, 1],
  [2019, 2],
  [2020, 1],
  [2020, 2],
  [2020, 3]
];

const season = (date) => {
  let season;
  switch (date[1]) {
    case 1:
      season = "Spring";
      break;
    case 2:
      season = "Summer";
      break;
    case 3:
      season = "Fall";
      break;
    case 4:
      season = "Winter";
      break;
    default:
      console.error("unknown season", season);
      season = "Spring";
      break;
  }
  return `${season} ${date[0]}`;
};

class Newsletter extends Component {
  state = {};

  render() {
    let newsletters = NEWSLETTERS.sort();
    // most recent newsletter
    let r = newsletters.pop();
    newsletters = newsletters.reverse();

    return (
      <>
        <Header />
        <Banner src={BannerBg} text="CITBA NEWSLETTER" subtitle={[]} />
        <div className="current-issue">
          <SVG src={PDF} />
          <a href={`/newsletters/${r[0]}-${r[1]}.pdf`}>
            Download the current CITBA Newsletter: {season(r)}
          </a>
        </div>
        <div className="past-issues">
          <h2>Past Issues</h2>
          <ul>
            {newsletters.map((n) => (
              <li key={`${n[0]}-${n[1]}`}>
                <a href={`/newsletters/${n[0]}-${n[1]}.pdf`}>{season(n)}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom" />
        <Footer />
      </>
    );
  }
}

export default Newsletter;
