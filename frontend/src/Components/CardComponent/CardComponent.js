import React from "react";
import { Link } from "react-router-dom";
import imagelogo from "../../Images/40-407432_ubisoft-logo-ubisoft-logo-png-white.png";

import TextRound from "../TextRound/TextRoundComponent";
import Rating from "../RatingComponent/Rating.js";
import Seperator from "../Seperator/Seperator";
const CardComponent = ({ id, game }) => {
  return (
    <div
      style={{ background: "#1C1E4B" }}
      className="rounded-2xl overflow-hidden w-72"
    >
      <Link to={`/collection/${id}`}>
        <img
          style={{ height: "180px", objectFit: "cover" }}
          src={
            game.imagePaths
              ? require(`../../Images/${game.gameName}/1.jpg`).default
              : require(`../../Images/1.png`).default
          }
          alt=""
          className="w-full p-2 rounded-3xl"
        />
      </Link>
      <div className="px-4 py-2 pt-0">
        <h1 className="font-light text-base  font-body inline-block align-middle  text-white mb-1">
          {game.gameName}
        </h1>
        <Seperator mt={0} height="1px" />
        <Rating value={game.rating} text={"Rating"}></Rating>
        <Seperator mt={0} height="1px" />
        <div className="flex mt-2">
          <div className="">
            <div
              style={{ fontSize: "32px" }}
              className="font-bold font-body text-2xl text-pricingcolor mb-2"
            >
              {game.price}.00$
            </div>
            <img src={
            game.imagePaths
              ? require(`../../Images/${game.gameName}/logo.png`).default
              : require(`../../Images/1.png`).default
          } alt="" className="object-scale-down h-8 w-full  mr-0" />
          </div>
          <div className="ml-8">
            <div className="" style={{ color: "#AD00FF", fontSize: "12px" }}>
              {"3260+ Sold"}
            </div>
            {game.availability && game.availability ? (
              <div
                className="p-0"
                style={{ color: "#05FF00", fontSize: "12px" }}
              >
                Available
              </div>
            ) : (
              <div className="p-0" style={{ color: "red", fontSize: "12px" }}>
                Not Available
              </div>
            )}
          </div>
        </div>
        <div className="flex mt-3 mb-2">
          {game.category.map((text) => (
            <TextRound key={text} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
