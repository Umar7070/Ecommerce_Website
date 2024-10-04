"use client";
import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from 'react-hot-toast';

import React, { useState } from "react";
import { createContext } from "react";
export const UserContext = createContext();

const MyContext = ({ children }) => {
  const [cardItem, setCardItem] = useState([]);
  const [favourite, setfavourite] = useState([]);
  const [total,setTotal]=useState(0)

  // homeAddToCart

  const homeAddToCart = (curEle) => {
    console.log("produts============>>>>", curEle);
    const isAlreadyInCart = cardItem.some((item) => item.id === curEle.id);
    if (isAlreadyInCart) {
      toast.error("Your cart is already added", {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      toast.success("Added your cart", {
        position: "top-center",
        autoClose: 1000,
      });
      setCardItem([...cardItem, { ...curEle, qty: 1 }]);
    }
  };

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

  // incrementHandle ----------------------

  const incrementHandle = (curEle) => {
    let productCount = cardItem.map((item) => {
      return item.id === curEle.id ? { ...item, qty: (item.qty += 1) } : item;
    });
    setCardItem(productCount);
  };

  // decrementHandle __________________

  const decrementHandle = (curEle) => {
    if (curEle.qty === 1) {
      return;
    }
    console.log("decrementHandle???????????", curEle);
    const decrementItem = cardItem.map((value) => {
      return value.id === curEle.id
        ? { ...value, qty: (value.qty -= 1) }
        : value;
    });
    setCardItem(decrementItem);
  };

  // favouriteAddtoCart -----------

  const addTofavourite = (curEle) => {
    console.log("favourite products", curEle);

    const existsItem = favourite.some((ele) => ele.id === curEle.id);

    if (existsItem) {
      toast.error("This item is already  favourites.", {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      toast.success("Added to favourites", {
        position: "top-center",
        autoClose: 1000,
      });

      setfavourite((prevFavourite) => [...prevFavourite, curEle]);
    }

    console.log(favourite);
  };

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

  const orderNow=()=>{
    setCardItem([])
    toast.success('Order Now successfully',{
      position:'top-center',
      autoClose:1000
    })
  }

  return (
    <UserContext.Provider
      value={{
        cardItem,
        setCardItem,
        deleteItem,
        incrementHandle,
        addTofavourite,
        favourite,
        setfavourite,
        homeAddToCart,
        favouriteRemoveCart,
        decrementHandle,
        total,
        setTotal,
        orderNow
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export default MyContext;
