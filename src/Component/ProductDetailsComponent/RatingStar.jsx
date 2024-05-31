import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
const RatingStar = ({ rating }) => {
  const StarRating = Array.from({ length: 5 }, (x, index) => {
    let FractionNumber = index + 0.5;

    return (
      <span className="">
        {rating >= index + 1 ? (
          <IoIosStar className="text-xl text-yellow-400" />
        ) : rating >= FractionNumber ? (
          <IoIosStarHalf className="text-xl text-yellow-400" />
        ) : (
          <IoIosStarOutline className="text-yellow-400" />
        )}
      </span>
    );
  });
  return (
    <div className="flex items-center gap-x-4">
      <div className="flex items-center gap-x-1">{StarRating}</div>
      <p>
        {rating >= Math.floor(rating)
          ? `${Math.floor(rating)}.5`
          : `${Math.floor(rating)}`}
        {"Review"}
      </p>
    </div>
  );
};

export default RatingStar;
