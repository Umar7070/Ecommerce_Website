import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const products = [
  {
    img: "/img/Mobile Phone.png",
    title: "23 product",
  },
  {
    img: "/img/Mobile Phone.png",
    title: "23 product",
  },
  {
    img: "/img/Mobile Phone.png",
    title: "23 product",
  },
  {
    img: "/img/Mobile Phone.png",
    title: "23 product",
  },
];

const page = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center bg-blue-200 p-5 md:p-10 ">
        <div className="flex flex-col gap-2 md:gap-5 text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold text-blue-950 w-[250px]">
            The Best Note Book Collection 2024
          </h1>
          <div className="bg-white hover:bg-blue-500 p-2 hover:text-white rounded-md flex gap-3 md:gap-5 justify-center items-center">
            <Link href="/product">Shop Now</Link>
            <FaArrowRightLong />
          </div>
        </div>

        <div className="mt-5 md:mt-0">
          <img
            src="/img/slider-img.png"
            alt="Notebook Collection"
            className=" md:w-auto w-3/4"
          />
        </div>
      </div>

      {/* products  */}
      <div className="container mt-10">
        <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4  ">
          {products.map((curEle, index) => {
            return (
              <>
                <div className="bg-cyan-400 rounded-full flex flex-col h-[200px] w-[200px]  justify-center items-center">
                  <div className=" flex justify-center items-center rounded-full flex-col">
                    <img src={curEle.img} alt="" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
