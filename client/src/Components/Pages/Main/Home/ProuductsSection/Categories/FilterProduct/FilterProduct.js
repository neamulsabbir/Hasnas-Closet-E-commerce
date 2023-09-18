import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../../../../../../Icons/SearchIcon";
import { getColorsCategory } from "../../../../../../../State/Thunk/getColorsCategory";
import { sendProductColor } from "../../../../../../../State/ActionCreator/ActionCreator";

const FilterProduct = ({ product, setSearchQuery }) => {
  // console.log(product);
  const [color, setColor] = useState([])
  const dispatch = useDispatch();

  const colors = useSelector((state) => state.colors.colors);

  useEffect(() => {
    dispatch(getColorsCategory());
    const productColor = product?.map((pd) => pd?.color.toLowerCase())
    setColor(colors.filter((color) => productColor?.includes(color?.color.toLowerCase())));

  }, [dispatch, product, colors]);
  // console.log(color);

  const shadow ={
    boxShadow:"1.5px 1.5px 9px -4px rgba(0,0,0,0.6)",
}

  return (
    <div>
      <div className="flex bg-white py-1 px-2 rounded-xl border-2 border-black">
        <SearchIcon />
        <input
          className="py-1 px-2 rounded-xl"
          type="search"
          name=""
          placeholder="Search your product"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

      </div>

      <div style={shadow} className="collapse w-60 bg-white rounded-md mb-5 mt-5">
        <input type="checkbox" />
        <div className="collapse-title font-medium px-4 lg:p-4 flex justify-between items-center">
          <h1 className="font-bold ">Select Color</h1>
          <FaArrowDown className="text-xs"></FaArrowDown>
        </div>
        <div className="collapse-content p-0 px-4">
          {color?.map((color, i) => (
            <div onChange={() => dispatch(sendProductColor(color))} className="flex" key={i}>
              <input
                type="radio"
                name="radio"

              />
              <p className="ml-2">{color?.color}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
