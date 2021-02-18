import React, { useState, useEffect, useMemo } from "react";
import { gsap } from "gsap";

import Intro from "../../components/Intro/Intro";
import Cases from "../../components/Cases/Cases";
import IntroOverlay from "../../components/IntroOverlay/IntroOverlay";

const cases = [1, 2, 3, 4, 5, 6, 7];

const Home = () => {
  const [animationEnd, setAnimationEnd] = useState(false);

  const timeline = useMemo(() => gsap.timeline(), []);

  useEffect(() => {
    timeline
      .from(".line span", {
        y: 100,
        duration: 1.8,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      })
      .to(".overlay-top", {
        height: 0,
        duration: 1.6,
        ease: "expo.inOut",
        stagger: 0.4,
      })
      .to(".overlay-bottom", {
        width: 0,
        duration: 1.6,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: 0.2,
        onComplete: () => setAnimationEnd(true),
      });
  }, [timeline]);

  return (
    <>
      {!animationEnd && <IntroOverlay count={cases.length} />}
      <Intro />
      <Cases cases={cases} />
    </>
  );
};

export default Home;
