import React from "react";

import Pic1 from "../assets/images/pic1.png";
import Pic2 from "../assets/images/pic2.png";
import Pic3 from "../assets/images/pic3.png";
import Pic4 from "../assets/images/pic4.png";

import LeftArrowBlack from "../assets/images/arrow-left-back.png.png";
import RightArrowBlack from "../assets/images/arrow-right-back.png";

export default function PictureSection() {
  return (
    <div>
      <div className="App">
        <h4 className="section-7 about-us remove-hor-margin">PHOTOS</h4>
        <h3 className="about-us-header">
          See our latest photos
          <br /> from restaurant and hotel
        </h3>
      </div>
      <div className="row picture-row remove-hor-margin remove-hor-padding">
        <img
          alt=""
          src={Pic1}
          className="pic col-md-3 remove-hor-margin remove-hor-padding"
        />
        <img
          alt=""
          src={Pic2}
          className="pic col-md-3 remove-hor-margin remove-hor-padding"
        />
        <img
          alt=""
          src={Pic3}
          className="pic col-md-3 remove-hor-margin remove-hor-padding"
        />
        <img
          alt=""
          src={Pic4}
          className="pic col-md-3 remove-hor-margin remove-hor-padding"
        />
        <div className="arrow-box-white6">
          <img alt="" src={LeftArrowBlack} className="arrow6" />
        </div>
        <div className="arrow-box-white7">
          <img alt="" src={RightArrowBlack} className="arrow6" />
        </div>
      </div>
    </div>
  );
}
