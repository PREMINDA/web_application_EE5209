import React from "react";
import procolor from "../../Config/color.js";

const Button = ({ style, title, color = procolor.lightViolet, func }) => {
  return (
    <button 
      onClick={() => func()}
      style={{
        width: "160px",
        height: "32px",
        
        border: `1px solid ${procolor.pricingColo}`,
        borderRadius: "12px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
      className={`font-cart cursor-pointer bg-lightviolate hover:bg-green-600 active:bg-green-900`}
    >
      {title}
    </button >
  );
};

export default Button;
