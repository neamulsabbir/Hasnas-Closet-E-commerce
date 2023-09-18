import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesProductData } from "../../../../../../State/Thunk/getCategoriesProductData";
import banner from "../../../../../../Images/banner3.png";
import Category from "./Category/Category";
import FilterProduct from "./FilterProduct/FilterProduct";
import ClearFilter from "./ClearFilter/ClearFilter";

const Categories = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("")

  const products = useSelector((state) => state.categoriesProduct.categoriesProduct);
  const filterColor = useSelector((state) => state.categoriesProduct.filterColor);
  

  useEffect(() => {
    dispatch(getCategoriesProductData(name));
  }, [dispatch, name]);

  return (
    <div className="">
      <img className="w-full" src={banner} alt="" />
      <div className="px-4 md:px-14 lg:px-20  my-12 lg:my-20">
        {filterColor.length ? <ClearFilter /> : null}
        <div className=" lg:flex lg:justify-between">
          <FilterProduct setSearchQuery={setSearchQuery} product={products} />
          {filterColor.length <= 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 lg:ml-16">
              {products
                .filter((item) =>
                  item.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((item, i) => <Category key={i} pd={item} />)}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 lg:ml-16">
              {filterColor?.map((item, i) => (
                <Category key={i} pd={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
