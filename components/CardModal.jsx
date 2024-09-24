"use client";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { UserContext } from "@/context/MyContext";

export default function CardModal({ showModal, onModalClose,product }) {
  const {homeAddToCart} = useContext(UserContext)
console.log("product========", product);

  const closeModal = () => {
    setClose(!close);
  };
  return (
    <Dialog open={showModal} onClose={onModalClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 border-2  w-full">
          <DialogPanel
            transition
            className="relative transform rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-4xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
              <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4  rounded w-[100%] mx-auto">
                <div className="relative">
                  <RxCross2
                    className="absolute top-0 right-2 text-3xl text-gray-700 cursor-pointer hover:text-blue-600"
                    onClick={onModalClose}
                  />
                </div>
                <div className="flex justify-between gap-10">
                  <div className="w-[40%] my-10">
                    <img
                      src={product?.img}
                      className="h-[200px] w-[250px] border border-gray-950 p-3"
                    />
                  </div>
                  <div className="w-[60%]">
                    <div className="my-10">
                      <p className=" text-blue-700 capitalize font-bold text-2xl">{product?.name}</p>
                      <p className="text-md text-gray-700  py-3">
                        Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                      </p>
                      <p className="text-xm text-gray-700 text-sm hover:text-blue-700">
                       {product?.title}
                      </p>
                      <p className="mt-5 hover:text-blue-700 font-bold text-gray-900 text-2xl">{product?.price}</p>
                      <div>
                        <button   onClick={()=>homeAddToCart(product)} className="bg-black text-white h-[40px] w-[150px] text-sm mt-10 rounded-md  capitalize"  >
                          add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
