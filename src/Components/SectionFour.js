import React from "react";

import Stairs from "../assets/images/stairs1.png";
import Man from "../assets/images/man.png";

import LeftArrowBlack from "../assets/images/arrow-left-back.png.png";
import RightArrowBlack from "../assets/images/arrow-right-back.png";

export default function SectionFour() {
  return (
    <div className="row section-4 remove-hor-padding remove-hor-margin ">
      <div className="App-left col-md-6  section2-left remove-hor-padding">
        <h4 className="about-us remove-hor-margin">TESTIMONIALS</h4>
        <h3 className="about-us-header">
          We trust our customers <br />
          and they trust us too
        </h3>
        <div className="row user-holder">
          <img
            alt=""
            src={Man}
            className="man remove-hor-padding remove-hor-margin"
          />
          <div>
            <h6 className="john">John Doe</h6>
            <h6 className="it-eng">IT Engineer</h6>
          </div>
        </div>

        <h6 className="john-text">
          I'm very glad I had the opportunity to visit this <br /> hotel. The
          stuff is very friendly and I will definetly <br />
          visit the hotel again next year.
        </h6>

        <div className="row">
          <div className="dot" />
          <div className="dot-purple" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="arrow-box-white3">
          <img alt="" src={LeftArrowBlack} className="arrow1" />
        </div>
      </div>
      <div className=" col-md remove-hor-padding remove-hor-margin ">
        <img
          alt=""
          src={Stairs}
          className="stairs remove-hor-padding remove-hor-margin"
        />
        <div className="arrow-box-white4">
          <img alt="" src={RightArrowBlack} className="arrow1" />
        </div>
      </div>
    </div>
  );
}
