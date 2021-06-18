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
              <span>Jobs fill your pockets,</span>
            </div>
            <div className="line">
              <span>adventures fill your soul.</span>
            </div>
          </h2>
          <div className="button-arrow">
            <Link to="/tokyo">
              More about us <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
