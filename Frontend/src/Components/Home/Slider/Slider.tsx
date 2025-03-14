import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css"

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img src="/sliderpic1.jpeg" alt="Slider 1" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderpic2.jpeg" alt="Slider 2" className="slider-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider