import {
  USER_LIST_GET_REQUEST,
  USER_LIST_GET_SUCCESS,
  USER_LIST_GET_FAIL,
  USER_DELETE_FAIL,
  USER_DELETE_SUCCESS,
  USER_DELETE_REQUEST,
} from "../constant/userDetailConstant";

export const userDetailReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_GET_REQUEST:
      return { loading: true };
    case USER_LIST_GET_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, success: action.payload };
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
