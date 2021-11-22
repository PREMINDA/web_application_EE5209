
import{
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL,
    POST_COMMENTS_REQUEST,
    POST_COMMENTS_FAIL,
    POST_COMMENTS_SUCCESS
}from "../constant/commentConstant"

export const commentList = (state = { Comments: [] }, action) => {
    switch (action.type) {
      case GET_COMMENTS_REQUEST:
        return { loading: true };
      case GET_COMMENTS_SUCCESS:
        return { loading: false, Comments: action.payload };
      case GET_COMMENTS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const postComment = (state = {}, action) => {
    switch (action.type) {
      case POST_COMMENTS_REQUEST:
        return { loading: true };
      case POST_COMMENTS_SUCCESS:
        return { loading: false,};
      case POST_COMMENTS_FAIL:
        return { loading: false };
      default:
        return state;
    }
  };