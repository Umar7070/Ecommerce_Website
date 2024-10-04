"use client";

import { BsCart } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import LatestProduct from "./LatestProduct";
import { useContext, useState } from "react";
import CardModal from "./CardModal";
import { UserContext } from "@/context/MyContext";
import ProductData from "@/constant/constant";
import { motion,easeIn } from "framer-motion";

const HomeProducts = () => {
  const { homeAddToCart, addTofavourite } = useContext(UserContext);
  const [toggleModal, setToggleModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState({});

  const handleIconClick = (curEle) => {
    setSelectProduct(curEle);
    setToggleModal(true);
  };

  const onModalClose = () => {
    setToggleModal(false);
  };
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
     transition: { delay: 2, duration: 1, ease: easeIn },

    }}
    
    className=" w-full ">
      <div className="container w-full my-10">
        <h2 className="text-2xl font-bold text-blue-950">Top Product</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center  gap-6 p-5  mt-10">
          {ProductData.map((curEle, index) => {
            return (
              <div key={index}>
              <div className="relative w-full shadow-lg rounded-lg p-3 hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out group">
                <img src={curEle.img} alt="" className="w-full h-auto rounded-lg" />
            
                {/* Icon container */}
                <div className="absolute top-5 right-3 flex-col gap-2 p-1 shadow-lg transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <BsCart
                    onClick={() => homeAddToCart(curEle)}
                    className="text-[25px] py-1 hover:bg-blue-500 hover:text-white cursor-pointer"
                  />
                  <FaRegEye
                    onClick={() => handleIconClick(curEle)}
                    className="text-[25px] py-1 hover:bg-blue-500 hover:text-white cursor-pointer"
                  />
                  <CiHeart
                    onClick={() => addTofavourite(curEle)}
                    className="text-[25px] py-1 hover:bg-blue-500 hover:text-white cursor-pointer"
                  />
                </div>
            
                <em className="text-blue-950 font-bold text-2xl hover:text-blue-700 text-center">
                  {curEle.name}
                </em>
                <p className="text-sm text-gray-500  ml-2 py-2 font-bold ">
                  {curEle.title}
                </p>
                <p className="mx-7 mb-6 hover:text-blue-700 font-bold text-2xl text-center">
                  ${curEle.price}
                </p>
              </div>
            </div>
            
            );
          })}
        </div>
      </div>
      <LatestProduct />
      <CardModal
        showModal={toggleModal}
        onModalClose={onModalClose}
        product={selectProduct}
      />
    </motion.div>
  );
};

export default HomeProducts;
