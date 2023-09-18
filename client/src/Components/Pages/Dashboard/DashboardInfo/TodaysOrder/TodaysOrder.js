import React, { useEffect, useState } from 'react';
import useOrders from '../../../../../CustomHook/useOrders';
import TodayOrder from './TodayOrder';

const shadow = {
    boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
}
const grid = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1.2fr 2.5fr 2.5fr 5fr 1fr 1fr .5fr "
}
const middleGrid = {
    display: "grid",
    gridTemplateColumns: ".8fr 2fr 1fr",
    gap: "20"
}


const TodaysOrder = () => {
    const [filterProducts, setFilterProducts] = useState()
    const [orders] = useOrders()
    const date = new Date().toLocaleDateString();
    console.log(filterProducts);

    useEffect(() => {
        const matchProducts = orders.filter(order => order?.date === date)
        setFilterProducts(matchProducts)
    }, [orders, date])

    return (
        <div>
            <div style={shadow} className='p-5  mt-5'>
                <h1 className='text-xl font-semibold mb-4'>Todays New Orders Summary</h1>
                {
                    filterProducts?.length  ? <div className="w-full overflow-auto touch-auto bg-white rounded-md">
                    <div className="rounded-md w-[140%] max-w-none h-auto">
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
                            {filterProducts?.map((order) => (
                                <TodayOrder key={order?._id} order={order}></TodayOrder>
                            ))}
                        </div>
                    </div>
                </div>
                :
                <h1>Todays Order Empty</h1>
                }
            </div>
        </div>
    );
};

export default TodaysOrder;