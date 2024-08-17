import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const LatestProduct = () => {
  return (
    <>
      <div className="container bg-blue-600 w-full grid grid-cols-1">
        <div className=" flex justify-between items-center p-6">
          <div className="flex gap-4 flex-col">
            <p className="text-white text-sm ">Latest Technology Addedd</p>
            <p className="text-white text-xl">Apple iPad 10.2 10th Gen 2024</p>
            <p className="text-white">$1000</p>
            <Link
              href="/product"
              className="flex items-center gap-2 bg-black text-white hover:bg-white hover:text-black rounded-lg text-xs h-[40px] w-[150px] justify-center"
            >
              Shop Now
              <FaArrowRightLong />
            </Link>
          </div>

          <div>
            <img src="/img/slider-img.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProduct;
