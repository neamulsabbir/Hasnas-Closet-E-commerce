import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faUsers, faHouse, faChartBar, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import logo from "../../../../Images/logo-white.png";
import useAdmin from "../../../../CustomHook/useAdmin";
import PdManage from "./Product manage/PdManage";
import CategoryManage from "./Categories manage/CategoryManage";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const dashboardSidebarIsOpen = useSelector(state => state.dashboardSidebar.isOpen)
  

  return (
    <div className="w-80 bg-black h-[calc(100vh-25px)] p-5 rounded-lg sticky top-0">
      <div className="grid grid-rows-2 h-full text-white">
        <div>
          <div className="flex flex-col items-center border-b border-gray-400 pb-5">
            <img className="w-32 " src={logo} alt="" />
          </div>
          <div className="flex items-center mt-11 ">
            <FontAwesomeIcon icon={faChartBar} size="lg" />
            <div className="text-lg ml-4">
              <Link to="/dashboard">Dashboard</Link>
            </div>
          </div>
          <div className="mt-3">
           <PdManage />
          </div>
          <div className="mt-3">
            <CategoryManage />
          </div>
          <div className="flex items-center mt-3">
            <FontAwesomeIcon icon={faPalette} size="lg" />
            <h1 className="text-lg ml-4">
              <Link to="/dashboard/product-color">Product Color</Link>
            </h1>
          </div>

          <div className="flex items-center mt-3">
            <FontAwesomeIcon icon={faUsers} />
            <h1 className="text-lg ml-4">
              <Link to="/dashboard/users">Users</Link>
            </h1>
          </div>
          <div className="flex items-center mt-3">
            <FontAwesomeIcon icon={faBagShopping} size="lg" />
            <h1 className="text-lg ml-4">
              <Link to="/dashboard/orders">Orders</Link>
            </h1>
          </div>

          {/* {isAdmin && (
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faUsers} />
              <h1 className="text-lg ml-3">
                <Link to="/dashboard/users">Users</Link>
              </h1>
            </div>
          )} */}
        </div>

        <div className="mt-auto text-sm flex items-center ">
          <FontAwesomeIcon icon={faHouse} />
          <Link className="ml-3" to="/"> Back to Home </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
