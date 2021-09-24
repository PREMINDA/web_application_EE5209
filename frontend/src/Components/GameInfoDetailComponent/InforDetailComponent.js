import React from "react";
import procolor from "../../Config/color.js";

const InforDetailcomponent = ({ title, subTitle, color }) => {
  return (
    <div className="mt-3">
      <h1
        style={{ color: color, fontSize: "16px" }}
        className="font-body font-extrabold"
      >
        {title}
      </h1>
      {title === "Price" ? (
        <h1 className="text-pricingcolor text-lg">{subTitle}.00$</h1>
      ) : (
        <h1 className="text-white text-base">{subTitle}</h1>
      )}
    </div>
  );
};

export default InforDetailcomponent;
