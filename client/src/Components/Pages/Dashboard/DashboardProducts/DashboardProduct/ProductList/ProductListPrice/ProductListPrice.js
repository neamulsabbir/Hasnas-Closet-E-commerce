import React from "react";

const ProductListPrice = ({ pd }) => {
  // console.log(pd,4);
  function calculatePercentage(value, total) {
    return (value / total) *100;
  }
  const percentage = calculatePercentage(pd?.price,pd?.regularPrice);

  return (
    <div className="">
      {pd?.regularPrice ? (
        <div>
          <h1 className="font-semibold text-xs">BDT {pd?.price}</h1>
          <div className="">
            <div className="">
              <h1 className="line-through decoration-gray-300 text-gray-400 text-xs">
                BDT {pd?.regularPrice}
              </h1>
              
                <p className="font-semibold  text-xs text-purple-700 ">
                  {Math.floor(percentage)} <span>% off</span>
                </p>
              
            </div>
          </div>
        </div>
      ) : (
        <h1 className="font-semibold text-xs">BDT {pd?.price}</h1>
      )}
    </div>
  );
};

export default ProductListPrice;
