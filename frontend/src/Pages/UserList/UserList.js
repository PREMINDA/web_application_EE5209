import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyAddUser } from "../../redux/action/newUserAction";
import Popup from "../../Components/PopUp/Popup";
const UserList = () => {
  let [isOpen, setIsOpen] = useState(false);

  const newAddUser = useSelector((state) => state.newUser);
  const { addnewUser } = newAddUser;
  const dispatch = useDispatch();

  useEffect(() => {
    if (addnewUser) {
      setIsOpen(true);
    }
  }, []);

  function closeModal() {
    setIsOpen(false);
    dispatch(emptyAddUser());
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {addnewUser && (
        <Popup
          newGame={[
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
    </>
  );
};

export default UserList;
