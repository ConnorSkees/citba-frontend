import React, { Component } from "react";
import "./styles.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import BannerBg from "assets/man-writing.jpg";

class CareersInInternationalTrade extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Banner
          text="Careers in International Trade"
          src={BannerBg}
          subtitle={[]}
        />
        <div className="careers-in-international-trade">
          <p>
            The Customs and International Bar Association (CITBA) seeks to
            foster a profession that is diverse, equitable and inclusive, and,
            as part of that commitment, wants to encourage more students,
            particularly students from underrepresented groups, to consider
            careers in international trade, customs, and export controls law.
          </p>
          <p>
            This page of our website includes papers that may help law students
            decide if they are interested in an international trade law career.
            The paper{" "}
            <a href="/citba-static/Opportunities%20in%20Trade%20Law%203-9-21%20%20(revised)%20(9).pdf">
              Opportunities in Trade Law
            </a>{" "}
            describes where law students can get first-hand experience in the
            international trade law field; the list includes several programs
            that some law firms have for minority law students and more
            generally describes intern, clerkship, and career positions at
            various government agencies and U.S. courts. The document{" "}
            <a href="/citba-static/Trade%20Practice%20Areas%20(7).pdf">
              CITBA’s summary of International Trade practice areas for young
              lawyers and law students
            </a>{" "}
            answers the question what is an “international trade lawyer” and
            provides a very useful description of the different types of
            practices an international trade lawyer may have. The chart{" "}
            <a href="/citba-static/Examples%20of%20Trade%20Laws%206-2-21.pdf">
              Examples of Trade Laws
            </a>{" "}
            provides in a handy form some of the most important laws that affect
            U.S. international trade.
          </p>
          <p>
            Students who want to gain legal experience in the field as an intern
            at a government agency, court, or non-profit, and who have applied
            for such a position, should also consider applying for the
            CITBA/ASIL Summer Fellowship Program. The Summer Fellowship Program
            provides fellowships that can help a student afford to take an
            unpaid or low-paying trade position in the public or non-profit
            sector. The announcement for the program can be found under the
            Events section of the CITBA website, and program announcements for
            future summers should be available on the CITBA website in September
            of each year.
          </p>
          <p>
            The CITBA Diversity, Equity and Inclusion Committee will be
            organizing from time-to- time panels for students interested in an
            international trade law career. Recordings of earlier Committee
            programs are available under the Diversity Pledge section of the
            CITBA website.
          </p>

          <ul>
            <li>
              <a href="/citba-static/Opportunities%20in%20Trade%20Law%203-9-21%20%20(revised)%20(9).pdf">
                Opportunities in Trade Law
              </a>
            </li>
            <li>
              <a href="/citba-static/Trade%20Practice%20Areas%20(7).pdf">
                CITBA’s summary of International Trade practice areas for young
                lawyers and law students
              </a>
            </li>
            <li>
              <a href="/citba-static/Examples%20of%20Trade%20Laws%206-2-21.pdf">
                Examples of Trade Laws
              </a>
            </li>
          </ul>
        </div>
        <Footer />
      </>
    );
  }
}

export default CareersInInternationalTrade;
