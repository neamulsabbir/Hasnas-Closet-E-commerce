import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import ProductListPrice from "./ProductList/ProductListPrice/ProductListPrice";
import useAdmin from "../../../../../CustomHook/useAdmin";

const DashboardProduct = ({ product, sl, user }) => {
  const { isAdmin } = useAdmin();

  const handleDeleteProduct = (pd) => {
    const agree = window.confirm(`Are you sure You want DELETE ${pd?.title}`);
    if (agree) {
      fetch(`http://localhost:5000/api/products/deleteProducts/${pd?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Product deleted successfully");
        });
    }
  };

  const handleMessage = () => {
    toast.error("You are only visitors");
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: ".2fr .8fr 1fr .5fr 2.3fr 1fr 1fr 1fr .5fr .6fr",
  };
  return (
    <Link to={`/product/${product?.slug}`}>
      <div
        style={grid}
        className="rounded-md border-b  px-2  overflow-x-auto gap-5 items-center text-gray-600"
      >
        <h1 className="flex items-center border-r h-full text-sm">{sl}</h1>
        <h1 className="flex items-center border-r h-full text-sm">
          01.09.2023
        </h1>
        <h1 className="flex items-center border-r h-full text-sm">
          Neamul Kabir
        </h1>
        <img
          className="flex items-center border-r h-full rounded-sm py-5 pr-4"
          src={`http://localhost:5000/${product?.image}`}
          alt=""
        />
        <h1 className="flex items-center border-r h-full text-sm ml-1 font-medium">
          {product?.title}
        </h1>
        <h1 className="flex items-center border-r h-full text-sm ml-1 font-medium">
          {product?.category}
        </h1>
        <h1 className=" border-r h-full flex items-center justify-center">
          10
        </h1>
        <div className=" border-r h-full flex items-center justify-center">
          <ProductListPrice pd={product} />
        </div>
        <p className=" border-r h-full  flex items-center justify-center ">
          20
        </p>
        <div>
          <div className="border-r h-full  flex items-center justify-center text-lg ">
            <Link to={`/dashboard/edit-product/${product?._id}`}>
              <FaEdit className="cursor-pointer text-sm" />
            </Link>
            <FaTrashAlt
              onClick={() => handleDeleteProduct(product)}
              className="text-red-500 cursor-pointer ml-4 text-sm"
            />
          </div>
          {/* {isAdmin?.role === 'admin' ? (
            <div className="border-r h-full  flex items-center justify-center text-lg ">
              <Link to={`/dashboard/edit-product/${product?._id}`}>
                <FaEdit className="cursor-pointer text-sm" />
              </Link>
              <FaTrashAlt
                onClick={() => handleDeleteProduct(product)}
                className="text-red-500 cursor-pointer ml-4 text-sm"
              />
            </div>
          ) : (
            <div
              className="border-r h-full  flex items-center justify-center text-lg "
              onClick={handleMessage}
            >
              <FaEdit className="cursor-pointer text-sm" />
              <FaTrashAlt className="text-red-500 cursor-pointer ml-4 text-sm" />
            </div>
          )} */}
        </div>
      </div>
    </Link>
  );
};

export default DashboardProduct;
