import React from "react";

import Slider from "../Slider/Slider";

const Cases = () => {
  return (
    <div className="cases">
      <Slider unit="vw" offset={33.33}>
        <div className="cases-box cases-box-one"></div>
        <div className="cases-box cases-box-two"></div>
        <div className="cases-box cases-box-three"></div>
        <div className="cases-box cases-box-four"></div>
        <div className="cases-box cases-box-five"></div>
        <div className="cases-box cases-box-six"></div>
        <div className="cases-box cases-box-seven"></div>
      </Slider>
    </div>
  );
};

export default Cases;
