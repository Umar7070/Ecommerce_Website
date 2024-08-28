"use client";

import React, { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import Link from "next/link";
const Header = () => {
  const [searchProduct, setSearchProduct] = useState("");

  

  const searchItem = () => {};

  return (
    <>
      <div className=" container w-full flex justify-between items-center py-3    mt-5">
        <div className="h-[30px] w-[100px]">
          <img src="/img/logo.svg" alt="" />
        </div>
        <div className="search flex border border-blue-700 rounded-tl-md rounded-bl-md ">
          <input
            type="text"
            className=" outline-none p-2 "
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
          <div>
            <button
              className="bg-blue-600 text-white p-3 text-sm  w-[100px] "
              onClick={() => searchItem()}
            >
              search
            </button>
          </div>
        </div>
        <div className="flex gap-3  ">
          <LuUser2 />
          <div>
            <p className="text-sm text-gray-600">Hello Umar Tutorial</p>
          </div>
          <div className="cart flex gap-3 text-blue-700 text-[20px]">
            <FaRegHeart />
            <Link href="/addtocart">
              <IoBagCheckOutline  />
            </Link>
          </div>
        </div>
      </div>
      <div className="border border-gray-500"></div>
    </>
  );
};

export default Header;
