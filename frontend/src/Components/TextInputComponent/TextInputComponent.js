import React from "react";
import procolor from "../../Config/color.js";

const TextInputComponent = ({
  name,
  placeholder,
  value,
  type,
  onChange,
  icon,
  margin = 2,
}) => {
  return (
    <div className={`h-14 flex mx-auto  justify-center my-${margin}`}>
      <div
        className="w-11/12"
        style={{
          height: "50px",
          background: procolor.lightBlue,
          borderRadius: "25px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <i
          className={`far ml-5 ${icon}`}
          style={{ color: "white", fontSize: "20px" }}
        ></i>
        <div
          style={{
            height: "35px",
            width: "1px",
            background: "white",
            borderRadius: "2px",
            marginLeft: "14px",
          }}
        ></div>
        <input
          className="w-80 min-w-min ml-4 h-8 bg-transparent outline-none text-white text-lg"
          placeholder={placeholder}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
};

export default TextInputComponent;
