import React from "react";

import Navbar from "../Components/Navbar";
import HeroImage from "../Components/HeroImage";
import HeroText from "../Components/HeroText";
import BookingBox from "../Components/BookingBox";
import SectionTwo from "../Components/SectionTwo";
import SectionThree from "../Components/SectionThree";
import SectionFour from "../Components/SectionFour";
import PictureSection from "../Components/PictureSection";
import Footer from "../Components/Footer";

import Stairs from "../assets/images/stairs1.png";
import RightArrow from "../assets/images/arrow-right-white.png";
import FoodOne from "../assets/images/food1.png";
import FoodTwo from "../assets/images/food2.png";
import FoodThree from "../assets/images/food4.png";
import FoodFive from "../assets/images/food5.png";
import FoodSix from "../assets/images/food6.png";

const header_text = "The best hotel \n you will ever need";

const text =
  "Lorem ipsum dolor sit amet, consectetur \nadipiscing elit sed do eiusmod tempor incididunt\n ut labore et dolore magna aliqua. Ut enim ad";

export default function Home() {
  return (
    <div>
      <HeroImage className="hero-image" />
      <Navbar />
      <HeroText hero_header_text={header_text} hero_text={text} />
      <BookingBox />
      <SectionTwo />
      <SectionThree />
      <SectionFour image={Stairs} />

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
      <Footer />
    </div>
  );
}
