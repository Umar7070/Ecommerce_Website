import { CiDeliveryTruck } from "react-icons/ci";
import { motion } from "framer-motion";
import { FaDollarSign } from "react-icons/fa6";
import { FiDivideCircle } from "react-icons/fi";
import { FaHeadphones } from "react-icons/fa";
import HomeProducts from "./HomeProducts";
const list = [
  {
    icon: <CiDeliveryTruck />,
    name: "Free Shipping",
    title: "Order About $100",
  },
  {
    icon: <FaDollarSign />,
    name: "Return & Refund",
    title: "Money Back Gaurenty",
  },
  {
    icon: <FiDivideCircle />,
    name: "Member Discount",
    title: "On every Day",
  },
  {
    icon: <FaHeadphones />,
    name: "Customer Support",
    title: "Every Time  Support",
  },
];

const ShopingMenu = () => {
  return (
    <>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 3 }}

      className="container w-full my-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-3 place-items-center ">
          {list.map((curEle, index) => {
            return (
              <div className=" flex items-center gap-3 bg-blue-100 p-3 rounded-md h-[60px] w-[250px] cursor-pointer">
                <div className="text-red-800 text-2xl">{curEle.icon}</div>
                <div className="flex flex-col gap-1">
                  <p className="text-md font-bold">{curEle.name}</p>
                  <p className="text-sm font-bold text-gray-500 ">{curEle.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      <HomeProducts />
    </>
  );
};

export default ShopingMenu;
