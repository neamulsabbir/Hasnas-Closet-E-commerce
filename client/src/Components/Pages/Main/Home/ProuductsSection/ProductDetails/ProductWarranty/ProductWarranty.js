import React from 'react';
import warranty from "../../../../../../../Images/warranty.png";

const ProductWarranty = () => {
    return (
        <div className="flex items-center mt-8">
            <img className="w-3 h-5" src={warranty} alt="" />
            <div className=" ml-2">
              <h1 className="font-semibold">Return & Warranty</h1>
              <p className="text-xs">No Warranty Available</p>
            </div>
          </div>
    );
};

export default ProductWarranty;