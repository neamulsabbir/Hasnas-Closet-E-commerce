import React from "react";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MyOrder = ({ order }) => {
  // console.log(order);
  const handleDeleteOrder = (data) => {
    const agree = window.confirm("Are you sure you want delete this order?");
    if (agree) {
      fetch(`http://localhost:5000/orders/${data?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Product deleted successfully");
        });
    }
  };

  const mainGrid = {
    display: "grid",
    gridTemplateColumns: "2fr 6.2fr 1.8fr 1fr 1fr",
    gridGap: "10px",
    alignItems: "center",
  }

  return (
    <div
      className="px-2 border-b-8 border-gray-50 pt-1 pb-4"
      style={mainGrid}
    >
      <h1 className="mt-4 font-medium">{order?.date}</h1>
      <div>
        {order?.cart.map((data) => (
          <div className="grid grid-cols-3 gap-10 items-center font-medium mt-3">
            <img className="w-20" src={data?.image} alt="" />
            <h1 className="">{data?.title}</h1>
            <h1 className="flex justify-center">{data?.quantity}</h1>
          </div>
        ))}
      </div>
      <h1 className="">{order?.total}</h1>
      <div className="text-sm">
        {
          order?.status === 'pending' ? <h1 className="bg-red-500 inline-block py-1 px-2 rounded-full text-white">Pending</h1>
            :
            <h1 className="bg-green-500 inline-block py-1 px-2 rounded-full text-white">Approved</h1>
        }
      </div>
      <div className="flex justify-center ">
        {
          order?.status === 'approved' ? <FontAwesomeIcon icon={faXmark} size="lg" className="text-red-300 flex justify-center" />
            :
            <div
              onClick={() => handleDeleteOrder(order)}
              className="cursor-pointer"
            >
              <FontAwesomeIcon icon={faXmark} size="lg" style={{ color: 'red' }} />
            </div>

        }
      </div>
    </div>
  );
};

export default MyOrder;
