"use client";
import React, { useContext } from "react";
import { motion,easeIn } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { UserContext } from "@/context/MyContext";

const Page = () => {
  const {
    cardItem,
    deleteItem,
    total,
    setTotal,
    incrementHandle,
    decrementHandle,
    orderNow,
  } = useContext(UserContext);

  // sub total

  const subTotal = cardItem.reduce(
    (curEle, item) => curEle + item.price * item.qty,
    0
  );
  setTotal(subTotal);

  return (
    <div>
      
      {cardItem.length === 0 ? (
        <div className="flex justify-center items-center my-5">
          <img src="/img/empty-cart.png" alt="" className="h-[200px]" />
        </div>
      ) : null}
      {cardItem.map((curEle, index) => {
        return (
          <motion.div
          initial={{ opacity: 0 }}
      animate=
      {{
        opacity: 1,
        transition: { delay: 2, duration: 1, ease: easeIn },
      }}
          
          key={index}>
            <div className="container flex gap-[40px] shadow-lg p-10 my-5">
              <div>
                <img
                  src={curEle.img}
                  alt="card image"
                  className="p-3 border bg-gray-300"
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
                    className="text-2xl hover:text-blue-700 cursor-pointer"
                  />
                </div>
                <div className="my-3 text-4xl font-bold cursor-pointer flex gap-3">
                  <p
                    onClick={() => incrementHandle(curEle)}
                    className="text-blue-800"
                  >
                    +
                  </p>
                  <span>{curEle?.qty}</span>
                  <p
                    onClick={() => decrementHandle(curEle)}
                    className="text-blue-800"
                  >
                    -
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-blue-700 font-bold">
                    Price $
                  </span>
                  <p className="font-bold text-red-600 text-2xl">
                    {curEle?.price * curEle?.qty}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
      {cardItem.length > 0 && (
        <>
          <div className="uppercase font-bold flex justify-end mr-[100px] my-3 gap-[10px] text-2xl text-gray-600">
            Subtotal: <span>${total}</span>
          </div>
          <div className="flex justify-end mr-[100px]">
            <button
              onClick={orderNow}
              className="bg-orange-500 p-1 capitalize rounded-full px-4 text-white hover:bg-orange-400"
            >
              order now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
