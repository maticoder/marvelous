import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

import { ReactComponent as ArrowLeft } from "../../images/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../images/arrow-right.svg";

const Slider = ({ unit, offset, children }) => {
  const [position, setPosition] = useState(0);

  const leftArrowCondition = useMemo(() => position === 0, [position]);
  const rightArrowCondition = useMemo(
    () => position === -(children.length - 3) * 33.33,
    [position, children.length]
  );

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
        className={`arrow arrow-left ${
          leftArrowCondition ? "arrow-disabled" : ""
        }`}
        onClick={
          !leftArrowCondition
            ? () => setPosition((position) => position + offset)
            : null
        }
      >
        <ArrowLeft />
      </span>
      <span
        className={`arrow arrow-right ${
          rightArrowCondition ? "arrow-disabled" : ""
        }`}
        onClick={
          !rightArrowCondition
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
