import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components imports
import Navigation from "./components/Navigation/Navigation";

// pages imports
import Home from "./pages/Home/Home";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
