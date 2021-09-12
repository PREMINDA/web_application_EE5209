import React from "react";

const TextRound = ({ text, fontSize = "11px" }) => {
  return (
    <div
      style={{ background: "#43479D", fontSize: `${fontSize}` }}
      className=" text-white text-xs p-0.5 px-1.5 mr-1 rounded-full m "
      key={text}
    >
      {text}
    </div>
  );
};

export default TextRound;
