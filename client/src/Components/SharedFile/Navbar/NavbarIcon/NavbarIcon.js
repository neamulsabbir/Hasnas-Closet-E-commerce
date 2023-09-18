import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../../../State/ActionCreator/ActionCreator";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import WishlistIcon from "../../../Icons/BlackWishlistIcon";
import CartIcon from "../../../Icons/CartIcon";
import ProfileIcon from "../../../Icons/ProfileIcon";
import WishlistModal from "../../../Pages/Main/Wishlist/WishlistModal/WishlistModal";
import SidebarCart from "../../../Pages/Main/SidebarCart/SidebarCart";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const NavbarIcon = () => {
  const { user } = useContext(AuthContext);
  const { userSignOut } = useContext(AuthContext);
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    if (!isOpen) {
      dispatch(openSidebar());
    }
  };

  const handleSignOut = () => {
    userSignOut();
  };

  const cartItems = useSelector((state) => state.cart.cart);

  let cartTotal = 0;
  for (const cart of cartItems) {
    cartTotal = cartTotal + cart?.quantity;
  }

  return (
    <div className="hidden lg:block">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: ".4fr .4fr .4fr .7fr",
        }}
        className="justify-end items-center font-semibold w-56 ml-8"
      >
        <Link to="/" className="">
          <FaHome className="text-2xl"></FaHome>
        </Link>
        <div className=" ">
          <label htmlFor="wishlist-product" className="cursor-pointer">
            <WishlistIcon />
          </label>
          <WishlistModal />
        </div>
        <div onClick={handleSidebar} className="cursor-pointer">
          <div className="">
            <h1 className="bg-black text-white rounded-full  w-4 h-4 flex justify-center items-center text-xs font-medium mb-[-13px] z-20 ml-4">
              {cartTotal}
            </h1>
            <div className="">
              <CartIcon />
            </div>
          </div>
          <SidebarCart />
        </div>
        <div>
          {user?.uid ? (
            <div className="dropdown dropdown-end  block">
              <label tabIndex={0} className="flex cursor-pointer">
                <ProfileIcon />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content text-right flex justify-end p-2 border pr-4 shadow mt-3 bg-base-100 rounded-md w-56"
              >
                <button className="text-right">
                  <h1 className="cursor-pointer mt-2 font-medium ">{user?.displayName}</h1>
                  <h1 className="cursor-pointer  font-medium ">{user?.email}</h1>
                  <div className="border-b w-full mb-4"></div>
                  {
                    user.email && <Link className="font-medium block" to='/my-orders'>Orders</Link>
                  }
                  <h1 className="cursor-pointer bg-black text-white inline-block font-medium px-2 py-1 rounded-md" onClick={handleSignOut}>Sign Out</h1>
                </button>
              </ul>
            </div>
          ) : (
            <Link to="signin" className="flex cursor-pointer">
              <ProfileIcon />
              <h1>Sign In</h1>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarIcon;
