import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// context imports
import { UiProvider } from "./utils/UiContext";

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
      <UiProvider>
        <Cursor />
        <Router>
          <Header />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </UiProvider>
    </div>
  );
};

export default App;
