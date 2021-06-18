import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UiContext } from "../../utils/UiContext";

import CursorHoverBox from "../CursorHoverBox/CursorHoverBox";
import TextReveal from "../TextReveal/TextReveal";

const Navbar = () => {
  const { setMenu } = useContext(UiContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <NavLink to="/" exact>
              <TextReveal background="black" duration={1}>
                MARVELOUS.
              </TextReveal>
            </NavLink>
          </div>
          <TextReveal background="black" duration={1}>
            <div className="hamburger" onClick={() => setMenu(true)}>
              <div className="hamburger-menu">
                <span></span>
                <span></span>
              </div>
            </div>
          </TextReveal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
