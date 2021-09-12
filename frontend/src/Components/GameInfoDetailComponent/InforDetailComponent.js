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
      <h1
        style={
          title === "Price"
            ? {
                color: procolor.pricingColo,
                fontSize: "24px",
                marginTop: "0",
                fontWeight: "600",
              }
            : { color: "white", fontSize: "16px" }
        }
        className="font-body mt-1"
      >
        {subTitle}
      </h1>
    </div>
  );
};

export default InforDetailcomponent;
