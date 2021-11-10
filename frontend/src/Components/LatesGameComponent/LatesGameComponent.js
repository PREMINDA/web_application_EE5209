import React from "react";
import { Link } from "react-router-dom";
import procolor from "../../Config/color";

const LatesGame = ({ style, game }) => {
  const onClickGame = () => {};

  return (
    <Link className="no-underline" to={`/collection/${game.id}`}>
      <div style={{ ...style }} className="w-72  ">
        <div className=" rounded-xl h-96 overflow-hidden">
          <img
            alt={`${game.gameName}`}
            className="w-full h-96 object-cover bg-cover bg-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            src={
              game.imagePaths
                ? require(`../../Images/${game.gameName}/2.jpg`).default
                : require(`../../Images/1.png`).default
            }
          ></img>
        </div>
        <h1 className="text-xl m-0 mt-1 text-white font-body px-1 no-underline">
          {game.gameName}
        </h1>

        <h1 className="text-base m-0 text-gray-400 font-body px-1 no-underline">
          {game && game.developerInformation[1].split(":")[1]}
        </h1>
        <h1
          style={{ color: procolor.pricingColo }}
          className="text-xl m-0 text-gray-400 font-body px-1 no-underline"
        >
          {game.price}.00$
        </h1>
      </div>
    </Link>
  );
};

export default LatesGame;
