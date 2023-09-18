import React from "react";

const AddColor = () => {
  return (
    <form className="p-4">
      <div className="flex items-center mb-5">
        <h1 className="w-52 font-semibold">Color</h1>
        <input
          className="border-2 border-gray-200  rounded-md p-2 w-full"
          type="text"
          name="color"
          placeholder="Write your color"
          required
        />
      </div>
      <div className="flex justify-end">
        <input
          className="bg-black px-3 py-1 rounded-md text-white cursor-pointer"
          type="submit"
          value="Upload"
        />
      </div>
    </form>
  );
};

export default AddColor;
