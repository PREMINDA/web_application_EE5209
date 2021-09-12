import React from "react";
import procolor from "../../Config/color.js";

const Button = ({ style, title, color = procolor.lightViolet }) => {
  return (
    <div
      style={{
        width: "160px",
        height: "32px",
        background: color,
        border: `1px solid ${procolor.pricingColo}`,
        borderRadius: "12px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      className="font-cart"
    >
      {title}
    </div>
  );
};

export default Button;
