import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import UserCommentBox from './UserCommentBox/UserCommentBox';
import {getComments,postComment} from '../../redux/action/commentAction'
import ReactStars from "react-rating-stars-component"




const CommentBox = ({id}) => {
    const dispatch = useDispatch();
    const loadedComments = useSelector((state) => state.Comment);
    const newcomment = useSelector((state) => state.newcomment);
    const {loading} = newcomment;
    const {Comments} = loadedComments;
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    const commentdata={
        name:"",
        comment:"",
        rating:""
    }
    useEffect(() => {
        dispatch(getComments(id))
      },[dispatch, id,loading]);

      const ratingChanged = (newRating) => {
        commentdata.rating=newRating;
        
      };

      const appendval=(e)=>{
          dispatch(postComment(commentdata,id))
      }
    
    return (
        <div style={{maxHeight:"800px"}} className="w-full pb-4 pt-4 bg-lightviolate rounded-2xl">
            <h3 className='text-center text-white font-body'>User Comments</h3>
            <div style={{maxHeight:"500px"}} className="w-full border-t-2 border-b-2 pb-4 bg-lightviolate overflow-y-auto">
                <div className="h-10">
                {Comments && Comments.length === 0?<h3 className='text-center'>No Commnets Post Yet</h3>:null}
                </div>
                    
                {Comments && Comments.length !== 0 ?Comments.map(item=>(
                    <UserCommentBox key={item.id} data={item}/> 
                )):null} 
            </div>
        {userData&&<div className="flex flex-row w-full justify-center pt-3 ">
            <div className="flex flex-col w-2/4 px-15">
                <form onSubmit={() => appendval()}>
                <textarea
                        va
                        onChange={(e) => commentdata.comment=e.target.value}
                        className="resize-none w-full h-28 border rounded-md font-body font-medium"
                    />
                <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                <button
                    type="submit"
                    className=" px-4 py-2 text-sm font-medium w-36 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    //type="submit"
                    >
                    Add comment
                </button>
                </form>
            </div>
        </div>}
        </div>
    );
};

export default CommentBox;


