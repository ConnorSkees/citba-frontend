import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

import slidebg1 from "assets/carousel-image-1.jpg";
import slidebg2 from "assets/carousel-image-2.jpg";
import slidebg3 from "assets/carousel-image-3.jpg";

/*
c a b
  ^
a b c
  ^
b c a
  ^
*/

import SVG from "react-inlinesvg";
import ArrowRight from "assets/arrow-right.svg";
import ArrowLeft from "assets/arrow-left.svg";

function Slide(props) {
  const { image_path, title, text, extra } = props.slide;
  const { carousel, className } = props;
  return (
    <div
      className={`slide ${className}`}
      style={{ backgroundImage: `url(${image_path})` }}
    >
      <div className="arrow-container">
        <SVG
          src={ArrowLeft}
          className="left"
          onClick={carousel.decrementSlide}
        />
      </div>
      <div className="carousel-content">
        <h1>{title}</h1>
        <p>{text}</p>
        {extra}
      </div>
      <div className="arrow-container">
        <SVG
          src={ArrowRight}
          className="right"
          onClick={carousel.incrementSlide}
        />
      </div>
    </div>
  );
}

const SLIDES = [
  {
    image_path: slidebg3,
    title: "Customs and International Trade Bar Association",
    text:
      "Customs law, international trade law, and related matters since 1926.",
  },
  {
    image_path: slidebg2,
    title: "Interview with Incoming President Kathleen Cannon",
    text:
      "Incoming President Kathleen Cannon recently sat down with Alex Lawson and Law360 to discuss the prominent role that trade has had in the headlines recently and what her plans are for CITBA during her tenure.",
    extra: (
      <a href="https://www.law360.com/articles/1048428/new-citba-head-eager-to-lead-with-trade-in-spotlight">
        Read More
      </a>
    ),
  },
  {
    image_path: slidebg1,
    title: "Join CITBA",
    text:
      "Membership is open to all attorneys admitted to practice in any country and law students",
    extra: <Link to="/benefits/">Join Today!</Link>,
  },
];

const directions = {
  INCREMENT: 1,
  NONE: 0,
  DECREMENT: -1,
};

class Carousel extends Component {
  state = {
    currentSlide: 0,
    direction: directions.NONE,
  };

  incrementSlide = () => {
    let { currentSlide } = this.state;
    if (currentSlide === SLIDES.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    this.setState({
      currentSlide,
      direction: directions.INCREMENT,
    });
  };

  decrementSlide = () => {
    let { currentSlide } = this.state;
    if (currentSlide === 0) {
      currentSlide = SLIDES.length - 1;
    } else {
      currentSlide--;
    }
    this.setState({ currentSlide, direction: directions.DECREMENT });
  };

  prevSlideIdx = () => {
    let { currentSlide } = this.state;
    if (currentSlide === 0) {
      currentSlide = SLIDES.length - 1;
    } else {
      currentSlide--;
    }
    return currentSlide;
  };

  nextSlideIdx = () => {
    let { currentSlide } = this.state;
    if (currentSlide === SLIDES.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    return currentSlide;
  };

  render() {
    const prevSlideIdx = this.prevSlideIdx();
    const currentSlideIdx = this.state.currentSlide;
    const nextSlideIdx = this.nextSlideIdx();
    const { direction } = this.state;

    return (
      <div className="carousel">
        {SLIDES.map((s, idx) => {
          switch (idx) {
            case prevSlideIdx:
              return (
                <Slide
                  slide={s}
                  key={`${idx}`}
                  carousel={this}
                  className={`prev${
                    direction === directions.DECREMENT ? " moving" : ""
                  }`}
                />
              );
            case currentSlideIdx:
              return <Slide slide={s} carousel={this} key={`${idx}`} />;
            case nextSlideIdx:
              return (
                <Slide
                  slide={s}
                  carousel={this}
                  key={`${idx}`}
                  className={`next${
                    direction === directions.INCREMENT ? " moving" : ""
                  }`}
                />
              );
            default:
              return "";
          }
        })}
      </div>
    );
  }
}

export default Carousel;
