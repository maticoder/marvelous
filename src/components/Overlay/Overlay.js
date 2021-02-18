import React from "react";
import { motion } from "framer-motion";

const Overlay = () => {
  return (
    <>
      {
        <motion.div
          animate={{ display: "none", transition: { delay: 1 } }}
          exit={{ display: "initial" }}
          transition={{ duration: 0 }}
          className="blocked"
        ></motion.div>
      }
      <motion.div
        initial={{ y: "0vh" }}
        animate={{
          y: "-100vh",
          transition: { duration: 0.1 },
        }}
        exit={{ y: ["100vh", "0vh"] }}
        transition={{ duration: 1 }}
        className="overlay"
      ></motion.div>
    </>
  );
};

export default Overlay;
