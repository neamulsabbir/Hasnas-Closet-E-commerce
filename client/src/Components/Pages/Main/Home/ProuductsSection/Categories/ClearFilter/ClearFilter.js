import React from 'react';
import CloseCircle from '../../../../../../Icons/CloseCircle';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilterItem } from '../../../../../../../State/ActionCreator/ActionCreator';

const ClearFilter = () => {
    const dispatch = useDispatch();
    const filterColor = useSelector((state) => state.categoriesProduct.filterColor);
    return (
        <div
        onClick={() => dispatch(clearFilterItem(filterColor))}
        className="flex justify-start items-center"
      >
        <div className="flex items-center text-xs cursor-pointer bg-black px-[6px] py-[6px] rounded-tl-md rounded-bl-md rounded-tr-full rounded-br-full text-white mb-4">
          <h1 className="mr-2 font-semibold">Clear Filter</h1>
          <div className="animate-pulse">
            <CloseCircle />
          </div>
        </div>
      </div>
    );
};

export default ClearFilter;