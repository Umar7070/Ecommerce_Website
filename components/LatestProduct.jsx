import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const LatestProduct = () => {
  return (
    <div className="bg-blue-600 w-full p-10 flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col gap-4 p-6 w-full md:w-1/2">
        <p className="text-white text-2xl font-bold">Latest Technology Added</p>
        <p className="text-white text-xl">Apple iPad 10.2 10th Gen 2024</p>
        <Link
          href="/product"
          className="flex items-center gap-2 bg-black text-white hover:bg-white hover:text-black rounded-lg text-xl h-10 w-full md:w-40 justify-center transition duration-300" // Use w-full for smaller screens and w-40 for larger
        >
          Shop Now
          <FaArrowRightLong />
        </Link>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="/img/slider-img.png"
          alt="Latest Product"
          className="object-contain max-w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default LatestProduct;
