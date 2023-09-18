import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../../../../../State/ActionCreator/ActionCreator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ProductQuantity = ({ products,pd }) => {
  // console.log(products);
  const dispatch = useDispatch()
  // const product = useSelector(state => state.productDetails.product)
  const cartItems = useSelector((state) => state.cart.cart);

  let cart;
  for (const carts of cartItems) {
    cart = carts;
  }

  return (
    // <div className="mt-4">
    //   <h1 className="text-base">Quantity:</h1>
    //     <div className="flex items-center mt-2">
    //       <button onClick={() => dispatch(removeFromCart(cart))} className="border-r-2 border-b-2 border-gray-300 px-3">-</button>
    //         <p className="px-3 border-r-2 border-b-2 border-gray-300">{products?.quantity ? products?.quantity : 0}</p>
    //       <button onClick={() => dispatch(addToCart(cart))} className="px-3 border-b-2">+</button>
    //   </div>
    // </div>
    <div className="my-6">
      <div className="inline-block">
        <h1 className="text-sm font-semibold">Quantity</h1>
        <div className="flex items-center mt-2 rounded-sm border-b ">
          <button onClick={() => dispatch(removeFromCart(cart))}> <FontAwesomeIcon className='text-sm px-2' icon={faMinus} /></button>
          <p className="font-bold text-sm px-2 border-r border-l p-0">{products?.quantity ? products?.quantity : 0}</p>
          <button onClick={() => dispatch(addToCart(cart))} className="px-2 p-0"><FontAwesomeIcon className='text-sm' icon={faPlus} /></button>
        </div>
      </div>
      <h1 className = 'mt-1'>Available:{pd?.stock}</h1>
    </div>
  );
};

export default ProductQuantity;
