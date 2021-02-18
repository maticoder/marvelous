import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// context imports
import { UiProvider } from "./utils/UiContext";

// components imports
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Overlay from "./components/Overlay/Overlay";

// pages imports
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import "./App.scss";

const OverlayComponent = (Component) => (props) => {
  return (
    <>
      <Overlay />
      <Component {...props} />
    </>
  );
};

const App = () => {
  return (
    <div className="app">
      <UiProvider>
        <Cursor />
        <Router>
          <Route
            render={({ location }) => (
              <>
                <Header />
                <AnimatePresence exitBeforeEnter={true}>
                  <Switch location={location} key={location.pathname}>
                    <Route path="/" exact component={OverlayComponent(Home)} />
                    <Route path="/about" component={OverlayComponent(About)} />
                  </Switch>
                </AnimatePresence>
              </>
            )}
          />
        </Router>
      </UiProvider>
    </div>
  );
};

export default App;
