import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CategoryItemEdit = () => {
  const { id } = useParams();
  const [imageFile, setImageFile] = useState(null)
  const [filterProduct, setFilterProduct] = useState([]);
//   console.log(filterProduct);
  
  const products = useSelector((state) => state.product.products);
  const imageHostKey = process.env.REACT_APP_imagebb_key;

  useEffect(() => {
    setFilterProduct(products?.find((pd) => pd?._id === id));
  }, [id, products]);

  const handleUpdateCategory = event => {
    event.preventDefault()
    // console.log(data);
    const formData = new FormData()
    formData.append('image', imageFile)

    fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`,{
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {
      // console.log(imgData);
      if(imgData.success  ){
        const form = event.target;
        const items = form.items.value;
        const category = form.category.value;
        const banner = imgData?.data?.display_url;
        let data = {
          items,category,banner
        } 
        fetch(`http://localhost:5000/dashboard/productCategory/${id}` , {
        method: 'PUT',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          if(data?.acknowledged){

            toast.success("Product updated successfully");
            form.reset()
          }
        })
        .catch(error => {
          console.error(error);
        });

        

          }
        })
  }

  return (
    <div className="bg-white rounded-md border-2 p-4">
      <h1 className="text-center text-white bg-black p-2 mb-4 rounded-t-md"><span className="font-bold">{filterProduct?.items} </span> update this category</h1>
      <form onSubmit={handleUpdateCategory}>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Items</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="text"
            name="items"
            placeholder="Product title"
            defaultValue={filterProduct?.items}
            required
          />
        </div>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Category</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="text"
            name="category"
            placeholder="Product color"
            defaultValue={filterProduct?.category}
            required
          />
        </div>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Upload Banner</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="file"
            onChange = {(event) => setImageFile(event.target.files[0])}
            required
          />
        </div>
        <input
          className="bg-black px-3 py-1 rounded-md text-white cursor-pointer"
          type="submit"
          value="Update Category"
        />
      </form>
    </div>
  );
};

export default CategoryItemEdit;
