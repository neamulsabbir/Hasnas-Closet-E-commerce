import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getColorsCategory } from "../../../../State/Thunk/getColorsCategory";
import DashboardProductsColor from "./DashboardProductsColor/DashboardProductsColor";
import { Link } from "react-router-dom";

const DashboardProductsColors = () => {
  const dispatch = useDispatch();

  const colors = useSelector((state) => state.colors.colors);
  console.log(colors);

  useEffect(() => {
    dispatch(getColorsCategory());
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-end pt-5 pr-5">
        <div className="cursor-pointer bg-black px-2 py-[6px] rounded-md text-white text-xs">
          <Link to="/dashboard/add-color">Add New Color</Link>
        </div>
      </div>
      <div className="grid grid-cols-9 gap-5">
        {colors.map((color) => (
          <DashboardProductsColor key={color?._id} color={color} />
        ))}
      </div>
    </div>
  );
};

export default DashboardProductsColors;
