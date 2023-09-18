import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from '../../../../../CustomHook/useData'
import EditProduct from "./EditProduct";

const EditProducts = () => {
  const { id } = useParams();
  const [products] = useData()
  const [filterProduct, setFilterProduct] = useState([]);
  // console.log(filterProduct);

  useEffect(() => {
    const findProduct = products.filter((pd) => pd?._id === id)
    setFilterProduct(findProduct);
  }, [id, products]);


  return (
    <div className="bg-white rounded-md border-2 p-4">
      <div>
        {filterProduct.map((pd) => <EditProduct key={pd?._id} pd={pd} />)}
      </div>
    </div>
  );
};

export default EditProducts;
