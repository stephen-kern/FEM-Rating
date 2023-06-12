import React from "react";

const RatingNumbers = ({ rating, handleRatingChange }) => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="numbers-container">
      {numbers.map((number) => (
        <button key={number} className={`rating-button ${rating === number ? "active" : ""}`} onClick={() => handleRatingChange(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default RatingNumbers;
