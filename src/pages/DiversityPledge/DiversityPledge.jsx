import React, { Component } from "react";
import "./styles.scss";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Banner from "components/Banner/Banner";
import BannerBg from "assets/library.jpg";

class DiversityPledge extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Banner
          src={BannerBg}
          text="Diversity Pledge"
          subtitle={["The Customs and International Bar Association's Commitment to Diversity"]}
        />
        <div className="diversitypledge">
          <h1>STATEMENT OF COMMITMENT TO DIVERSITY, EQUALITY &amp; INCLUSION</h1>

          <p>
            The Customs and International Trade Bar Association aspires to foster a profession that is
            diverse, equitable and inclusive. Specifically, CITBA is committed to promoting comprehensive
            and meaningful diversity, equity and inclusion in all areas of the customs and international
            trade law practice and to doing our part to address the effects of systemic racism and racial
            injustice.
          </p>

          <p>To that end, CITBA pledges to be an architect of diversty, equity and inclusion in the profession by:</p>

          <ul>
            <li>
              Creating a DE&amp;I Committee to guide our diversity, equity and inclusion endeavors, including
              developing processes to measure the impacts of our efforts;
            </li>

            <li>
              Increasing opportunities for attorneys from underrepresented groups in our practice, including
              Black, Indigenous and other people of color who have been adversely affected by systemic racism,
              by developing programs designed to enhance their success and retention in the profession;
            </li>

            <li>
              Attracting more law students from the foregoing groups to consider customs and international trade
              law careers through initatives that increase exposure to the practice and mentorship;
            </li>

            <li>
              Educating members on the importance of mentoring, equal opportunity for meaningful assignments and
              senior level leadership in fostering the success and retention of attorneys from underrepresented groups;
            </li>

            <li>
              Educating members on the importance of goals, accountability and leadership in promoting diversity,
              equity and inclusion;
            </li>

            <li>
              Fostering community among its members and promoting involvement in CITBA of attorneys from underrepresented
              groups; and
            </li>

            <li>Collaborating with other organizations that share our commitment to diversity.</li>
          </ul>


          <div className="divider-small" />
          <div className="footnote">
            <p>
              Watch our event from 2020 promoting racial justice through opportunity and advancement in our Industry:
              <a href="https://www.youtube.com/watch?v=wnrdDABh17U"><strong>Black Voices in Trade.</strong></a>
            </p>

            <p>Join our next panel discussion on <a href="https://www.eventbrite.com/e/careers-internships-in-international-trade-customs-and-export-controls-tickets-140311566673">
              <strong>Careers &amp; Internships in International Trade, Customs, and Export Controls Law</strong></a> and access bios of all our speakers <a href="/citba-static/CITBA-ASIL - Speakers for Careers in Trade.pdf">here</a>.</p>

            <p>Access information regarding our Diversity Scholarship with ASIL <a href="/citba-static/Diversity Scholarship ASIL CITBA March 20213.docx">here</a>, and for additional materials visit our <a href="/events#Diversity%20Scholarship%20with%20CITBA%20and%20ASIL">Events and Announcements page</a>.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default DiversityPledge;
