import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishList,
  removeToWishList,
} from "../../../../../../../State/ActionCreator/ActionCreator";
import BlackWishlistIcon from "../../../../../../Icons/BlackWishlistIcon";
import RedWishlistIcon from "../../../../../../Icons/RedWishlistIcon";


const AddToCartAndWishlist = ({ product }) => {
  const [wishlist, SetWishlist] = useState([]);

  const products = useSelector((state) => state.productDetails.product);
  const wishlistProducts = useSelector((state) => state.cart.wishlist);
  const dispatch = useDispatch();
  // console.log(products);
  useEffect(() => {
    SetWishlist(wishlistProducts.find((pd) => pd?.slug === products?.slug));
  }, [products, wishlistProducts]);
  // console.log(wishlist);

  const handleRemoveWishlist = data => {
    dispatch(removeToWishList(data))
  }

  return (
    <div className="mt-6 flex items-center">
      <button
        onClick={() => dispatch(addToCart(products))}
        className={`font-semibold text-white text-sm bg-black px-5 py-2 rounded-full ${
          !product?.quantity ? "animate-bounce" : null
        } `}
      >
        ADD TO CART
      </button>

      <div className="cursor-pointer">
        {!wishlist ? (
          <div
            onClick={() => dispatch(addToWishList(products))}
            className="ml-4"
          >
            <BlackWishlistIcon />
          </div>
        ) : (
          <div className="ml-4" onClick={() => handleRemoveWishlist(products)}>
            <RedWishlistIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCartAndWishlist;
