"use client";

import { UserContext } from "@/context/MyContext";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { motion , easeIn } from "framer-motion";

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
              className="bg-black text-white p-2 px-4 capitalize rounded-lg"
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
      className="container my-10 grid grid-cols-4 gap-10 ">
        {favourite.map((curEle, index) => {

          return (
            <div key={index}>
              <div className="">
                <div className="   rounded-lg  hover:scale-110 transition-transform duration-300  shadow-lg hover:shadow-xl  text-red-800 text-xl cursor-pointer hover:text-blue-700">
                  <div className="flex justify-end mr-6 ">
                    <RxCross2
                      className="my-5 "
                      onClick={() => favouriteRemoveCart(curEle)}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={curEle.img} alt="" className="h-[120px]" />
                  </div>
                  <div className="text-center py-4">
                    <h3 className="text-2xl text-gray-500 hover:text-red-600">
                      {curEle.name}
                    </h3>
                    <p className="px-2 text-sm text-gray-700 hover:text-blue-700">
                      {curEle.title}
                    </p>
                    <p className="my-1 hover:text-red-500 text-2xl text-blue-600">
                      {curEle.price}
                    </p>
                    <button
                      onClick={() => homeAddToCart(curEle)}
                      className="bg-blue-400 p-2 rounded-lg  hover:bg-blue-500 font-bold text-xs shadow-full capitalize text-white"
                    >
                      add to cart
                    </button>
                  </div>
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
