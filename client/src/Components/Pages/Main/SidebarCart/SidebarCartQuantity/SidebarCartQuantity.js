import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../../../State/ActionCreator/ActionCreator';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const SidebarCartQuantity = ({ cart }) => {
  const dispatch = useDispatch()

  return (
    <div className=" flex items-center">
      <h1 className="text-xs font-semibold">QTY:</h1>
      <div className="flex items-center ml-2 rounded-sm">
        <button onClick={() => dispatch(removeFromCart(cart))}> <FontAwesomeIcon className='text-xs px-1' icon={faMinus} /></button>
        <p className="font-bold text-xs px-1 border-r border-l p-0">{cart?.quantity}</p>
        <button onClick={() => dispatch(addToCart(cart))} className="px-1 p-0"><FontAwesomeIcon className='text-xs' icon={faPlus} /></button>
      </div>
    </div>
  );
};


export default SidebarCartQuantity;