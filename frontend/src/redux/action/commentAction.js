import{
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL,
    POST_COMMENTS_REQUEST,
    POST_COMMENTS_FAIL,
    POST_COMMENTS_SUCCESS
}from "../constant/commentConstant"
import axios from "axios";

export const getComments=(id) =>async(dispatch)=>{

    dispatch({
      type:GET_COMMENTS_REQUEST
    })

    await axios.get(`/collection/comment/${id}`)
    .then((res) => {
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload:res.data,
      });
    }).catch(function(error){
        if (error.response) {
            dispatch({
              type: GET_COMMENTS_FAIL,
              payload: error.response.data,
            });
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
    });
  } 

  export const postComment=(commentdata,id) =>async(dispatch)=>{

    const userData = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      commentdata.name = userData.username; 
    dispatch({
        type: POST_COMMENTS_REQUEST,
      })

    await axios.post(`/collection/addcomment/${id}`, {...commentdata},config)
    .then((res) => {
        dispatch({
          type: POST_COMMENTS_SUCCESS,
        });
      }).catch(function(error){
        if (error.response) {
            dispatch({
                type: POST_COMMENTS_FAIL,
              });
            console.log(error.response);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
    });
  } 