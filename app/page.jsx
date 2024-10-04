// "use client";

// import ShopingMenu from "@/components/ShopingMenu";
// import Link from "next/link";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { motion } from "framer-motion";

// const products = [
//   {
//     img: "/img/Mobile Phone.png",
//     title: "23 product",
//   },
//   {
//     img: "/img/smart watch.png",
//     title: "52 product",
//   },
//   {
//     img: "/img/headphone.png",
//     title: "18 product",
//   },
//   {
//     img: "/img/cpu.png",
//     title: "63 product",
//   },
// ];

// const page = () => {
//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ ease: "easeOut", duration: 3 }}
//         className="flex flex-col md:flex-row justify-between items-center bg-blue-200 p-5 md:p-10 mt-2 "
//       >
//         <div className="flex w-full flex-col gap-2 md:gap-5 text-center md:text-left">
//           <h1 className="text-xl md:text-2xl font-bold text-blue-950 w-[250px]">
//             The Best Note Book Collection 2024
//           </h1>
//           <Link
//             href="/product"
//             className="flex items-center gap-2 bg-blue-800  text-white hover:bg-blue-500  rounded-lg text-lg h-[40px] w-[150px] justify-center"
//           >
//             Shop Now
//             <FaArrowRightLong />
//           </Link>
//         </div>

//         <div className="mt-5 md:mt-0">
//           <img
//             src="/img/slider-img.png"
//             alt="Notebook Collection"
//             className=" md:w-auto w-3/4"
//           />
//         </div>
//       </motion.div>

//       {/* products  */}
//       <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ ease: "easeOut", duration: 3 }}
      
//       className="container w-full mt-10">
//         <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4  ">
//           {products.map((curEle, index) => {
//             return (
//               <>
//                 <div className="flex flex-col items-center justify-center gap-2">
//                   <div className="bg-blue-200 rounded-full flex  h-[200px] w-[200px] justify-center items-center cursor-pointer">
//                     <div className="hover:scale-110 transition-transform duration-300 ">
//                       <img src={curEle.img} alt="" />
//                     </div>
//                   </div>
//                   <p className="text-blue-800 font-bold">{curEle.title}</p>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </motion.div>
//       <ShopingMenu />
//     </>
//   );
// };

// export default page;


"use client";

import ShopingMenu from "@/components/ShopingMenu";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const products = [
  {
    img: "/img/Mobile Phone.png",
    title: "23 product",
  },
  {
    img: "/img/smart watch.png",
    title: "52 product",
  },
  {
    img: "/img/headphone.png",
    title: "18 product",
  },
  {
    img: "/img/cpu.png",
    title: "63 product",
  },
];

const page = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
        className="flex flex-col md:flex-row justify-between items-center bg-blue-200 p-5 md:p-10 mt-2 space-y-5 md:space-y-0"
      >
        <div className="flex w-full flex-col gap-3 md:gap-5 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-950 md:w-[300px] w-full leading-snug">
            The Best Note Book Collection 2024
          </h1>
          <Link
            href="/product"
            className="flex items-center gap-2 bg-blue-800  text-white hover:bg-blue-500 transition-all duration-300 rounded-lg text-lg h-[40px] w-[160px] justify-center"
          >
            Shop Now
            <FaArrowRightLong />
          </Link>
        </div>

        <div className="mt-5 md:mt-0 w-full md:w-auto flex justify-center">
          <img
            src="/img/slider-img.png"
            alt="Notebook Collection"
            className="w-4/5 md:w-auto"
          />
        </div>
      </motion.div>

      {/* Products Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
        className="container mx-auto w-full mt-10 px-5 md:px-0"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((curEle, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3"
              >
                <div className="bg-blue-200 rounded-full flex h-[200px] w-[200px] justify-center items-center cursor-pointer transition-transform hover:scale-110 duration-300">
                  <img src={curEle.img} alt="" className="object-contain" />
                </div>
                <p className="text-blue-800 font-bold text-center">{curEle.title}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
      <ShopingMenu />
    </>
  );
};

export default page;

