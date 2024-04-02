import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Fotter = () => {
  return (
    <>
      <div>
        <div className="container">
          <FooterTop />
          <div className="py-5 sm:py-0">
            <FooterBottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotter;
