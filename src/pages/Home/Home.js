import React, { useState, useEffect, useMemo } from "react";
import { gsap } from "gsap";

import Intro from "../../components/Intro/Intro";
import Cases from "../../components/Cases/Cases";
import IntroOverlay from "../../components/IntroOverlay/IntroOverlay";

import CurologyImage from "../../images/curology-min.png";
import YourspaceImage from "../../images/yourspace-min.png";
import LuminImage from "../../images/lumin-min.png";
import DocusignImage from "../../images/docusign-min.png";
import SurfaceImage from "../../images/surface-min.png";

const cases = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formule for your skin's unique needs",
    img: CurologyImage,
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for you next venture",
    img: YourspaceImage,
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: LuminImage,
  },
  {
    id: 4,
    subtitle: "Docusign",
    title: "Get the security, mobility and reliability",
    img: DocusignImage,
  },
  {
    id: 5,
    subtitle: "Surface",
    title: "Integrated surface solution company",
    img: SurfaceImage,
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
