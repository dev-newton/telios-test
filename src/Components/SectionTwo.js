import React from "react";

import Outdoor from "../assets/images/outdoor.png";
import RightArrow from "../assets/images/arrow-right-white.png";

export default function SectionTwo(props) {
  return (
    <div style={props.style} className="App">
      <div className="row section-2 remove-hor-padding remove-hor-margin ">
        <div className="col-md-6 section2-left remove-hor-padding">
          <h4 className="about-us remove-hor-margin">ABOUT US</h4>
          <h3 className="about-us-header">
            Trust and quality <br />
            are our atuus
          </h3>
          <h6 className="about-us-header-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </h6>

          <h6 className="about-us-header-text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h6>

          <div className="read-more-box">
            <div className="row read-more-holder">
              <h6 className="read-more-text">read more</h6>
              <img alt="" src={RightArrow} className="arrow" />
            </div>
          </div>
        </div>
        <div className=" col-md-6 remove-hor-padding remove-hor-margin ">
          <img
            alt=""
            src={Outdoor}
            className="outdoor remove-hor-padding remove-hor-margin"
          />
        </div>
      </div>
    </div>
  );
}
