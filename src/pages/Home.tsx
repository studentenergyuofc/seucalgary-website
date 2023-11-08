"use client";
import videoBg from "/intovideo.mp4";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";
import logotitle from "/logotitle.png";
import bgimg from "/background2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useScroll, useTransform, motion } from "framer-motion";
import NewsItem from "../components/NewsItem";
import { AiOutlineArrowDown } from "react-icons/ai";
import { achievementsEvents, upcomingEvents, pastEvents } from "../lib/data";
import { NewsItemProps } from "../vite-env";

function Home() {
  const myRef = useRef<HTMLDivElement>(null);
  const topOfPage = useRef<HTMLDivElement>(null);
  const secondSection = useRef<HTMLDivElement>(null);
  const [pageEndNearing, setPageEndNearing] = useState<boolean>();
  const [event, setEvent] = useState<string>("upcoming");

  console.log(event);

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
    <section>
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
      <div className="events-navbar">
        <ul className="events-list">
          <li className="events-link">
            <button
              className={
                event === "upcoming" ? "events-button active" : "events-button"
              }
              onClick={() => setEvent("upcoming")}
            >
              Upcoming Events
            </button>
          </li>
          <li>
            <button
              className={
                event === "past" ? "events-button active" : "events-button"
              }
              onClick={() => setEvent("past")}
            >
              Past Events
            </button>
          </li>
          <li>
            <button
              className={
                event === "achievements"
                  ? "events-button active"
                  : "events-button"
              }
              onClick={() => setEvent("achievements")}
            >
              Achievements
            </button>
          </li>
        </ul>
      </div>
      {event === "upcoming" ? (
        <article className="event-article" data-aos>
          {upcomingEvents.map((event: NewsItemProps) => {
            return (
              <div
                className="news-piece-holder"
                data-aos={event.animation}
                data-aos-anchor-placement="center-bottom"
              >
                <NewsItem
                  path={event.path}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  animation={event.animation}
                ></NewsItem>
              </div>
            );
          })}
        </article>
      ) : event === "past" ? (
        <article className="event-article">
          {pastEvents.map((event: NewsItemProps) => {
            return (
              <div
                className="news-piece-holder"
                data-aos={event.animation}
                data-aos-anchor-placement="center-bottom"
              >
                <NewsItem
                  path={event.path}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  animation={event.animation}
                ></NewsItem>
              </div>
            );
          })}
        </article>
      ) : (
        <article className="event-article">
          {achievementsEvents.map((event: NewsItemProps) => {
            return (
              <div
                className="news-piece-holder"
                data-aos={event.animation}
                data-aos-anchor-placement="center-bottom"
              >
                <NewsItem
                  path={event.path}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  animation={event.animation}
                ></NewsItem>
              </div>
            );
          })}
        </article>
      )}
      <Footer />
    </section>
  );
}

export default Home;
