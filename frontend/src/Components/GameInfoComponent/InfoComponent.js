import React from "react";
import procolor from "../../Config/color.js";
import InforDetailcomponent from "../GameInfoDetailComponent/InforDetailComponent.js";
import Seperator from "../Seperator/Seperator.js";
import Button from "../Button/Button.js";

const InforComponent = ({ sys, dev }) => {
  return (
    <div className="w-72">
      <div
        style={{
          background: procolor.maincolor,
          height: "1080px",
          borderLeft: "1px solid gray",
          zIndex: "0",
          width: "inherit",
          maxWidth: "inherit",
        }}
        className="mt-12 fixed border-gray-900 pt-1"
      >
        <div className="">
          <h1
            style={{ color: procolor.specialTextColor, fontWeight: 800 }}
            className="text-white text-base font-body mt-3 text-center mx-auto"
          >
            System requirements
          </h1>
        </div>
        <div className="text-center">
          <div className="w-60 m-auto">
            {sys.map((text) => (
              <InforDetailcomponent
                key={text.split(":")[0]}
                title={text.split(":")[0]}
                subTitle={text.split(":")[1]}
                color={procolor.hardwareColor}
              />
            ))}

            <Seperator />

            {dev.map((text) => (
              <InforDetailcomponent
                key={text.split(":")[0]}
                title={text.split(":")[0]}
                subTitle={text.split(":")[1]}
                color={procolor.specialTextColor}
              />
            ))}

            <div
              className="mt-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button title={"Add To Cart"} color={procolor.maincolor} />
            </div>
            <div
              className="mt-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button title={"Buy Now"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforComponent;
