import React from "react";
import useBanners from "../../../../../CustomHook/useBanners";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const shadow = {
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
};

const DashboardCategoryList = () => {
  const [banners] = useBanners();
  return (
    <div style={shadow} className="bg-white rounded-md mb-8 p-5 h-full">
      <div className="grid grid-cols-12 items-center bg-gray-100 h-10 font-semibold rounded-md  gap-5 px-2 text-gray-600">
        <h1 className="col-span-1">Sl.</h1>
        <h1 className="col-span-2">Category Name</h1>
        <h1 className="col-span-5">Banner</h1>
        <h1 className="col-span-2">Action</h1>
      </div>

      <div>
        {banners.map((banner, i) => (
          <div className="grid grid-cols-12 px-2 items-center text-lg border-b py-5">
            <h1 className="col-span-1">{i + 1}</h1>
            <h1 className="col-span-2">{banner?.category}</h1>
            <div className="col-span-5">
              <img className="w-96" src={banner?.banner} alt="" />
            </div>
            <div className="flex justify-start text-lg col-span-2">
              <Link to={`/dashboard/edit-category/${banner?.category}`}>
                <FaEdit className="cursor-pointer text-sm" />
              </Link>
              <FaTrashAlt className="text-red-500 cursor-pointer ml-4 text-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCategoryList;
