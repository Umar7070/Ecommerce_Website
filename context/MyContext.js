"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { createContext } from "react";
export const UserContext = createContext();

const MyContext = ({ children }) => {
  const [cardItem, setCardItem] = useState([]);
  const [favourite, setfavourite] = useState([]);

  // homeAddTofavourite

  const homeAddTofavourite = (curEle) => {
    console.log("addproduct", curEle);
    toast.success("add to favourite cart", {
      position: "top-center",
      autoClose: 1000,
    });
    setfavourite([...favourite, curEle]);
  };
  console.log(favourite);

  // homeAddToCart

  const homeAddToCart = (curEle) => {
    console.log("homeaddto cart", curEle);
    toast.success("add to cart", curEle,{
      position:'top-center',
      autoClose:1000
    });
    setCardItem([...cardItem, curEle]);
  };
  console.log(cardItem);

  // product component att to cart

  const clickhandle = (curEle) => {
    toast.success("cart added", {
      position: "top-center",
      autoClose: 1000,
    });
    setCardItem([...cardItem, curEle]);
  };
  console.log(cardItem);

  // deleteItem delete card
  const deleteItem = (item) => {
    const del = cardItem.filter((ele) => {
      return item !== ele;
    });
    toast.error("deleted cart successfully ", {
      position: "top-center",
      autoClose: 1000,
    });
    setCardItem(del);
  };

  const incrementHandle = (curEle) => {
    alert("click me", curEle);
  };
  // card modal add to car

  const CartModalAdd = (product) => {
    toast.success("card added", product, {
      position: "top-center",
      autoClose: 1000,
    });
    setCardItem([...cardItem, product]);
  };
  console.log(cardItem);

  const addTofavourite = (curEle) => {
    console.log("favourite products", curEle);
    toast.success("add to favourite ", {
      position: "top-center",
      autoClose: 1000,
    });
    setfavourite([...favourite, curEle]);
  };
  console.log(favourite);

  // favouriteAddtoCart -----------

  const favouriteAddtoCart = (curEle) => {
    console.log("favouriteAddtoCart", curEle);
    toast.success("add your favourite cart", {
      position: "top-center",
      autoClose: 1000,
    });
    setCardItem([...cardItem, curEle]);
  };
  console.log(cardItem);

  // favouriteRemoveCart ----------
  const favouriteRemoveCart = (ele) => {
    console.log("umar", ele);
    console.log("umarrrrrrrrr", favourite);
    const removeCart = favourite.filter((item) => {
      return ele.id !== item.id;
    });
    toast.error("remove cart successfully", {
      position: "top-center",
      autoClose: 1000,
    });

    setfavourite(removeCart);
  };

  return (
    <UserContext.Provider
      value={{
        clickhandle,
        cardItem,
        setCardItem,
        deleteItem,
        incrementHandle,
        CartModalAdd,
        addTofavourite,
        favourite,
        setfavourite,
        homeAddToCart,
        homeAddTofavourite,
        favouriteAddtoCart,
        favouriteRemoveCart,
      }}
    >
      {children}
      <ToastContainer />
    </UserContext.Provider>
  );
};

export default MyContext;
