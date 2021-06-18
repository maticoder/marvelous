import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function ImageReveal({ src, alt, property, background }) {
  return (
    <motion.div animate={{ visibility: "visible" }} className="imageReveal">
      <>
        <div className="imageReveal__container">
          <motion.img
            initial={{ scale: 1.6 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 1.4 }}
            src={src}
            alt={alt}
          />
          <motion.div
            animate={{ [property]: "0%" }}
            transition={{ delay: 1.5, duration: 1 }}
            className="imageReveal__cover"
            style={{ backgroundColor: background }}
          ></motion.div>
        </div>
      </>
    </motion.div>
  );
}

ImageReveal.defaultProps = {
  property: "width",
  background: "black",
};

ImageReveal.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  property: PropTypes.string,
  background: PropTypes.string,
  imageTransition: PropTypes.shape({
    delay: PropTypes.number,
    duration: PropTypes.number,
  }),
  coverTransition: PropTypes.shape({
    delay: PropTypes.number,
    duration: PropTypes.number,
  }),
};

export default ImageReveal;
