import React from "react";
import { toast } from "react-hot-toast";

const User = ({ user }) => {
  const handleDeleteUser = (data) => {
    // console.log(data);
    const agree = window.confirm(
      `Are you sure you want to delete ${data?.name}`
    );
    if (agree) {
      fetch(`http://localhost:5000/users/${data?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          toast.success("Product deleted successfully");
          // const remainingProduct = displayProduct?.products.filter(
          //   (item) => item?.id !== pd?.id
          // );
          // setDisplayProduct(remainingProduct);
        });
    }
  };
  const handleMakeAdmin = (data) => {
    // console.log(data);
    const agree = window.confirm(
      `Are you sure you want to make admin ${data?.name}`
    );
    if (agree) {
      fetch(`http://localhost:5000/users/admin/${data?._id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Make admin successfully");
        });
    }
  };
  const handleDeleteAdmin = (data) => {
    // console.log(data);
    const agree = window.confirm(
      `Are you sure you want to delete admin ${data?.name}`
    );
    if (agree) {
      fetch(`http://localhost:5000/users/delete-admin/${data?._id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Delete admin successfully");
        });
    }
  };

  return (
    <div className="grid grid-cols-5 gap-5 px-2 border-b py-4">
      <p>{user?.joiningDate}</p>
      <h1>{user?.name}</h1>
      <h1>{user?.email}</h1>
      <div className="flex justify-start ">
        {
          user?.role &&
        user?.role === "admin" ? (
          <button onClick={() => handleDeleteAdmin(user)} className="bg-red-500 py-1 px-2 text-xs text-white rounded-lg">
            Delete Admin
          </button>
        ) : (
          <button
            onClick={() => handleMakeAdmin(user)}
            className="bg-green-500 py-1 px-2 text-xs text-white rounded-lg"
          >
            Make Admin
          </button>
        )}
      </div>
      <div className="flex justify-start ">
        <button
          onClick={() => handleDeleteUser(user)}
          className="bg-red-500 py-1 px-2 text-xs text-white rounded-lg"
        >
          Delete User
        </button>
      </div>
    </div>
  );
};

export default User;
