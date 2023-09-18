import React from 'react';
import useBanners from '../../../../../CustomHook/useBanners';
import EditCategory from './EditCategory/EditCategory';

const EditCategories = () => {
    const [banners] = useBanners()
    return (
        <div>
            {
                banners.map(category => <EditCategory key={category?._id} data={category}  />)
            }
        </div>
    );
};

export default EditCategories;