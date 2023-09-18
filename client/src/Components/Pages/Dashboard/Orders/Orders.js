import React from 'react';
import Order from './Order/Order';
import useOrders from '../../../../CustomHook/useOrders';


const shadow = {
    boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
}
const grid = {
    display: "grid",
    gridTemplateColumns: "1.3fr 2.5fr 1.6fr 2.5fr 2.5fr 5fr 1fr 1fr .5fr "
}
const middleGrid = {
    display: "grid",
    gridTemplateColumns: ".8fr 2fr 1fr",
    gap: "20"
}

const Orders = () => {
    
    const [orders] = useOrders()

    return (
        <div className="w-full overflow-auto touch-auto bg-white rounded-md mb-8 p-5 ">
            <div style={shadow} className="p-5 rounded-md w-[140%] max-w-none h-auto">
                <div style={grid} className="items-center gap-5  bg-gray-200 py-2 px-4 rounded-md font-bold ">
                    <h1 className=''>Date</h1>
                    <h1 className=''>Email</h1>
                    <h1 className=''>Number</h1>
                    <h1 className=''>Address</h1>
                    <h1 className=''>message</h1>
                    <div className=' '>
                        <div style={middleGrid}>
                            <h1 className=''>Image</h1>
                            <h1 className=''>Name</h1>
                            <h1 className=' flex items-center justify-center'>Quantity</h1>
                        </div>
                    </div>
                    <h1 className=''>Total</h1>
                    <h1 className=''>Status</h1>
                    <h1 className=' flex justify-center'>Action</h1>
                </div>
                <div className="bg-white">
                    {orders.map((order) => (
                        <Order key={order?._id} order={order}></Order>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Orders;