import React from "react";

const AvatarComponent = ({ fname, lname }) => {
  return (
    <div
      style={{ border: "1px solid white" }}
      className="w-11 h-11 bg-indigo-900 rounded-full border-white m-auto"
    >
      <h1 className="h-full text-2xl mt-1 text-white text-center align-middle font-light">
        {(fname[0] + lname[0]).toUpperCase()}
      </h1>
    </div>
  );
};

export default AvatarComponent;
