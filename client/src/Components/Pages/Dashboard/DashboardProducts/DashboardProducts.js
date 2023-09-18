import React from 'react';
import DashboardProduct from './DashboardProduct/DashboardProduct';
import useData from '../../../../CustomHook/useData';

const shadow = {
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  };

const DashboardProducts = () => {
    const [products] = useData()

    const grid = {
        display: "grid",
        gridTemplateColumns: ".2fr .8fr 1fr .5fr 2.3fr 1fr 1fr 1fr .5fr .6fr",
    }
    return (
        <div style={shadow} className='bg-white rounded-md mb-8 p-5 h-full'>
            <div style={grid} className=" bg-gray-100 h-10 flex items-center font-semibold rounded-md  gap-5 px-2 text-gray-600">
                <h1 className='flex items-center border-r h-full '>#</h1>
                <h1 className='flex items-center border-r h-full '>Date</h1>
                <h1 className='flex items-center border-r h-full '>User Name</h1>
                <h1 className='flex items-center border-r h-full justify-center'>Image</h1>
                <h1 className='flex items-center border-r h-full '>Name</h1>
                <h1 className='flex items-center border-r h-full '>Category</h1>
                <h1 className='flex items-center border-r h-full justify-center'>Cost Price</h1>
                <h1 className='flex items-center border-r h-full justify-center'>Sale Price</h1>
                <h1 className='flex items-center border-r h-full justify-center'>Stock</h1>
                <h1 className='flex items-center justify-center'>Action</h1>
            </div>
            <div>
                {
                    products.map((product, i) => 
                    <div className=''>
                        <DashboardProduct product={product} sl={i + 1} key={i} />
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default DashboardProducts;