import React from "react";

import Navbar from "../Components/Navbar";
import HeroImage from "../Components/HeroImage";
import HeroText from "../Components/HeroText";
import Bed from "../assets/images/bed.png";

import SectionTwo from "../Components/SectionTwo";
import SectionThree from "../Components/SectionThree";
import SectionFour from "../Components/SectionFour";
import PictureSection from "../Components/PictureSection";
import Footer from "../Components/Footer";

const header_text = "About Us";
const text = "Home | About US ";

export default function AboutUs() {
  return (
    <div>
      <HeroImage className="hero-image1" />
      <Navbar />
      <HeroText
        style={{ marginTop: 100 }}
        hero_header_text={header_text}
        hero_text={text}
      />
      <SectionTwo style={{ marginTop: 180 }} />
      <SectionThree />
      <SectionFour image={Bed} />

      <PictureSection />
      <Footer />
    </div>
  );
}
