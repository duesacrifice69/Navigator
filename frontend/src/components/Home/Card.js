import React from "react";
import { CardImg } from "../../assets";

const Card = ({ name, icon, Link }) => {
  return (
    <div className="animate-fade-right animate-once">
      {/* <div>
        <a href={Link}>
          <div className="text-white max-sm:text-sm  bg-[#95a6ac] rounded-[30px] w-32 h-32 sm:w-44 sm:h-44 flex flex-col items-center   transition-transform transform hover:scale-105 shadow-md cursor-pointer shadow-md shadow-gray-500">
            <div className="flex flex-col items-center justify-center w-[100%] text-4xl md:text-5xl  rounded-t-[30px] h-3/4  bg-primary2">
              {icon && <ion-icon name={icon}></ion-icon>}
            </div>
            <div className="font-bold">{name}</div>
          </div>
        </a>
      </div> */}
      <a href={Link}>
        <div className="relative w-32 h-28 sm:w-44 sm:h-40 hover:scale-105">
          <img
            src={CardImg}
            className="rounded-[10px] h-28 sm:h-40 drop-shadow-xl shadow-gray-500"
            alt="Card Image"
          />
          <div className="absolute inset-0 flex flex-col text-xl font-bold text-white">
            <div className="flex justify-end m-3 text-4xl sm:text-5xl sm:m-7">
              {icon && <ion-icon name={icon}></ion-icon>}
            </div>
            <div className="flex items-end mt-3 ml-2 text-sm text-blue-900 sm:m-5 sm:text-base">
              {name}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
