import React from "react";
import procolr from "../../Config/color";
import TextRound from "../TextRound/TextRoundComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const SliderItem = ({ id, price, arr, name,imagePaths }) => {
  return (
    <Link to={`/collection/${id}`}>
    <div className="">
      
      <img
        style={{ borderRadius: "16px", height: "640px" }}
        className="d-block w-100 object-cover object-center absolute"
        src={
          imagePaths
            ? require(`../../Images/${name}/1.jpg`).default
            : require(`../../Images/1.png`).default
        }
        alt="First slide"
      />
      
      <div
        style={{
          borderRadius: "16px",
          height: "640px",
          background:
            "linear-gradient(0deg,rgba(8,10,49,1) 0%, rgba(8,10,49,0.2) 60%, rgba(8,10,49,0) 100%)",
        }}
        className="relative h-full w-full"
      >
        <div style={{ bottom: "0" }} className="ml-6 absolute">
          <h1 className="text-white text-3xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl mb-3 font-body font-bold">
            {name}
          </h1>
          <h1
            style={{ color: procolr.pricingColo }}
            className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl font-body font-bold mb-3"
          >
            {price}.00 $
          </h1>
          <div className="flex mb-12">
            {arr.map((text) => (
              <TextRound key={text} text={text} fontSize={"14px"} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default SliderItem;

//
