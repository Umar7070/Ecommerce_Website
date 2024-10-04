// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//       <div className=" w-full mx-auto mt-10">
//         <div className="flex md:flex-row justify-between bg-gray-200 p-[30px]">
//           {/* Logo and Description */}
//           <div className="flex flex-col w-[40%] pl-10">
//             <img src="/img/logo.svg" alt="Logo" className="w-[100px]" />
//             <p className="text-gray-400 text-xs mt-2 w-80">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni
//               sed voluptas fugiat eum quos.
//             </p>
//             <div className="flex gap-4 mt-4 ">
//               <FaFacebookF className="border border-gray-700 text-[30px] py-1 rounded-sm hover:bg-blue-700 hover:text-white hover:border-none  " />
//               <FaInstagram className="border border-gray-700 text-[30px] py-1 rounded-sm hover:bg-blue-700 hover:text-white hover:border-none " />
//               <FaTwitter className="border border-gray-700 text-[30px] py-1 rounded-sm hover:bg-blue-700 hover:text-white hover:border-none " />
//               <FaYoutube className="border border-gray-700 text-[30px] py-1 rounded-sm hover:bg-blue-700 hover:text-white hover:border-none " />
//             </div>
//           </div>

//           {/* My Account Section */}
//           <div className="flex flex-col  w-[30%]">
//             <h1 className="font-bold text-xl">My Account</h1>
//             <ul className="text-xs py-2 flex flex-col gap-2 text-gray-400 items-start cursor-pointer">
//               <li className="hover:text-blue-700">Account</li>
//               <li className="hover:text-blue-700">Order</li>
//               <li className="hover:text-blue-700"> Category</li>
//               <li className="hover:text-blue-700">Shopping</li>
//               <li className="hover:text-blue-700">Return</li>
//             </ul>
//           </div>

//           {/* Pages Section */}
//           <div className="flex flex-col  w-[20%]">
//             <h1 className="font-bold text-xl">Pages</h1>
//             <ul className="text-xs text-gray-400 py-2 flex flex-col gap-2 cursor-pointer">
//               <li className="hover:text-blue-700">Home</li>
//               <li className="hover:text-blue-700">About</li>
//               <li className="hover:text-blue-700">Contact</li>
//               <li className="hover:text-blue-700">Terms & Conditions</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;


import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mx-auto mt-10">
      <div className="flex flex-col md:flex-row justify-between bg-gray-200 p-6 md:p-10">
        {/* Logo and Description */}
        <div className="flex flex-col w-full md:w-2/5 pl-6 md:pl-10 mb-6 md:mb-0">
          <img src="/img/logo.svg" alt="Logo" className="w-24 md:w-32" />
          <p className="text-gray-400 text-xs md:text-sm mt-2 w-full md:w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni
            sed voluptas fugiat eum quos.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="text-[30px] border border-gray-700 py-1 rounded-sm hover:bg-blue-700 hover:text-white hover:border-none transition" />
            <FaInstagram className="text-[30px] border border-gray-700 py-1 rounded-sm hover:bg-blue-700 hover:text-white hover:border-none transition" />
            <FaTwitter className="text-[30px] border border-gray-700 py-1 rounded-sm hover:bg-blue-700 hover:text-white hover:border-none transition" />
            <FaYoutube className="text-[30px] border border-gray-700 py-1 rounded-sm hover:bg-blue-700 hover:text-white hover:border-none transition" />
          </div>
        </div>

        {/* My Account Section */}
        <div className="flex flex-col w-full md:w-1/5 mb-6 md:mb-0">
          <h1 className="font-bold text-lg md:text-xl">My Account</h1>
          <ul className="text-xs md:text-sm py-2 flex flex-col gap-2 text-gray-400 items-start cursor-pointer">
            <li className="hover:text-blue-700">Account</li>
            <li className="hover:text-blue-700">Order</li>
            <li className="hover:text-blue-700">Category</li>
            <li className="hover:text-blue-700">Shopping</li>
            <li className="hover:text-blue-700">Return</li>
          </ul>
        </div>

        {/* Pages Section */}
        <div className="flex flex-col w-full md:w-1/5">
          <h1 className="font-bold text-lg md:text-xl">Pages</h1>
          <ul className="text-xs md:text-sm text-gray-400 py-2 flex flex-col gap-2 cursor-pointer">
            <li className="hover:text-blue-700">Home</li>
            <li className="hover:text-blue-700">About</li>
            <li className="hover:text-blue-700">Contact</li>
            <li className="hover:text-blue-700">Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
