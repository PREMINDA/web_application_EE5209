import {
  COLLECTION_LIST_GET_FAIL,
  COLLECTION_LIST_GET_SUCCESS,
  COLLECTION_LIST_GET_REQUEST,
} from "../constant/collectionListConstant";

export const collectionListReducer = (state = { games: [] }, action) => {
  switch (action.type) {
    case COLLECTION_LIST_GET_REQUEST:
      return { loading: true };
    case COLLECTION_LIST_GET_SUCCESS:
      return { loading: false, games: action.payload };
    case COLLECTION_LIST_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
