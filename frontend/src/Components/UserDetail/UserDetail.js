import React from "react";
import procolor from "../../Config/color";
import AvatarComponent from "../Avatar/AvatarComponent";
import SQButton from "../Button/SQButton";
import Seperator from "../Seperator/Seperator";

const UserDetail = ({ username, id, fistname, lastname, email }) => {
  return (
    <div
      style={{ background: procolor.lightViolet }}
      className="w-72 h-80 rounded-3xl"
    >
      <div className="flex flex-col w-11/12 h-full mx-auto pt-4">
        <div className="flex align-middle">
          <AvatarComponent fname={fistname} lname={lastname} />
          <div className="ml-5 flex flex-col self-center">
            <span className="text-white font-medium">{username}</span>

            <div
              style={{ height: "1px", background: "white", width: "110px" }}
              className="max-w-full"
            />
            <span className="text-white font-medium">{id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
