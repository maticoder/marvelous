import React from "react";
import { NavLink } from "react-router-dom";

import CursorHoverBox from "../CursorHoverBox/CursorHoverBox";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <CursorHoverBox>
            <div className="logo">
              <NavLink to="/" exact>
                MARVELOUS.
              </NavLink>
            </div>
          </CursorHoverBox>
          <CursorHoverBox>
            <div className="hamburger">
              <div className="hamburger-menu">
                <span></span>
                <span></span>
              </div>
            </div>
          </CursorHoverBox>
        </div>
      </div>
    </div>
  );
};

export default Header;
