import React, { useState, useEffect, useMemo } from "react";
import { gsap } from "gsap";

import Intro from "../../components/Intro/Intro";
import Cases from "../../components/Cases/Cases";
import IntroOverlay from "../../components/IntroOverlay/IntroOverlay";

import TokyoImage from "../../images/tokyo-min.png";
import ParisImage from "../../images/paris-min.png";
import BarcelonaImage from "../../images/barcelona-min.png";
import RomeImage from "../../images/rome-min.png";
import AmsterdamImage from "../../images/amsterdam-min.png";

const cases = [
  {
    id: 1,
    subtitle: "Tokyo",
    title: "Tokyo is enigmatic, it is the heart of that riddle",
    img: TokyoImage,
    to: "/tokyo",
  },
  {
    id: 2,
    subtitle: "Paris",
    title: "It is perfectly possible to be enamoured of Paris",
    img: ParisImage,
    to: "/paris",
  },
  {
    id: 3,
    subtitle: "Barcelona",
    title: "To me, Madrid is a man and Barcelona is a woman",
    img: BarcelonaImage,
    to: "/barcelona",
  },
  {
    id: 4,
    subtitle: "Rome",
    title: "Rome is the city of echoes, the city of illusions",
    img: RomeImage,
    to: "/rome",
  },
  {
    id: 5,
    subtitle: "Amsterdam",
    title: "In Amsterdam, the water is the mistress",
    img: AmsterdamImage,
    to: "/amsterdam",
  },
];

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
      .to(".bottom .overlay-bottom", {
        width: 0,
        duration: 1.6,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: 0.2,
        onComplete: () => setAnimationEnd(true),
      })
      .from(".case-image img", {
        duration: 1.6,
        scale: 1.4,
        ease: "expo.inOut",
        delay: -2 - (cases.length - 3) * 0.2,
        stagger: {
          amount: 0.4,
        },
      });
  }, [timeline]);

  return (
    <>
      {!animationEnd && <IntroOverlay count={cases.length} />}
      {<Intro />}
      <Cases cases={cases} />
    </>
  );
};

export default Home;
