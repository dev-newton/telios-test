import React from "react";

export default function componentName(props) {
  return (
    <div className="col-md-12 remove-hor-padding App">
      <p className="hero-header-text">
        The best hotel
        <br /> you will ever need
      </p>
      <small className="hero-text">{props.hero_text}</small>
    </div>
  );
}
