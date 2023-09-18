import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const BillingDetails = () => {
  const cart = useSelector((state) => state.cart.cart);
  const { user } = useContext(AuthContext);
  // console.log(cart);
  let carts;
  let totalProductPrice =0 ;
  let totalCostPrice =0 ;
  let vat =0
  let total =0
  for (const cartItems of cart) {
    carts = cartItems;
    totalProductPrice  = totalProductPrice + parseFloat(carts?.price * carts?.quantity);
    totalCostPrice = totalCostPrice + parseInt(carts?.costPrice * carts?.quantity)
    vat = parseFloat((10 / 100) * totalProductPrice);   
    total = parseFloat(totalProductPrice + vat + 80).toFixed(2);
  }

  const handleOrderSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const address = form.address.value;
    const email = form.email.value;
    const message = form.message.value;
    const date = new Date().toLocaleDateString();
    const status = 'pending'
    const data = {
      name,
      number,
      address,
      email,
      cart,
      total,
      message,
      totalProductPrice,
      totalCostPrice,
      date,
      status
    };
    // console.log(data);
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data?.acknowledged){
            toast.success("Order submit successfully")
        }
      });
      form.reset()
  };
  return (
    <form
      onSubmit={handleOrderSubmit}
      style={{
        boxShadow:
          "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
      }}
      className="p-8 sm:p-14  rounded-md"
    >
      <div className="mb-5">
        <h1 className="mb-1 font-medium">Full Name</h1>
        <input
          className="border-2 border-gray-200 w-full p-3"
          type="text"
          name="name"
          placeholder="Enter your name"
          defaultValue={user.displayName}
        />
      </div>
      <div className="mb-5">
        <h1 className="mb-1 font-medium">Contact Number</h1>
        <input
          className="border-2 border-gray-200 w-full p-3"
          type="number"
          name="number"
          placeholder="Enter your number"
        />
      </div>
      <div className="mb-5">
        <h1 className="mb-1 font-medium">Full Address</h1>
        <input
          className="border-2 border-gray-200 w-full p-3"
          type="text"
          name="address"
          placeholder="Enter your address"
        />
      </div>
      <div className="mb-5">
        <h1 className="mb-1 font-medium">Email</h1>
        <input
          className="border-2 border-gray-200 w-full p-3"
          type="email"
          name="email"
          placeholder="Enter your email"
          defaultValue={user.email}
          readOnly
        />
      </div>
      <div className="">
        <h1 className="mb-1 font-medium">Message</h1>
        <input
          className="border-2 border-gray-200 w-full p-3"
          type="text"
          name="message"
          placeholder="Write your mesage here..."
        />
      </div>
      <input
        className="bg-black text-white py-2 px-3 mt-10 cursor-pointer"
        type="submit"
        value="Order Submit"
      />
    </form>
  );
};

export default BillingDetails;
