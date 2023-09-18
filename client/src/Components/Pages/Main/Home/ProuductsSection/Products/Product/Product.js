import React from "react";
import CarouselProduct from "../CarouselProduct/CarouselProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import useData from "../../../../../../../CustomHook/useData";

const Product = ({ category }) => {
  // console.log(category);
  const [products] = useData();

  const productsData = products.filter(
    (product) => product?.category === category
  );
  return (
    <div>
      <div className="">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            250: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            750: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper "
        >
          {productsData.slice(0.6).map((pd, i) => (
            <SwiperSlide key={i}>
              <CarouselProduct pd={pd}></CarouselProduct>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
