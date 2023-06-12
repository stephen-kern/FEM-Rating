import React, { useState } from "react";
import Star from "../../images/icon-star.svg";
import RatingNumbers from "../RatingNumbers";

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="rating-container">
      <img alt="star icon" src={Star} />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingNumbers rating={rating} handleRatingChange={handleRatingChange}/>
      <button type="submit">SUBMIT</button>
    </div>
  );
};

export default Rating;
