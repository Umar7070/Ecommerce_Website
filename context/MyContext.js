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

  const homeAddTofavourite =(curEle)=>{
    console.log('addproduct',curEle)
    toast.success('add to favourite',{
      position:'top-center',
      autoClose:1000
    })
    setfavourite([...favourite,curEle])

  }
  console.log(favourite)

  // homeAddToCart

  const homeAddToCart =(curEle)=>{
    console.log('homeaddto cart',curEle)
    alert('add to cart',curEle)
    setCardItem([...cardItem,curEle])

  }
  console.log(cardItem)

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
    toast.success("add to favourite ",{
      position:'top-center',
      autoClose:1000

    });
    setfavourite([...favourite, curEle]);
  };
  console.log(favourite);

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
        homeAddTofavourite
      }}
    >
      {children}
      <ToastContainer />
    </UserContext.Provider>
  );
};

export default MyContext;
