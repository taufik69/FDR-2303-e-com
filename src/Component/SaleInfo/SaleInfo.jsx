import React from "react";
import Flex from "../CommonConponent/Flex.jsx";
import saleLeft from "../../assets/Image1.png";
import electronic from "../../assets/electronicImage.png";
import FurnitureImage from "../../assets/FurnitureImage.png";
import Button from "../CommonConponent/Button.jsx";

const SaleInfo = () => {
  return (
    <>
      <div className="py-32">
        <div className="container">
          <Flex className={"gap-x-10"}>
            <div className="w-full relative">
              <picture>
                <img src={saleLeft} alt={saleLeft} />
              </picture>
              <div className=" absolute bottom-16  left-16">
                <h3 className="text-main_font_color font-bold font-DMsans text-[39px]">
                  Phones Sale
                </h3>
                <p className="mt-12 text-main_font_color font-normal font-DMsans text-base opacity-75 mb-12">
                  Up to{" "}
                  <span className="font-bold text-4xl align-middle">30% </span>{" "}
                  sale for all phones!
                </p>
                <Button
                  className={
                    "py-4 px-14 bg-main_font_color text-main_bg_color hover:bg-slate-700"
                  }
                  title="Shop Now"
                />
              </div>
            </div>
            <div className="w-full ">
              <Flex className={"flex-col gap-y-11"}>
                <div className="w-full ">
                  <picture>
                    <img src={electronic} alt={electronic} />
                  </picture>
                </div>
                <div className="w-full  ">
                  <picture>
                    <img src={FurnitureImage} alt={FurnitureImage} />
                  </picture>
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default SaleInfo;
