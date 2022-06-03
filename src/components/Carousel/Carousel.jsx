import React, { useRef, useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { dataPackages } from "../../services/dataPackages";
import CarouselCard from "../CarouselCard/CarouselCard";
import { animateCarousel } from "../../animate";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.scss";

const Carousel = () => {
  const swiperContainer = useRef();
  const [activeSlide, setActiveSlide] = useState(null);
  const [slide, setSlide] = useState(null);

  useEffect(() => {
    let carousel = swiperContainer.current;
    let activeSelector = `.swiper-slide-active[data-swiper-slide-index="${activeSlide}"]:not(.swiper-slide-duplicate-active)`;
    let slides = carousel.querySelectorAll(".swiper-slide");
    let card = carousel.querySelector(`${activeSelector} .app__carousel-card`);
    let cardAction = carousel.querySelector(
      `${activeSelector} .app__carousel-card-action`
    );
    let cardTitle = carousel.querySelector(
      `${activeSelector} .app__carousel-card-title`
    );
    let activeCard = carousel.querySelector(activeSelector);

    // Animate Carousel
    animateCarousel(carousel, slides, activeCard, card, cardTitle, cardAction);

    // Slide on resize
    if (slide)
      window.addEventListener("resize", () => {
        slide.slideTo(2, 500);

        console.log(activeSlide);
      });
  }, [activeSlide, slide]);

  return (
    <div className="app__carousel" ref={swiperContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={1}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        onInit={(swiper) => setSlide(swiper)}
        loop={true}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {dataPackages.map((dataPackage) => (
          <SwiperSlide key={dataPackage.key}>
            <CarouselCard title={dataPackage.title}>
              {dataPackage.icon}
            </CarouselCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
