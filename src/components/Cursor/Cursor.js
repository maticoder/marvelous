import React, { useContext } from "react";
import { motion } from "framer-motion";

import { UiContext } from "../../utils/UiContext";

import useMousePosition from "../../hooks/useMousePosition";

const Cursor = () => {
  const { x, y } = useMousePosition();

  const { cursor } = useContext(UiContext);

  return (
    <motion.div
      initial={{
        display: "none",
      }}
      animate={{
        x: x - 20,
        y: y - 20,
        scale: cursor ? 1.2 : 1,
        opacity: cursor ? 0.8 : 0,
        display: cursor ? "initial" : "none",
      }}
      transition={{
        ease: "linear",
        duration: 0.2,
        display: {
          delay: cursor ? 0 : 0.4,
        },
      }}
      className="cursor"
    ></motion.div>
  );
};

export default Cursor;
