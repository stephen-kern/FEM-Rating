import React from "react";

const RatingNumbers = ({ rating, handleRatingChange }) => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {numbers.map((number) => (
        <button key={number} className={rating >= number ? "active" : ""} onClick={() => handleRatingChange(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default RatingNumbers;
