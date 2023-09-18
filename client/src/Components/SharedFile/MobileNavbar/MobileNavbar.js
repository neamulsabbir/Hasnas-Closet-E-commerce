import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlackWishlistIcon from "../../Icons/BlackWishlistIcon";
import ProfileIcon from "../../Icons/ProfileIcon";

const BottomNavbar = () => {

  const shadow = {
    boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
  }

  return (
    <div className="sticky bottom-7 block lg:hidden z-10">
      <div
        style={shadow}
        className="flex justify-between items-center bg-white  px-5 mx-auto py-3 border-2 border-black w-52 rounded-full">
        <Link to='/' className="flex flex-col items-center">
          <FaHome className="text-2xl"></FaHome>
        </Link>
        <div className="bg-black w-[2px] h-6"></div>
        <Link to="/wishlist" className="flex flex-col items-center">
          <BlackWishlistIcon />
        </Link>
        <div className="bg-black w-[2px] h-6"></div>
        <Link to="signin" className="flex flex-col items-center">
          <ProfileIcon />
        </Link>

      </div>
    </div>
  );
};

export default BottomNavbar;
