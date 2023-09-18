import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardProductsColor = ({ color }) => {
  return (
    <div className="ml-5 mt-5 border-2 p-2 rounded-md ">
      <h1 className="text-xl font-bold">{color?.color}</h1>
      <div className="flex items-center text-xs mt-1">
        <FaEdit className="cursor-pointer" />
        <FaTrashAlt className="text-red-500 ml-5" />
      </div>
    </div>
  );
};

export default DashboardProductsColor;
