"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";

const IntroInfo: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [transformValues, setTransformValues] = useState([100, -1100]);

  useEffect(() => {
    const updateTransformValues = () => {
      if (window.innerWidth < 440) {
        setTransformValues([80, -1100]);
      } else {
        setTransformValues([150, -1000]);
      }
    };

    updateTransformValues();

    window.addEventListener("resize", updateTransformValues);

    return () => window.removeEventListener("resize", updateTransformValues);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], transformValues);

  return (
    <div className="intro-info">
      <div className="intro-info-container mission-text" id="par1">
        <p>
          We're passionate about fostering a{" "}
          <span id="word-highlight">dynamic community</span>, enabling students
          to <span id="word-highlight">explore</span>,{" "}
          <span id="word-highlight">innovate</span> and{" "}
          <span id="word-highlight">thrive</span> within the energy sector.{" "}
        </p>
      </div>
      <div className="mission-moto">
        <motion.h1 style={{ x }}>
          Inspiring the next generation of <span id="word-one">Energy </span>{" "}
          <span id="word-two">Leaders</span>
        </motion.h1>
      </div>
      <div className="intro-info-container mission-text" id="par2">
        <p>
          Our commitment lies in nurturing{" "}
          <span id="word-highlight">professional growth</span> while championing{" "}
          <span id="word-highlight">sustainability</span> and{" "}
          <span id="word-highlight">innovation</span>. Join us on this exciting
          journey as we shape the future of energy together!{" "}
        </p>
      </div>
      <div className="intro-info-container mission-text" id="par3">
        <p>
          Whether you are interested in building a{" "}
          <span id="word-highlight">career within the energy sector</span>,
          creating an impact through <span id="word-highlight">advocacy</span>,
          or are seeking{" "}
          <span id="word-highlight">project development experience</span>, our
          chapter will place you in the heart of innovation and help you
          kickstart your career with experiences that matter.{" "}
        </p>
      </div>
    </div>
  );
};

export default IntroInfo;
