import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyAddUser } from "../../redux/action/newUserAction";
import Popup from "../../Components/PopUp/Popup";
import { userList } from "../../redux/action/userDetailAction";
import { userDelete } from "../../redux/action/userDetailAction";
import UserCard from "../../Components/UserCard/UserCard";
import PopUpWarn from "../../Components/PopUpWarn/PopUpWarn";
import EditProfilePopUp from "../../Components/EditProfilePopUp/EditProfilePopUp";
import { userEdit } from "../../redux/action/userDetailAction";
const UserList = () => {
  let [isOpen, setIsOpen] = useState(false);
  //Close Open Edit PopUp
  const [editOpen, setEditOpen] = useState(false);
  //Prevent Log User Delet Self
  const [cantDelete, setCantDelete] = useState(false);
  //Prevent Log User Edit State Self
  const [cantEdit, setCantEdit] = useState(false);

  //User State Edit useState
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  //ID of the editer User
  const [userId, setUserId] = useState(0);
  //Already Log User Data
  const [logUser, setLogUser] = useState({});
  const dispatch = useDispatch();
  const userListData = useSelector((state) => state.userDetail);
  const { users } = userListData;

  const newAddUser = useSelector((state) => state.newUser);
  const { addnewUser } = newAddUser;

  useEffect(() => {
    if (addnewUser) {
      setIsOpen(true);
    }
    dispatch(userList());
    setLogUser(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  function closeModal() {
    setIsOpen(false);
    dispatch(emptyAddUser());
  }

  const closeWarn = () => {
    setCantDelete(false);
    setCantEdit(false);
  };

  const closeEdit = () => {
    setEditOpen(false);
  };

  const openEdit = (user) => {
    if (user.id === logUser.id) {
      setCantEdit(true);
    } else {
      setEditOpen(true);
      if (user.role === "ROLE_USER") {
        setIsAdmin(false);
      } else {
        setIsAdmin(true);
      }
      setIsLocked(user.notLocked);
      setUserId(user.id);
    }
  };

  const handleDelete = (id) => {
    if (id === logUser.id) {
      setCantDelete(true);
    } else {
      dispatch(userDelete(id));
      window.location.reload(true);
    }
  };

  const SubmitChange = () => {
    console.log(userId);
    const editedUser = {
      id: userId,
      notLocked: isLocked,
      role: isAdmin ? "ROLE_SUPER_ADMIN" : "ROLE_USER",
    };
    dispatch(userEdit(editedUser));
    setEditOpen(false);
    window.location.reload(true);
  };

  console.log(logUser.id);

  return (
    <div>
      {addnewUser && (
        <Popup
          ditail={[
            `${addnewUser.userId}`,
            `${addnewUser.username}`,
            `${addnewUser.role}`,
          ]}
          isOpen={isOpen}
          Fragment={Fragment}
          closeModal={closeModal}
          tag={["User ID", "User Name", "Role"]}
        />
      )}
      <PopUpWarn
        isOpen={cantDelete}
        Fragment={Fragment}
        closeModal={closeWarn}
        message={"You Can't Delete Your Self"}
      />
      <PopUpWarn
        isOpen={cantEdit}
        Fragment={Fragment}
        closeModal={closeWarn}
        message={"You Cant,t Change State of Your Self"}
      />
      <EditProfilePopUp
        SubmitChange={SubmitChange}
        isAdmin={isAdmin}
        setAdmin={setIsAdmin}
        isLocked={isLocked}
        setLocked={setIsLocked}
        isOpen={editOpen}
        Fragment={Fragment}
        closeModal={closeEdit}
      />
      <div className="grid grid-cols-5 gap-4 mt-8">
        {users ? (
          users.map((user) => (
            <UserCard
              key={user.userId}
              user={user}
              handleDelete={handleDelete}
              logId={logUser.id}
              openEdit={openEdit}
            />
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

export default UserList;
