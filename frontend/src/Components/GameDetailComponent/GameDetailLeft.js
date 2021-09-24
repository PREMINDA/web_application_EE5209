import React from "react";
import image1 from "../../Images/ACV_Gold_Edition_Triple.jpg";
import ima from "../../Images/40-407432_ubisoft-logo-ubisoft-logo-png-white.png";
import procolor from "../../Config/color";
import TextRound from "../TextRound/TextRoundComponent";
import Button from "../Button/Button";

const GameDetailLeft = ({ gameDetail }) => {
  return (
    <>
      <div className="mx-auto relative">
        <img
          style={{}}
          className="w-full rounded-3xl"
          src={
            gameDetail.imagePaths
              ? require(`../../Images/${gameDetail.gameName}/1.jpg`).default
              : require(`../../Images/1.png`).default
          }
        ></img>
        <div
          className="rounded-2xl w-full h-full left-0 top-0 absolute text-white "
          style={{
            background:
              "linear-gradient(0deg, rgba(8,10,49,1) 0%, rgba(8,10,49,0.90) 20%,rgba(8,10,49,0.30) 40%, rgba(8,10,49,0) 100%)",
          }}
        >
          <div className="ml-8 h-full flex flex-col items-start justify-end">
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl">
              {gameDetail.gameName}
            </h1>
            <img
              className="xl:w-40 lg:w-28 md:w-22 w-16 mt-2 md:mt-3 xl:mt-4 "
              src={ima}
            ></img>
            <div className="flex flex-row mt-4">
              {gameDetail.category.map((text) => (
                <TextRound key={text} text={text} fontSize="14px" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-white ml-6 text-4xl  text-justify">Description</h1>
        <h1 className="text-white p-6 xl:text-xl lg:text-lg md:text-base text-sm text-justify">
          {gameDetail.description}
        </h1>
        <h1 className="text-white ml-6 text-4xl  text-justify">Story</h1>
        <h1 className="text-white p-6 xl:text-xl lg:text-lg md:text-base text-sm text-justify">
          {gameDetail.storyLine}
        </h1>
      </div>
    </>
  );
};

export default GameDetailLeft;
