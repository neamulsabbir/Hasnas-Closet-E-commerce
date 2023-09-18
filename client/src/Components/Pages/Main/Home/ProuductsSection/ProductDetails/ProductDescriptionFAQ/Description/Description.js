import React from "react";
import { useSelector } from "react-redux";

const Description = ({ toggle }) => {
  const products = useSelector((state) => state.productDetails.product);
  
  return (
    <div className={toggle === 1 ? "block" : "hidden"}>
      <h1 className="text-lg font-bold">Product Details:</h1>
      <div dangerouslySetInnerHTML={{ __html: products?.details }}></div>
      <img src={products?.size} alt="" />
    </div>
  );
};

export default Description;
