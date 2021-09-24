import axios from "axios";

import {
  USER_LIST_GET_SUCCESS,
  USER_LIST_GET_REQUEST,
  USER_LIST_GET_FAIL,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
} from "../constant/userDetailConstant";

export const userList = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LIST_GET_REQUEST,
    });

    const JWTToken = localStorage.getItem("jwttoken");

    const { data } = await axios
      .get("/user/list", {
        headers: { Authorization: `Bearer ${JWTToken}` },
      })
      .catch(function (error) {
        if (error.response) {
          dispatch({
            type: USER_LIST_GET_FAIL,
            payload: error.response.data,
          });
        } else if (error.request) {
          console.log(error.request);
          dispatch({
            type: USER_LIST_GET_FAIL,
            payload: error.request.data,
          });
        } else {
          dispatch({
            type: USER_LIST_GET_FAIL,
            payload: error.request.data,
          });
        }
      });

    dispatch({
      type: USER_LIST_GET_SUCCESS,
      payload: data,
    });
  } catch (e) {}
};

export const userDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });

    const JWTToken = localStorage.getItem("jwttoken");

    const { data } = await axios
      .delete(`/user/delete/${id}`, {
        headers: { Authorization: `Bearer ${JWTToken}` },
      })
      .catch(function (error) {
        if (error.response) {
          dispatch({
            type: USER_DELETE_FAIL,
            payload: error.response.data,
          });
        } else if (error.request) {
          console.log(error.request);
          dispatch({
            type: USER_DELETE_FAIL,
            payload: error.request.data,
          });
        } else {
          dispatch({
            type: USER_DELETE_FAIL,
            payload: error.request.data,
          });
        }
      });

    dispatch({
      type: USER_DELETE_SUCCESS,
      payload: "User Successfuly Deleted",
    });
  } catch (e) {}
};

export const userEdit = (editedUser) => async (dispatch) => {
  const JWTToken = localStorage.getItem("jwttoken");
  await axios.post("/user/edit", editedUser, {
    headers: { Authorization: `Bearer ${JWTToken}` },
  });
};
