import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { UiContext } from "../../utils/UiContext";

import CursorHoverBox from "../CursorHoverBox/CursorHoverBox";

const Header = () => {
  const { setMenu } = useContext(UiContext);

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
            <div className="hamburger" onClick={() => setMenu(true)}>
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

Header.propTypes = {
  setActive: PropTypes.func,
};

export default Header;
