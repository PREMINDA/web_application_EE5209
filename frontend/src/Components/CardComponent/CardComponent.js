import React from "react";
import imagelogo from "../../Images/40-407432_ubisoft-logo-ubisoft-logo-png-white.png";
import imagelogo2 from "../../Images/ACV_Gold_Edition_Triple.jpg";
import TextRound from "../TextRound/TextRoundComponent";
import Rating from "../RatingComponent/Rating.js";
const CardComponent = ({ title }) => {
  const arr = ["WAR", "ACTION", "ADVENTURE", "RPG"];
  return (
    <div
      style={{ height: "360px", background: "#1C1E4B" }}
      className="rounded-2xl overflow-hidden w-64"
    >
      <img
        style={{ height: "180px", objectFit: "cover" }}
        src={imagelogo2}
        alt=""
        className="w-full p-3 rounded-3xl"
      />
      <div className="px-4 py-2 pt-0">
        <div className="font-light font-body text-base text-white mb-1">
          {title}
        </div>
        <Rating value={2} text={"Rating"}></Rating>
        <div className="flex">
          <div>
            <div
              style={{ fontSize: "32px" }}
              className="font-bold font-body text-2xl text-pricingcolor mb-2"
            >
              {49.0}$
            </div>
            <img src={imagelogo} alt="" className="w-24 mr-0 rounded-3xl" />
          </div>
          <div className="ml-8">
            <div className="" style={{ color: "#AD00FF", fontSize: "12px" }}>
              {"3260+ Sold"}
            </div>
            <div className="p-0" style={{ color: "#05FF00", fontSize: "12px" }}>
              Available
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          {arr.map((text) => (
            <TextRound key={text} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
