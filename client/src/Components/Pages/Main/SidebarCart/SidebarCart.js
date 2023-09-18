import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SidebarCartQuantity from "./SidebarCartQuantity/SidebarCartQuantity";
import SubTotal from "./SubTotal/SubTotal";
import { Link } from "react-router-dom";
import {
  clearFromCart,
  closeSidebar,
  deleteFromCart,
} from "../../../../State/ActionCreator/ActionCreator";
import CloseCircle from "../../../Icons/CloseCircle";
import CloseIcon from "../../../Icons/CloseIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const SidebarCart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const cartItems = useSelector((state) => state.cart.cart);

  // console.log(cartItems);

  const handleDeleteFromCart = (product) => {
    dispatch(deleteFromCart(product));
  };

  const handleCloseSidebar = () => {
    if (isOpen) {
      dispatch(closeSidebar());
    }
  };

  const shadow = {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  };

  return (
    <div
      className={`absolute flex z-20 ${
        isOpen ? "left-0 top-0 " : "left-[-1000px] top-0"
      }`}
    >
      <div
        style={shadow}
        className=" duration-1000 bg-white p-4 w-[299px] grid grid-cols content-between h-screen overflow-auto"
      >
        <div>
          {cartItems.length ? (
            <div>
              <div className="flex justify-between items-center mb-6 border-b">
                <div
                  onClick={() => dispatch(clearFromCart(cartItems))}
                  className="flex justify-start items-center"
                >
                  <div className="flex items-center text-xs cursor-pointer bg-black px-[6px] py-[6px] rounded-tl-md rounded-bl-md rounded-tr-full rounded-br-full text-white ">
                    <h1 className="mr-2">Clear Cart</h1>
                    <div className="animate-pulse">
                      <CloseCircle />
                    </div>
                  </div>
                </div>
                <FontAwesomeIcon
                  onClick={handleCloseSidebar}
                  className="text-2xl bg-white border-l p-2 cursor-pointer"
                  icon={faX}
                />
              </div>
              {cartItems.map((cart, i) => (
                <div key={i}>
                  <div className="flex items-center mb-8">
                    <img className="w-20 border" src={cart?.image} alt="" />
                    <div className="ml-4 w-52">
                      <h1 className="text-sm font-semibold">{cart?.title}</h1>
                      <h1 className="font-semibold text-xs my-1">
                        BDT {cart?.price}
                      </h1>
                      <SidebarCartQuantity cart={cart}></SidebarCartQuantity>
                    </div>
                    <CloseIcon
                      className="cursor-pointer"
                      onClick={() => handleDeleteFromCart(cart)}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center border-b">
              <FontAwesomeIcon
                onClick={handleCloseSidebar}
                className="text-2xl bg-white p-2 border-r cursor-pointer"
                icon={faX}
              />
              <h1 className="text-center text-xl font-semibold ml-6">
                Your cart is empty
              </h1>
            </div>
          )}
        </div>
        <div className="">
          <SubTotal></SubTotal>
          <div className="bg-black text-white font-semibold py-3 px-6 flex justify-around">
            <Link to="/cart">View Cart</Link>
            <div className="border-2"></div>
            <Link to="/checkout">Check Out</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCart;
