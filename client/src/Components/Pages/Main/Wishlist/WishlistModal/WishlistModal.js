import React from "react";
import { useDispatch, useSelector } from "react-redux";
import WishlistPrice from "../WishlistPrice/WishlistPrice";
import { addToCart } from "../../../../../State/ActionCreator/ActionCreator";

const WishlistModal = () => {

  const dispatch = useDispatch();
  const wishlistProducts = useSelector((state) => state.cart.wishlist);
  const products = useSelector((state) => state.productDetails.product);
  
  return (
    <div>
      <input type="checkbox" id="wishlist-product" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="wishlist-product"
            className="btn btn-sm btn-circle bg-black absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center mb-4">
            Your Favourite Product!
          </h3>
          <div className="grid grid-cols-2 gap-5">
            {wishlistProducts.map((pd,i) => (
              <div key={i} style={{
                boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"
              }} className=" bg-white rounded-md shadow-md p-2">
                <img className="rounded-t-md" src={pd?.image} alt="" />
                <h1 className="font-semibold">{pd?.title}</h1>
                <WishlistPrice pd={pd} />
                <button
                  onClick={() => dispatch(addToCart(products))}
                  className=" text-white text-[10px] bg-black px-2 py-2 rounded-md ">
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistModal;
