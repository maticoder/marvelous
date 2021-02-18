import React, { useState } from "react";
import { motion } from "framer-motion";

import { ReactComponent as ArrowLeft } from "../../images/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../images/arrow-right.svg";

const Slider = ({ unit, offset, children }) => {
  const [position, setPosition] = useState(0);

  return (
    <div className="slider">
      {children.map((child, index) => (
        <motion.div
          key={index}
          animate={{ x: `${position + index * offset}${unit}` }}
          className="box"
        >
          {child}
        </motion.div>
      ))}
      <span
        className={`arrow arrow-left ${position === 0 ? "arrow-disabled" : ""}`}
        onClick={
          position !== 0
            ? () => setPosition((position) => position + offset)
            : null
        }
      >
        <ArrowLeft />
      </span>
      <span
        className={`arrow arrow-right ${
          position === -(children.length - 3) * 33.33 ? "arrow-disabled" : ""
        }`}
        onClick={
          position !== -(children.length - 3) * 33.33
            ? () => setPosition((position) => position - offset)
            : null
        }
      >
        <ArrowRight />
      </span>
    </div>
  );
};

export default Slider;
