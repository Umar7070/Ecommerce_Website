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

  // const homeAddToCart = (curEle) => {
  //   console.log("produts============>>>>", curEle);
  //   toast.success("add to cart", curEle, {
  //     position: "top-center",
  //     autoClose: 1000,
  //   });
  //   setCardItem([...cardItem, { ...curEle, qty: 1 }]);
  // };
  // console.log(cardItem);
  const homeAddToCart = (curEle) => {
    console.log("produts============>>>>", curEle);
  
    // Check if the item is already in the cart
    const isAlreadyInCart = cardItem.some((item) => item.id === curEle.id);
  
    if (isAlreadyInCart) {
      toast.error("Your cart is already added", {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      toast.success("Added  to cart", {
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

  const incrementHandle = (curEle) => {
    let productCount = cardItem.map((item)=> {
      return item.id === curEle.id ? {...item , qty: item.qty +=1} : item
    })
    setCardItem(productCount)
  };

  // decrementHandle __________________

  const decrementHandle =(curEle)=>{
    console.log('decrementHandle???????????',curEle)
    const decrementItem = cardItem.map((value)=>{
      return value.id === curEle.id ? {...value , qty: value.qty-=1}:value
    })
    setCardItem(decrementItem)
   
  }


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
        decrementHandle
      }}
    >
      {children}
      <ToastContainer />
    </UserContext.Provider>
  );
};

export default MyContext;
