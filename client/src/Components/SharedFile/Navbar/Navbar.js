import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";
import logo2 from "../../../Images/logo2.png";
import CategoryNavbar from "./CategoryNav";
import NavbarIcon from "./NavbarIcon/NavbarIcon";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../../State/ActionCreator/ActionCreator";
import CartIcon from "../../Icons/CartIcon";
import SidebarCart from "../../Pages/Main/SidebarCart/SidebarCart";

const Navbar = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const cartItems = useSelector((state) => state.cart.cart);

  let cartTotal = 0;
  for (const cart of cartItems) {
    cartTotal = cartTotal + cart?.quantity;
  }

  const handleSidebar = () => {
    if (!isOpen) {
      dispatch(openSidebar());
    }
  };

  return (
    <div className="sticky top-0 z-20">
      <div className="flex flex-row justify-between items-center px-4 md:px-14 lg:px-20 py-2 bg-white w-full ">
        <Link to="/">
          <div  className="flex items-center mr-5 sm:mr-10 w-full ">
            <img className="w-10 " src={logo} alt="" />
            <h1 className="text-xl font-extrabold leading-6 mt-3 ml-2 tracking-widest">HASNA'S <span className='tracking-widest'>CLOSET</span> </h1>
        </div>
          </Link>
        <div className="w-full flex items-center">
          <input
            className="w-full px-4 py-2 rounded-full border-2 border-black"
            type="search"
            name=""
            placeholder="Search ur Product"
          />
          <div onClick={handleSidebar} className="ml-4 block lg:hidden">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <h1 className="bg-black text-white rounded-full  w-4 h-4 flex justify-center items-center text-xs font-medium">{cartTotal}</h1>
                <CartIcon />
              </div>
            </div>
            <SidebarCart />
          </div>
        </div>
        <NavbarIcon />
      </div>
      <CategoryNavbar />
    </div>
  );
};

export default Navbar;
