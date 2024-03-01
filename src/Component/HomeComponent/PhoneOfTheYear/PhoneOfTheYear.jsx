import React from "react";
import Flex from "../../CommonConponent/Flex";
import clock from "../../../assets/phoneoftheyear.png";
import Button from "../../CommonConponent/Button";
const PhoneOfTheYear = () => {
  return (
    <div className="container">
      <div className="py-10 bg-[#F3F3F3]">
        <Flex>
          <div className="w-[40%] ">
            <img src={clock} alt={clock} />
          </div>
          <div className="w-full">
            <div
              className={
                "flex flex-col items-start justify-center h-full gap-y-5"
              }
            >
              <h2>Phone of the year</h2>
              <p className="max-w-[511px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry orem Ipsum..
              </p>
              <Button
                className="py-3 px-10 bg-black text-main_bg_color"
                title="Shop Now"
              />
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default PhoneOfTheYear;
