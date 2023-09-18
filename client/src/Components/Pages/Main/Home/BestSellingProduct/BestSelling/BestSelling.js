import React from "react";
import { Link } from "react-router-dom";

const BestSelling = ({ datas }) => {
  //   console.log(datas);
  return (
    <div>
      {datas?.cart.map((data) => (
        <div key={data?._id}>
          <Link to={`/product/${data?.slug}`}>
            <div className="">
              <img src={data?.image} className="w-full" alt="" />
              <div>
                <h1 className="">
                  {data?.title.length > 10
                    ? data?.title.slice(0, 15) + "..."
                    : data?.title}
                </h1>
                {data?.regularPrice ? (
                  <div>
                    <h1 className="font-semibold text-sm xl:text-base">
                      BDT {data?.price}
                    </h1>
                    <div className="flex">
                      <div className="flex items-center">
                        <h1 className="line-through decoration-gray-300 text-gray-400 text-xs">
                          BDT {data?.regularPrice}
                        </h1>
                        <p className="ml-4 font-semibold  text-xs text-purple-700 ">
                          {data?.percentage}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <h1 className="font-semibold text-sm xl:text-base">
                    BDT {data?.price}
                  </h1>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BestSelling;
