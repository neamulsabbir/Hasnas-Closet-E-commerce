import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoadUsers } from "../../../../State/Thunk/getLoadUsers";
import User from "./User/User";
import DashboardProduct from "../DashboardProducts/DashboardProduct/DashboardProduct";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  //   console.log(users);

  useEffect(() => {
    dispatch(getLoadUsers());
  }, [dispatch]);

  return (
    <div className="bg-white rounded-md p-4">
      <div className="grid grid-cols-5 gap-5 bg-gray-200 rounded-md p-2 font-medium text-base">
        <h1>Joining Date</h1>
        <h1>Name</h1>
        <h1>Email</h1>
        <h1>Make Admin</h1>
        <h1>Action</h1>
      </div>
      {users.map((user) => (
        <div key={user?._id}>
          <User user={user}></User>
        </div>
      ))}
    </div>
  );
};

export default Users;
