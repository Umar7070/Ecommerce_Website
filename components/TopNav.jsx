import { FaTruckMoving } from "react-icons/fa";
import Navbar from "./Navbar";

const TopNav = () => {
  return (
    <>
      <div className=" mx-auto">
        <div className=" flex  p-4  items-center gap-[20px] bg-black">
          <div className="text-yellow-500 text-2xl ">
            <FaTruckMoving />
          </div>
          <div className="text-white">
            <p>Free shipping when shoping upto $10000</p>
          </div>
        </div>
      </div>
      <Navbar/>
    </>
  );
};

export default TopNav;
