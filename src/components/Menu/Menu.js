import React, { useEffect, useMemo, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import $ from "jquery";
import { motion, AnimatePresence } from "framer-motion";

import { UiContext } from "../../utils/UiContext";

import Panels from "../Panels/Panels";
import CursorHoverBox from "../CursorHoverBox/CursorHoverBox";

import { ReactComponent as Close } from "../../images/close.svg";

const Menu = () => {
  const timeline = useMemo(() => gsap.timeline(), []);

  const location = useLocation();

  const { menu, setMenu } = useContext(UiContext);

  useEffect(() => {
    setMenu(false);
  }, [location]);

  useEffect(() => {
    $("body").toggleClass("shrink", menu);
  }, [menu]);

  return (
    <AnimatePresence>
      {menu && (
        <>
          <motion.div
            initial={{ visibility: "hidden" }}
            exit={{
              visibility: "hidden",
              transition: { delay: 1 },
            }}
            animate={{
              visibility: "visible",
              transition: { delay: 1 },
            }}
            className="menu menu-active"
          >
            <div className="container">
              <div className="menu-icon" onClick={() => setMenu(false)}>
                <Close />
              </div>
            </div>
            <div className="menu-content">
              <Link to="/">
                <h1>home</h1>
              </Link>
              <Link to="/tokyo">
                <h1>tokyo</h1>
              </Link>
            </div>
          </motion.div>
          <Panels />
        </>
      )}
    </AnimatePresence>
  );
};

Menu.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};

export default Menu;
