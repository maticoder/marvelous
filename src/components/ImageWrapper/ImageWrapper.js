import React from "react";
import PropTypes from "prop-types";

import "./ImageWrapper.scss";

const ImageWrapper = ({ src, alt, background }) => {
  return (
    <div className="imageWrapper">
      <>
        <div className="imageWrapper__container">
          <img src={src} alt={alt} />
          <div
            className="imageWrapper__cover"
            style={{ backgroundColor: background }}
          ></div>
        </div>
      </>
    </div>
  );
};

ImageWrapper.defaultProps = {
  background: "black",
};

ImageWrapper.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  background: PropTypes.string,
};

export default ImageWrapper;
