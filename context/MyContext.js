"use client";

import React, { useState } from "react";
import { createContext } from "react";
export const UserContext = createContext();

const MyContext = ({ children }) => {
  const [cardItem, setCardItem] = useState([]);

  const clickhandle = (curEle) => {
    console.log("fun called", curEle);
    alert("cart added");
    setCardItem([...cardItem, curEle]);
  };
  console.log(cardItem);
  return (
    <UserContext.Provider
      value={{
        clickhandle,
        cardItem,
        setCardItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default MyContext;
