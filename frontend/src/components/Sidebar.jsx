import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceFilter, setProductCategory } from "../utils/productSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [price200to500, setPrice200to500] = useState(false);
  const [price500to1000, setPrice500to1000] = useState(false);

  const handleChangeMens = () => {
    dispatch(setProductCategory("mens"));
  };

  const handleChangeWomen = () => {
    dispatch(setProductCategory("women"));
  };

  const handleChangeSmall = () => {
    dispatch(setProductCategory("small"));
  };

  const handleChangeMedium = () => {
    dispatch(setProductCategory("medium"));
  };

  const handleChangeLarge = () => {
    dispatch(setProductCategory("large"));
  };

  const handlePrice200to500Change = () => {
    setPrice200to500(!price200to500);
    if (!price200to500) {
      dispatch(setPriceFilter({ min: 200, max: 500 }));
    } else {
      dispatch(setPriceFilter(null));
    }
  };
  
  const handlePrice500to1000Change = () => {
    setPrice500to1000(!price500to1000);
    if (!price500to1000) {
      dispatch(setPriceFilter({ min: 500, max: 1000 }));
    } else {
      dispatch(setPriceFilter(null));
    }
  };

  const handleChangeAll = () => {
    dispatch(setProductCategory(""));
    setPrice200to500(false);
    setPrice500to1000(false);
    dispatch(setPriceFilter(null));
  };

  return (
    <>
      <div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold">
            {user?.user?.name === "Admin" ? "Admin Panel" : "User Panel"}
          </h1>
        </div>
        <div className="flex-grow overflow-y-auto">
          {user?.user?.name === "Admin" ? (
            <ul className="p-2">
              <li className="p-2 hover:bg-gray-700">Dashboard</li>
            </ul>
          ) : (
            <>
              <h1 className="bg-black py-2 px-4">Product Category</h1>
              <p
                className="mb-2 cursor-pointer text-center my-2"
                onClick={handleChangeAll}
              >
                All Product
              </p>
              <p
                className="mb-2 cursor-pointer text-center my-2"
                onClick={handleChangeMens}
              >
                Mens
              </p>
              <p
                className="cursor-pointer mb-2 text-center my-2"
                onClick={handleChangeWomen}
              >
                Women
              </p>
              <hr />
              <h1 className="bg-black py-2 mt-4 px-4">Product Size</h1>
              <p
                className="mb-2 cursor-pointer text-center my-2"
                onClick={handleChangeAll}
              >
                All Product
              </p>
              <p
                className="mb-2 cursor-pointer text-center my-2"
                onClick={handleChangeSmall}
              >
                Small
              </p>
              <p
                className="cursor-pointer text-center my-2"
                onClick={handleChangeMedium}
              >
                Medium
              </p>
              <p
                className="cursor-pointer text-center my-2"
                onClick={handleChangeLarge}
              >
                Large
              </p>

              {/* <select className="bg-black cursor-pointer py-2 px-5 w-full mb-4">
                <option>Product Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select> */}
              <div className="w-full bg-black">
                <label>Product Price</label>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    className="mx-4 cursor-pointer "
                    checked={price200to500}
                    onClick={handlePrice200to500Change}
                  ></input>
                  <span>₹ 200-₹ 500</span>
                </div>
                <div className="mt-2">
                  <input
                    type="checkbox"
                    className="mx-4 cursor-pointer"
                    onClick={handlePrice500to1000Change}
                  ></input>
                  <span>₹ 500-₹ 1000</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
