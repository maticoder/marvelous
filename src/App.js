import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components imports
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Navigation from "./components/Navigation/Navigation";
import Overlay from "./components/Overlay/Overlay";
import Menu from "./components/Menu/Menu";

// pages imports
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Tokyo from "./pages/Tokyo/Tokyo";

import "./App.scss";

gsap.registerPlugin(ScrollTrigger);

const OverlayComponent = (Component) => (props) => {
  return (
    <>
      <Overlay />
      <Component {...props} />
    </>
  );
};

const withHeader = (Component) => (props) => {
  return (
    <>
      <Header />
      <Component {...props} />
    </>
  );
};

const withNavbar = (Component) => (props) => {
  return (
    <>
      <Navbar />
      <Component {...props} />
    </>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Cursor />
      <Menu />
      {/* <Header /> */}
      <AnimatePresence exitBeforeEnter={true}>
        <Switch location={location} key={location.pathname}>
          <Route
            path="/"
            exact
            component={OverlayComponent(withHeader(Home))}
          />
          <Route
            path="/about"
            component={OverlayComponent(withNavbar(About))}
          />
          <Route
            path="/tokyo"
            component={OverlayComponent(withNavbar(Tokyo))}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
