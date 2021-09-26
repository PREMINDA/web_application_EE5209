import axios from "axios";

import {
  USER_LIST_GET_SUCCESS,
  USER_LIST_GET_REQUEST,
  USER_LIST_GET_FAIL,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_EDIT_FAIL,
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
} from "../constant/userDetailConstant";

export const userList = () => async (dispatch) => {
  dispatch({
    type: USER_LIST_GET_REQUEST,
  });

  const JWTToken = localStorage.getItem("jwttoken");

  await axios
    .get("/user/list", {
      headers: { Authorization: `Bearer ${JWTToken}` },
    })
    .then((res) => {
      dispatch({
        type: USER_LIST_GET_SUCCESS,
        payload: res.data,
      });
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
};

export const userDelete = (id) => async (dispatch) => {
  dispatch({
    type: USER_DELETE_REQUEST,
  });

  const JWTToken = localStorage.getItem("jwttoken");

  await axios
    .delete(`/user/delete/${id}`, {
      headers: { Authorization: `Bearer ${JWTToken}` },
    })
    .then((res) => {
      dispatch({
        type: USER_DELETE_SUCCESS,
        payload: res.data,
      });
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
};

export const userEdit = (editedUser) => async (dispatch) => {
  const JWTToken = localStorage.getItem("jwttoken");

  dispatch({
    type: USER_EDIT_REQUEST,
  });
  await axios
    .post("/user/edit", editedUser, {
      headers: { Authorization: `Bearer ${JWTToken}` },
    })
    .then((res) => {
      dispatch({
        type: USER_EDIT_SUCCESS,
        payload: res.data,
      });
    })
    .catch(function (error) {
      if (error.response) {
        dispatch({
          type: USER_EDIT_FAIL,
          payload: error.response.data,
        });
      } else if (error.request) {
        console.log(error.request);
        dispatch({
          type: USER_EDIT_FAIL,
          payload: error.request.data,
        });
      } else {
        dispatch({
          type: USER_EDIT_FAIL,
          payload: error.request.data,
        });
      }
    });
};
