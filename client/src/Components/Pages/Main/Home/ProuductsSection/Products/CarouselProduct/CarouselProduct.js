import React from "react";
import { Link } from "react-router-dom";

const CarouselProduct = ({ pd }) => {
  return (
    <Link to={`/product/${pd?.slug}`}>
      <div className="">
        <img src={`http://localhost:5000/${pd?.image}`} className="w-[200px] h-[260px] object-cover" alt="" />
        <div>
          <h1 className="">
            {pd?.title.length > 10 ? pd?.title.slice(0, 15) + "..." : pd?.title}
          </h1>
          {pd?.regularPrice ? (
            <div>
              <h1 className="font-semibold text-sm xl:text-base">
                BDT {pd?.price}
              </h1>
              <div className="flex">
                <div className="flex items-center">
                  <h1 className="line-through decoration-gray-300 text-gray-400 text-xs">
                    BDT {pd?.regularPrice}
                  </h1>
                  <p className="ml-4 font-semibold  text-xs text-purple-700 ">
                    {pd?.percentage}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="font-semibold text-sm xl:text-base">
              BDT {pd?.price}
            </h1>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CarouselProduct;
