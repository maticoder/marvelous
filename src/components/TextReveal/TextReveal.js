import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function TextReveal({ children, duration, className, background }) {
  const [end, setEnd] = useState(false);

  return (
    <span className={`textReveal ${className || ""}`}>
      <span className="textReveal-text">{children}</span>
      <motion.span
        animate={{ width: "0%" }}
        transition={{ delay: duration + 0.5 }}
        className="textReveal-initialCover"
        // style={{ backgroundColor: background }}
      ></motion.span>
      <motion.span
        onAnimationComplete={() => setEnd(true)}
        animate={{
          width: !end ? "100%" : "0%",
        }}
        transition={{ duration: duration, delay: !end ? 0.5 : 0 }}
        className={`textReveal-coverGray textReveal-coverGray--${
          !end ? "left" : "right"
        }`}
      ></motion.span>
    </span>
  );
}

TextReveal.propTypes = {
  duration: PropTypes.number,
  className: PropTypes.string,
  background: PropTypes.string,
};

export default TextReveal;
