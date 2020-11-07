import React from "react";

export default function HeroText(props) {
  return (
    <div className="col-md-12 remove-hor-padding App">
      <p style={props.style} className="hero-header-text">
        {props.hero_header_text}
      </p>
      <small className="hero-text">{props.hero_text}</small>
    </div>
  );
}
