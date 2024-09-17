"use client";

import { UserContext } from "@/context/MyContext";
import React, { useContext, useState } from "react";
import Link from "next/link";

const Favourite = () => {
  const { favourite } = useContext(UserContext);
  return (
    <>
      {favourite.length === 0 ? (
        <div>
          <div className="flex justify-center text-2xl my-5 capitalize font-bold">
            <h1>cart is empty</h1>
          </div>
          <div className="flex justify-center">
            <Link
              href="/product"
              className="bg-black text-white p-2 capitalize rounded-lg"
            >
              add to favourite
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="container my-10 grid grid-cols-4 gap-10 ">
        {favourite.map((curEle, index) => {
          return (
            <div key={index}>
              <div className="">
                <div className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center items-center">
                    <img src={curEle.img} alt="" />
                  </div>
                  <div className="text-center py-4">
                    <h3 className="text-2xl text-gray-500">{curEle.name}</h3>
                    <p className="px-2 text-sm text-gray-700 hover:text-blue-700">
                      {curEle.title}
                    </p>
                    <p className="my-3 text-2xl text-blue-600">
                      {curEle.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favourite;
