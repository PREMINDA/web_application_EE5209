import axios from "axios";

import {
  COLLECTION_LIST_GET_FAIL,
  COLLECTION_LIST_GET_SUCCESS,
  COLLECTION_LIST_GET_REQUEST,
} from "../constant/collectionListConstant";

export const getCollectionList = () => async (dispatch) => {
  dispatch({
    type: COLLECTION_LIST_GET_REQUEST,
  });

  const { data } = await axios.get("/collection/list").catch(function (error) {
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
  dispatch({
    type: COLLECTION_LIST_GET_SUCCESS,
    payload: data,
  });
};
