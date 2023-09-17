import React from "react";

const Channel = ({ profile, name }) => {
  return (
    <div className="flex items-center justify-between hover:bg-[#3f3f3f] p-[0.1rem] sm:p-1  rounded-m transition-colors duration-200">
      <div className="flex items-center">
        <div className="w-[2rem] h-[2rem] flex shadow-sm">
          <img
            src={profile}
            alt=""
            className=" rounded-full object-cover h-full w-full transform hover:scale-110 transition-transform duration-200"
          />
        </div>
        <div className="hidden lg:flex flex-col pl-3">
          <p className="font-semibold text-[14px] text-[#bdbdbd]">{name}</p>
          <p className="text-[12px] truncate w-[90%] text-[#808080]">
            Drill making
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
        <p className="text-[14px] text-[#FF6B6B]">12k</p>
      </div>
    </div>
  );
};

export default Channel;
