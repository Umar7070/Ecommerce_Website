// "use client";

// import React, { useState } from "react";
// import { LuUser2 } from "react-icons/lu";
// import { FaRegHeart } from "react-icons/fa";
// import { IoBagCheckOutline } from "react-icons/io5";
// import Link from "next/link";
// const Header = () => {
//   const [searchProduct, setSearchProduct] = useState("");

  

//   const searchItem = () => {};

//   return (
//     <>
//       <div className=" container w-full flex justify-between items-center py-3    mt-5">
//         <div className="h-[30px] w-[100px]">
//           <img src="/img/logo.svg" alt="" />
//         </div>
//         <div className="search flex border border-blue-700 rounded-tl-md rounded-bl-md ">
//           <input
//             type="text"
//             className=" outline-none p-2 "
//             value={searchProduct}
//             onChange={(e) => setSearchProduct(e.target.value)}
//           />
//           <div>
//             <button
//               className="bg-blue-600 text-white p-3 text-sm  w-[100px] "
//               onClick={() => searchItem()}
//             >
//               search
//             </button>
//           </div>
//         </div>
//         <div className="flex gap-3  ">
//           <LuUser2 />
//           <div>
//             <p className="text-sm text-gray-600">Hello Umar Tutorial</p>
//           </div>
//           <div className="cart flex gap-3 text-blue-700 text-[20px]">
//           <Link href='/favourite'>
//            <FaRegHeart />
//           </Link> 
//             <Link href="/addtocart">
//               <IoBagCheckOutline  />
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="border border-gray-500"></div>
//     </>
//   );
// };

// export default Header;

"use client";

import React, { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  const [searchProduct, setSearchProduct] = useState("");

  const searchItem = () => {
    // Handle the search logic here
  };

  return (
    <>
      <div className="container w-full flex flex-wrap justify-between items-center py-3 mt-5">
        {/* Logo */}
        <div className="h-[30px] w-[100px] sm:w-[120px]">
          <img src="/img/logo.svg" alt="logo" className="w-full h-full" />
        </div>

        {/* Search Box */}
        <div className="flex flex-grow mt-3 sm:mt-0 md:flex-grow-0 border border-blue-700 w-full lg:w-[600px] max-w-full sm:max-w-[400px]">
  <input
    type="text"
    className="outline-none p-2 w-full lg:w-[500px]" // Adjust input width for larger screens
    placeholder="Search for products..."
    value={searchProduct}
    onChange={(e) => setSearchProduct(e.target.value)}
  />
  <button
    className="bg-blue-600 text-white px-6 text-sm w-[100px] md:w-auto"
    onClick={searchItem}
  >
    Search
  </button>
</div>


        {/* Icons and Links */}
        <div className="flex mt-3 sm:mt-0 items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <LuUser2 className="text-lg" />
            <p className="text-sm text-gray-600 hidden sm:block">
              Hello Umar Tutorial
            </p>
          </div>

          <div className="cart flex items-center gap-3 text-blue-700 text-[20px]">
            <Link href="/favourite">
              <FaRegHeart />
            </Link>
            <Link href="/addtocart">
              <IoBagCheckOutline />
            </Link>
          </div>
        </div>
      </div>

      <div className="border border-gray-500 mt-3"></div>
    </>
  );
};

export default Header;
