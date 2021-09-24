import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import MyToggle from "../../Components/Switch/Switch";
import {
  LockOpenIcon,
  LockClosedIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/outline";

const EditProfilePopUp = ({
  isOpen,
  closeModal,
  Fragment,
  isAdmin,
  setAdmin,
  isLocked,
  setLocked,
  SubmitChange,
}) => {
  return (
    <div>
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left border-2 border-white align-middle transition-all transform bg-lightviolate shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl mb-4 font-medium leading-6 text-gray-900"
                >
                  Edit Profile
                </Dialog.Title>
                <div className="flex mt-8 justify-between">
                  <h1 className="text-base mr-10 text-white">Is Admin</h1>
                  <div className="flex space-x-3">
                    <XCircleIcon className="text-yellow-400 font-semibold w-5 h-5" />
                    <MyToggle enabled={isAdmin} setEnabled={setAdmin} />
                    <CheckCircleIcon className="text-green-400 font-semibold w-5 h-5" />
                  </div>
                </div>
                <div className="flex mt-8 justify-between">
                  <h1 className="text-base mr-10 text-white">Is Locked</h1>
                  <div className="flex space-x-3">
                    <LockClosedIcon className="text-red-600 font-semibold w-5 h-5" />
                    <MyToggle enabled={isLocked} setEnabled={setLocked} />
                    <LockOpenIcon className="text-avgreen font-semibold w-5 h-5" />
                  </div>
                </div>
                <div className="mt-4 flex justify-around">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => SubmitChange()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default EditProfilePopUp;
