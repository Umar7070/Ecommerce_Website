"use client";

import { BsCart } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import LatestProduct from "./LatestProduct";
import { useContext, useState } from "react";
import CardModal from "./CardModal";
import { UserContext } from "@/context/MyContext";

const producat = [
  {
    id: 1,
    title: "Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.",
    name: "Tablet",
    price: "$72",
    img: "./img/tp1.jpg",
  },
  {
    id: 2,
    title: "Tracker with IP67 Waterproof Pedometer Smart watch.",
    name: "Smart Watch",
    price: "$16",
    img: "./img/tp2.jpg",
  },
  {
    id: 3,
    title: "Cancelling Headphones Wireless is available.",
    name: "Headphone",
    price: "$49",
    img: "./img/tp3.jpg",
  },
  {
    id: 4,
    title: "Professional Camera 4K Digital Video Camera.",
    name: "Camera",
    price: "$200",
    img: "./img/tp4.jpg",
  },
  {
    id: 5,
    title: "Mini Portable PD 22.5W Fast Charging Powerbank.",
    name: "Powerbank",
    price: "$49",
    img: "./img/tp5.jpg",
  },
  {
    id: 6,
    title: "CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.",
    name: "Heat pipe",
    price: "$15",
    img: "./img/tp6.png",
  },
  {
    id: 7,
    title: "Playstation 4 2TB Slim Gaming Console.",
    name: "Gaming",
    price: "$20",
    img: "./img/tp7.jpg",
  },
  {
    id: 8,
    title: "Mini Portable Mobile Phone Powerbank for iphone.",
    name: "Powerbank",
    price: "$38f",
    img: "./img/tp8.jpg",
  },
  {
    id: 9,
    title: "Mini Portable Mobile Phone Powerbank for iphone.",
    name: "Powerbank",
    price: "$38",
    img: "./img/p9.jpg",
  },
  {
    id: 10,
    title: "CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.",
    name: "Heat pipe",
    price: "$15",
    img: "./img/p10.jpg",
  },
  {
    id: 11,
    title: "Mini Portable PD 22.5W Fast Charging Powerbank.",
    name: "Powerbank",
    price: "$49",
    img: "./img/p11.jpg",
  },
];
const HomeProducts = () => {
  const { homeAddToCart, homeAddTofavourite } = useContext(UserContext);
  const [toggleModal, setToggleModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState({});

  const handleIconClick = (curEle) => {
    setSelectProduct(curEle);
    setToggleModal(true);
  };

  const onModalClose = () => {
    setToggleModal(false);
    // close modal
  };
  return (
    <div className=" w-full ">
      <div className="container w-full my-10">
        <h2 className="text-2xl font-bold text-blue-950">Top Product</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center  gap-6 p-5 shadow-lg mt-10">
          {producat.map((curEle, index) => {
            return (
              <div key={index}>
                <div className="border rounded-lg hover:scale-110 transition-transform duration-500 relative group">
                  <img src={curEle.img} alt="" />
                  <div className="absolute top-5 right-3 flex-col gap-2 p-1 shadow-lg hidden group-hover:flex group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-5 opacity-0">
                    <BsCart
                      onClick={() => homeAddToCart(curEle)}
                      className="text-[25px] py-1 hover:bg-blue-500 hover:text-white"
                    />
                    <FaRegEye
                      onClick={() => handleIconClick(curEle)}
                      className="text-[25px] py-1 hover:bg-blue-500 hover:text-white cursor-pointer"
                    />
                    <CiHeart
                      onClick={() => homeAddTofavourite(curEle)}
                      className="text-[25px] py-1 hover:bg-blue-500 hover:text-white"
                    />
                  </div>
                  <p className="text-blue-950 mx-7  font-bold text-2xl hover:text-blue-700">
                    {curEle.name}
                  </p>
                  <p className="text-sm text-gray-500 p-2 font-bold ">
                    {curEle.title}
                  </p>
                  <p className="mx-7 mb-6 hover:text-blue-700 font-bold text-2xl">
                    {curEle.price}
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
    </div>
  );
};

export default HomeProducts;
