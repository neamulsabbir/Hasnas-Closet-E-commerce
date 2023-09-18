import React from 'react';
import useCalculation from '../../../../CustomHook/useCalculation';
import useData from '../../../../CustomHook/useData';
import TodaysOrder from './TodaysOrder/TodaysOrder';


const shadow = {
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  };
const DashboardInfo = () => {
    const [products, orders,users] = useData()
    const [totalSold, totalCost, totalProfit] = useCalculation()
    

    return (
        <div style={shadow} className='h-full bg-white rounded-md mb-8 p-5 h-full'>
            <div className='flex items-center justify-between gap-5'>
                <div className='bg-red-500 text-white inline-block text-2xl font-semibold p-8 w-full'>
                    <h1 className='font-normal'>TOTAL PRODUCTS</h1>
                    <p>{products.length}</p>
                </div>
                <div className='bg-stone-600 text-white inline-block text-2xl font-semibold p-8 w-full'>
                    <h1 className='font-normal'>TOTAL OORDERS</h1>
                    <p>{orders.length}</p>
                </div>
                <div className='bg-orange-400 text-white inline-block text-2xl font-semibold p-8 w-full'>
                    <h1 className='font-normal'>TOTAL USERS</h1>
                    <p>{users.length}</p>
                </div>
            </div>
            <div className='flex items-center justify-between gap-5 mt-5'>
                <div className='bg-lime-500 text-white inline-block text-2xl font-semibold p-8 w-full'>
                    <h1 className='font-normal'>TOTAL SOLD</h1>
                    <p>৳{totalSold}</p>
                </div>
                <div className='bg-cyan-500 text-white inline-block text-2xl font-semibold p-8 w-full'>
                    <h1 className='font-normal'>TOTAL COST</h1>
                    <p>৳{totalCost}</p>
                </div>
                <div className='bg-violet-600 text-white inline-block text-2xl font-semibold p-8 w-full'>
                    <h1 className='font-normal'>TOTAL PROFIT</h1>
                    <p>৳{totalProfit}</p>
                </div>
            </div>
        <TodaysOrder />
        </div>
    );
};

export default DashboardInfo;