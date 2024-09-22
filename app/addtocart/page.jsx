"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { UserContext } from "@/context/MyContext";

const page = () => {
  const { cardItem, setCardItem, deleteItem, incrementHandle } =
    useContext(UserContext);

  console.log("cardItem===============!11111111111", cardItem);

  return (
    <div>
      {cardItem.length === 0 ? (
        <div>
          <div className="flex justify-center items-center flex-col my-10">
            <h1 className="text-gray-800 uppercase font-bold text-3xl">
              cart is empty
            </h1>
            <Link href="/product">
              <button className="my-6 bg-black  text-white w-[150px] h-[50px] rounded-lg uppercase">
                shop now
              </button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}

      {cardItem.map((curEle, index) => {
        return (
          <>
            <div className="container flex gap-[40px] shadow-lg p-10 my-5">
              <div>
                <img
                  src={curEle.img}
                  alt="card image"
                  className=" p-3 border bg-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-blue-700">
                  {curEle.name}
                </h1>
                <div className="flex gap-[100px]">
                  <p className="text-lg text-gray-600 my-5">{curEle.title}</p>
                  <RxCross1
                    onClick={() => deleteItem(curEle)}
                    className="text-2xl hover:text-blue-700 cursor-pointer  "
                  />
                </div>
                <div className="my-3 text-4xl  font-bold cursor-pointer flex gap-3">
                  <p
                    onClick={() => incrementHandle(curEle)}
                    className="text-blue-800"
                  >
                    +
                  </p>
                  <span>{curEle?.qty}</span>
                  <span className="text-blue-800 ">-</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-blue-700 font-bold">
                    Price
                  </span>
                  <p className="font-bold text-red-600 text-2xl">
                    {curEle.price}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <dvi className="uppercase font-bold flex justify-end mr-[100px] my-10  gap-[10px] text-2xl text-gray-600">
        sub Total: <span> $325</span>
      </dvi>
    </div>
  );
};

export default page;
