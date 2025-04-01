import React, { useEffect, useState, Children, useRef } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import "./Slider.css";

export default function Slider({ children }) {
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const getWidth = () => {
      if (sliderRef.current) {
        setWidth(Math.floor(sliderRef.current.offsetWidth));
      }
    };

    getWidth();

    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, []);

  const handleLeftArrowClick = () => {
    console.log("Left button is clicked");
    setOffset((currentOffset) => {
      const newOffset = Math.floor(currentOffset + width);
      const newIndex = Math.max(activeSlideIndex - 1, 0);
      setActiveSlideIndex(newIndex);
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    console.log("Right button is clicked");
    setOffset((currentOffset) => {
      const newIndex = Math.min(
        activeSlideIndex + 1,
        React.Children.count(children) - 1
      );
      setActiveSlideIndex(newIndex);
      const maxOffset = -Math.floor(
        width * (React.Children.count(children) - 1)
      );
      const newOffset = Math.floor(currentOffset - width);
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className="slider-container">
      <div className="visible-area" ref={sliderRef}>
        <div className="arrows">
          <img
            className="arrow"
            loading="lazy"
            src={arrowLeft}
            onClick={handleLeftArrowClick}
          />
          <img
            className="arrow"
            loading="lazy"
            src={arrowRight}
            onClick={handleRightArrowClick}
          />
        </div>
        <div
          className="all-items-container"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              className={`slide ${index === activeSlideIndex ? "active" : ""}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
