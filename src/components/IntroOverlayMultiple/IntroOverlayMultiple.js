import React from "react";

const IntroOverlayMultiple = ({ count }) => {
  return (
    <div className="intro-overlay">
      <div className="top">
        <div className="overlay-top"></div>
        <div className="overlay-top"></div>
        <div className="overlay-top"></div>
      </div>
      <div className="bottom">
        {[...new Array(count)].map((e, i) => (
          <div key={i} className="overlay-bottom"></div>
        ))}
      </div>
    </div>
  );
};

export default IntroOverlayMultiple;
