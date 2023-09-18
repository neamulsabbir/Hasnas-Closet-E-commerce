import React, { useEffect, useState } from 'react';
import useOrders from '../../../../../CustomHook/useOrders';
import BestSelling from './BestSelling/BestSelling';
import useData from '../../../../../CustomHook/useData';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const BestSellings = () => {
    const [filterProduct, setFilterProduct] = useState([])
    const [products] = useData()
    const [orders] = useOrders()
    // console.log(filterProduct);

    useEffect(() => {
        const ordersMatchId = orders.filter(order => {
            return order?.cart.some(item => {
                return products.some(pd => item?._id === pd?._id)
            })
        })
        setFilterProduct(ordersMatchId);
    }, [products, orders])

    const shadow ={
        boxShadow:"3px 3px 10px -7px rgba(0,0,0,0.15) inset,9px 9px 10px -7px rgba(0,0,0,0.19)",
        border:	'1px solid rgba(0,0,0,0.13)'
    }

    return (
        <div className='px-4 md:px-14 lg:px-20'>
            <div style={shadow} className='p-4 my-14 border-t-2 border-gray-200 bg-white'>
                <h1 className='text-2xl font-semibold'>Best-Selling Products</h1>
                <div className="mt-5">
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
                        {
                            filterProduct.map(data =>
                                <SwiperSlide key={data?._id}>
                                    <BestSelling datas={data} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default BestSellings;