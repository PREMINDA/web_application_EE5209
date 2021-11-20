import axios from "axios";
import {ORDER_ITEM_FAIL,
  ORDER_ITEM_REQUEST,
  ORDER_ITEM_SUCCESS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
  GET_ITEM_REQUEST,
  DELETE_ITEMS_SUCCESS,
  DELETE_ITEMS_FAIL,
  DELETE_ITEM_REQUEST
} from "../constant/cartItemOrder"
import {CART_EMPTY} from "../constant/cartConstant"

export const orderItems = (obj) => async (dispatch) => {

    const userData = JSON.parse(localStorage.getItem("userInfo"));

    dispatch({
        type: ORDER_ITEM_REQUEST,
      });

    const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      const order = {
        status:"WAITING",
        client:{
            id:userData.id,
            username:userData.username,
            email:userData.email
        },
          items:obj
      }

      console.log(order);

    await axios.post(`/orders`,{...order},config)
    .then((res) => {
      dispatch({
        type: ORDER_ITEM_SUCCESS,
      });
    }).catch(function(error){
        if (error.response) {
            dispatch({
              type: ORDER_ITEM_FAIL,
              payload: error.response.data,
            });
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
    });
    dispatch({
        type:CART_EMPTY
    })
    localStorage.removeItem("cartItem");
  };

  export const getOrderItemList=() =>async(dispatch)=>{

    dispatch({
      type:GET_ITEM_REQUEST
    })

    await axios.get(`/orders`)
    .then((res) => {
      dispatch({
        type: GET_ITEMS_SUCCESS,
        payload:res.data,
      });
    }).catch(function(error){
        if (error.response) {
            dispatch({
              type: GET_ITEMS_FAIL,
              payload: error.response.data,
            });
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
    });
  } 

  export const deletOrder=(id) =>async(dispatch)=>{

    dispatch({
      type:DELETE_ITEM_REQUEST
    })

    await axios.delete(`/orders/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_ITEMS_SUCCESS,
        payload:res.data,
      });
    }).catch(function(error){
        if (error.response) {
            dispatch({
              type: DELETE_ITEMS_FAIL,
              payload: error.response.data,
            });
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
    });
  } 