import axios from "axios";
import {
  ADD_NEW_GAME_FAIL,
  ADD_NEW_GAME_REQUEST,
  ADD_NEW_GAME_SUCCESS,
  ADD_USER_EMPTY,
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
  } catch (e) {}
};
