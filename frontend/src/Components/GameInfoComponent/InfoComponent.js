import React from "react";
import procolor from "../../Config/color.js";
import InforDetailcomponent from "../GameInfoDetailComponent/InforDetailComponent.js";
import Seperator from "../Seperator/Seperator.js";
import Button from "../Button/Button.js";

const InforComponent = () => {
  const arr = [
    "DirectX:DirectX12",
    "OS:Windows 10",
    "CPU:Ryzan RX570 - 8GB / Geforce GTX 1060 - 6GB",
    "RAM:16GB",
    "Storage:50GB HDD",
  ];

  const infor = [
    "Developer:Ubisoft Montreal",
    "Publisher:Ubisoft",
    "Releas Date:NOV,10 2020",
    "Price:49.00$",
  ];

  return (
    <div
      style={{
        background: procolor.maincolor,
        height: "1080px",
        borderRight: "1px solid gray",
        zIndex: "0",
      }}
      className="w-64 mt-12 border-gray-900 pt-1 fixed"
    >
      <div className="">
        {/* <h1
          style={{ textAlign: "center" }}
          className="text-white text-2xl w-56 font-body text-center mx-auto mt-12 relative"
        >
          Assassin Creed Vallhalla
        </h1> */}
        <h1
          style={{ color: procolor.specialTextColor, fontWeight: 800 }}
          className="text-white text-base font-body mt-10 text-center mx-auto"
        >
          System requirements
        </h1>
      </div>
      <div className="text-center">
        <div className="w-60">
          {arr.map((text) => (
            <InforDetailcomponent
              key={text.split(":")[0]}
              title={text.split(":")[0]}
              subTitle={text.split(":")[1]}
              color={procolor.hardwareColor}
            />
          ))}

          <Seperator />

          {infor.map((text) => (
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
  );
};

export default InforComponent;
