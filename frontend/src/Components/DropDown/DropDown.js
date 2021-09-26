import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import procolr from "../../Config/color";
import AvatarComponent from "../Avatar/AvatarComponent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DropDownComponent = ({ userinfo, onClick }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md  hover:border-blue-500  shadow-sm px-4 py-2 text-sm font-medium text-white">
          <AvatarComponent
            fname={userinfo.firstName}
            lname={userinfo.lastName}
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={{ background: procolr.lightViolet }}
          className=" origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg  ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1 ">
            <Menu.Item>
              {({ active }) => (
                <div className="my-2">
                  <AvatarComponent
                    fname={userinfo.firstName}
                    lname={userinfo.lastName}
                  />
                  <h1 className="text-center mt-2 text-white font-body text-lg">
                    {userinfo.username}
                  </h1>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-white",
                    "block px-4 py-2 text-sm no-underline"
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>

            {userinfo.role === "ROLE_SUPER_ADMIN" ? (
              <Menu.Item>
                {({ active }) => (
                  <Link to="/dashboard/users">
                    <button
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-white",
                        "block w-full text-left px-4 py-2 text-sm "
                      )}
                    >
                      Dashboard
                    </button>
                  </Link>
                )}
              </Menu.Item>
            ) : (
              <div />
            )}

            <Menu.Item>
              {({ active }) => (
                <Link to="/">
                  <button
                    onClick={onClick}
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-white",
                      "block w-full text-left px-4 py-2 text-sm no-underline"
                    )}
                  >
                    Sign out
                  </button>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDownComponent;
