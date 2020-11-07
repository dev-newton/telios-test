import React from "react";

import LeftArrowGrey from "../assets/images/arrow-right -grey.png";
import Hotel from "../assets/images/hotel.png";
import RightArrowPurple from "../assets/images/arrow-right-purple.png";

export default function SectionThree() {
  return (
    <div className="section-3 remove-hor-padding remove-hor-margin">
      <div className="leaves" />
      <div className="App holder">
        <h4 className="about-us1">ABOUT US</h4>
        <h3 className="about-us-header1">
          We bring you the <br /> finest details
        </h3>
      </div>
      <div className="row remove-hor-padding remove-hor-margin">
        <div className="arrow-box-white1">
          <img alt="" src={LeftArrowGrey} className="arrow" />
        </div>
        <div className="col-md-2 card1">
          <div className="circle">
            <img alt="" src={Hotel} className="hotel" />
          </div>
          <h6 className="card-text">
            Free Wifi <br />
            to stay connected
          </h6>
          <h6 className="card-text-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </h6>
        </div>
        <div className="col-md-2 card2">
          <div className="circle">
            <img alt="" src={Hotel} className="hotel" />
          </div>
          <h6 className="card-text">
            4K Television and <br /> Netflix included
          </h6>
          <p className="card-text-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="col-md-2 card3">
          <div className="circle">
            <img alt="" src={Hotel} className="hotel" />
          </div>
          <h6 className="card-text">
            Span zone where <br /> you can chill
          </h6>
          <p className="card-text-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="col-md-2 card4">
          <div className="circle">
            <img alt="" src={Hotel} className="hotel" />
          </div>
          <h6 className="card-text1">Spacious rooms for awesome parties</h6>
          <p className="card-text-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="arrow-box-white2">
          <img alt="" src={RightArrowPurple} className="arrow" />
        </div>
      </div>
    </div>
  );
}
