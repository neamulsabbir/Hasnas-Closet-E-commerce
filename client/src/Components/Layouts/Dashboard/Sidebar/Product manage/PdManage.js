import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PdManage = () => {
    const [isContentVisible, setContentVisible] = useState(false);
    return (
        <div>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faList} size="lg" />
                <div className="ml-4  block text-lg font-medium cursor-pointer" onClick={() => setContentVisible(!isContentVisible)}>
                    <h1>Products Manage</h1>
                </div>
            </div>
            <div className="bg-gray-900">
                <div className={`ml-9 py-2 duration-1000 transition ${isContentVisible ? 'block' : 'hidden'} `}>
                    <Link to='/dashboard/products' className="flex items-center">
                        <input type="radio" name="" id="" className="w-2 h-2" />
                        <p className="ml-2">Products List</p>
                    </Link>
                    <Link to='/dashboard/add-product' className="flex items-center mt-1">
                        <input type="radio" name="" id="" className="w-2 h-2" />
                        <p className="ml-2">Add Products</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PdManage;