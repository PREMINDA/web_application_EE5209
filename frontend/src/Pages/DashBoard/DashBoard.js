import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { userList } from "../../redux/action/userDetailAction";
import { NavLink, Route } from "react-router-dom";
import {
  UsersIcon,
  ViewGridAddIcon,
  UserAddIcon,
  CollectionIcon,
} from "@heroicons/react/outline";

import NewUser from "../AddNewUser/NewUser";
import AddGame from "../AddGame/AddGame";

import UserList from "../UserList/UserList";
import GameList from "../GameList/GameList";

const DashBoard = ({ match, history }) => {
  const dispatch = useDispatch();
  //const userListData = useSelector((state) => state.userDetail);
  //const { users } = userListData;
  useEffect(() => {
    dispatch(userList());
  });

  return (
    <div className="flex flex-row pt-12">
      <div className="w-16 h-screen fixed flex justify-center bg-maincolor border-r-2 border-gray-700">
        <div>
          <NavLink to={`${match.path}/users`}>
            <div className="w-12 mt-5 h-12 justify-self-center flex flex-wrap content-center rounded-xl  bg-lightviolate border-transparent">
              <UsersIcon className="h-8 w-8 text-white mx-auto" />
            </div>
          </NavLink>
          <NavLink to={`${match.path}/games`}>
            <div className="w-12 mt-5 h-12 justify-self-center flex flex-wrap content-center rounded-xl  bg-lightviolate">
              <CollectionIcon className="h-8 w-8 text-white mx-auto" />
            </div>
          </NavLink>
          <NavLink to={`${match.path}/addgame`}>
            <div className="w-12 mt-5 h-12 justify-self-center flex flex-wrap content-center rounded-xl  bg-lightviolate">
              <ViewGridAddIcon className="h-8 w-8 text-white mx-auto" />
            </div>
          </NavLink>
          <NavLink to={`${match.path}/adduser`}>
            <div className="w-12 mt-5 h-12 justify-self-center flex flex-wrap content-center rounded-xl  bg-lightviolate">
              <UserAddIcon className="h-8 w-8 text-white mx-auto" />
            </div>
          </NavLink>
        </div>
      </div>
      <div className="ml-16 w-full flex  justify-center">
        <Route exact path={`${match.path}/users`} component={UserList} />
        <Route exact path={`${match.path}/games`} component={GameList} />
        <Route path={`${match.path}/addgame`} component={AddGame} />
        <Route path={`${match.path}/adduser`} component={NewUser} />
      </div>
    </div>
  );
};

export default DashBoard;
