import { useEffect, useState } from "react";
import "./herobanner.css";

import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import banner3 from "../../../assets/images/banner3.png";

const slides = [banner1, banner2, banner3];

function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-banner">
      <div className="hero-slider">
        <img
          src={slides[currentSlide]}
          alt="Badminton promotion"
          className="hero-image"
        />

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero-dot ${
                currentSlide === index ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
