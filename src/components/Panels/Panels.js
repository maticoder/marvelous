import React, { useState } from "react";
import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const Panels = () => {
  return (
    <>
      <motion.div
        initial={{
          height: 0,
        }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          top: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="left-panel-background"
      ></motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className="right-panel-background"
      ></motion.div>
    </>
  );
};

export default Panels;
