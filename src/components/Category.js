import React from "react";

const category = ({ title, icon, css }) => {
  return (
    <div className="relative shadow-lg shadow-gray-400 rounded-full">
      <div className="bg bg-[#1F1F1F] border-[1px] border-[#39FF14]  w-[11rem] sm:w-[15rem]  h-[3rem] rounded-full">
        <p className="text-white font-bold text-[30px] px-4">{title}</p>
      </div>
      <div className={` absolute   ${css} `}>
        {" "}
        <img src={icon} />
      </div>
    </div>
  );
};

export default category;
