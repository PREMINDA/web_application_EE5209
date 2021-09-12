import React from "react";
import procolor from "../../Config/color";

const SQButton = ({ icon }) => {
  return (
    <div
      style={{ background: procolor.maincolor }}
      className="w-11 h-11 rounded-xl"
    >
      <i
        style={{ color: "white" }}
        className={`${icon} text-2xl ml-3 mt-1.5`}
      ></i>
    </div>
  );
};

export default SQButton;
