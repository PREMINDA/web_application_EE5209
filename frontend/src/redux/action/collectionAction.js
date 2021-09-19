import axios from "axios";
import {
  ADD_NEW_GAME_FAIL,
  ADD_NEW_GAME_REQUEST,
  ADD_NEW_GAME_SUCCESS,
  ADD_NEW_GAME_EMPTY,
} from "../constant/collectionConstant";

export const addNewGame = (gameDetail) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_NEW_GAME_REQUEST,
    });

    const { data } = await axios
      .post("/collection/add", { ...gameDetail })
      .catch(function (error) {
        if (error.response) {
          dispatch({
            type: ADD_NEW_GAME_FAIL,
            payload: error.response.data,
          });
        } else if (error.request) {
          console.log(error.request);
          dispatch({
            type: ADD_NEW_GAME_FAIL,
            payload: error.request.data,
          });
        } else {
          dispatch({
            type: ADD_NEW_GAME_FAIL,
            payload: error.request.data,
          });
        }
      });

    dispatch({
      type: ADD_NEW_GAME_SUCCESS,
      payload: data,
    });
  } catch (e) {}
};

export const deleteGame = (id) => async (dispatch) => {
  await axios.delete(`/collection/delete/${id}`);
};

export const addGaller = (id) => async (dispatch) => {};

export const emptyGame = () => async (dispatch) => {
  setTimeout(function () {
    dispatch({
      type: ADD_NEW_GAME_EMPTY,
    });
  }, 500);
};
