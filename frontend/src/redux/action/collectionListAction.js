import axios from "axios";

import {
  COLLECTION_LIST_GET_FAIL,
  COLLECTION_LIST_GET_SUCCESS,
  COLLECTION_LIST_GET_REQUEST,
  GAME_GET_FAIL,
  GAME_GET_SUCCESS,
  GAME_GET_REQUEST,
} from "../constant/collectionListConstant";

export const getCollectionList = () => async (dispatch) => {
  dispatch({
    type: COLLECTION_LIST_GET_REQUEST,
  });

  await axios
    .get("/collection/list")
    .then((res) => {
      dispatch({
        type: COLLECTION_LIST_GET_SUCCESS,
        payload: res.data,
      });
    })
    .catch(function (error) {
      if (error.response) {
        dispatch({
          type: COLLECTION_LIST_GET_FAIL,
          payload: error.response.data,
        });
      } else if (error.request) {
        console.log(error.request);
        dispatch({
          type: COLLECTION_LIST_GET_FAIL,
          payload: error.request.data,
        });
      } else {
        dispatch({
          type: COLLECTION_LIST_GET_FAIL,
          payload: error.request.data,
        });
      }
    });
};

export const getGame = (id) => async (dispatch) => {
  dispatch({
    type: GAME_GET_REQUEST,
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  await axios
    .get(`/collection/${id}`, config)
    .then((res) => {
      dispatch({
        type: GAME_GET_SUCCESS,
        payload: res.data,
      });
    })
    .catch(function (error) {
      if (error.response) {
        dispatch({
          type: GAME_GET_FAIL,
          payload: error.response.data,
        });
      } else if (error.request) {
        console.log(error.request);
        dispatch({
          type: GAME_GET_FAIL,
          payload: error.request.data,
        });
      } else {
        dispatch({
          type: GAME_GET_FAIL,
          payload: error.request.data,
        });
      }
    });
};
