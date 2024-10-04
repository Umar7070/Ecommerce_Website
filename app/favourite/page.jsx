"use client";

import { UserContext } from "@/context/MyContext";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { motion, easeIn } from "framer-motion";

const Favourite = () => {
  const { favourite, homeAddToCart, favouriteRemoveCart } =
    useContext(UserContext);
  return (
    <>
      {favourite.length === 0 ? (
        <div>
          <div className="flex justify-center text-2xl my-5 capitalize font-bold">
            <h1 className="text-blue-600"> favourite cart is empty</h1>
          </div>
          <div className="flex justify-center">
            <Link
              href="/product"
              className="bg-black text-white p-2  capitalize rounded-lg"
            >
              add to favourite
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 1, ease: easeIn },
        }}
        className="container my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
      >
        {favourite.map((curEle, index) => {
          return (
            <div key={index} className="p-4">
              <div className="rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl text-red-800 cursor-pointer hover:text-blue-700">
                <div className="flex justify-end mr-2 sm:mr-4 lg:mr-6">
                  <RxCross2
                    className="my-2 sm:my-4 lg:my-5"
                    onClick={() => favouriteRemoveCart(curEle)}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={curEle.img}
                    alt={curEle.name}
                    className="h-[80px] sm:h-[100px] lg:h-[120px] w-auto object-contain"
                  />
                </div>
                <div className="text-center py-2 sm:py-3 lg:py-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-500 hover:text-red-600">
                    {curEle.name}
                  </h3>
                  <p className="px-2 text-xs sm:text-sm lg:text-base text-gray-700 hover:text-blue-700">
                    {curEle.title}
                  </p>
                  <p className="my-1 text-lg sm:text-xl lg:text-2xl text-blue-600 hover:text-red-500">
                    {curEle.price}
                  </p>
                  <button
                    onClick={() => homeAddToCart(curEle)}
                    className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 font-bold text-xs sm:text-sm lg:text-base shadow-full capitalize text-white"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Favourite;
