import React from "react";

import Case from '../Case/Case';
import Slider from "../Slider/Slider";

const Cases = ({cases}) => {
  return (
    <div className="cases">
      <Slider unit="vw" offset={33.33}>
        {cases.map(c => <Case title={c.title} subtitle={c.subtitle} src={c.img} />)}
      </Slider>
    </div>
  );
};

export default Cases;
