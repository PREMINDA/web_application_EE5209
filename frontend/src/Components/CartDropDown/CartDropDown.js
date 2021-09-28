import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import procolr from "../../Config/color";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const CartDownComponent = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md  hover:border-blue-500  shadow-sm px-4 py-2 text-sm font-medium text-white">
          <ShoppingCartIcon className="w-8 stroke-1 h-8 text-pink-600" />
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
          <div className="py-1 px-2 rounded-xl ">
            {cartItems &&
              cartItems.map((game) => (
                <Menu.Item key={game.id}>
                  {({ active }) => (
                    <div className="my-2 flex justify-between bg-lightBlue rounded-xl">
                      <img
                        style={{ width: "80px", objectFit: "cover" }}
                        src={
                          game
                            ? require(`../../Images/${game.gameName}/1.jpg`)
                                .default
                            : require(`../../Images/1.png`).default
                        }
                        alt=""
                        className="w-full p-2 rounded-xl"
                      />
                      <h1 className="text-white w-full m-0 text-xs flex flex-wrap content-center">
                        {game.gameName}
                      </h1>
                      <div className="text-white flex text-center w-28 flex-wrap content-center">
                        <h1 className="m-0 text-xs w-full">{game.qty}</h1>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CartDownComponent;
