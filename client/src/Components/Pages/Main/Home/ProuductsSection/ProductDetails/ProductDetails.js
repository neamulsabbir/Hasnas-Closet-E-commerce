import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RatingsAndSocialIcon from "./RatingsAndSocialIcon/RatingsAndSocialIcon";
import ProductPrice from "./ProductPrice/ProductPrice";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import AddToCartAndWishlist from "./AddToCartAndWishlist/AddToCartAndWishlist";
import ProductWarranty from "./ProductWarranty/ProductWarranty";
import ProductDescription from "./ProductDescriptionFAQ/ProductDescription";
import { getProductDetailsData } from "../../../../../../State/Thunk/getProductDetails";

const ProductDetails = () => {
  const { slug } = useParams();

  const [currentItem, setCurrentItem] = useState({});

  const cartItems = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.productDetails.product);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetailsData(slug));
    setCurrentItem(
      cartItems.find(
        (item) => item.slug === slug
      )
    );
  }, [slug,cartItems,dispatch]);

  const shadow ={
    boxShadow:"1.5px 1.5px 9px -4px rgba(0,0,0,0.6)",
}

  return (
    <div className="px-4 md:px-14 lg:px-20 ">
      <div style={shadow} className="p-10 grid md:grid-cols-2 items-center md:items-start bg-white rounded-md my-10 md:my-20 overflow-hidden">
        <div className="border border-gray-200 rounded-md">
          <img className="w-80 mx-auto" src={`http://localhost:5000/${products?.image}`} alt="" />
        </div>
        <div className="md:ml-20 mt-10 md:mt-0 overflow-hidden	">
          <div className="">
            <h1 className="text-3xl font-semibold">{products?.title}</h1>
            <RatingsAndSocialIcon></RatingsAndSocialIcon>
            {/* <div className="border border-gray-200 w-full pr-10"></div> */}
            <hr />
            <ProductPrice></ProductPrice>
          </div>
          <ProductQuantity pd={products} products={currentItem}></ProductQuantity>
          <AddToCartAndWishlist product={currentItem}></AddToCartAndWishlist>
          <ProductWarranty></ProductWarranty>
        </div>
      </div>
      <ProductDescription></ProductDescription>
    </div>
  );
};

export default ProductDetails;
