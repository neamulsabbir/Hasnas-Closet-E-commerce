import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../../../State/Thunk/getUserOrders";
import MyOrder from "./MyOrder/MyOrder";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const userOrders = useSelector((state) => state.UserOrders.UserOrders);
  //   console.log(userOrders);

  useEffect(() => {
    dispatch(getUserOrders(user?.email));
  }, [dispatch, user]);

  const mainGrid = {
    display: "grid",
    gridTemplateColumns: "2fr 6.2fr 1.8fr 1fr 1fr",
    gridGap: "10px",
    alignItems: "center",
  }
  const shadow = {
    boxShadow:
      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
  }

  return (
    <div className="my-10 px-4 md:px-14 lg:px-20 ">
      <div
        style={shadow}
        className="p-8  rounded-md"
      >
        <div style={mainGrid} className=" bg-gray-200 p-2 rounded-md font-bold">
          <h1>Date</h1>
          <div className="grid grid-cols-3 gap-10 items-center">
            <h1>Image</h1>
            <h1>Name</h1>
            <h1 className="flex justify-center">Quantity</h1>
          </div>
          <h1>Total</h1>
          <h1>Status</h1>
          <h1 className="flex justify-center">Action</h1>
        </div>
        <div className="bg-white">
          {userOrders.map((order) => (
            <MyOrder key={order?._id} order={order}></MyOrder>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
