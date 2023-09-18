import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
// import './Create.css'

const CreateNewCategory = () => {
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [category, setCategory] = useState('')
  // console.log(imageFile);

  const handleDeleteImg = () => {
    setPreviewImage('')
  }

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    setPreviewImage(imageUrl);
  };

  const handleAddCategory = (event) => {
    event.preventDefault();

    const formData = new FormData()
    formData.append('category', category)
    formData.append('banner', imageFile)

    fetch('http://localhost:5000/api/added-banner-category', {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (data?.acknowledged) {
          toast.success('Product edited successfully')
        }
      })

  }

  return (
    <div className="bg-white rounded-md border-2 p-4">
      <div className="text-center text-white bg-black p-2 mb-4 rounded-t-md">
        <h1>Add new product category</h1>
      </div>
      <h1 className="italic text-red-400">* At first you need to create category or banner.Then go to Add Product</h1>
      <form onSubmit={handleAddCategory}>
        <div className="grid grid-cols-2 gap-10 w-full mt-10">
          <div className="flex flex-col mb-5 w-full ">
            <div className="ml-4 inline-block mb-[-13px] z-20">
              <span className="font-semibold bg-white px-1">Category Name</span>
            </div>
            <input
              className="border-2 border-gray-200  rounded-full px-4 py-4 w-full "
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Write here"
            />
          </div>
          <div className="flex flex-col mb-5 w-full">
            <div className="ml-4 inline-block mb-[-13px] z-20">
              <span className="font-semibold bg-white px-1">Upload Banner (optional)</span>
            </div>
            <input
              className="border-2 border-gray-200  rounded-md p-4 w-full"
              type="file"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          {previewImage && (
            <div className="flex flex-col">
              <div className="flex justify-end">
                <FontAwesomeIcon onClick={handleDeleteImg} className=" mb-[-40px] w-3 h-3 p-1 bg-red-500 rounded-full text-2xl text-white font-bold z-10 cursor-pointer" icon={faX} />
              </div>
              <img className="border " src={previewImage} alt="Preview" />
            </div>
          )}
        </div>
        <div>
          <input
            className="bg-black px-3 py-1 rounded-md text-white cursor-pointer"
            type="submit"
            value="Upload"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateNewCategory;
