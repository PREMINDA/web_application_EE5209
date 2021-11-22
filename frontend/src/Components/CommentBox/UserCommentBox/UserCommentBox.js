import React from 'react';
import Rating from '../../RatingComponent/Rating';

const UserCommentBox = ({data}) => {
    return (
        <div style={{minHeight:"106px"}} className="w-11/12 bg-lightBlue rounded-2xl mx-auto mt-4 pb-1">
                <div className="w-11/12 mx-auto pt-2">
                    <h4 className="text-white text-xl font-body">{data.name}</h4>
                    <Rating text="Rating" value={data.rating}/>
                    <div className="w-full rounded-md bg-gray-700 px-2">
                    <p className="text-white text-lg font-body">{data.comment}</p>
                    </div>
                    
                </div>
            </div >
    );
};

export default UserCommentBox;