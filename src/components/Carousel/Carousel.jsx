import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FcSmartphoneTablet,
  FcHome,
  FcPaid,
  FcElectronics,
  FcPhone,
} from "react-icons/fc";
import CarouselCard from "../CarouselCard/CarouselCard";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.scss";

const Carousel = () => {
  return (
    <div className="app__carousel">
      <Swiper
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <CarouselCard title="Mobile internet">
            <FcSmartphoneTablet />
          </CarouselCard>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard title="Home internet">
            <FcHome />
          </CarouselCard>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard title="Get a device">
            <FcPaid />
          </CarouselCard>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard title="Add a phone-line">
            <FcPhone />
          </CarouselCard>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard title="Upgrade">
            <FcElectronics />
          </CarouselCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
