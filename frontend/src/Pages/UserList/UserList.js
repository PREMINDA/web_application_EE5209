import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyAddUser } from "../../redux/action/newUserAction";

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
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl mb-4 font-medium leading-6 text-gray-900"
                >
                  Successfully Added New User
                </Dialog.Title>
                <div className="mt-2">
                  {addnewUser ? (
                    <>
                      <h3 className="text-xl">User ID : {addnewUser.userId}</h3>
                      <h3 className="text-xl">
                        User Name: {addnewUser.username}
                      </h3>
                      <h3 className="text-xl">User Role: {addnewUser.role}</h3>
                    </>
                  ) : null}
                </div>

                <div className="mt-4 flex">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <h1>PAPAPAPAPPAPAPAP</h1>
    </>
  );
};

export default UserList;
