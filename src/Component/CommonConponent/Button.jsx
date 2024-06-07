import React from "react";

const Button = ({ className, title, oncartChange }) => {
  return (
    <>
      <button
        onClick={oncartChange}
        className={className ? className : "bg-black  p-5 text-white"}
      >
        {title ? title : "nei"}
      </button>
    </>
  );
};

export default Button;
