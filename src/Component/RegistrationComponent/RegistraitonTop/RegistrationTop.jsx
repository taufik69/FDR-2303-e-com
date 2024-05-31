import React from "react";
import BreadCrumb from "../../CommonConponent/BreadCrumb/BreadCrumb.jsx";

const RegistrationTop = () => {
  return (
    <div>
      <h1 className="mb-3 font-DMsans text-[49px] font-bold text-main_font_color">
        Sign up
      </h1>
      <BreadCrumb />
      <div className="pt-10">
        <p className="max-w-[644px] font-DMsans text-base font-normal leading-8 text-secondary_font_color">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
      </div>
      <hr className="mt-10 opacity-60" />
    </div>
  );
};

export default RegistrationTop;
