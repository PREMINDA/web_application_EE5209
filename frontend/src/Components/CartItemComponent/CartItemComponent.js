import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  TrashIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/outline";
import {
  removeItemFromCart,
  increaseItem,
  reduseItem,
} from "../../redux/action/cartAction";

const CartItemComponent = ({ game }) => {
  const dispatch = useDispatch();

  const [itemCount, setItemCount] = useState(game.qty);

  const cartItemControllerAdd = () => {
    dispatch(increaseItem(game));
  };

  const cartItemControllerMinus = () => {
    dispatch(reduseItem(game));
  };

  const removeItem = () => {
    dispatch(removeItemFromCart(game));
  };

  return (
    <div className="my-2 mx-auto flex w-3/5 justify-between bg-lightBlue rounded-xl">
      <img
        style={{ width: "180px", objectFit: "cover" }}
        src={
          game
            ? require(`../../Images/${game.gameName}/1.jpg`).default
            : require(`../../Images/1.png`).default
        }
        alt=""
        className="w-full p-2 rounded-xl"
      />
      <h1 className="text-white w-1/3 m-0 text-xl flex flex-wrap content-center">
        {game.gameName}
      </h1>
      <div className="text-white flex justify-center text-center w-28 flex-wrap content-center">
        <div className="flex justify-center">
          <div className="m-0 text-xl w-8 cursor-pointer select-none">
            <MinusCircleIcon
              onClick={() => cartItemControllerMinus()}
              name="minus"
            />
          </div>

          <div className="text-xl w-14 select-none">
            <h1
              onChange={(e) => {
                console.log(e);
              }}
              className="text-xl m-0 w-full text-center"
            >
              {game.qty}
            </h1>
          </div>
          <div className="m-0 text-xl w-8 cursor-pointer select-none">
            <PlusCircleIcon
              onClick={() => cartItemControllerAdd()}
              name="add"
            />
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center text-center w-28 flex-wrap content-center">
        <div
          onClick={() => removeItem()}
          className="w-14 h-14 flex justify-center bg-lightviolate rounded-2xl"
        >
          <TrashIcon className="m-0 text-xl w-10 cursor-pointer" />
        </div>
      </div>
      <div className="text-white flex text-center w-28 flex-wrap content-center">
        <h1 className="m-0 text-xl w-full">{game.qty}</h1>
      </div>
    </div>
  );
};

export default CartItemComponent;
