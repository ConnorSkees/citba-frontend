import React, { Component } from 'react';
import "./styles.scss";
import Header from 'components/Header';
import Footer from 'components/Footer';
import Banner from "components/Banner";
import BannerBg from "assets/man-writing.jpg";

const UPCOMING_EVENTS = [
  {
    title: "CITBA Young Lawyers Committee (YLC) Holiday Happy Hour",
    content: (
      <React.Fragment>
        <p><strong>Where:</strong> SPIN Washington DC</p>
        <p><strong>When:</strong> 6-8pm on December 19</p>
      </React.Fragment>
    )
  }
];

const PAST_EVENTS = [
  {
    title: "20th CIT Judicial Conference",
    subtitle:
      "20th Judicial Conference of the United States Court of International Trade",
    content: (
      <React.Fragment>
        <p>
          <strong>Date:</strong> Monday, November 18, 2019
        </p>
        <p>
          <strong>Time:</strong> 8:00 AM - 5:30 PM
        </p>
        <p>
          <strong>Location:</strong> The Mayflower Hotel 1127 Connecticut Ave NW
          Washington, DC 20036
        </p>
      </React.Fragment>
    )
  },
  {
    title:
      "Unpacking FP&F: Inside View of CBP's Fines, Penalties, & Forfeitures Process",
    subtitle: "November 6 @ 12:00 pm - 1:30 pm",
    content: (
      <React.Fragment>
        <div>
          <p>Topic:</p>
          <p>
            The Customs Lawyers Association (CLA) and Customs and International
            Trade Bar Association (CITBA) present a luncheon event on U.S.
            Customs and Border Protection's (CBP) administrative enforcement
            process. Come listen to prominent members of the government and
            private bar unpack the enforcement process at the Port and
            Headquarters level. The discussion promises to be insightful for new
            and seasoned attorneys alike.
          </p>
          <p>Panel:</p>
          <p>
            Paul Pizzeck, Fines, Penalties and Forfeitures Officer, Port of New
            Orleans, CBP
          </p>
          <p>
            Coraly Schreiber, Branch Chief, FP&amp;F Headquarters,Office of
            Field Operations, &amp; Acting Chief, Penalties Branch, Regulations
            &amp; Rulings, Office of Trade, CBP
          </p>
          <p>
            Lawrence W. Hanson, Partner, The Law Office ofLawrence W. Hanson,
            P.C.
          </p>
          <p>Moderator:</p>
          <p>
            Kristina Frolova, Attorney-Advisor, Regulations and Rulings, Office
            of Trade, CBP
          </p>
          <p>When:</p>
          <p>Wednesday, November 6, 2019</p>
          <p>Time:</p>
          <p>12:00 p.m. - 1:30 p.m. (lunch provided)</p>
          <p>Location:</p>
          <p>
            U.S. Customs and Border Protection 717 M 90 KSt., NE, 12th Floor,
            Washington, DC 20229
          </p>
          <p>Call-In:</p>
          <p>
            To be provided to those who RSVP under the "Call-InRSVP" ticket (see
            below)., Washington, DC 20439
          </p>
          <p>RSVP:</p>
          <p>
            The event is free, but please kindly RSVP.In-person tickets are
            limited to the first twenty-five.
            RSVPat:https://fpfprocess.eventbrite.com
          </p>
        </div>
      </React.Fragment>
    )
  },
  {
    title:
      "FOURTH FALL TRADE LAW UPDATE: YEAR THREE OF U.S. TRADE AND SUPPLY CHAIN RESTRUCTURING",
    content: (
      <React.Fragment>
        <p>Date: Friday, October 25th, 2019</p>
        <p>Time: 8:00AM - 12:00PM</p>
        <p>3 Hours of In-Person CLE Credits</p>
        <p>
          <a href="https://case.edu/law/our-school/events-lectures/event-registration?eventid=420">
            REGISTER HERE
          </a>
        </p>
        <p>
          Year three of a new era in trade policy and enforcement has seen the
          United States, the key constituent andsupporter of multilateral and
          regional trade liberalization, busy with restructuring trade
          frameworks itperceives as failing to effectively address mercantilist
          policies and practices. In response to this perceivedfailure, the
          Trump Administration has aggressively enforced trade remedy laws and
          dusted off Cold War-erastatutes to force its biggest trade partners to
          the negotiating table.
        </p>
        <p>
          The "Fourth Fall Trade Law Update," a practice-orientated update, will
          bring together federal judges, trade andcustoms officials and counsel
          to examine recent policy developments and their effects on the
          planning andpractice of trade and customs law.
        </p>
        <p>
          Professor Juscelino F. Colares, associate dean of Global Legal Studies
          and the Honorable Leo M. Gordon, Judgeof the U.S. Court of
          International Trade, will engage in a one-on-one discussion on CIT
          jurisdiction andprocedure.
        </p>
        <p>
          In addition, the conference will feature two panel discussions with
          trade and customs counsel/officials fromthe Washington, D.C., New York
          City Chicago and Los Angeles. The first panel will address "Year Three
          of theTrump Trade Agenda," focusing on the fully materialized
          repercussions of the return to aggressive tradeenforcement on trade
          litigation and diplomacy. The second panel will focus on daily
          practice implications ofSection 301 and EAPA enforcement on customs
          law for domestic manufacturers and importers alike.
        </p>
      </React.Fragment>
    )
  },
  {
    title: "CITBA WINE AND CHEESE RECEPTION",
    content: (
      <React.Fragment>
        <p>Date: Tuesday, September 24, 2019</p>
        <p>
          Place: Husch Blackwell, 750 17th Street, NW, 2nd Floor Conference
          Center, Washington, DC 20006
        </p>
        <p>Time: Reception: 5:30 - 7:30 pm</p>
        <p>
          Event: Meet and greet new ITC Commissioners: The Honorable Randolph
          Stayin and The Honorable AmyKarpelBrief remarks followed by Q&amp;A
        </p>
        <p>Price: CITBA Members: Free | Non-members: $25 | Government: Free</p>
      </React.Fragment>
    )
  },
  {
    title: "CITBA WEBINAR—June 20 12:00- 1:00 pm -RSVP needed",
    content: (
      <React.Fragment>
        <h1>
          U.S. Customs and Border Protection Regulations and Rulings
          Directorate: What you have always wanted to know and never dared to
          ask!
        </h1>
        <p>
          Topic: U.S. Customs and Border Protection, Regulations &amp; Rulings
          Directorate ("R&amp;R") will present a comprehensive look at each
          Division within R&amp;R. The discussion will include who to go to and
          when depending on the needs of your client and the best legal
          practices before each Division. The discussion promises to be
          insightful for new and seasoned attorneys alike.
        </p>
        <p>Panel: Alice Kipel, Executive Director, Regulations and Rulings</p>
        <p>
          Myles Harmon, Director of the Commercial &amp; Trade Facilitation
          Division, Regulations &amp; Rulings
        </p>
        <p>
          Craig Clark, Director of the Border Security &amp; Trade Compliance
          Division, Regulations &amp; Rulings
        </p>
        <p>
          Robert Altneu, Director of the Regulations &amp; Disclosure Law
          Division, Regulations &amp; Rulings
        </p>
        <p>
          Steven Mack, Director of the National Commodity Specialist Division,
          Regulations &amp; Rulings
        </p>
        <p>Date: Thursday, June 20, 2019</p>
        <p>Time: 12:00 p.m. to 1:00 p.m. EST</p>
        <p>Location: Webinar hosted by the Law Office of Lawrence W. Hanson</p>
        <p>Call-In: Will be made available to those who RSVP</p>
        <p>
          RSVP: The event is free, but please kindly RSVP
          <a href="https://www.eventbrite.com/o/citba-11355329765?s=98220565">
            here
          </a>
        </p>
      </React.Fragment>
    )
  },
  {
    title: "November 14, 2018: CITBA YLC November Happy Hour & Speaker Event",
    content: (
      <React.Fragment>
        <p>
          Please join CITBA's Young Lawyer Committee (YLC), in partnership with
          the LGBT Professionals in International Trade (GATT DC), for a happy
          hour and speakers series. Judy Wang, Associate, Steptoe &amp; Johnson,
          will discuss recent changes by the Foreign Investment Risk Review and
          Modernization Act (FIRRMA) to the Committee on Foreign Investment in
          the United States (CFIUIS) review process.
        </p>
        <p>
          The event will take place from 5:30-7:30pm at Cortez, 1905 9th Street
          NW, Washington, DC 20001.
        </p>
      </React.Fragment>
    )
  },
  {
    title:
      "November 8, 2018: The U.S.-Mexico-Canada Agreement - What's New and What's Not in a Post-NAFTA North America?",
    content: (
      <React.Fragment>
        <p>
          A non-CLE program proudly presented by the Inter-American Affairs
          Committee of the D.C. Bar and the D.C. Bar International Law
          Community, in cooperation with the Inter-American Legal Affairs
          Committee, International Trade Committee, and International Finance
          Committee of the D.C. Bar International Law Community; American Bar
          Association Section of International Law; Association of Women in
          International Trade (WIIT); Customs and International Trade Bar
          Association (CITBA); Inter-American Bar Association (DC Chapter); and
          the Virginia State Bar International Practice Section.
        </p>
        <p>
          President Trump made renegotiation of the North American Free Trade
          Agreement (NAFTA) one of his Administration's primary trade policy
          objectives. On September 30, 2018, the three countries, the United
          States, Mexico, and Canada, announced that they had reached consensus
          on a new framework for trade in North America, which President Trump
          stated would be known as the US-Mexico-Canada Agreement (USMCA). While
          many NAFTA provisions are retained in the USMCA, there are significant
          differences relating to a number of areas, including those pertaining
          to rules of origin for automobiles, market access provisions related
          to agriculture (e.g., dairy) products, and intellectual property
          rights protection. In addition, the USMCA includes chapters relating
          to certain subjects that were not addressed in the NAFTA, including
          ones pertaining to anti-corruption, digital trade, and good regulatory
          practices. A diverse panel will discuss the similarities and
          differences between the USMCA and the NAFTA from the perspectives of
          US, Mexican, and Canadian practitioners, and they will offer their
          thoughts on the wide-ranging implications that the USMCA, once
          implemented, could hold for businesses and consumers in the three
          countries.
        </p>
        <p>
          The event will take place from 12:15 - 2:00pm at the DC Bar, 901 4th
          Street NW, Washington, DC 20001.
        </p>
        <p>Speakers:</p>
        <ul>
          <li>Irwin P. Altschuler, Partner, Greenberg Traurig, LLP</li>
          <li>
            Kira Alvarez, Principal, Vizcaya Trade Strategies (Former Deputy
            Assistant USTR for IP Enforcement)
          </li>
          <li>
            Simon V. Potter, Counsel, McCarthy Tétrault LLP (Montreal, Canada)
          </li>
          <li>
            Alvaro Santos, Professor of Law, Georgetown University Law Center
          </li>
          <li>Sharie Brown, Partner, Troutman Sanders LLP (Moderator)</li>
        </ul>
        <p>
          To access regular, in-person registration, please click{" "}
          <a href="https://protect-us.mimecast.com/s/J8U5C2kgEptZ8jMNIwlCTv">
            here
          </a>
          . To access webinar registration, please click{" "}
          <a href="https://protect-us.mimecast.com/s/5sflC31jGqC92Bn5U3oTwf">
            here
          </a>
          .
        </p>
      </React.Fragment>
    )
  },
  {
    title: "November 1, 2018: CITBA Notice of Special Presentation in NYC",
    content: (
      <React.Fragment>
        <p>
          CITBA and the United States Court of International Trade's Historical
          Society cordially invite you to a special presentation in celebration
          of the 50th anniversary of the James L. Watson Courthouse.
        </p>
        <p>
          Witness a Calendar Call, and return to procedures and practices
          employed by Plaintiff's Counsel, Customs Section Counsel, and the
          Bench.
        </p>
        <p>
          Featuring "Judge" Patrick D. Gill and a cast of attorneys at least as
          old as the courthouse, including Michael S. O'Rourke, Gilbert Lee
          Sandler, Joseph I. Liebman, and the immortal Peter Jay Baskin.
        </p>
        <p>
          This Special Presentation will begin at 3:45pm and will take place at
          the U.S. Court of International Trade, One Federal Plaza, New York, NY
          10278. It will be followed by a reception starting at 5pm in the
          library of the U.S. Court of International Trade.
        </p>
        <p>Please RSVP by October 17 to mludwikowski@ClarkHill.com.</p>
      </React.Fragment>
    )
  },
  {
    title:
      "July 12, 2018: Negotiating Trade Agreements with Ambassador Susan Schwab",
    content: (
      <React.Fragment>
        <p>
          CITBA's Young Lawyers Committee and Kelley Drye &amp; Warren LLP
          cordially invites everyone to a program about negotiating trade
          agreements. Former U.S. Trade Representative Susan Schwab will provide
          insight into the art and science of negotiating trade agreements based
          on her decades of experience in government and the private sector.
          Brooke Ringel, Senior Associate, Kelley Drye &amp; Warren LLP, will
          moderate. The event will take place from noon to 1pm at the law
          offices of Kelley Drye &amp; Warren LLP, 3050 K Street, NW, Suite 400,
          Washington, DC 20007.
        </p>
        <p>
          The event is free, but please kindly RSVP{" "}
          <a href="https://www.eventbrite.com/e/negotiating-trade-agreements-with-ambassador-susan-schwab-tickets-46859773845">
            here
          </a>{" "}
          (password: TRADE) no later than July 10, 2018. Call-in information
          will be provided when registering as a teleconference attendee.
        </p>
        <p>THIS EVENT WILL BE OFF THE RECORD AND CLOSED TO THE PRESS.</p>
      </React.Fragment>
    )
  },
  {
    title:
      "June 21, 2018: Section 232 Cases - Protecting U.S. National Security or Risking International Trade Wars?",
    content: (
      <React.Fragment>
        <p>
          The ABA Section of International Law, Customs and International Trade
          Bar Association, Inter-American Bar Association (DC Chapter), and the
          Virginia State Bar International Practice Section cordially invites
          everyone to an off-the-record, non-CLE luncheon program to discuss the
          use of Section 232 by the Trump Administration.
        </p>
        <p>
          Shortly after taking office, President Trump directed the U.S.
          Department of Commerce (DOC) to initiate investigations relating to
          imports of steel mill and aluminum articles pursuant to Section 232 of
          the Trade Expansion Act of 1962, as amended (19 U.S.C. sec. 1862).
          Ultimately, based on findings made by the DOC that imports of such
          articles threaten to impair U.S. national security, President Trump
          issued proclamations in March 2018 pursuant to which significant
          additional duties were imposed on imports of such articles. The
          Administration's launch of national security investigations under this
          little-used trade action that dates back to the Cold War - first on
          steel and aluminum products and more recently on uranium and autos -
          raises many questions as to the positive and negative effects for U.S.
          and foreign producers of the covered items, U.S. importers, and
          downstream-users in key industries such as the construction industry,
          as well as the impact on relationships with our global trading
          partners, especially the European Union, Canada, Mexico, and countries
          in Latin America. During the program, a panel of experienced
          practitioners with diverse backgrounds will discuss the new tariffs,
          the products covered, those countries exempted and those in limbo, and
          the product exclusion process. The panel will also explore WTO actions
          and threatened actions arising from this Administration's deployment
          of Section 232, Section 301, and Section 201 tariffs, and whether,
          especially in the case of Section 232, we are protecting national
          security or risking international trade wars.
        </p>
        <p>
          Further information regarding the panel and the specifics of the event
          can be found{" "}
          <a href="https://join.dcbar.org/eWeb/DynamicPage.aspx?site=dcbar&webcode=EventInfo&Reg_evt_key=1bc9f8a3-d9da-4170-b243-74613c8c3acd&RegPath=EventRegFees&FreeEvent=&Event=Section%20232%20Tariffs%20Program&FendraisingEvent=&evt_guest_limit=9999">
            here
          </a>
          .
        </p>
      </React.Fragment>
    )
  },
  {
    title: "March 27, 2018: CITBA Spring Luncheon - Developments in Trade 2018",
    content: (
      <React.Fragment>
        <p>
          CITBA cordially invites everyone to its spring luncheon to discuss
          recent developments in trade. The event will be located at the The
          Mayflower Hotel, Palm Court Ballroom, 1127 Connecticut Avenue, NW,
          Washington, DC 20036.
        </p>
        <p>
          The event will take place from noon to 2:30pm with a reception from
          noon to 12:15pm, lunch from 12:15 to 12:45pm, a luncheon speaker from
          12:45 to 1:15pm, and a panel discussion from 1:30 to 2:30pm.
        </p>
        <p>
          The luncheon speaker will be Clete Willems, Special Assistant to the
          President for International Trade, Investment and Development. The
          panel will consist of David O'Sullivan, Ambassador and Head of the EU
          Delegation in Washington, DC (invited); Junichiro Kuroda, Minister
          (Economy, Trade, Industry and Energy), Embassy of Japan; Colin Bird,
          Minister-Counsellor (Trade and Economic Policy), Embassy of Canada;
          and Fernando Pimentel, Minister-Counsellor (Economic Affairs), Embassy
          of Brazil (invited). The moderator of the panel will be Jennifer
          Hillman, Georgetown University Law Center.
        </p>
        <p>
          The cost of the event will be as follows: CITBA Members - $100;
          Non-Members - $125; Government/Students - $75.
        </p>
        <p>
          There will also be a conference dial-in for out of town attendees at a
          cost of $35 for CITBA Members and Non-Members, and $25 for
          Government/Students.
        </p>
        <p>
          Please register by March 26, 2018. After payment is made, please RSVP
          to: nithya.nagarajan@huschblackwell.com and emily.beline@fedex.com.
        </p>
        <p>THIS EVENT IS OFF THE RECORD. NO RECORDING OR PRESS.</p>
      </React.Fragment>
    )
  },
  {
    title: "November 9, 2017: CITBA Fall Meeting",
    content: (
      <React.Fragment>
        <p>
          CITBA cordially invites everyone to its Fall Meeting, where we are
          honored to have as our speaker Tim Reif, Senior Advisor at the Office
          of the United States Trade Representative. Mr. Reif advises the U.S.
          Trade Representative and other senior Administration officials on all
          global compliance, investment, and regulatory matters, as well as the
          development of legislation, legislative initiatives, and strategy.
        </p>
        <p>Cocktails and hors d'oeuvres will be served.</p>
        <p>Members: $90</p>
        <p>Government and student members: $70</p>
        <p>
          RSVP and questions to{" "}
          <a href="mailto:events@citba.org">events@citba.org</a>. To register,
          visit <a href="www.citba.org/events.php">www.citba.org/events.php</a>,
          click "buy now" and add ticket price and quantity. Event details
          can also be found there.
        </p>
      </React.Fragment>
    )
  },
  {
    title:
      "September 21, 2017: Executing an Executive Order - How Exactly Did CBP Do That?",
    content: (
      <React.Fragment>
        <p>
          On March 31, 2017, President Trump signed an Executive Order on
          Establishing Enhanced Collection and Enforcement of Antidumping and
          Countervailing Duties and Violations of Trade and Customs Law. Please
          join CITBA's Young Lawyers Committee for a lunch discussion with Troy
          Riley, Executive Director of Commercial Targeting and Enforcement
          within the Trade Remedy Law Enforcement Directorate of the Office of
          Trade at U.S. Customs and Border Protection (CBP), and learn about how
          CBP worked creatively to organize integrated project teams and the
          surprising lesson revealed throughout. The event promises to be an
          insider's look into a complicated, cutting-edge, and exciting area of
          trade.
        </p>
        <p>
          Please RSVP by September 19, 2017. Teleconferencing will be made
          available to those who RSVP.
        </p>
        <p>
          Please note: This event if off the record and closed to the press.
        </p>
        <p>Further details can be found here.</p>
      </React.Fragment>
    )
  },
  {
    title:
      'June 27, 2017: CITBA Annual Luncheon - "Navigating International Trade in 2017"',
    content: (
      <React.Fragment>
        <p>
          CITBA cordially invites everyone to its Annual Luncheon on June 27,
          2017 at the Willard Hotel. The luncheon speaker will be Kenneth Smith
          Ramos, Director of Trade and the NAFTA Office, Embassy of Mexico.
        </p>
        <p>
          The speaker will be followed by panel of Chief Counsels from the U.S.
          International Trade Commission, U.S. Customs and Border Protection,
          and U.S. Department of Commerce, and will discuss international trade
          developments for 2017.
        </p>
        <p>
          Details regarding the luncheon speaker, panelists, and registration
          can be found below.
        </p>
        <p>The deadline to RSVP is June 19, 2017 (EXTENDED).</p>
        <p>** UPDATE - DIAL-IN OPTION ADDED **</p>
        <p>Luncheon Flyer - Updated</p>
      </React.Fragment>
    )
  },
  {
    title: "March 14, 2017: Enforce and Protect Act (EAPA) Workshop",
    content: (
      <React.Fragment>
        <p>
          U.S. Customs and Border Protection (CBP) is offering a free workshop
          to provide valuable information to parties who are filing allegations
          or defending allegations such as: an opportunity to engage with CBP
          officials who enforce trade laws, specifically EAPA investigations; a
          walkthrough of a sample case with the team to learn CBP's procedures
          and the actions CBP takes to pursue an investigation; and gaining
          guidance on how to develop strong allegations and learn more about the
          role of parties in EAPA proceedings.
        </p>
        <p>Further information regarding this event can be found below.</p>
        <p>EAPA Flyer</p>
      </React.Fragment>
    )
  },
  {
    title: "February 16, 2017: Trade Policy in 2017",
    content: (
      <React.Fragment>
        <p>
          Trade was a key issue in the 2016 election. The panel will discuss the
          likely priorities and objectives of the new President and Congress in
          the trade arena in 2017. Specific topics will include potential areas
          where there may be policy changes and potential areas for bipartisan
          cooperation on trade and its effects on American jobs and
          competitiveness.
        </p>
        <p>Time:5:00 - 7:00pm</p>
        <p>
          Location:Wilmer Cutler Pickering Hale and Dorr LLP1875 Pennsylvania
          Avenue, NWWashington, DC 20006
        </p>
        <p>The panelists will include:</p>
        <ul>
          <li>
            Angela Ellard, Chief Trade Counsel and Trade Subcommittee Staff
            Director, Ways and Means Committee, U.S. House of Representatives
          </li>
          <li>
            Jason Kearns, Chief International Trade Counsel, House Ways &amp;
            Means Committee - Democratic Staff
          </li>
          <li>
            Alan M. Dunn, Partner, Law Offices of Stewart and Stewart; former
            U.S. Assistant Secretary of Commerce
          </li>
          <li>
            David J. Ross, Counsel, Wilmer Cutler Pickering Hale and Dorr LLP;
            former Associate General Counsel, Office of the U.S. Trade
            Representative
          </li>
        </ul>
        <p>
          Moderator: Jennifer M. Smith, Partner, Law Offices of Stewart and
          Stewart, and CITBA Young Lawyers Committee Member
        </p>
        <p>The panel will be followed by Q&amp;A and a networking reception.</p>
        <p>
          RSVP in person
          <a href="https://www.eventbrite.com/e/citba-young-lawyers-committee-presents-trade-policy-in-2017-tickets-31715057591">
            {" "}
            here
          </a>
          .
        </p>
        <p>
          RSVP by Teleconference{" "}
          <a href="https://www.eventbrite.com/e/citba-young-lawyers-committee-presents-trade-policy-in-2017-dial-in-tickets-31722974270">
            here
          </a>
          .
        </p>
      </React.Fragment>
    )
  },
  {
    title:
      "February 9, 2017: Understanding and Complying With Economic Sanctions in 2017",
    content: (
      <React.Fragment>
        <p>
          CITBA is proud to co-sponsor the following luncheon event with the
          D.C. Bar International Law Section:
        </p>
        <p>
          In recent years, truly remarkable changes have been made to the ways
          in which the U.S. Government utilizes economic sanctions, and further
          changes are likely under the Trump Administration. During this "off
          the record" program the Acting Director of the Office of Foreign
          Assets Control (OFAC), the former Deputy Assistant Secretary of State
          for Counter Threat Finance and Sanctions, and seasoned practitioners
          will discuss these changes and how lawyers and their clients can
          understand and comply with complex constantly evolving sanctions.
        </p>
        <p>Time: 12:30 - 2:00pm</p>
        <p>
          Location:D.C. Bar Conference Center1101 K Street N.W.Washington DC
          20005
        </p>
        <p>
          To RSVP, please click{" "}
          <a href="https://www.dcbar.org/marketplace/event-details.cfm?productcd=121707INTC%3Chttp://r20.rs6.net/tn.jsp?f=001G-BIrlAAK1FHNHceedm00tK2uN9lOLgaz6GAmply_szzGGdQsljIPHjOuhoKbn64aLb1bCUP19mStA_iMFF9IfJ9gi_N_WS0FCJDv2XZjCuJkNS070B8w-Fwb5uhW3W0-io8IgWToDqa4AReLA-Cf-j3mn5fsuwUum-JyCwYL6KhJQCCqAQfdZgcj40Cp9HMGJrgEZt5Nm_EcYrvTcfDpvJWXbc7b5iAMWqa-opgtpkPRPwlcC-_yQ==&c=jHucjvKmQLmMymvz-sMml_ZhgICza_vvLbSzCYmc9T1l9txbTWZhrA==&ch=19K71BKe534U0lLeh1T1FM8xjIBWxtduLbnGzJ0jJut3CgpLgOpsZg==%3E">
            here
          </a>
          .
        </p>
      </React.Fragment>
    )
  }
];

function Event(props) {
    const { title, subtitle, content } = props;
    return (
      <div className="event">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className="content">{content}</div>
      </div>
    );
}

class Events extends Component {
    state = {};

    render() {
        return (
          <React.Fragment>
            <Header />
            <Banner
              text="Events and Announcements"
              src={BannerBg}
              subtitle={[]}
            />
            <div className="upcoming-events">
              <h1 className="main-header">Upcoming Events</h1>
              {UPCOMING_EVENTS.map(e => (
                <Event
                  title={e.title}
                  subtitle={e.subtitle}
                  content={e.content}
                />
              ))}
            </div>
            <div className="past-events">
              <h1 className="main-header">Past Events</h1>
              {PAST_EVENTS.map(e => (
                <Event
                  title={e.title}
                  subtitle={e.subtitle}
                  content={e.content}
                />
              ))}
            </div>
            <Footer />
          </React.Fragment>
        );
    }
}

export default Events;