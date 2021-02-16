import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components imports
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

// pages imports
import Home from "./pages/Home/Home";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Cursor />
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
