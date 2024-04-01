import React from "react";
import Button from "./Button";
const Overlay = ({
  className,
  title,
  discountDetilsLast,
  btnTitle,
  discountDetilsFast,
  discountAmount,
}) => {
  return (
    <>
      <div className={`absolute ${className}`}>
        <h3 className="text-main_font_color font-bold font-DMsans text-3xl md:text-[39px] ">
          {title ? title : "Phones Sale"}
        </h3>
        <p className="mt-3  text-main_font_color font-normal font-DMsans text-base opacity-75 mb-2 ">
          {discountDetilsFast}
          <span className="font-bold text-4xl align-middle">
            {discountAmount}
          </span>
          {discountDetilsLast}
        </p>
        <Button
          className={
            "py-2 px-6  bg-main_font_color text-main_bg_color hover:bg-slate-700"
          }
          title={btnTitle}
        />
      </div>
    </>
  );
};

export default Overlay;
