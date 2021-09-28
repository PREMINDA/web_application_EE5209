import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_REDUCE_COUNT,
  CART_INCREASE_COUNT,
} from "../constant/cartConstant";
import { addItemTocart, reduseitem } from "./cartUtil";
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find(
        (x) => x.gameName === item.gameName
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.gameName === existItem.gameName ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload.id),
      };
    case CART_REDUCE_COUNT:
      return {
        ...state,
        cartItems: reduseitem(state.cartItems, action.payload),
      };
    case CART_INCREASE_COUNT:
      return {
        ...state,
        cartItems: addItemTocart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
