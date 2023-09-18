import React, { useState } from "react";
import Description from "./Description/Description";
import Faqs from "./Faqs/Faqs";

const ProductDescription = () => {
  
  const [toggle, setToggle] = useState(1);

  const shadow ={
    boxShadow:"1.5px 1.5px 9px -4px rgba(0,0,0,0.6)",
}
  
  return (
    <div style={shadow} className="bg-white rounded-md p-2 sm:p-5 my-10">
        <div className="border border-gray-200 rounded-md p-2 sm:p-5">
          <div className="flex">
            <div className="flex flex-col items-center">
              <h1 className="text-lg font-bold cursor-pointer" onClick={() => setToggle(1)}>
                DESCRIPTIONS
              </h1>
              <div
                className={
                  toggle === 1 ? "border-b-4 border-b-black w-36 rounded-t-xl" : "w-36"
                }
              ></div>
            </div>
            <div className="flex flex-col items-center ml-5">
              <h1 className="text-lg font-bold cursor-pointer" onClick={() => setToggle(2)}>
                FAQS
              </h1>
              <div
                className={toggle === 2 ? "border-b-4 border-b-black w-14 rounded-t-xl" : "w-14"}
              ></div>
            </div>
          </div>
          <hr className="" />
          <div className="my-10">
            <Description toggle={toggle}></Description>
            <Faqs toggle={toggle}></Faqs>
          </div>
        </div>
      </div>
  );
};

export default ProductDescription;
