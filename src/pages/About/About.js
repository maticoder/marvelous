import React, { useEffect, useMemo } from "react";
import { gsap } from "gsap";

import { Link } from "react-router-dom";

const About = () => {
  const timeline = useMemo(() => gsap.timeline(), []);

  useEffect(() => {
    gsap.set(".about h1", {
      opacity: 0,
    });

    timeline.to(".about h1", {
      duration: 1.2,
      y: -100,
      opacity: 1,
      delay: 1,
    });
  }, [timeline]);

  return (
    <div className="about">
      <h1>about page</h1>
      <Link to="/">Go</Link>
    </div>
  );
};

export default About;
