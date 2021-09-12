import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
} from "../constant/userConstant";
import axios from "axios";
export const login = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data, headers } = await axios
      .post("/user/login", { ...userData }, config)
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
    delete data.password;
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("jwttoken", headers.jwttoken);
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (e) {}
};

export const userRegister = (userRegData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios
      .post("/user/register", { ...userRegData }, config)
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
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (e) {}
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("jwttoken");

  dispatch({ type: USER_LOGIN_LOGOUT });
};
