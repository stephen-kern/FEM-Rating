import React, { useState } from "react";
import Star from "../../images/icon-star.svg";
import RatingNumbers from "../RatingNumbers";
import Feedback from "../Feedback";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="rating-container">
      {submitted ? (
        <Feedback selectedRating={rating} />
      ) : (
        <>
          <img className="star-icon" alt="star icon" src={Star} />
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <RatingNumbers
            rating={rating}
            handleRatingChange={handleRatingChange}
          />
          <button className="submit-button" type="submit" onClick={handleSubmit}>
            SUBMIT
          </button>{" "}
        </>
      )}
    </div>
  );
};

export default Rating;
