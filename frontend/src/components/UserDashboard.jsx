import React from "react";
import SideBar from "./Sidebar";
import ProductDetails from "../components/ProductDetails";

const UserDashboard = () => {
  return (
    <>
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div><ProductDetails/></div>
      </div>
    </>
  );
};

export default UserDashboard;
