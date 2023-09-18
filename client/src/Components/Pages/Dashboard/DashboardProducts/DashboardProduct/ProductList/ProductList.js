import React from "react";
import { toast } from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductListPrice from "./ProductListPrice/ProductListPrice";

const ProductList = ({ pd, setDisplayProduct, displayProduct }) => {
  // console.log(pd);
  const handleDeleteProduct = (pd) => {
    const agree = window.confirm(`Are you sure You want DELETE ${pd?.title}`);
    if (agree) {
      fetch(`http://localhost:5000/dashboard/product/${pd?.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          toast.success("Product deleted successfully");
          const remainingProduct = displayProduct?.products.filter(
            (item) => item?.id !== pd?.id
          );
          setDisplayProduct(remainingProduct);
        });
    }
  };

  return (
    <div className="rounded-md border-b p-2 overflow-x-auto grid grid-cols-7"
    >
      <h1 className="text-sm">{pd?.date}</h1>
      <h1 className="text-sm">{pd?.userName}</h1>
      <img className="w-10 rounded-sm" src={pd?.image} alt="" />
      <div>
        {/* <h1 className="text-sm ml-1 font-medium">{pd?.title}</h1> */}
      </div>
      <ProductListPrice pd={pd} />
      <p className="flex flex-col items-center">{pd?.stock}</p>
      <div className="flex justify-end text-lg ">
        <Link to={`/dashboard/edit-product/${pd?.id}`}>
          <FaEdit className="cursor-pointer text-sm" />
        </Link>
        <FaTrashAlt
          onClick={() => handleDeleteProduct(pd)}
          className="text-red-500 cursor-pointer ml-4 text-sm"
        />
      </div>
    </div>
  );
};

export default ProductList;
