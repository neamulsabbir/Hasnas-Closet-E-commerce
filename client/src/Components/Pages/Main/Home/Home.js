import React from "react";
import Banner from "./Banner/Banner";
import Products from "./ProuductsSection/Products/Products";
import Services from "./Services/Services";
import BestSellings from "./BestSellingProduct/BestSellings";
import CategoriesHome from "./CategoriesHome/CategoriesHome";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategoriesHome />
      <BestSellings />
      <Products />
      <Services />
    </div>
  );
};

export default Home;
