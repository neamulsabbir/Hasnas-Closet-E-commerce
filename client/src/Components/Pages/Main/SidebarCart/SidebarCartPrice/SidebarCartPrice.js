import React from "react";

const SidebarCartPrice = ({ cart }) => {
  // console.log(cart);

  return (
    <div className="my-2">

      <h1 className="font-semibold text-xs">
        BDT {cart?.price}
      </h1>

    </div>
  );
};

export default SidebarCartPrice;
