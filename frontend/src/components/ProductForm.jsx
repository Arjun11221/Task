import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProductForm = () => {

  const [productDetails, setProductDetails] = useState({
    productName: "",
    description: "",
    price: "",
    category: "",
    productSize: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { productName, description, productSize, price, category, date } =
      productDetails;
    try {
      const res = await axios.post(
        "http://localhost:3030/api/v1/product/data/product",
        { productName, productSize, description, price, category, date }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
    setProductDetails({
      productName: "",
      description: "",
      price: "",
      category: "",
      productSize: "",
      date: "",
    });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="product-name"
          >
            Product Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product-name"
            type="text"
            placeholder="Product Name"
            name="productName"
            value={productDetails.productName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="product-description"
          >
            Product Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product-description"
            placeholder="Product Description"
            name="description"
            onChange={handleChange}
            value={productDetails.description}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="product-price"
          >
            Product Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product-price"
            type="text"
            placeholder="Product Price"
            name="price"
            onChange={handleChange}
            value={productDetails.price}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="product-category"
          >
            Product Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product-category"
            type="text"
            placeholder="Product Category"
            name="category"
            onChange={handleChange}
            value={productDetails.category}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="product-size"
          >
            Product Size
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product-size"
            type="text"
            placeholder="Product Size"
            name="productSize"
            value={productDetails.productSize}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="created-date"
          >
            Created Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="created-date"
            type="date"
            placeholder="Created Date"
            name="date"
            onChange={handleChange}
            value={productDetails.date}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-slate-600 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
