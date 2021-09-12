import React from "react";
import { Link } from "react-router-dom";
import procolor from "../../Config/color";
import image1 from "../../Images/ACV_Gold_Edition_Triple.jpg";

const LatesGame = ({ style }) => {
  return (
    <Link className="no-underline" to="/">
      <div style={{ ...style }} className="w-72  ">
        <div className=" rounded-xl h-96 overflow-hidden">
          <div
            className="w-full h-96 bg-cover bg-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            style={{
              backgroundImage: `url(${image1})`,
            }}
          >
            <div className="h-full w-full bg-white opacity-0 transition duration-500 ease-in-out transform hover:opacity-20"></div>
          </div>
        </div>
        <h1 className="text-xl m-0 mt-1 text-white font-body px-1 no-underline">
          Assassin Creed Valhalla
        </h1>
        <h1 className="text-base m-0 text-gray-400 font-body px-1 no-underline">
          Ubisoft entertainment
        </h1>
        <h1
          style={{ color: procolor.pricingColo }}
          className="text-xl m-0 text-gray-400 font-body px-1 no-underline"
        >
          39$
        </h1>
      </div>
    </Link>
  );
};

export default LatesGame;

{
  /* <img
        className="rounded-2xl h-full  object-cover font-body"
        style={{}}
        src={image1}
        alt="LatestGame"
      ></img> */
}
