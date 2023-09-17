import React from "react";

const Card = ({ title, image }) => {
  return (
    <div>
      <div className="h-[14rem] sm:h-[17rem] sm:w-60 md:h-[17rem] md:w-52 flex">
        <img
          src={image}
          alt=""
          className="object cover w-full h-full rounded-[0.5rem]"
        />
      </div>
      <p className="text-white font-semibold text-[18px]">{title}</p>
      <p className="text-white -mt-2">417k viewers</p>
    </div>
  );
};

export default Card;
