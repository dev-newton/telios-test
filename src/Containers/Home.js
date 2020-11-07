import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import HeroImage from "../Components/HeroImage";
import HeroText from "../Components/HeroText";
import BookingBox from "../Components/BookingBox";
import PictureSection from "../Components/PictureSection";
import SectionTwo from "../Components/SectionTwo";
import SectionThree from "../Components/SectionThree";
import SectionFour from "../Components/SectionFour";

import RightArrow from "../assets/images/arrow-right-white.png";
import FoodOne from "../assets/images/food1.png";
import FoodTwo from "../assets/images/food2.png";
import FoodThree from "../assets/images/food4.png";
import FoodFive from "../assets/images/food5.png";
import FoodSix from "../assets/images/food6.png";

import Facebook from "../assets/images/fb.png";
import Twitter from "../assets/images/twt.png";
import Google from "../assets/images/goog.png";

import Mail from "../assets/images/maill.png";
import Phone from "../assets/images/phonee.png";
import Map from "../assets/images/map.png";

export default function Home() {
  return (
    <div>
      <HeroImage />
      <Navbar />
      <HeroText />
      <BookingBox />
      <SectionTwo />
      <SectionThree />
      <SectionFour />

      <div className="App">
        <h4 className="section-5 about-us remove-hor-margin">RESTAURANT</h4>
        <h3 className="about-us-header">
          Explore our menu <br /> and eat what you want
        </h3>
        <div className="row foods remove-hor-padding remove-hor-margin">
          <div className="food-margin1 remove-hor-padding remove-hor-margin">
            <div className="row remove-hor-padding remove-hor-margin">
              <div className="col-md-4 remove-hor-padding remove-hor-margin">
                <img alt="" src={FoodOne} className="food-one" />
              </div>
              <div className="col-md-8 food-holder remove-hor-padding remove-hor-margin">
                <h5 className="food-header">FOOD</h5>
                <h5 className="food-header-title">Fresh fish and onions</h5>
                <h6 className="food-header-text">
                  Fresh food directly from our
                  <br /> restaurant ready coocked for you <br />
                  and you familly
                </h6>
                <div className="arrow-box-white5">
                  <img alt="" src={RightArrow} className="arrow2" />
                </div>
              </div>
            </div>
          </div>

          <div className="food-margin remove-hor-padding remove-hor-margin">
            <div className="row remove-hor-padding remove-hor-margin">
              <div className="col-md-4 remove-hor-padding remove-hor-margin">
                <img alt="" src={FoodTwo} className="food-one" />
              </div>
              <div className="col-md-8 food-holder remove-hor-padding remove-hor-margin">
                <h5 className="food-header">FOOD</h5>
                <h5 className="food-header-title">Fresh fish and onions</h5>
                <h6 className="food-header-text">
                  Fresh food directly from our
                  <br /> restaurant ready coocked for you <br />
                  and you familly
                </h6>
                <div className="arrow-box-white5">
                  <img alt="" src={RightArrow} className="arrow2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row foods1 remove-hor-padding remove-hor-margin">
          <div className="food-margin1 remove-hor-padding remove-hor-margin">
            <div className="row remove-hor-padding remove-hor-margin">
              <div className="col-md-4 remove-hor-padding remove-hor-margin">
                <img alt="" src={FoodTwo} className="food-one" />
              </div>
              <div className="col-md-8 food-holder remove-hor-padding remove-hor-margin">
                <h5 className="food-header">FOOD</h5>
                <h5 className="food-header-title">Fresh fish and onions</h5>
                <h6 className="food-header-text">
                  Fresh food directly from our
                  <br /> restaurant ready coocked for you <br />
                  and you familly
                </h6>
                <div className="arrow-box-white5">
                  <img alt="" src={RightArrow} className="arrow2" />
                </div>
              </div>
            </div>
          </div>

          <div className="food-margin remove-hor-padding remove-hor-margin">
            <div className="row remove-hor-padding remove-hor-margin">
              <div className="col-md-4 remove-hor-padding remove-hor-margin">
                <img alt="" src={FoodOne} className="food-one" />
              </div>
              <div className="col-md-8 food-holder remove-hor-padding remove-hor-margin">
                <h5 className="food-header">FOOD</h5>
                <h5 className="food-header-title">Fresh fish and onions</h5>
                <h6 className="food-header-text">
                  Fresh food directly from our
                  <br /> restaurant ready coocked for you <br />
                  and you familly
                </h6>
                <div className="arrow-box-white5">
                  <img alt="" src={RightArrow} className="arrow2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="App">
        <h4 className="section-6 about-us remove-hor-margin">BLOG</h4>
        <h3 className="about-us-header">
          Read our newest blog <br /> post right away
        </h3>
        <div class="card-deck secc">
          <div class="card">
            <img alt="" src={FoodThree} class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">FOOD AND LIFE</h5>
              <h5 class="card-title-text">Succed in hotel business</h5>
              <p class="card-text">
                Fresh food directly from our <br /> restaurant ready coocked for
                you
              </p>
            </div>
          </div>
          <div class="card">
            <img alt="" src={FoodFive} class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">COOKING</h5>
              <h5 class="card-title-text">Cooking delicious food</h5>
              <p class="card-text">
                Fresh food directly from our <br /> restaurant ready coocked for
                you
              </p>
            </div>
          </div>
          <div class="card">
            <img alt="" src={FoodSix} class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">FRUITS</h5>
              <h5 class="card-title-text">Getting fresh fruits</h5>
              <p class="card-text">
                Fresh food directly from our <br /> restaurant ready coocked for
                you
              </p>
            </div>
          </div>
        </div>
        <div class="card-deck secc1">
          <div class="card">
            <img alt="" src={FoodThree} class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">FOOD AND LIFE</h5>
              <h5 class="card-title-text">Succed in hotel business</h5>
              <p class="card-text">
                Fresh food directly from our <br /> restaurant ready coocked for
                you
              </p>
            </div>
          </div>
          <div class="card">
            <img alt="" src={FoodFive} class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">COOKING</h5>
              <h5 class="card-title-text">Cooking delicious food</h5>
              <p class="card-text">
                Fresh food directly from our <br /> restaurant ready coocked for
                you
              </p>
            </div>
          </div>
          <div class="card">
            <img alt="" src={FoodSix} class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">FRUITS</h5>
              <h5 class="card-title-text">Getting fresh fruits</h5>
              <p class="card-text">
                Fresh food directly from our <br /> restaurant ready coocked for
                you
              </p>
            </div>
          </div>
        </div>
      </div>

      <PictureSection />
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
    </div>
  );
}
