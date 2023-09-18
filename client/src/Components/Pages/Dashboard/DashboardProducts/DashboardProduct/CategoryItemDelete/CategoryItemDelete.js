import React from "react";
import { toast } from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

const CategoryItemDelete = ({ product }) => {
  const handleDeleteCategory = (pd) => {
    console.log(pd);
    const agree = window.confirm(
      `Are you sure you want to DELETE ${pd?.items}`
    );
    if (agree) {
      fetch(`http://localhost:5000/dashboard/productCategory/${pd?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.acknowledged) {
            toast.success("Delete successfully");
          }
          // console.log(data);
        });
    }
  };

  return (
    <div className="flex items-center text-xs cursor-pointer bg-red-500 px-2 py-[6px] rounded-md text-white ">
      <h1 className="mr-2" onClick={() => handleDeleteCategory(product)}>
        Delete <span className="font-bold">{product?.items}</span>
      </h1>
      <FaTrashAlt />
    </div>
  );
};

export default CategoryItemDelete;
