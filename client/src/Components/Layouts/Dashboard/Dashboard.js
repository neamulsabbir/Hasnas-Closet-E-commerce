import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex p-3 gap-3 ">
      <Sidebar />
      <div className="col-span-9 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
