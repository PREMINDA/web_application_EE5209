import React from "react";

import Seperator from "../../Components/Seperator/Seperator";

import {
  TrashIcon,
  PhotographIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

const AdminGameCard = ({ id, game, onDelete, onAdd, onLogoAdd }) => {
  return (
    <>
      <div className="w-80 bg-lightBlue rounded-2xl">
        <img
          style={{ height: "180px", objectFit: "cover" }}
          src={
            game.imagePaths
              ? require(`../../Images/${game.gameName}/1.jpg`).default
              : require(`../../Images/1.png`).default
          }
          alt={`${game.gameName}`}
          className="w-full p-2 rounded-2xl"
        />
        <div className="w-full px-2 text-center">
          <h1 className="text-2xl text-white">{game.gameName}</h1>
          <Seperator height={"2px"} mt={2} />
          <h1 className="text-2xl text-white">Price : {game.price}.00$</h1>
          <Seperator height={"2px"} mt={2} />
          <h1 className="text-2xl text-white">
            Stock Count : {game.stockCount}
          </h1>
          <Seperator height={"2px"} mt={2} />
          {game.availability ? (
            <h1 className="text-2xl text-avgreen">Available</h1>
          ) : (
            <h1 className="text-2xl text-red-700">Not Available</h1>
          )}

          <Seperator height={"2px"} mt={2} />
          <div className="mt-2 mb-2 flex w-full space-x-2 text-white">
            <div
              onClick={() => onDelete(id)}
              className="w-1/3  rounded-2xl text-center cursor-pointer transition duration-500 ease-in-out bg-lightviolate hover:bg-red-600 transform  hover:scale-102"
            >
              <TrashIcon className="h-10 w-10 mt-1 mx-auto" />
              <p className="px-1 mb-1 text-sm">Delete Game</p>
            </div>
            <div
              onClick={() => onAdd(id)}
              className="w-1/3  rounded-2xl text-center cursor-pointer transition duration-500 ease-in-out bg-lightviolate hover:bg-red-600 transform  hover:scale-102"
            >
              <PhotographIcon className="h-10  mt-1 mx-auto" />
              <p className="px-1 mb-1 text-sm">Add Images</p>
            </div>
            <div
              onClick={() => onLogoAdd(id)}
              className="w-1/3  rounded-2xl text-center cursor-pointer transition duration-500 ease-in-out bg-lightviolate hover:bg-red-600 transform  hover:scale-102"
            >
              <PlusCircleIcon className="h-10  mt-1 mx-auto" />
              <p className="px-1 mb-1 text-sm">Add Logo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminGameCard;
