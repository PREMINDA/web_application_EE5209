import axios from "axios";

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constant/cartConstant";

export const addToCart = (id) => async (dispatch, getState) => {
  console.log(id);
  await axios.get(`/collection/${id}`).then((res) => {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: res.data.id,
        gameName: res.data.gameName,
        price: res.data.price,
        stockCount: res.data.stockCount,
        qty: 1,
      },
    });
  });

  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
};

export const removeItemFromCart = (product) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: product,
  });
  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
};
