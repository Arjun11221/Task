import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import { setPriceFilter } from "../utils/productSlice";

const ProductDetails = () => {
  const { productCategory, priceFilter } = useSelector((store) => store.product);
  const [allProduct, setAllProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      const res = await axios.get(
        "https://backend-9bg9.onrender.com/api/v1/product/data/allProductDetails"
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setAllProduct(res.data.data);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    let filteredProducts = allProduct;

    if (productCategory) {
      filteredProducts = filteredProducts.filter((data) => {
        return (
          data.category.toLowerCase() === productCategory.toLowerCase() ||
          data.productSize.toLowerCase() === productCategory.toLowerCase()
        );
      });
    }

    if (priceFilter) {
      filteredProducts = filteredProducts.filter((data) => {
        return data.price >= priceFilter.min && data.price <= priceFilter.max;
      });
    }

    setFilterProduct(filteredProducts);
  }, [allProduct, productCategory, priceFilter]);

  const handlePriceFilterChange = (min, max) => {
    if (priceFilter && priceFilter.min === min && priceFilter.max === max) {
      // If the checkbox is being unchecked, reset the priceFilter
      dispatch(setPriceFilter(null));
    } else {
      dispatch(setPriceFilter({ min, max }));
    }
  };

  console.log(handlePriceFilterChange);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-3 gap-4">
        {filterProduct.map((product) => (
          <div
            key={product.id}
            className="border bg-slate-800 text-white border-gray-200 rounded-md p-4"
          >
            <p className="text-lg font-bold">{product.productName}</p>
            <p>{product.description}</p>
            <p>Price: ₹ {product.price}</p>
            <p>Category: {product.category}</p>
            <p>Size: {product.productSize}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
