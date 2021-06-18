import React from "react";

import Case from "../Case/Case";
import Slider from "../Slider/Slider";

const Cases = ({ cases }) => {
  return (
    <div className="cases">
      <Slider unit="vw" offset={33.33}>
        {cases.map((c) => (
          <Case
            key={c.id}
            title={c.title}
            subtitle={c.subtitle}
            src={c.img}
            to={c.to}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Cases;
