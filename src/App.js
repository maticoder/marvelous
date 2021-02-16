import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { motion } from "framer-motion";

// import custom hooks
import useMousePosition from "./hooks/useMousePosition";

// import context
import { UiProvider, UiContext } from "./utils/UiContext";

// components imports
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

// pages imports
import Home from "./pages/Home/Home";

import "./App.scss";

const App = () => {
  const { x, y } = useMousePosition();

  const { cursor } = useContext(UiContext);

  return (
    <div className="app">
      <motion.div
        animate={{
          x: x - 20,
          y: y - 20,
          scale: cursor ? 1.2 : 1,
          opacity: cursor ? 0.8 : 0,
        }}
        transition={{
          ease: "linear",
          duration: 0.2,
        }}
        className="cursor"
      ></motion.div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
