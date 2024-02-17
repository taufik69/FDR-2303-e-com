import React from "react";

const Overlay = () => {
  return (
    <>
      <div className=" absolute bottom-16  left-16">
        <h3 className="text-main_font_color font-bold font-DMsans text-[39px]">
          Phones Sale
        </h3>
        <p className="mt-12 text-main_font_color font-normal font-DMsans text-base opacity-75 mb-12">
          Up to <span className="font-bold text-4xl align-middle">30% </span>{" "}
          sale for all phones!
        </p>
        <Button
          className={
            "py-4 px-14 bg-main_font_color text-main_bg_color hover:bg-slate-700"
          }
          title="Shop Now"
        />
      </div>
    </>
  );
};

export default Overlay;
