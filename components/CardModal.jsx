"use client";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { UserContext } from "@/context/MyContext";

export default function CardModal({ showModal, onModalClose, product }) {
  const { homeAddToCart } = useContext(UserContext);

  return (
    <Dialog open={showModal} onClose={onModalClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel className="relative transform rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-4xl">
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full mx-auto">
              <div className="relative">
                <RxCross2
                  className="absolute top-0 right-1 text-3xl text-gray-700 cursor-pointer hover:text-blue-600"
                  onClick={onModalClose}
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-10">
                <div className="w-full sm:w-[40%] my-0 sm:my-10"> {/* Updated here */}
                  <img
                    src={product?.img}
                    alt="Product"
                    className="h-[150px] sm:h-[200px] w-full max-w-[250px]  p-3 mx-auto"
                  />
                </div>
                <div className="w-full sm:w-[60%]">
                  <div className="my-4 ">
                    <p className="text-blue-700 capitalize font-bold text-xl sm:text-2xl">
                      {product?.name}
                    </p>
                    <p className="text-md text-gray-700 py-3">
                      Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.
                    </p>
                    <p className="text-sm text-gray-700 hover:text-blue-700">
                      {product?.title}
                    </p>
                    <p className="mt-5 text-gray-900 font-bold text-xl sm:text-2xl hover:text-blue-700">
                      {product?.price}
                    </p>
                    <button
                      onClick={() => homeAddToCart(product)}
                      className="bg-black text-white h-[40px] w-[150px] text-sm mt-5 sm:mt-10 rounded-md capitalize"
                    >
                      add to cart
                    </button>
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
