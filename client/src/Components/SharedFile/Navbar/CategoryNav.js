import React, { useState } from "react";
import DownArrowIcon from "../../Icons/DownArrowIcon";
import CallIcon from "../../Icons/CallIcon";
import MessageIcon from "../../Icons/MessageIcon";
import UpArrowIcon from "../../Icons/UpArrowIcon";
import { Link } from "react-router-dom";
import useBanners from "../../../CustomHook/useBanners";

const CategoryNav = () => {
  const [toggle, setToggle] = useState(false);
  const [banners] = useBanners();

  // console.log(products);

  return (
    <div>
      <div className="flex justify-between items-center text bg-stone-900 px-4 md:px-14 lg:px-20 py-2 shadow-lg">
        <div onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <div className="flex items-center cursor-pointer">
              <h1 className="text-white">Category</h1>
              <UpArrowIcon />
            </div>
          ) : (
            <div className="flex items-center cursor-pointer">
              <h1 className="text-white">Category</h1>
              <DownArrowIcon />
            </div>
          )}
        </div>

        <div className="flex items-center text-white text-xs">
          <div className="flex items-center">
            <CallIcon />
            <h1 className="sm:mr-8">+880 1938927389</h1>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center ">
              <MessageIcon />
              <h1>neamul@info.com</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute duration-900 rounded-md bg-white p-2 shadow-md pr-5
          ${
            toggle
              ? "left-6 md:left-20 lg:top-[128px] xl:top-[117px] "
              : "top-[-500px]"
          }`}
      >
        <div>
          {banners?.map((banner) => (
            <div className="font-semibold hover:bg-gray-100 px-2 py-1 rounded-md">
              <Link to={`/category/${banner?.category}`}>
                {banner?.category}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
