import React from "react";
import { useSelector } from "react-redux";

const ProductPrice = () => {
  const products = useSelector((state) => state.productDetails.product);

  return (
    <div className="mt-4">
      {products?.regularPrice ? (
        <div>
          <h1 className="font-semibold text-sm xl:text-base">
            BDT {products?.price}
          </h1>
          <div className="flex">
            <div className="flex items-center">
              <h1 className="line-through decoration-gray-300 text-gray-400 text-xs">
                BDT {products?.regularPrice}
              </h1>
              <p className="ml-4 font-semibold  text-xs text-purple-700 ">
                {products?.percentage}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="font-semibold text-sm xl:text-base">
          BDT {products?.price}
        </h1>
      )}
    </div>
  );
};

export default ProductPrice;
