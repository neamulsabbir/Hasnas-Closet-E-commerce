import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import banner2 from "../../../../../Images/banner2.jpg";
import banner1 from "../../../../../Images/banner1.jpg";

const Banner = () => {
  const banners = [
    {
      id: 1,
      img: banner1,
    },
    {
      id: 2,
      img: banner2,
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="w-11/12 mx-auto">
          {banners.map((banner) => (
            <SwiperSlide key={banner?.id}>
              <img src={banner?.img} alt="" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
