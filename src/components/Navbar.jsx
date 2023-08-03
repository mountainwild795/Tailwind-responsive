import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 text-white bg-white">
      <div className="flex justify-between items-center gap-2">
        <img src={logo} alt="logo" className="w-[80px] h-[50px]" />
        <h1 className="w-full text-3xl font-bold text-[#96ce3e]">Tech Education</h1>
      </div>
      <ul className="hidden md:flex align-center text-[#000000]">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        {/* <button className="bg-slate-300 px-3 py-1">Login</button> */}
      </ul>
      <div onClick={handleNav} className="block md:hidden bg-slate-600">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={nav ? "fixed left-0 top-0 w-[60%] h-full bg-slate-300 text-black ease-in-out duration-500" : "ease-in-out duration-500 fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold text-[#2d1e63] m-4">Tech Education</h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

