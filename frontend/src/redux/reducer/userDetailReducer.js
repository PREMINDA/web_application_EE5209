import {
  USER_LIST_GET_REQUEST,
  USER_LIST_GET_SUCCESS,
  USER_LIST_GET_FAIL,
  USER_DELETE_FAIL,
  USER_DELETE_SUCCESS,
  USER_DELETE_REQUEST,
  USER_EDIT_FAIL,
  USER_EDIT_REQUEST,
  USER_EDIT_SUCCESS,
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

export const userDeleteReducer = (state = {loading1:false}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading1: true };
    case USER_DELETE_SUCCESS:
      return { loading1: false, success: action.payload };
    case USER_DELETE_FAIL:
      return { loading1: false, error: action.payload };
    default:
      return state;
  }
};

export const userEditReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_EDIT_REQUEST:
      return { loading: true };
    case USER_EDIT_SUCCESS:
      return { loading: false, success: action.payload };
    case USER_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
