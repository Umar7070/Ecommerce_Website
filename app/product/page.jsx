// import React from 'react'
"use client";

import { BsCart } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import CardModal from "@/components/CardModal";
import { useContext, useState } from "react";
import { UserContext } from "@/context/MyContext";
const productDetail = [
  {
    id: 1,
    title: "Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.",
    name: "Tablet",
    price: "72$",
    img: "./img/tp1.jpg",
  },
  {
    id: 2,
    title: "Tracker with IP67 Waterproof Pedometer Smart watch.",
    name: "Smart Watch",
    price: "16$",
    img: "./img/tp2.jpg",
  },
  {
    id: 3,
    title: "Cancelling Headphones Wireless available.",
    name: "Headphone",
    price: "49$",
    img: "./img/tp3.jpg",
  },
  {
    id: 4,
    title: "Professional Camera 4K Digital Video Camera.",
    name: "Camera",
    price: "100$",
    img: "./img/tp4.jpg",
  },
  {
    id: 5,
    title: "Mini Portable PD 22.5W Fast Charging Powerbank.",
    name: "Powerbank",
    price: "49$",
    img: "./img/tp5.jpg",
  },
  {
    id: 6,
    title: "CPU Cooler 2 Heat Pipes 12mm 4 Pin PWM RGB for Intel.",
    name: "Heat pipe",
    price: "15$",
    img: "./img/tp6.png",
  },
  {
    id: 7,
    title: "Playstation 4 2TB Slim Gaming Console.",
    name: "Gaming",
    price: "20$",
    img: "./img/tp7.jpg",
  },
  {
    id: 8,
    title: "Playstation 4 2TB Slim Gaming Console.",
    name: "Mobile",
    price: "200$",
    img: "./img/tp8.jpg",
  },

  {
    id: 9,
    title: "Galaxy Tab S6 Lite 10.4-inch Android Tablet 128GB.",
    name: "Tablet",
    price: "720$",
    img: "./img/p9.jpg",
  },

  {
    id: 10,
    title: "Cancelling Headphones Wireless available.",
    name: "Headphone",
    price: "490$",
    img: "./img/p10.jpg",
  },
  {
    id: 11,
    title: "Playstation 4 2TB Slim Gaming Console.",
    name: "Gaming",
    price: "200$",
    img: "./img/p11.jpg",
  },
];

const Product = () => {

  const {homeAddToCart,curEle,addTofavourite} = useContext(UserContext)

  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(productDetail);
  const [selectProduct, setSelectProduct] = useState({});

  // modal close ?

  const onModalClose = () => {
    setOpen(false);
  };

  const searchProduct = (ele) => {
    const update = productDetail.filter((cur) => {
      return ele === cur.name;
    });
    setProduct(update);
  };

  // allProducts _____________

  const allProducts = () => {
    setProduct(productDetail);
  };

  const handleIconClick = (curEle) => {
    setSelectProduct(curEle);
    setOpen(true);
  };

  
  

  return (
    <>
      <div className="container mt-10">
        <h1 className="uppercase text-blue-950 text-3xl"># product</h1>
        <div className="flex justify-between">
          <div className="w-[20%] ">
            <ul className="flex flex-col gap-4 capitalize mt-10 text-blue-600 text-xl cursor-pointer">
              <li onClick={() => allProducts()}>all product</li>
              <li onClick={() => searchProduct("Tablet")}>tablet</li>
              <li onClick={() => searchProduct("Smart Watch")}>smart watch</li>
              <li onClick={() => searchProduct("Headphone")}>headphone</li>
              <li onClick={() => searchProduct("Camera")}>Camera</li>
              <li onClick={() => searchProduct("Gaming")}>gaming</li>
              <li onClick={() => searchProduct("Powerbank")}>Powerbank</li>
              <li onClick={() => searchProduct("Heat pipe")}>Heat pipe</li>
              <li onClick={() => searchProduct("Mobile")}>mobile</li>
            </ul>
          </div>
          <div className="w-[80%] grid grid-cols-1 lg:grid-cols-3 place-items-center gap-10   md:grid-cols-2">
            {product.map((curEle, index) => {
              return (
                <div key={index}>
                  <div className="border rounded-lg hover:scale-110 transition-transform duration-500 relative group">
                    <img src={curEle.img} alt="" />
                    <div className="absolute top-5 right-3 flex-col gap-2 p-1 shadow-lg hidden group-hover:flex group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-5 opacity-0">
                      <BsCart className="text-[25px] py-1 hover:bg-blue-500 hover:text-white" onClick={()=>homeAddToCart(curEle)}/>
                      <FaRegEye
                        onClick={() => handleIconClick(curEle)}
                        className="text-[25px] py-1 hover:bg-blue-500 hover:text-white cursor-pointer"
                      />
                      <CiHeart  onClick={()=>addTofavourite(curEle)} className="text-[25px] py-1 hover:bg-blue-500 hover:text-white" />
                    </div>
                    <p className="text-blue-950 mx-7 text-center font-bold text-2xl hover:text-blue-700">
                      {curEle.name}
                    </p>
                    <p className="text-sm text-center text-gray-500 p-2 font-bold ">
                      {curEle.title}
                    </p>
                    <p className="mx-7  text-center mb-6 hover:text-blue-700 font-bold text-2xl">
                      {curEle.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CardModal
        showModal={open}
        onModalClose={onModalClose}
        product={selectProduct}
      />
    </>
  );
};

export default Product;
