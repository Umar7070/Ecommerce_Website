import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import Header from "./Header";

const TopNav = () => {
  return (
    <>
      <div className="flex bg-black p-2 items-center justify-center md:justify-start">
        <div className="text-yellow-500 text-xl sm:text-2xl mx-4 sm:mx-10">
          <FaTruckMoving />
        </div>
        <div className="text-white">
          <p className="text-xs sm:text-sm text-center md:text-left">
            Free Shipping when shopping up to $1000
          </p>
        </div>
      </div>

      <Header />
    </>
  );
};

export default TopNav;
