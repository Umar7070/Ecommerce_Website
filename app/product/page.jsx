"use client";
import { BsCart } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import CardModal from "@/components/CardModal";
import { useContext, useState } from "react";
import { UserContext } from "@/context/MyContext";
import ProductData from "@/constant/constant";
import { motion, easeIn } from "framer-motion";

// Ab aap `motion` ko `easeIn` ke saath use kar sakte hain


const Product = () => {
  const { homeAddToCart, addTofavourite } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(ProductData);
  const [selectProduct, setSelectProduct] = useState({});

  // modal close ?
  const onModalClose = () => {
    setOpen(false);
  };

  const searchProduct = (ele) => {
    const update = ProductData.filter((cur) => {
      return ele === cur.name;
    });
    setProduct(update);
  };

  // allProducts _____________
  const allProducts = () => {
    setProduct(ProductData);
  };

  const handleIconClick = (curEle) => {
    setSelectProduct(curEle);
    setOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 1, ease: easeIn },
        }}
        className="container mt-10 px-4 md:px-10"
      >
        <h1 className="uppercase text-blue-950 text-3xl text-center md:text-left">
          # Product
        </h1>
        <div className="flex flex-col md:flex-row justify-between mt-10">
          <div className="w-full md:w-[20%]">
            <ul className="flex flex-col gap-4 capitalize text-blue-600 text-xl cursor-pointer">
              <li onClick={() => allProducts()}>All Products</li>
              <li onClick={() => searchProduct("Tablet")}>Tablet</li>
              <li onClick={() => searchProduct("Smart Watch")}>Smart Watch</li>
              <li onClick={() => searchProduct("Headphone")}>Headphone</li>
              <li onClick={() => searchProduct("Camera")}>Camera</li>
              <li onClick={() => searchProduct("Gaming")}>Gaming</li>
              <li onClick={() => searchProduct("Powerbank")}>Powerbank</li>
              <li onClick={() => searchProduct("Heat pipe")}>Heat Pipe</li>
              <li onClick={() => searchProduct("Mobile")}>Mobile</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="w-full md:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 md:mt-0"
          >
            {product.map((curEle, index) => {
              return (
                <div
                  key={index}
                  className="relative w-full shadow-lg rounded-lg p-3 hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out group"
                >
                  <img
                    src={curEle.img}
                    alt={curEle.name}
                    className="w-full h-[200px] object-cover rounded-t-lg"
                  />
                  <div className="absolute top-5 right-3 flex-col gap-2 p-1 shadow-lg transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <BsCart
                      className="text-[25px] py-1 hover:bg-blue-500 hover:text-white"
                      onClick={() => homeAddToCart(curEle)}
                    />
                    <FaRegEye
                      onClick={() => handleIconClick(curEle)}
                      className="text-[25px] py-1 hover:bg-blue-500 hover:text-white cursor-pointer"
                    />
                    <CiHeart
                      onClick={() => addTofavourite(curEle)}
                      className="text-[25px] py-1 hover:bg-blue-500 hover:text-white"
                    />
                  </div>
                  <p className="text-blue-950 mx-3 text-center font-bold text-lg md:text-2xl hover:text-blue-700">
                    {curEle.name}
                  </p>
                  <p className="text-sm text-center text-gray-500 p-2 font-bold">
                    {curEle.title}
                  </p>
                  <p className="mx-3 text-center mb-6 hover:text-blue-700 font-bold text-xl">
                    ${curEle.price}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
      <CardModal
        showModal={open}
        onModalClose={onModalClose}
        product={selectProduct}
      />
    </>
  );
};

export default Product;
