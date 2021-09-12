import React from "react";
import Rating from "../RatingComponent/Rating";

const UserReviewDetail = ({}) => {
  return (
    <div className>
      <div className="flex  align-middle">
        <div
          style={{
            background: "blue",
            width: "60px",
            height: "60px",
            borderRadius: "30px",
          }}
          className="mr-4"
        />
        <div className="flex flex-col pt-2">
          <span>Name</span>
          <Rating value={3} />
        </div>
      </div>
      <span className="text-justify">asdasdasdasdasdasdasdasdas</span>
    </div>
  );
};

export default UserReviewDetail;
