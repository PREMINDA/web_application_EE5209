import {
  ADD_NEW_GAME_REQUEST,
  ADD_NEW_GAME_FAIL,
  ADD_NEW_GAME_SUCCESS,
  ADD_NEW_GAME_EMPTY,
} from "../constant/collectionConstant";

export const newGameReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_GAME_REQUEST:
      return { loading: true };
    case ADD_NEW_GAME_SUCCESS:
      return { loading: false, newGame: action.payload };
    case ADD_NEW_GAME_FAIL:
      return { loading: false };
    case ADD_NEW_GAME_EMPTY:
      return { loading: false, state: {} };
    default:
      return state;
  }
};
