import React, { useEffect, useMemo } from "react";
import { gsap, Power2, TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import $ from "jquery";

import TextReveal from "../../components/TextReveal/TextReveal";
import ImageReveal from "../../components/ImageReveal/ImageReveal";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";

import TokyoImage from "../../images/tokyo.jpg";
import StreetImage from "../../images/street.jpg";
import BikeImage from "../../images/bike.jpg";

gsap.registerPlugin(ScrollToPlugin);

const Tokyo = () => {
  const timeline = useMemo(() => gsap.timeline(), []);
  const scrollTimeline = useMemo(() => gsap.timeline(), []);

  useEffect(() => {
    const windowOffset = $(window).scrollTop();
    gsap.set(window, {
      scrollTo: {
        y: windowOffset,
      },
    });
    const scrollPositon = $(".second-section").offset().top;

    timeline
      .to(window, {
        scrollTo: {
          y: scrollPositon,
          autoKill: false,
        },
        duration: 2,
        ease: Power2.easeInOut,
      })
      .to(
        ".tokyo",
        {
          backgroundColor: "white",
          duration: 1,
          ease: "easeInOut",
        },
        "-=1"
      )
      .fromTo(
        ".left-section p",
        {
          y: "100%",
        },
        {
          y: 0,
        }
      )
      .fromTo(
        ".tokyo-sentence",
        {
          width: 0,
        },
        {
          duration: 1.4,
          width: "100%",
          ease: Power2.easeInOut,
        }
      )
      .to(
        ".right-section .tokyo-informations p",
        {
          y: 0,
          stagger: 0.1,
        },
        "-=1"
      )
      .to(".right-section .text-wrapper p", {
        y: 0,
        stagger: 0.2,
      })
      .to(
        ".tokyo-street .imageWrapper",
        {
          css: {
            visibility: "visible",
          },
        },
        "myLabel"
      )
      .to(
        ".tokyo-street .imageWrapper__cover",
        {
          height: "0%",
          duration: 1.4,
          ease: Power2.easeInOut,
        },
        "myLabel"
      )
      .to(".tokyo-street .imageWrapper__container img", {
        scale: 1,
        duration: 1.4,
        ease: Power2.easeInOut,
        delay: -1,
      })
      .to(
        ".tokyo-bike .imageWrapper",
        {
          css: {
            visibility: "visible",
          },
        },
        "myLabel"
      )
      .to(
        ".tokyo-bike .imageWrapper__cover",
        {
          width: "0%",
          duration: 1.4,
          ease: Power2.easeInOut,
        },
        "myLabel"
      )
      .to(".tokyo-bike .imageWrapper__container img", {
        scale: 1,
        duration: 1.4,
        ease: Power2.easeInOut,
        delay: -1,
      })
      .to(
        ".image-text span",
        {
          y: 0,
          duration: 1.4,
          ease: Power2.easeInOut,
        },
        "-=1"
      );

    scrollTimeline.to(".second-section", {
      top: 0,
    });

    ScrollTrigger.create({
      trigger: ".first-section",
      start: "1px top",
      end: "40% bottom",
      animation: timeline,
    });
  }, [timeline]);

  return (
    <div className="tokyo">
      <div className="first-section">
        <div className="container">
          <div className="row">
            <div className="image-container">
              <ImageReveal src={TokyoImage} />
            </div>
            <div className="text">
              <TextReveal
                duration={1}
                className="tokyo-title"
                background="black"
              >
                <h1>Tokyo</h1>
              </TextReveal>
              <TextReveal
                duration={1}
                className="tokyo-text"
                background="black"
              >
                <p>
                  Officialy Tokyo Metropolis, one of the 47 prefectures of
                  Japan, has served as the Japanese capital since 1869.
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="container">
          <div className="row">
            <div className="left-section">
              <div className="tokyo-street">
                <ImageWrapper
                  src={StreetImage}
                  property="height"
                  background="white"
                />
                <div className="image-text">
                  <span>どういたしまして</span>
                </div>
              </div>
              <div className="text-wrapper">
                <p>
                  The urban area houses the seat of the Empreror of Japan, of
                  the Japanese goverment and of the National Diet.
                </p>
              </div>
              <div className="tokyo-sentence">
                <h2>おはようございま</h2>
              </div>
            </div>
            <div className="right-section">
              <div className="tokyo-informations">
                <div className="tokyo-information">
                  <div className="small-text-wrapper">
                    <p>Country</p>
                  </div>
                  <div className="big-text-wrapper">
                    <p>Japan</p>
                  </div>
                </div>
                <div className="tokyo-information">
                  <div className="small-text-wrapper">
                    <p>Region</p>
                  </div>
                  <div className="big-text-wrapper">
                    <p>Kanto</p>
                  </div>
                </div>
                <div className="tokyo-information">
                  <div className="small-text-wrapper">
                    <p>Island</p>
                  </div>
                  <div className="big-text-wrapper">
                    <p>Honshu</p>
                  </div>
                </div>
              </div>
              <div className="tokyo-details">
                <div className="text-wrapper">
                  <p>
                    As of 2018, the Greater Tokyo Area ranked as the most
                    poulous metropilitian area in the world.
                  </p>
                </div>
                <div className="text-wrapper">
                  <p>
                    Tokyo was formerly named Edo when Shogun Tokugawa leyasu
                    made the city his headquarters.
                  </p>
                </div>
              </div>
              <div className="tokyo-bike">
                <ImageWrapper src={BikeImage} background="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokyo;
