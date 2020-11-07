import React from "react";
import { Link } from "react-router-dom";

import Facebook from "../assets/images/fb.png";
import Twitter from "../assets/images/twt.png";
import Google from "../assets/images/goog.png";

import Mail from "../assets/images/maill.png";
import Phone from "../assets/images/phonee.png";
import Map from "../assets/images/map.png";

export default function componentName() {
  return (
    <div class="footer">
      <div className="App row section-8">
        <div className="col-md-3">
          <h4 className="footer-header">Zetta Hotels</h4>
          <p className="footer-header-text">
            Our hotel is an image of quality and <br />
            profesionalism combined with hard <br />
            work andprecision. You can expect <br />
            only the best services from our staff.
          </p>
          <div className="row">
            <img alt="" src={Facebook} className="logo-sm" />
            <img alt="" src={Twitter} className="logo-sm" />
            <img alt="" src={Google} className="logo-sm" />
          </div>
        </div>
        <div className="col-md-2" />
        <div className="col-md-2">
          <h4 className="footer-header1">Useful links</h4>
          <p className="footer-header-text">
            <Link to="/" className="footer-link">
              Blog
            </Link>
            <br />
            <Link to="/" className="footer-link">
              Rooms
            </Link>
            <br />
            <Link to="/" className="footer-link">
              Gift Card
            </Link>
            <br />
            <Link to="/" className="footer-link">
              Testimonials
            </Link>
          </p>
        </div>
        <div className="col-md-2">
          <h4 className="footer-header1">Privacy</h4>
          <p className="footer-header-text">
            <Link to="/" className="footer-link">
              Career
            </Link>
            <br />
            <Link to="/" className="footer-link">
              About Us
            </Link>
            <br />
            <Link to="/" className="footer-link">
              Contact Us
            </Link>
            <br />
            <Link to="/" className="footer-link">
              Services
            </Link>
          </p>
        </div>
        <div className="col-md-2">
          <h4 className="footer-header1">Contact Info</h4>
          <p className="footer-header-text">
            <div className="row d-flex align-items-center">
              <img alt="" src={Mail} className="logo-sm1 m-btm" />
              <p className="social ">example@yahoo.com</p>
            </div>
            <div className="row d-flex align-items-center">
              <img alt="" src={Phone} className="logo-sm1 m-btm" />
              <p className="social ">+0 320 422 4254</p>
            </div>
            <div className="row d-flex align-items-center">
              <img alt="" src={Map} className="logo-sm1 m-btm" />
              <p className="social ">Main Str Chicago Ilinois</p>
            </div>
          </p>
        </div>

        <div className="row mt-5">
          <div className="col-md-9 footer-copy">
            <p>
              Copyright ©2020 All rights reserved | This template is made with
              love by <span className="footer-link ">Marian</span>{" "}
            </p>
          </div>
          <div className="col-md-1">
            <Link className="footer-link portfolioname" to="/">
              www.portfolioname.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
