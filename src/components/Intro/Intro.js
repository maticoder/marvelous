import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as RightArrow } from "../../images/arrow-right.svg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Creating unique brands is</span>
            </div>
            <div className="line">
              <span>what we do.</span>
            </div>
          </h2>
          <div className="button-arrow">
            <Link to="/about">
              More about us <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
