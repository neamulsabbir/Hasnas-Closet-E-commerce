import React, { useContext, useState } from "react";
import useBanners from "../../../../../CustomHook/useBanners";
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const EditProduct = ({ pd }) => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState(pd?.details || "");
  const [imageFile, setImageFile] = useState(pd?.image || "");
  // console.log(imageFile);
  const [previewImage, setPreviewImage] = useState(
    `http://localhost:5000/${pd.image}` || ""
  );
  const [selectCategory, setSelectCategory] = useState(pd?.category || "");
  const date = new Date().toLocaleDateString();
  const [banners] = useBanners();

  const handleCategoryChange = (event) => {
    setSelectCategory(event.target.value);
  };

  const handleDeleteImg = () => {
    setPreviewImage("");
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    setPreviewImage(imageUrl);
  };

  const handleEditProduct = (event) => {
    event.preventDefault();
    // console.log(data);
    if (imageFile?.name) {
      const errorMessage = !imageFile
        ? "Please select an image"
        : imageFile.size > 262500
        ? "Please upload an image below 2MB"
        : !["image/jpeg", "image/jpg", "image/png"].includes(imageFile.type)
        ? "Please upload a JPEG, JPG, or PNG image"
        : null;
      if (errorMessage) {
        toast.error(errorMessage);
        return;
      } else {
        toast.success("Image added perfectly");
      }
    }

    const form = event.target;
    const title = form.title.value;
    const slug = form.slug.value;
    const color = form.color.value;
    const stock = form.stock.value;
    const price = form.price.value;
    const costPrice = form.costing.value;
    const regularPrice = form.regularPrice.value;

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("color", color);
    formData.append("stock", stock);
    formData.append("price", price);
    formData.append("regularPrice", regularPrice);
    formData.append("costPrice", costPrice);
    formData.append("category", selectCategory);
    formData.append("details", value);
    formData.append("userName", user?.displayName);
    formData.append("date", date);

    fetch(`http://localhost:5000/api/products/editProducts/${pd?._id}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("Product edited successfully");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div key={pd?._id}>
        <div className="text-center text-white bg-black p-2 mb-4 rounded-t-md">
          <h1>
            Edit product in <span className="font-bold">{pd?.title}</span>
          </h1>
        </div>
        <form onSubmit={handleEditProduct}>
          <div className="grid grid-cols-2 gap-5 items-center">
            <div className="flex flex-col mb-5">
              <div className="ml-4 inline-block mb-[-13px] z-20">
                <span className="font-semibold bg-white px-1">
                  Product Title
                </span>
              </div>
              <input
                className="border-2 border-gray-200  rounded-full px-4 py-4 w-full "
                type="text"
                name="title"
                defaultValue={pd?.title}
              />
            </div>
            <div className="flex flex-col mb-5">
              <div className="ml-4 inline-block mb-[-13px] z-20">
                <span className="font-semibold bg-white px-1">
                  Product Slug
                </span>
              </div>
              <input
                className="border-2 border-gray-200  rounded-full px-4 py-4 w-full "
                type="text"
                name="slug"
                defaultValue={pd?.slug}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col mb-5">
              <div className="ml-4 inline-block mb-[-13px] z-20">
                <span className="font-semibold bg-white px-1">
                  Product Color
                </span>
              </div>
              <input
                className="border-2 border-gray-200  rounded-full px-4 py-4 w-full "
                type="text"
                name="color"
                defaultValue={pd?.color}
              />
            </div>
            <div className="flex flex-col mb-5">
              <div className="ml-4 inline-block mb-[-13px] z-20">
                <span className="font-semibold bg-white px-1">
                  Product Stock
                </span>
              </div>
              <input
                className="border-2 border-gray-200  rounded-full px-4 py-4 w-full "
                type="text"
                name="stock"
                defaultValue={pd?.stock}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col mb-5">
              <div className="ml-4 inline-block mb-[-13px] z-20">
                <span className="font-semibold bg-white px-1">
                  Product Price
                </span>
              </div>
              <input
                className="border-2 border-gray-200  rounded-full px-4 py-4 w-full "
                type="text"
                name="price"
                defaultValue={pd?.price}
              />
            </div>
            <div className="flex flex-col mb-5">
              <div className="ml-4 inline-block mb-[-13px] z-20">
                <span className="font-semibold bg-white px-1">
                  Costing Price
                </span>
              </div>
              <input
                className="border-2 border-gray-200  rounded-full px-4 py-4 w-full "
                type="text"
                name="costing"
                defaultValue={pd?.costPrice}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-5">
            <div className="flex flex-col mb-5">
              <div className="ml-4 inline-block mb-[-13px] z-20">
                <span className="font-semibold bg-white px-1">
                  Product Regular Price
                </span>
              </div>
              <input
                className="border-2 border-gray-200  rounded-full px-4 py-4 w-full "
                type="text"
                name="regularPrice"
                defaultValue={pd?.regularPrice}
              />
            </div>

            <div className="">
              <select
                onChange={handleCategoryChange}
                className="select select-bordered w-full"
              >
                <option selected>
                  Do you want change '{pd?.category}' category?
                </option>
                {banners.map((banner) => (
                  <option value={banner.category}>{banner?.category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col  mb-5">
            <div className="ml-4 inline-block mb-[-13px] z-20">
              <span className="font-semibold bg-white px-1">
                Product Details
              </span>
            </div>
            <div className="border-2  border-gray-200  rounded-md p-2 w-full">
              <ReactQuill
                placeholder="Write your details..."
                className="w-full text-base"
                theme="snow"
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
          <div className=" ">
            <div className="flex flex-col mb-5">
              <div className="ml-4 inline-block mb-[-13px] z-20">
                <span className="font-semibold bg-white px-1">
                  Upload Image
                </span>
              </div>
              <input
                className="border-2 border-gray-200  rounded-md p-4 w-full"
                type="file"
                onChange={handleImageChange}
              />
            </div>
            <div className="relative">
              {previewImage && (
                <div className="flex flex-col items-center">
                  <img
                    className="w-44 border "
                    src={previewImage}
                    alt="Preview"
                  />
                  <FontAwesomeIcon
                    onClick={handleDeleteImg}
                    className="absolute mt-2 mr-[-145px] w-3 h-3 p-1 bg-red-500 rounded-full text-2xl text-white font-bold z-10 cursor-pointer"
                    icon={faX}
                  />
                </div>
              )}
            </div>
          </div>
          <input
            className="bg-black px-3 py-1 rounded-md text-white cursor-pointer"
            type="submit"
            value="Update Product"
          />
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
