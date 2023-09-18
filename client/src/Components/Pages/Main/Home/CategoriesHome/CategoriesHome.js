import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Link } from 'react-router-dom';


const CategoriesHome = () => {
    const banners = useSelector(state => state.banner.banner)
    console.log(banners);

    const shadow = {
        boxShadow: "3px 3px 10px -7px rgba(0,0,0,0.15) inset,9px 9px 10px -7px rgba(0,0,0,0.19)",
        border: '1px solid rgba(0,0,0,0.13)'
    }

    return (
        <div className='px-4 md:px-14 lg:px-20  '>
            <div className=' my-14'>
                <div>
                    <h1 className='text-2xl font-semibold mb-5 text-center'>Choose Your Category</h1>
                </div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
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
                    <div className='grid grid-cols-5 '>
                        {
                            banners.map((banner, i) =>
                                <SwiperSlide key={banner?._id}>
                                    <Link to={`/category/${banner?.category}`}>
                                        <div key={banner?._id} className='text-center'>
                                            <div className='border-2 rounded-md  py-6'>
                                                <h1 className='text-smfont-bold px-6 opacity-80'>Buy your best product from</h1>
                                                <h1 className='bg-black p-2 text-white text-xl mt-2'>{banner?.category}</h1>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default CategoriesHome;