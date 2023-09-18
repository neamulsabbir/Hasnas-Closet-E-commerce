import React from 'react';
import Product from './Product/Product';
import { Link } from 'react-router-dom';
import useBanners from '../../../../../../CustomHook/useBanners';

const Products = () => {
    const [banners] = useBanners()

    const shadow ={
        boxShadow:"3px 3px 10px -7px rgba(0,0,0,0.15) inset,9px 9px 10px -7px rgba(0,0,0,0.19)",
        border:	'1px solid rgba(0,0,0,0.13)'
    }

    return (
        <div className='px-4 md:px-14 lg:px-20 '>
            {
                banners.map((banner, i) =>
                    <div style={shadow} className='p-4 rounded-md my-14 bg-white'>
                        <div className="flex justify-between items-center">
                            <h1 className="text-xs text-white font-semibold mt-0 bg-black inline-block py-1 px-2 rounded-tl-md rounded-br-md">{banner?.category}</h1>
                            <Link
                                className="bg-black text-sm text-white px-3 py-1 rounded-tr-md"
                                to={`/category/${banner?.category}`}
                            >
                                View All
                            </Link>
                        </div>
                        <img className="w-full mt-2 mb-6" src={banner?.banner} alt="" />
                        <Product key={i} category={banner?.category}></Product>
                    </div>
                )
            }
        </div>
    );
};

export default Products;