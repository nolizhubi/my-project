import React from "react";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import tv from "../components/assets/tv.jpg";
import goose1 from "../components/assets/goose1.webp";
import goose2 from "../components/assets/goose2.jpg";
import goose3 from "../components/assets/goose3.jpg";
import Channel from "./Channel";

const Sidebar = () => {
  const channels = [
    { profile: tv, name: "Prodverse" },
    { profile: goose1, name: "Prodverse" },
    { profile: goose2, name: "Prodverse" },
    { profile: goose3, name: "Prodverse" },
    { profile: tv, name: "Prodverse" },
    { profile: tv, name: "Prodverse" },
    { profile: tv, name: "Prodverse" },
    { profile: tv, name: "Prodverse" },
    { profile: tv, name: "Zilon" },
    { profile: tv, name: "Prodverse" },
  ];
  return (
    <div className=" w-[4.5rem] sm:w-[5rem] lg:w-[17rem] sticky top-[60px] bg-gradient-to-b from-[#242424] to-[#1F1F1F] p-4 border-r border-[#1B1B1B] z-20 shadow-md rounded-b-lg">
      {/* Title */}
      <div className="flex justify-center whitespace-nowrap mb-4">
        <p className="hidden lg:flex text-[#39FF14] font-medium">
          RECOMMENDED CHANNELS
        </p>
        <div className="lg:hidden text-[#39FF14]">
          <PiTelevisionSimpleLight className="text-[30px] text-white transform hover:scale-110 transition-transform duration-200" />
        </div>
      </div>
      {/* Recommended */}
      <div className="flex flex-col gap-2 overflow-y-auto">
        {channels.map((channel) => (
          <Channel profile={channel.profile} name={channel.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
