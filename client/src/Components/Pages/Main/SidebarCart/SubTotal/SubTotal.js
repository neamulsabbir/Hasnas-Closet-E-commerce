import React from 'react';
import { useSelector } from 'react-redux';

const SubTotal = () => {
    const carts = useSelector(state => state.cart.cart)

    let cart;
    let total = 0;
    for(const cartItems of carts){
        cart = cartItems
        total = total + parseFloat(cartItems.price * cartItems.quantity)
    }

    return (
        <div>
            <hr/>
            {
                cart ? <h1 className='py-4 '>Subtotal: <span className='font-bold'>BDT {total}</span> </h1>
                :
                <h1 className='py-4'>Subtotal: 0</h1>
            }
           
        </div>
    );
};

export default SubTotal;