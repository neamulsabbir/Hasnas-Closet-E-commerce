import React from "react";
import { useSelector } from "react-redux";
import CheckOutTotal from "./CheckOutTotal/CheckOutTotal";
import SidebarCartPrice from "../../SidebarCart/SidebarCartPrice/SidebarCartPrice";
import SidebarCartQuantity from "../../SidebarCart/SidebarCartQuantity/SidebarCartQuantity";

const OrderDetails = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  return (
    <div
      style={{
        boxShadow:
          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
      }}
      className="p-8 sm:p-14  rounded-md"
    >
      {cartItems.map((cart) => (
        <div className="grid grid-cols-2 items-center mb-5">
          <img className="W-20 border border-gray-300 " src={cart?.image} alt="" />
          <div className="ml-5 xl:ml-0">
            <h1 className="text-lg font-semibold w-full h-12">{cart?.title}</h1>
            <SidebarCartPrice cart={cart}></SidebarCartPrice>
            <SidebarCartQuantity cart={cart}></SidebarCartQuantity>
          </div>
        </div>
      ))}
      <CheckOutTotal></CheckOutTotal>
      {/* <Link
          className="bg-black text-white font-semibold py-3 px-4 "
          to="/checkout"
        >
          PROCEED TO CHECKOUT
        </Link> */}
    </div>
  );
};

export default OrderDetails;
