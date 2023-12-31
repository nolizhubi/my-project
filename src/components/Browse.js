import React from "react";
import stick from "../components/assets/stick.png";
import mic from "../components/assets/mic.png";
import headphones from "../components/assets/headphones.png";
import trophy from "../components/assets/trophy.png";
import palette from "../components/assets/palette.png";
import chatting from "../components/assets/chatting.jpg";
import Category from "./Category.js";

const Browse = () => {
  const categories = [
    {
      title: "Lives",
      icon: stick,
      css: "w-[4.2rem] h-[4.2rem] -top-[0.3rem] right-0 -rotate-45 ",
    },
    {
      title: "Chatting",
      icon: mic,
      css: "w-[2.2rem] h-[2.2rem] -top-[1rem] right-4  ",
    },
    {
      title: "Remix",
      icon: headphones,
      css: "w-[3.8rem] h-[3.8rem] -top-[0.7rem] right-5 -rotate-45 ",
    },
    {
      title: "Esports",
      icon: trophy,
      css: "w-[1.8rem] h-[1.8rem] -top-[0.7rem] right-6 ",
    },
    {
      title: "Arts",
      icon: palette,
      css: "w-[4.2rem] h-[4.2rem] -top-[0.3rem] right-0 -rotate-[8 0deg] ",
    },
  ];
  return (
    <div className=" ">
      {/* Title */}
      <h1 className="text-[#39FF14] text-[55px] font-bold">Explore</h1>
      {/* Categories */}
      <div className="flex flex-wrap gap-x-9  lg:gap-x-12 gap-y-6">
        {categories.map((category) => (
          <Category
            title={category.title}
            icon={category.icon}
            css={category.css}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
