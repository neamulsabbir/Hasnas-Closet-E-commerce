import React from "react";
import cashon from "../../../../../Images/cashon.svg";
import delivery from "../../../../../Images/delivery.svg";
import return_icon from "../../../../../Images/return_icon.svg";

const Services = () => {
  return (
    <div className="px-6 sm:px-20 mx-auto my-14">
      <div className="flex flex-col sm:flex-row items-center justify-around">
        <div className="flex flex-col items-center mb-4 sm:mb-0">
          <img className="w-12" src={cashon} alt="" />
          <h1 className="text-sm font-medium">CASH ON DELIVERY</h1>
          <p className="text-xs">Pay cash at your doorstep</p>
        </div>
        <div className="flex flex-col items-center mb-6 sm:mb-0">
          <img className="w-12" src={delivery} alt="" />
          <h1 className="text-sm font-medium">FAST DELIVERY</h1>
          <p className="text-xs">All over Bangladesh</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-12" src={return_icon} alt="" />
          <h1 className="text-sm font-medium">HAPPY RETURN</h1>
          <p className="text-xs">7 days return facility</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
