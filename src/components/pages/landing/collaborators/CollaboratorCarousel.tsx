import { useState, useEffect, useRef, FC } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./CollaboratorCarousel.css";
import useMediaQuery from "@hooks/useMediaQuery";

interface CardProps {
  title: string;
  path: string;
}

interface CarouselProps {
  items: readonly { path: string; title: string }[];
}

const Card: FC<CardProps> = ({ title, path }) => {
  return (
    <li className="carousel-card carousel-li">
      <img src={path} className="carousel-img" alt={title} />
    </li>
  );
};

export const Carousel: FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const isSmallScreen = useMediaQuery("(max-width: 740px)");

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--num",
      items.length.toString()
    );
  }, [items]);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollInterval.current = setInterval(() => {
      setIsAnimating(true);
      setIsManualScroll(false);
      setCurrentIndex((prev) => (prev === items.length - 4 ? 0 : prev + 1));
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  const handleNextClick = () => {
    if (isAnimating) return;
    stopAutoScroll();
    setIsAnimating(true);
    setIsManualScroll(true);
    setCurrentIndex((prev) => (prev === items.length - 4 ? 0 : prev + 1));
  };

  const handlePrevClick = () => {
    if (isAnimating) return;
    stopAutoScroll();
    setIsAnimating(true);
    setIsManualScroll(true);
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    startAutoScroll();
  };

  // 53 for smaller screen. 27 for normal sized

  const transformFactor = isSmallScreen ? 53 : 27;

  const carouselStyle = {
    transform: `translateX(-${currentIndex * transformFactor}%)`,
    transition: isAnimating
      ? isManualScroll
        ? "transform 0.5s ease-in-out"
        : "transform 2s cubic-bezier(0.25, 0.8, 0.25, 1)"
      : "transform 0s",
  };

  return (
    <>
      <div className="collaborators-header">
        <div className="collaborators-title">
          <h2>Collaboration Partners</h2>
          <p>
            Our chapter is proud to have collaborated with various corporations
            and organizations that share our vision.
          </p>
        </div>
      </div>
      <div className="collaborator-container">
        <div className="carouselwrapper module-wrapper">
          <div className="ui">
            <button
              onClick={handlePrevClick}
              className="carousel-button carousel-prev"
              disabled={isAnimating}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNextClick}
              className="carousel-button carousel-next"
              disabled={isAnimating}
            >
              <FaArrowRight />
            </button>
          </div>
          <ul
            className="carousel"
            style={carouselStyle}
            onTransitionEnd={handleTransitionEnd}
          >
            {items.map((item, index) => (
              <Card key={index} path={item.path} title={item.title} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
