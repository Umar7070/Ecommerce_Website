import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import Header from "./Header";

const TopNav = () => {
  return (
    <>
      <div className=" flex bg-black p-2 items-center ">
        <div className="text-yellow-500 text-2xl mx-10">
          <FaTruckMoving />
        </div>
        <div className="text-white">
          <p className="text-sm">Free Shipping when shopping upto 1000$</p>
        </div>
      </div>
      <Header/>
    </>
  );
};

export default TopNav;
