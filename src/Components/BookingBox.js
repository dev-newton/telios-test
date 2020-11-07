import React from "react";

import LeftArrow from "../assets/images/arrow-left-back.png.png";
import RightArrow from "../assets/images/arrow-right-back.png";
import Send from "../assets/images/send-white.png";

export default function BookingBox() {
  return (
    <div className="box-holder App">
      <div className="d-flex flex-row-reverse ml-auto">
        <div className="arrow-box-purple">
          <img alt="" src={RightArrow} className="arrow" />
        </div>
        <div className="arrow-box-white">
          <img alt="" src={LeftArrow} className="arrow" />
        </div>
      </div>
      <div className="box">
        <div className="row contain">
          <div className="col-2 input-holder">
            <p className="remove-hor-margin box-text">Check In Date</p>
            <input className="input" type="text" placeholder="check in date" />
          </div>
          <div className="col-2 input-holder">
            <p className="remove-hor-margin box-text">Check Out Date</p>
            <input className="input" type="text" placeholder="check out date" />
          </div>
          <div className="col-2 input-holder ">
            <p className="remove-hor-margin box-text">Rooms</p>
            <input className="input" type="text" placeholder="rooms" />
          </div>
          <div className="col-2 button-holder">
            <div className="send-box">
              <img alt="" src={Send} className="send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
