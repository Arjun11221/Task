import React from "react";
import Sidebar from "./Sidebar";
import ProductForm from "./ProductForm";

const Admin = () => {

  return (
    <>
      <div className="flex">
        <div className="w-[10%]">
          <Sidebar />
        </div>
          <div className="w-[90%] my-20">
            <ProductForm />
          </div>
        
      </div>
    </>
  );
};

export default Admin;
