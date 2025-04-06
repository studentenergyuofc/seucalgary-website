import { useState, useEffect, useCallback } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./Slideshow.css";

interface SlideshowProps {
  images: string[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="slideshow-deck">
      <div className="arrow-button">
        <button className="prev" onClick={prevSlide}>
          <BsArrowLeft />
        </button>
      </div>
      <div className="slideshow-body">
        <div className="slideshow">
          {/* Slide Container */}
          <div
            className="slide"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          ></div>

          {/* Dots for Navigation */}
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      <button className="next" onClick={nextSlide}>
        <BsArrowRight />
      </button>
    </div>
  );
};

export default Slideshow;
