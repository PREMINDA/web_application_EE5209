import {
    ORDER_ITEM_FAIL,
    ORDER_ITEM_REQUEST,
    ORDER_ITEM_SUCCESS,
    GET_ITEMS_FAIL,
    GET_ITEMS_SUCCESS,
    GET_ITEM_REQUEST,
    DELETE_ITEMS_FAIL,DELETE_ITEMS_SUCCESS,DELETE_ITEM_REQUEST
  } from "../constant/cartItemOrder";
  
  export const order = (state = { }, action) => {
    switch (action.type) {
      case ORDER_ITEM_REQUEST:
        return { loading: true };
      case ORDER_ITEM_FAIL:
        return { loading: false };
      case ORDER_ITEM_SUCCESS:
        return { loading: false};
      default:
        return state;
    }
  };

  export const orderList = (state = { orderItems:[] }, action) => {
    switch (action.type) {
      case GET_ITEM_REQUEST:
        return { loading: true };
      case GET_ITEMS_FAIL:
        return { loading: false,error:action.payload };
      case GET_ITEMS_SUCCESS:
        return { loading: false,orderItems:action.payload};
      default:
        return state;
    }
  };

  export const deletOrder = (state = {}, action) => {
    switch (action.type) {
      case DELETE_ITEM_REQUEST:
        return { loading: true };
      case DELETE_ITEMS_FAIL:
        return { loading: false };
      case DELETE_ITEMS_SUCCESS:
        return { loading: false};
      default:
        return state;
    }
  };
  