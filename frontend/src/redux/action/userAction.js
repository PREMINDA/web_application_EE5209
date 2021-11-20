import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
} from "../constant/userConstant";
import {CART_EMPTY} from "../constant/cartConstant"
import axios from "axios";
export const login = (userData) => async (dispatch) => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  await axios
    .post("/user/login", { ...userData }, config)
    .then((res) => {
      delete res.data.password;
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data,
      });
      localStorage.setItem("jwttoken", res.headers.jwttoken);
      localStorage.setItem("userInfo", JSON.stringify(res.data));
    })
    .catch(function (error) {
      if (error.response) {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: error.response.data,
        });
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
};

export const userRegister = (userRegData) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
  });

  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  await axios
    .post("/user/register", { ...userRegData }, config)
    .then((res) => {
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch(function (error) {
      if (error.response) {
        dispatch({
          type: USER_REGISTER_FAIL,
          payload: error.response.data,
        });
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type:CART_EMPTY
})
  localStorage.removeItem("userInfo");
  localStorage.removeItem("jwttoken");
  localStorage.removeItem("cartItem");

  dispatch({ type: USER_LOGIN_LOGOUT });
};
