"use client";
import banner from "/banner.jpg";
import smbanner from "/banner-sm-450.jpg";
import Footer from "@shared/Footer/Footer";
import { useRef, useEffect, useState } from "react";
import logotitle from "/logotitle.png";
import banner2 from "/background2.jpg";
import smbanner2 from "/background2-sm-450.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import ImgComponent from "@shared/ImgComponent/ImgComponent";
import useMediaQuery from "@hooks/useMediaQuery";
import ClubStats from "@components/Landing/ClubStats";
import Events from "@components/Landing/events/Events";
import IntroInfo from "@components/Landing/IntroInfo";

function Home() {
  const topOfPage = useRef<HTMLDivElement>(null);
  const [pageEndNearing, setPageEndNearing] = useState<boolean>();
  const [defaultBanner, setDefaultBanner] = useState<string>(banner);
  const [defaultBanner2, setDefaultBanner2] = useState<string>(banner);
  const isWindow = useMediaQuery("(max-width: 440px)");

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    setPageEndNearing(true);
    topOfPage.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleScroll = () => {
    const scrollDistance = window.innerHeight;
    window.scrollBy({ top: scrollDistance, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      if (scrolled >= viewportHeight + 170) {
        setPageEndNearing(false);
      } else {
        setPageEndNearing(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isWindow) {
      setDefaultBanner(smbanner);
      setDefaultBanner2(smbanner2);
    } else {
      setDefaultBanner(banner);
      setDefaultBanner2(banner2);
    }
  }, [isWindow]);

  return (
    <section>
      <div className="section landing-page" ref={topOfPage}>
        <div className="background-container">
          {pageEndNearing ? (
            <ImgComponent
              src={defaultBanner}
              altimages={""}
              altimagesizes={""}
              blurhash={"LqHM=wRkxaWY*0RkjYay9GoJWVoL"}
            />
          ) : null}
          {!pageEndNearing ? (
            <ImgComponent
              src={defaultBanner2}
              altimages={""}
              altimagesizes={""}
              blurhash={"L8DS%Ox_0K-.u6o}s,NF?akUt7xt"}
            />
          ) : null}
          <div
            className={pageEndNearing ? "background-overlay" : "img-overlay"}
          ></div>
        </div>
        <div className="club-name">
          <img src={logotitle} />
        </div>
        <div className="scroll-down-btn" onClick={handleScroll}>
          <AiOutlineArrowDown />
        </div>
      </div>
      <IntroInfo />
      <ClubStats />
      <Events />
      <Footer />
    </section>
  );
}

export default Home;
