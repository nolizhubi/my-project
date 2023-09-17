import React from "react";
import logo from "../components/assets/logo.png";
import { BiDotsVertical } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { MdForwardToInbox } from "react-icons/md";
import "../prova.css";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-[#101010] py-[0.6rem] px-4 lg:px-4 flex items-center justify-between z-20">
      {/*Left Side*/}
      <div className="flex items-center gap-6">
        <img
          src={logo}
          alt=""
          className="w-11 h-11 logo-hover transform hover:scale-125 transition-transform duration-300"
        />
        <div className="">
          <p className="font font-semibold text-[#39FF14] explore-hover transform hover:scale-105 transition-transform duration-300">
            Explore
          </p>
        </div>
        <BiDotsVertical className="text-[25px] text-[#39FF14] dots-hover transform hover:scale-125 transition-transform duration-300" />
      </div>

      {/*Middle*/}
      <div className="flex items-center relative">
        <input
          type="search"
          placeholder="Search"
          className="text-white placeholder-[#39FF14] outline-0 bg-[#1F1F1F] border-[2px] border-[#39FF14] rounded-[0.7rem] pl-8 py-1 w-[5rem] sm:w-[8rem] md:w-[15rem] lg:w-[22rem]"
        />
        <FiSearch className="absolute left-2 text-[#39FF14]" />
      </div>

      {/*Right Side*/}
      <div className="flex items-center gap-5">
        <div className="relative pr-2">
          <MdForwardToInbox className="inbox-icon text-[30px] text-[#39FF14]" />
          <div className="absolute -top-[0.4rem] left-2 w-7 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <p className="text-[white] font-bold text-[14px]">60</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
          <div className="p-1 px-2 rounded-[0.4rem] bg-signin transform hover:scale-110 transition-transform duration-200">
            <button className="text-white font font-semibold">Sign-in</button>
          </div>
          <div className="p-1 px-2 rounded-[0.4rem] bg-signup transform hover:scale-110 transition-transform duration-200">
            <button className="text-[#000000] font font-semibold">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
