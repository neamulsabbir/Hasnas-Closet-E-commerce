import React from "react";

const WishlistPrice = ({ pd }) => {
  return (
    <div>
      {pd?.regularPrice ? (
        <div className="h-11">
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
        <h1 className="font-semibold text-sm xl:text-base h-11">
          BDT {pd?.price}
        </h1>
      )}
    </div>
  );
};

export default WishlistPrice;
