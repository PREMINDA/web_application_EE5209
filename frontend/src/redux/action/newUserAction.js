import axios from "axios";
import {
  ADD_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_EMPTY,
} from "../constant/newUserConstant";

export const addNewUser = (newUserData) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_USER_REQUEST,
    });

    const JWTToken = localStorage.getItem("jwttoken");

    console.log(JWTToken);

    const { data } = await axios
      .post(
        "/user/add",
        { ...newUserData },
        {
          headers: {
            Authorization: `Bearer ${JWTToken}`,
          },
        }
      )
      .catch(function (error) {
        if (error.response) {
          dispatch({
            type: ADD_USER_FAIL,
            payload: error.response.data,
          });
        } else if (error.request) {
          console.log(error.request);
          dispatch({
            type: ADD_USER_FAIL,
            payload: error.request.data,
          });
        } else {
          dispatch({
            type: ADD_USER_FAIL,
            payload: error.request.data,
          });
        }
      });

    dispatch({
      type: ADD_USER_SUCCESS,
      payload: data,
    });
  } catch (e) {}
};

export const emptyAddUser = () => async (dispatch) => {
  setTimeout(function () {
    dispatch({
      type: ADD_USER_EMPTY,
    });
  }, 500);
};
