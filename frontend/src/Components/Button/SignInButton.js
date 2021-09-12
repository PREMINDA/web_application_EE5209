import React from "react";
import procolor from "../../Config/color";

const SignInButton = ({ title, ...otherprops }) => {
  return (
    <button className="cursor-pointer" {...otherprops}>
      <div
        style={{
          width: "160px",
          height: "36px",
          background: procolor.lightBlue,
          border: "none",
          borderRadius: "18px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="font-cart"
      >
        {title}
      </div>
    </button>
  );
};

export default SignInButton;
