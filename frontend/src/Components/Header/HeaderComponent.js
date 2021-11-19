import React from "react";
import DropDownComponent from "../DropDown/DropDown";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/action/userAction";
import procolor from "../../Config/color";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import CartDownComponent from "../CartDropDown/CartDropDown";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Collection", href: "/collection", current: true },
  { name: "Cart", href: "/cart", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HeaderComponent = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Disclosure
      style={{ background: procolor.lightBlue }}
      as="nav"
      className="bg-gray-800 fixed h-16 w-full z-10"
    >
      {({ open }) => (
        <>
          <div className="w-11/12 mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 ml-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-pricingcolor "
                            : "text-gray-300 hover:bg-indigo-900 hover:text-white",
                          "px-3 py-2 rounded-full text-base font-medium font-body no-underline"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <CartDownComponent />
                {userInfo ? (
                  <DropDownComponent
                    userinfo={userInfo}
                    onClick={logoutHandler}
                  />
                ) : (
                  <div
                    style={{ backgroundColor: procolor.lightViolet }}
                    className="px-3 py-1 rounded-full"
                  >
                    <Link
                      className="text-white font-bold font-body no-underline"
                      to="/login"
                    >
                      Sign in
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden p-2">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-lightviolate rounded-lg">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-indigo-900 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default HeaderComponent;
