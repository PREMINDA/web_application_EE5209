import axios from "axios";
import {ORDER_ITEM_FAIL,ORDER_ITEM_REQUEST,ORDER_ITEM_SUCCESS} from "../constant/cartItemOrder"

export const addToCart = (obj) => async (dispatch, getState) => {

    const userData = localStorage.getItem("userInfo");

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
  };