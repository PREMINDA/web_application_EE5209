import React from "react";
import image1 from "../../Images/ACV_Gold_Edition_Triple.jpg";
import ima from "../../Images/40-407432_ubisoft-logo-ubisoft-logo-png-white.png";
import procolor from "../../Config/color";
import TextRound from "../TextRound/TextRoundComponent";
import Button from "../Button/Button";

const GameDetail = () => {
  const arr = ["WAR", "ACTION", "ADVENTURE", "RPG"];
  return (
    <div style={{ background: procolor.maincolor }} className="p-9">
      <div className="w-11/12 mx-auto relative">
        <img style={{}} className="w-full rounded-3xl" src={image1}></img>
        <div
          className="rounded-2xl w-full h-full left-0 top-0 absolute text-white "
          style={{
            background:
              "linear-gradient(0deg, rgba(8,10,49,1) 0%, rgba(8,10,49,0.90) 30%, rgba(8,10,49,0) 100%)",
            zIndex: "2",
          }}
        >
          <div className="ml-8 h-full flex flex-col items-start justify-end">
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl">
              ASSASSIN CREED VALLHALLA
            </h1>
            <img
              className="xl:w-40 lg:w-28 md:w-22 w-16 mt-2 md:mt-3 xl:mt-4 "
              src={ima}
            ></img>
            <div className="flex flex-row mt-4">
              {arr.map((text) => (
                <TextRound key={text} text={text} fontSize="14px" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-12 xl:px-16 md:px-9 px-6">
        <h1 className="text-white p-6 xl:text-xl lg:text-lg md:text-base text-sm text-justify">
          In Assassin's Creed Valhalla, become Eivor, a legendary Viking raider
          on a quest for glory. Explore a dynamic and beautiful open world set
          against the brutal backdrop of England's Dark Ages. Raid your enemies,
          grow your settlement, and build your political power in the quest to
          earn a place among the gods in Valhalla.
        </h1>
      </div>
    </div>
  );
};

export default GameDetail;
