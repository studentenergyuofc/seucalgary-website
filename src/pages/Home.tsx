"use client";
import videoBg from "/intovideo.mp4";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";
import logotitle from "/logotitle.png";
import poster1 from "/ses.png";
import bgimg from "/background2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useScroll, useTransform, motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import NewsItem from "../components/NewsItem";
import { AiOutlineArrowDown } from "react-icons/ai";

function Home() {
  const myRef = useRef<HTMLDivElement>(null);
  const topOfPage = useRef<HTMLDivElement>(null);
  const secondSection = useRef<HTMLDivElement>(null);
  const [pageEndNearing, setPageEndNearing] = useState<boolean>();

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [250, -1800]);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    topOfPage.current?.scrollIntoView({ behavior: "smooth" });
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setPageEndNearing(entry.isIntersecting);
    });
    if (myRef.current) {
      observer.observe(myRef.current);
    }
  }, []);

  const handleScroll = () => {
    const scrollDistance = window.innerHeight;
    window.scrollBy({ top: scrollDistance, behavior: 'smooth' });

  };

  return (
    <div>
      <div className="section intro-search" ref={topOfPage}>
        <div className="video-container">
          <video src={videoBg} autoPlay loop muted />
          {!pageEndNearing ? <img src={bgimg} /> : null}
          <div
            className={pageEndNearing ? "video-overlay" : "img-overlay"}
          ></div>
        </div>
        <div ref={myRef} className="club-name">
          <img src={logotitle} />
        </div>
        <div className="scroll-down-btn" onClick={handleScroll}>
          <AiOutlineArrowDown />
        </div>
      </div>
      <div className="intro-info" ref={secondSection}>
        <div className="intro-info-container mission-text" id="par1">
            <p>
              heobpi ewh wihefdq9uj iefw heobpi ewh wihefdq9uj iefw heobpi ewh
              wihefdq9uj iefw heobpi ewh wihefdq9uj iefw heobpi ewh wihefdq9uj
              iefw heobpi ewh wihefdq9uj iefw heo{" "}
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
              heobpi ewh wihefdq9uj iefw heobpi ewh wihefdq9uj iefw heobpi ewh
              wihefdq9uj iefw heobpi ewh wihefdq9uj iefw heobpi ewh wihefdq9uj
              iefw heobpi ewh wihefdq9uj iefw heo{" "}
            </p>
        </div>
        <div className="intro-info-container mission-text" id="par3">
            <p>
              heobpi ewh wihefdq9uj iefw heobpi ewh wihefdq9uj iefw heobpi ewh
              wihefdq9uj iefw heobpi ewh wihefdq9uj iefw heobpi ewh wihefdq9uj
              iefw heobpi ewh wihefdq9uj iefw heo{" "}
            </p>
        </div>
      </div>
      <div className="section club-stats">
        <h1>Become a part of a global community!</h1>
        <div className="stats">
          <div className="stat">
            <h1>56</h1>
            <p>chapters</p>
          </div>
          <div className="stat">
            <h1>30,000+</h1>
            <p>students</p>
          </div>
          <div className="stat">
            <h1>29</h1>
            <p>countries</p>
          </div>
        </div>
      </div>
      <div className="section milestones">
        <div className="milestones-nav">
          <div className="milestones-nav-items">
            <li className="active">News</li>
            <li>Upcoming Events</li>
            <li>Milestones</li>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          className="news-piece-holder"
        >
          <NewsItem img={poster1} />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          className="news-piece-holder"
        >
          <NewsItem img={poster1} />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          className="news-piece-holder"
        >
          <NewsItem img={poster1} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
