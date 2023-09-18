import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-hot-toast';

const grid = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1.2fr 2.5fr 2.5fr 5fr 1fr 1fr .5fr "
}

const middleGrid = {
    display: "grid",
    gridTemplateColumns: ".8fr 2fr 1fr",
    gap: "20"
}

const TodayOrder = ({ order }) => {
    const handleProductApproved = data => {
        const agree = window.confirm('Are you sure you want approve this order?')
        console.log(data);
        if (agree) {
            fetch(`http://localhost:5000/api/dashboard/orders/${data?._id}`, {
                method: "PUT",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    toast.success("Approved successfully");
                });
        }
    }

    const handleDeleteOrder = (data) => {
        const agree = window.confirm("Are you sure you want delete this order?");
        if (agree) {
            fetch(`http://localhost:5000/dashboard/orders/${data?._id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    toast.success("Product deleted successfully");
                });
        }
    };
    return (
        <div style={grid} className="px-4 border-b pt-1 gap-5">
            <h1 className="border-r h-full flex items-center  font-medium ">{order?.date}</h1>
            <h1 className='border-r h-full flex items-center '>{order?.email}</h1>
            <h1 className='border-r h-full flex items-center '>{order?.number}</h1>
            <h1 className='border-r h-full flex items-center '>{order?.address}</h1>
            <h1 className='border-r h-full flex items-center '>{order?.message}</h1>
            <div className=''>
                {order?.cart.map((data) => (
                    <div style={middleGrid} className="font-medium">
                        <img className="border-r w-14" src={data?.image} alt="" />
                        <h1 className="border-r h-full flex items-center">{data?.title}</h1>
                        <h1 className="border-r h-full  cursor-pointer  flex items-center justify-center">{data?.quantity}</h1>
                    </div>
                ))}
            </div>
            <h1 className="border-r h-full ml-1  flex items-center">{order?.total}</h1>
            <div className="text-xs border-r h-full cursor-pointer flex items-center">
                {
                    order?.status === 'pending' ? <div onClick={() => handleProductApproved(order)}><h1 className="bg-red-500 inline-block py-1 px-2 rounded-full text-white">Pending</h1></div>
                        :
                        <h1 className="bg-green-500 inline-block py-1 px-2 rounded-full text-white">Approved</h1>
                }
            </div>
            <div
                onClick={() => handleDeleteOrder(order)}
                className=" cursor-pointer  flex items-center justify-center"
            >
                <FontAwesomeIcon icon={faXmark} size="lg" style={{ color: 'red' }} />
            </div>
        </div>
    );
};

export default TodayOrder;