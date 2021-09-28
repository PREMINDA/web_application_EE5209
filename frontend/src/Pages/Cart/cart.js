import React, { useState } from "react";
import { useSelector } from "react-redux";

import CartItemComponent from "../../Components/CartItemComponent/CartItemComponent";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="mt-16 container-2xl">
      {cartItems.length === 0 ? (
        <h1 className="text-white w-1/3 m-0 text-xl flex flex-wrap content-center">
          Your Cart is Empty
        </h1>
      ) : (
        cartItems.map((game) => <CartItemComponent key={game.id} game={game} />)
      )}
    </div>
  );
};

export default Cart;
