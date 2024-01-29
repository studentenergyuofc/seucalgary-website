"use client";
import banner from "/banner.jpg";
import smbanner from "/banner-sm-450.jpg";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";
import logotitle from "/logotitle.png";
import banner2 from "/background2.jpg";
import smbanner2 from "/background2-sm-450.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useScroll, useTransform, motion } from "framer-motion";
import NewsItem from "../components/NewsItem";
import { AiOutlineArrowDown } from "react-icons/ai";
import { achievementsEvents, upcomingEvents, pastEvents } from "../lib/data";
import { NewsItemProps } from "../vite-env";
import ImgComponent from "../components/ImgComponent";
import useMediaQuery from "../hooks/useMediaQuery";

function Home() {
  const myRef = useRef<HTMLDivElement>(null);
  const topOfPage = useRef<HTMLDivElement>(null);
  const secondSection = useRef<HTMLDivElement>(null);
  const [pageEndNearing, setPageEndNearing] = useState<boolean>();
  const [event, setEvent] = useState<string>("upcoming");
  const [defaultBanner, setDefaultBanner] = useState<string>(banner);
  const [defaultBanner2, setDefaultBanner2] = useState<string>(banner);
  const isWindow = useMediaQuery("(max-width: 440px)");

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [200, -950]);

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

  useEffect(() => {
    if (isWindow){
      setDefaultBanner(smbanner);
      setDefaultBanner2(smbanner2);
    }
    else{
      setDefaultBanner(banner);
      setDefaultBanner2(banner2);
    }
  }, [isWindow]);

   useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrolled / scrollableHeight) * 100;

      if (scrollPercentage <= 35) {
        setPageEndNearing(true)     
      } else {
        setPageEndNearing(false)
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="section landing-page" ref={topOfPage}>
        <div className="background-container">
          {pageEndNearing ?
          <ImgComponent
          src={defaultBanner}
          altimages={""}
          altimagesizes={""}
          blurhash={"LqHM=wRkxaWY*0RkjYay9GoJWVoL"}
        />
          : null}
          {!pageEndNearing ? 
          <ImgComponent
          src={defaultBanner2}
          altimages={""}
          altimagesizes={""}
          blurhash={"L8DS%Ox_0K-.u6o}s,NF?akUt7xt"}
          />
          : null}
          <div
            className={pageEndNearing ? "background-overlay" : "img-overlay"}
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
              We're passionate about fostering a <span id="word-highlight">dynamic community</span>, enabling students to <span id="word-highlight">explore</span>, <span id="word-highlight">innovate</span> and <span id="word-highlight">thrive</span> within the energy sector.{" "}
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
              Our commitment lies in nurturing <span id="word-highlight">professional growth</span> while championing <span id="word-highlight">sustainability</span> and <span id="word-highlight">innovation</span>. Join us on this exciting journey as we shape the future of energy together!{" "}
            </p>
        </div>
        <div className="intro-info-container mission-text" id="par3">
            <p>
              Whether you are interested in building a <span id="word-highlight">career within the energy sector</span>, creating an impact through <span id="word-highlight">advocacy</span>, or are seeking <span id="word-highlight">project development experience</span>, our chapter will place you in the heart of innovation and help you kickstart your career with experiences that matter.{" "}
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
              Recent Events
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
              Advocacy
            </button>
          </li>
        </ul>
      </div>
      <div className="event-container">
      {event === "upcoming" ? (
        <article className="event-article" data-aos>
          {upcomingEvents.map((event: NewsItemProps) => {
            return (
              <div
                className="news-piece-holder"
                data-aos={event.animation}
                data-aos-anchor-placement="center-bottom"
                key={event.title}
              >
                <NewsItem
                  path={event.path}
                  blurhash={event.blurhash}
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
                  blurhash={event.blurhash}
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
                  blurhash={event.blurhash}
                  title={event.title}
                  description={event.description}
                  date={""}
                  animation={event.animation}
                ></NewsItem>
              </div>
            );
          })}
        </article>
      )}
      </div>
      <Footer />
    </section>
  );
}

export default Home;
