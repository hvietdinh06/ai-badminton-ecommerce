import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./herobanner.css";

import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import banner3 from "../../../assets/images/banner3.png";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="Banner 1" className="hero-image" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner2} alt="Banner 2" className="hero-image" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner3} alt="Banner 3" className="hero-image" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HeroBanner;
