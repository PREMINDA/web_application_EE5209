import React from "react";
import AvatarComponent from "../../Components/Avatar/AvatarComponent";
import Seperator from "../../Components/Seperator/Seperator";

import { useDispatch } from "react-redux";
import { TrashIcon, PencilAltIcon } from "@heroicons/react/outline";

const UserCard = ({ user, handleDelete, logId, openEdit }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="bg-lightBlue w-72 pt-2 rounded-2xl ">
        <div className="flex mt-2">
          <div className="ml-4 w-12">
            {user && (
              <AvatarComponent fname={user.firstName} lname={user.lastName} />
            )}
          </div>
          <div className="ml-4 flex">
            <div>
              <h1 className="text-base m-0 text-lightviolate">User ID</h1>
              <h1 className="text-base text-white">{user.userId}</h1>
            </div>
            <div>
              {logId === user.id ? (
                <h1 className="text-xl text-avgreen text-center ml-12 mt-2 ">
                  YOU
                </h1>
              ) : null}
            </div>
          </div>
        </div>
        <Seperator mt={2} />
        <div className="text-center">
          <h1 className="text-base mb-0 mt-1 text-lightviolate">User Name</h1>
          <h1 className="text-xl text-white">{user.username}</h1>
        </div>
        <Seperator mt={2} />
        <div className="text-center w-full">
          <h1 className="text-base mb-0 mt-1 text-lightviolate">Email</h1>
          <p className="w-60 text-xl break-all m-0 mx-auto text-white ">
            {user.email}
          </p>
        </div>
        <Seperator mt={2} />
        <div className="text-center">
          <h1 className="text-base mb-0 mt-1 text-lightviolate">Role</h1>
          {user.role === "ROLE_USER" ? (
            <h1 className="text-xl text-yellow-400">USER</h1>
          ) : (
            <h1 className="text-xl text-green-400">ADMIN</h1>
          )}
        </div>
        <Seperator mt={2} />
        <div className="text-center w-full">
          <h1 className="text-base mb-0 mt-1 text-lightviolate">State</h1>

          {user.notLocked ? (
            <h1 className="text-avgreen text-xl">Not Locked</h1>
          ) : (
            <h1 className="text-red-700 text-xl">Locked</h1>
          )}
        </div>
        <Seperator mt={2} />
        <div className="flex justify-center cursor-pointer">
          <div
            onClick={() => handleDelete(user.id)}
            className="w-1/2 h-16  rounded-2xl mx-3  my-2 transition duration-500 ease-in-out bg-lightviolate hover:bg-red-600"
          >
            <TrashIcon className="text-white h-10 mx-auto w-10 mt-1" />
            <h1 className="text-sm text-center text-white">Delete User</h1>
          </div>
          <div
            onClick={() => openEdit(user)}
            className="w-1/2 h-16  rounded-2xl mx-3  my-2 transition duration-500 ease-in-out bg-lightviolate hover:bg-blue-400"
          >
            <PencilAltIcon className="text-white h-10 mx-auto w-10 mt-1" />
            <h1 className="text-sm text-center text-white">Edit User</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
