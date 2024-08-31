"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";

const page = () => {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <div>
        <div className="flex justify-center items-center flex-col my-10">
          <h1 className="text-gray-800 uppercase font-bold text-3xl">
            cart is empty
          </h1>
          <Link href="/product">
            <button className="my-6 bg-black text-white w-[150px] h-[50px] rounded-lg uppercase">
              shop now
            </button>
          </Link>
        </div>
      </div>
      {/* add to cart img  */}

      <div className="container flex gap-[40px] shadow-lg p-10">
        <div>
          <img src="/img/p9.jpg" alt="" className=" p-3 border bg-gray-300" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-blue-700">Tablet</h1>
          <div className="flex gap-[100px]">
            <p className="text-lg text-gray-600 my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <RxCross1 className="text-2xl" />
          </div>
          <p>
            <span className="text-2xl text-blue-700 font-bold">Price : </span>
            $600
          </p>
          <div className="my-3 text-3xl font-bold cursor-pointer flex gap-6 items-center">
            <p className="text-4xl text-blue-700"> + </p>
            <span>1</span> <span className="text-4xl text-blue-700">-</span>
          </div>
          <p className="uppercase font-bold flex gap-[10px] text-2xl text-gray-600">
            sub Total: <span> $325</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
