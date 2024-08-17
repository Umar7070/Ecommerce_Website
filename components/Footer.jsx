import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="container w-full mt-10">
        <div className="flex md:flex-row justify-between bg-gray-200 p-[30px]">
          {/* Logo and Description */}
          <div className="flex flex-col w-[40%] pl-10">
            <img src="/img/logo.svg" alt="Logo" className="w-[100px]" />
            <p className="text-gray-400 text-xs mt-2 w-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni
              sed voluptas fugiat eum quos.
            </p>
            <div className="flex gap-4 mt-4">
              <FaFacebookF className="border border-gray-700 text-[30px] py-1 rounded-sm hover:bg-blue-700 hover:text-white" />
              <FaInstagram className="border border-gray-700 text-[30px] py-1 rounded-sm hover:bg-blue-700 hover:text-white" />
              <FaTwitter className="border border-gray-700 text-[30px] py-1 rounded-sm hover:bg-blue-700 hover:text-white" />
              <FaYoutube className="border border-gray-700 text-[30px] py-1 rounded-sm hover:bg-blue-700 hover:text-white" />
            </div>
          </div>

          {/* My Account Section */}
          <div className="flex flex-col  w-[30%]">
            <h1 className="font-bold text-xl">My Account</h1>
            <ul className="text-xs py-2 flex flex-col gap-2 text-gray-400 items-start">
              <li>Account</li>
              <li>Order</li>
              <li>Category</li>
              <li>Shopping</li>
              <li>Return</li>
            </ul>
          </div>

          {/* Pages Section */}
          <div className="flex flex-col  w-[20%]">
            <h1 className="font-bold text-xl">Pages</h1>
            <ul className="text-xs text-gray-400 py-2 flex flex-col gap-2 ">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
