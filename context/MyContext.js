"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { createContext } from "react";
export const UserContext = createContext();

const MyContext = ({ children }) => {
  const [cardItem, setCardItem] = useState([]);

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

  return (
    <UserContext.Provider
      value={{
        clickhandle,
        cardItem,
        setCardItem,
        deleteItem,
        incrementHandle,
        CartModalAdd,
      }}
    >
      {children}
      <ToastContainer />
    </UserContext.Provider>
  );
};

export default MyContext;
