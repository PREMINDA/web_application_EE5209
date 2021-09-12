import {
  ADD_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_EMPTY,
} from "../constant/newUserConstant";

export const newUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return { loading: true };
    case ADD_USER_SUCCESS:
      return { loading: false, addnewUser: action.payload };
    case ADD_USER_FAIL:
      return { loading: false, error: action.payload };
    case ADD_USER_EMPTY:
      return { loading: false, state: {} };
    default:
      return state;
  }
};
